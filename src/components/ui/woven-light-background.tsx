"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface WovenLightBackgroundProps {
  className?: string;
  particleCount?: number;
  theme?: "light" | "dark";
}

export const WovenLightBackground: React.FC<WovenLightBackgroundProps> = ({
  className = "",
  particleCount = 12000,
  theme = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Circular Texture for Particle Glow
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
        gradient.addColorStop(0.4, "rgba(0, 0, 0, 0.8)");
        gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.2)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Particle Geometry & Parametric Woven Shape
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);

    // Rich saturated colors for white background visibility
    const lightPalette = [
      new THREE.Color("#FF0043"), // ABP Red
      new THREE.Color("#0080FF"), // Electric Blue
      new THREE.Color("#7928CA"), // Purple
      new THREE.Color("#D9005B"), // Magenta
      new THREE.Color("#00A86B"), // Emerald Green
      new THREE.Color("#FF5500"), // Vibrant Orange
    ];

    const darkPalette = [
      new THREE.Color("#00F0FF"),
      new THREE.Color("#FF007F"),
      new THREE.Color("#FFE600"),
      new THREE.Color("#9D00FF"),
      new THREE.Color("#FF0043"),
      new THREE.Color("#00FF66"),
    ];

    const palette = theme === "light" ? lightPalette : darkPalette;

    // Build Woven Torus / Trefoil Mesh Geometry
    const p = 3;
    const q = 7;
    const R = 2.4;
    const r = 1.0;

    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 2 * 12;
      const strandOffset = (i % 8) * (Math.PI / 4);

      const cx = (R + r * Math.cos(q * t + strandOffset)) * Math.cos(p * t);
      const cy = (R + r * Math.cos(q * t + strandOffset)) * Math.sin(p * t);
      const cz = r * Math.sin(q * t + strandOffset);

      const tubeAngle = t * 15 + strandOffset;
      const tubeRadius = 0.35 + 0.15 * Math.sin(t * 8);

      const px = cx + tubeRadius * Math.cos(tubeAngle);
      const py = cy + tubeRadius * Math.sin(tubeAngle);
      const pz = cz + tubeRadius * Math.cos(tubeAngle * 0.5);

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      basePositions[i * 3] = px;
      basePositions[i * 3 + 1] = py;
      basePositions[i * 3 + 2] = pz;

      const colorIndex = (i / particleCount) * (palette.length - 1);
      const index1 = Math.floor(colorIndex);
      const index2 = Math.min(index1 + 1, palette.length - 1);
      const factor = colorIndex - index1;

      const particleColor = palette[index1].clone().lerp(palette[index2], factor);

      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleTexture = createParticleTexture();
    const material = new THREE.PointsMaterial({
      size: theme === "light" ? 0.075 : 0.065,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: theme === "light" ? 0.75 : 0.85,
      blending: theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Parallax Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseRef.current.targetX = x * 1.5;
      mouseRef.current.targetY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      particles.rotation.y = elapsedTime * 0.18 + mouseRef.current.x;
      particles.rotation.x = Math.sin(elapsedTime * 0.12) * 0.25 - mouseRef.current.y;
      particles.rotation.z = Math.cos(elapsedTime * 0.15) * 0.15;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i += 3) {
        const idx = i * 3;
        const bx = basePositions[idx];
        const by = basePositions[idx + 1];
        const bz = basePositions[idx + 2];

        const wave = Math.sin(elapsedTime * 2 + bx * 2 + by * 2) * 0.04;

        posArray[idx] = bx + wave;
        posArray[idx + 1] = by + wave;
        posArray[idx + 2] = bz + wave;
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
    };
  }, [particleCount, theme]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ minHeight: "100%" }}
    />
  );
};

