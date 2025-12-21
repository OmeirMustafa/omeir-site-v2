"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        @media (min-width: 768px) {
          body {
            cursor: none;
          }
        }
      `}</style>
      
      {/* Main Cursor (Dot) */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-exclusion transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isPointer ? 0.5 : 1})`,
        }}
      />

      {/* Trailing Ring (Glow) */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-blue-400/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out will-change-transform mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.5 : 1})`,
          boxShadow: isPointer ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
          backgroundColor: isPointer ? "rgba(59, 130, 246, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
