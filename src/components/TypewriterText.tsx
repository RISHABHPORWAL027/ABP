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
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2200,
  loop = true,
  className = "",
  cursorColor = "text-[#FF0043]",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Find longest phrase to reserve container height & eliminate flickering
  const longestText =
    words && words.length > 0
      ? words.reduce((a, b) => (a.length > b.length ? a : b), words[0])
      : "";

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullText = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        setIsFinished(false);
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Word is fully typed - pause before deleting or finish
        if (!loop && words.length === 1) {
          setIsFinished(true);
          return;
        }
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        setIsFinished(false);
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={`inline-grid grid-cols-1 grid-rows-1 text-left align-top whitespace-nowrap ${className}`}>
      {/* Invisible Ghost Text reserving full height & width (including cursor) to eliminate screen flickering */}
      <span className="col-start-1 row-start-1 invisible pointer-events-none select-none whitespace-nowrap" aria-hidden="true">
        {longestText}
        <span className="inline-block ml-1 opacity-0 font-normal">|</span>
      </span>

      {/* Active Typewriter Text */}
      <span className="col-start-1 row-start-1 whitespace-nowrap">
        {currentText}
        {!isFinished && (
          <span className={`inline-block ml-1 ${cursorColor} animate-pulse font-normal opacity-90`}>
            |
          </span>
        )}
      </span>
    </span>
  );
};
