"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  step?: string;
  isHighlight?: boolean;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  if (width <= 480) return 24;
  if (width <= 640) return 36;
  if (width <= 1024) return 50;
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Compute transforms for each image/card
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.85,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.85,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images or Card Stack */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-image ${
                testimonial.isHighlight
                  ? "bg-[#FF0043] text-white shadow-xl shadow-[#FF0043]/30"
                  : "bg-[#edece5] border border-black/10 text-[#111111]"
              } p-8 flex flex-col justify-between cursor-pointer`}
              style={getImageStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        testimonial.isHighlight ? "bg-white" : "bg-[#FF0043]"
                      }`}
                    />
                    <span
                      className={`font-space font-extrabold text-xs tracking-widest uppercase ${
                        testimonial.isHighlight ? "text-white" : "text-[#FF0043]"
                      }`}
                    >
                      {testimonial.designation}
                    </span>
                  </div>
                  {testimonial.step && (
                    <span
                      className={`font-space font-extrabold text-sm tracking-widest ${
                        testimonial.isHighlight ? "text-white/80" : "text-black/40"
                      }`}
                    >
                      {testimonial.step}
                    </span>
                  )}
                </div>

                <h4
                  className={`font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug mb-3 ${
                    testimonial.isHighlight ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {testimonial.name}
                </h4>

                <p
                  className={`font-sans text-sm sm:text-base leading-relaxed ${
                    testimonial.isHighlight ? "text-white/90" : "text-[#555555]"
                  }`}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* All By Play Logo at Bottom of Card */}
              <div className="pt-4 border-t border-current/10 flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/ABP_logo.png"
                    alt="ABP Logo"
                    width={22}
                    height={22}
                    className={`object-contain ${testimonial.isHighlight ? "" : "brightness-0 opacity-75"}`}
                  />
                  <span className={`font-sans font-extrabold text-xs tracking-wider uppercase ${testimonial.isHighlight ? "text-white" : "text-black/80"}`}>
                    ALLBYPLAY
                  </span>
                </div>
                <span className={`font-space font-bold text-[10px] tracking-widest uppercase ${testimonial.isHighlight ? "text-white/70" : "text-black/40"}`}>
                  EST. 2023
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Content & Arrow Controls */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043]" />
                <p
                  className="designation font-space font-extrabold uppercase tracking-widest"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation} {activeTestimonial.step ? `• STEP ${activeTestimonial.step}` : ""}
                </p>
              </div>

              <h3
                className="name font-sans font-extrabold tracking-tight"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>

              <motion.p
                className="quote font-sans font-medium mt-4"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="arrow-buttons mt-8">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous step"
            >
              <FaArrowLeft size={20} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next step"
            >
              <FaArrowRight size={20} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 72rem;
          padding: 1rem 0;
        }
        .testimonial-grid {
          display: grid;
          gap: 4rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 22rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1.75rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          font-weight: 800;
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 0.5rem;
        }
        .quote {
          font-family: var(--font-playfair), "Playfair Display", Georgia, serif;
          font-style: italic;
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.25rem;
        }
        .arrow-button {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
