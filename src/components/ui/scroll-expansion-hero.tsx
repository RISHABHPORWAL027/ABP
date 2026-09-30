"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
  MouseEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc = "/hersection_bg.png",
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Handle Wheel Scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Check viewport width
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle Dragging Slider
  const updateProgressFromClientX = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newProgress = Math.min(Math.max(offsetX / rect.width, 0), 1);
    setScrollProgress(newProgress);
    if (newProgress >= 1) {
      setMediaFullyExpanded(true);
      setShowContent(true);
    } else if (newProgress < 0.75) {
      setShowContent(false);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    updateProgressFromClientX(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging) {
        updateProgressFromClientX(e.clientX);
      }
    };
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Calculated expansion dimensions
  const initialWidth = isMobileState ? 280 : 480;
  const initialHeight = isMobileState ? 320 : 340;
  const targetWidth = isMobileState ? 700 : 1380;
  const targetHeight = isMobileState ? 450 : 720;

  const mediaWidth = initialWidth + scrollProgress * (targetWidth - initialWidth);
  const mediaHeight = initialHeight + scrollProgress * (targetHeight - initialHeight);
  const textTranslateX = scrollProgress * (isMobileState ? 120 : 45); // move outwards in vw
  const zoomLevel = (1.0 + scrollProgress * 1.5).toFixed(2);

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden bg-[#0c0205] text-white selection:bg-[#FF0043] selection:text-white"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background Ambient Dark Red & Radial Glow Overlay */}
          <motion.div
            className="absolute inset-0 z-0 h-full overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 0.5 }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc && (
              <Image
                src={bgImageSrc}
                alt="Hero Background"
                fill
                priority
                className="object-cover opacity-15 mix-blend-overlay"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c030b] via-[#0d0106] to-[#000000]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#FF0043]/20 blur-[170px] rounded-full pointer-events-none" />

            {/* Subtle Dot Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}
            />
          </motion.div>

          <div className="w-full flex flex-col items-center justify-start relative z-10 px-4">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative max-w-[1440px] mx-auto">
              
              {/* Expanding Center Media Card */}
              <div
                className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-[28px] overflow-hidden border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.8)] bg-[#14060b]"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "96vw",
                  maxHeight: "82vh",
                }}
              >
                {/* Media Container */}
                <div className="relative w-full h-full overflow-hidden rounded-[26px]">
                  {mediaType === "video" ? (
                    mediaSrc.includes("youtube.com") || mediaSrc.includes("youtube-nocookie.com") ? (
                      <div className="relative w-full h-full pointer-events-none">
                        <iframe
                          width="100%"
                          height="100%"
                          src={
                            mediaSrc.includes("embed")
                              ? mediaSrc +
                                (mediaSrc.includes("?") ? "&" : "?") +
                                "autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                              : mediaSrc.replace("watch?v=", "embed/") +
                                "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=" +
                                (mediaSrc.split("v=")[1] || "")
                          }
                          className="w-full h-full object-cover scale-125"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        controls={false}
                      />
                    )
                  ) : (
                    <Image
                      src={mediaSrc}
                      alt="Hero Showcase"
                      fill
                      priority
                      className="object-cover"
                    />
                  )}

                  {/* Dark Glass Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Top-Left Badge: ● REEL 2024 / ACTIVE */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-pulse" />
                    <span className="font-space font-extrabold text-[10px] sm:text-xs tracking-[2px] uppercase text-white/90">
                      REEL 2024 / ACTIVE
                    </span>
                  </div>

                  {/* Center Play Button Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Bar inside Card: LOST IN TRANSIT • 02:44 & 4K 60FPS */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between font-space text-[11px] sm:text-xs font-bold tracking-wider">
                    <div className="text-white/80 uppercase">
                      LOST IN TRANSIT <span className="text-white/40">•</span> 02:44
                    </div>
                    <div className="text-[#ffe600] font-black uppercase tracking-widest bg-black/50 px-2.5 py-1 rounded-md border border-[#ffe600]/30 shadow-sm">
                      4K 60FPS
                    </div>
                  </div>
                </div>
              </div>

              {/* Headline Grid Layout: Left & Right Split Text */}
              <div className="w-full flex items-center justify-between z-0 pointer-events-none px-4 sm:px-12">
                
                {/* LEFT TEXT BLOCK */}
                <motion.div
                  className="flex flex-col text-left transition-none select-none max-w-[320px] sm:max-w-[420px]"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-[76px] leading-[0.92] tracking-tighter text-white uppercase mb-4">
                    LET&apos;S TURN <br />
                    YOUR <br />
                    MELODIES
                  </h1>
                  <p className="font-space font-extrabold text-[10px] sm:text-xs tracking-[2.5px] uppercase text-white/50">
                    ARTIST STRATEGY & CULTURAL ARCHITECTURE
                  </p>
                </motion.div>

                {/* RIGHT TEXT BLOCK */}
                <motion.div
                  className="flex flex-col text-right transition-none select-none max-w-[320px] sm:max-w-[420px]"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-[76px] leading-[0.92] tracking-tighter text-[#ffe600] uppercase mb-4">
                    INTO <br />
                    CULTURAL <br />
                    MOMENTS
                  </h1>
                  <p className="font-space font-extrabold text-[10px] sm:text-xs tracking-[2.5px] uppercase text-white/50">
                    IMPACT THAT RESONATES BEYOND SOUND
                  </p>
                </motion.div>
              </div>

              {/* BOTTOM CONTROLS & SLIDER BAR */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-3 w-full max-w-lg px-6"
                initial={{ opacity: 1 }}
                animate={{ opacity: mediaFullyExpanded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top Status Bar: ● EXPAND REEL | 1.00X ZOOM | SCROLL OR DRAG */}
                <div className="w-full flex items-center justify-between font-space text-[10px] sm:text-xs font-extrabold tracking-widest text-white/70">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-[#ffe600] animate-pulse" />
                    <span>EXPAND REEL</span>
                  </div>
                  <div className="text-white font-black">
                    {mediaFullyExpanded ? "STAGE EXPANDED" : `${zoomLevel}X ZOOM`}
                  </div>
                  <div className="text-white/50">
                    SCROLL OR DRAG
                  </div>
                </div>

                {/* Interactive Drag Slider Track */}
                <div
                  ref={sliderRef}
                  onMouseDown={handleMouseDown}
                  className="w-full h-1.5 bg-white/20 rounded-full relative cursor-pointer group"
                >
                  {/* Progress Line */}
                  <div
                    className="h-full bg-[#ffe600] rounded-full transition-none"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                  {/* Glowing Slider Knob */}
                  <div
                    className="w-4 h-4 bg-[#ffe600] rounded-full shadow-[0_0_14px_#ffe600] absolute -top-1 transform -translate-x-1/2 transition-none cursor-grab active:cursor-grabbing border-2 border-white"
                    style={{ left: `${scrollProgress * 100}%` }}
                  />
                </div>

                {/* Helper instruction below slider */}
                <p className="text-[10px] sm:text-xs text-white/40 font-space tracking-wider text-center">
                  ↓ Scroll down page or adjust slider to trigger stage expansion
                </p>
              </motion.div>

            </div>

            {/* Revealed Children Content when Scroll Reaches 1 */}
            <motion.section
              className="flex flex-col w-full py-10 z-20 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
