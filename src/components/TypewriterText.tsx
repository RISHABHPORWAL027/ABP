"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
  cursorColor?: string;
  triggerOnView?: boolean;
  startDelay?: number;
  noWrap?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2400,
  loop = true,
  className = "",
  cursorColor = "text-[#FF0043]",
  triggerOnView = false,
  startDelay = 0,
  noWrap = false,
}) => {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(!triggerOnView);
  const [canType, setCanType] = useState(!triggerOnView && startDelay === 0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // IntersectionObserver to start typewriter only when scrolled into view
  useEffect(() => {
    if (!triggerOnView) {
      setHasStarted(true);
      if (startDelay > 0) {
        const timer = setTimeout(() => setCanType(true), startDelay);
        return () => clearTimeout(timer);
      } else {
        setCanType(true);
      }
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      setCanType(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [triggerOnView, startDelay]);

  // Handle startDelay once element enters view
  useEffect(() => {
    if (!hasStarted) return;
    if (startDelay > 0) {
      const timer = setTimeout(() => {
        setCanType(true);
      }, startDelay);
      return () => clearTimeout(timer);
    } else {
      setCanType(true);
    }
  }, [hasStarted, startDelay]);

  // Find longest phrase to reserve container space & eliminate flickering
  const longestText =
    words && words.length > 0
      ? words.reduce((a, b) => (a.length > b.length ? a : b), words[0])
      : "";

  const fullText = words && words.length > 0 ? words[currentWordIndex] : "";
  const isFinished = !loop && words.length === 1 && currentText.length === fullText.length;

  useEffect(() => {
    if (!words || words.length === 0 || !canType) return;

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        if (!loop && words.length === 1) {
          return;
        }
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, fullText, typingSpeed, deletingSpeed, pauseDuration, loop, canType]);

  const wrapClass = noWrap ? "whitespace-nowrap" : "whitespace-normal";

  return (
    <span
      ref={containerRef}
      className={`inline-grid grid-cols-1 grid-rows-1 align-top ${wrapClass} ${className}`}
    >
      {/* Invisible Ghost Text reserving full space to eliminate CLS layout shift */}
      <span
        className={`col-start-1 row-start-1 invisible pointer-events-none select-none ${wrapClass}`}
        aria-hidden="true"
      >
        {longestText}
        <span className="inline-block ml-0.5 opacity-0 font-normal">|</span>
      </span>

      {/* Active Typewriter Text */}
      <span className={`col-start-1 row-start-1 ${wrapClass}`}>
        {currentText}
        {hasStarted && !isFinished && (
          <span className={`inline-block ml-0.5 ${cursorColor} animate-pulse font-normal opacity-90 select-none`}>
            |
          </span>
        )}
      </span>
    </span>
  );
};
