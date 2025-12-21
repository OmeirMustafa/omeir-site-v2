"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) cursorRef.current.style.opacity = "1";

      // Check hover targeting
      const element = e.target as HTMLElement;
      const isInteractive =
        element.tagName === 'BUTTON' ||
        element.tagName === 'A' ||
        element.closest('button') !== null ||
        element.closest('a') !== null ||
        window.getComputedStyle(element).cursor === 'pointer';

      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(0.9)`;
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        const scale = isHovering ? 2 : 1;
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(${scale})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation Loop
    let rafId: number;
    const animate = () => {
      // Lerp for smooth trailing
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;

      position.current.x += dx * 0.15;
      position.current.y += dy * 0.15;

      if (cursorRef.current) {
        const scale = isHovering ? 2.5 : 1; // 14px -> 35px approx (28px requested, so ~2x)
        // Using 2.0 for 28px/14px
        const targetScale = isHovering ? 2.0 : 1;

        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(${targetScale})`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  return (
    <>
      <style jsx global>{`
                @media (pointer: fine) {
                    body, a, button, [role="button"] { cursor: none !important; }
                }
            `}</style>

      {/* Cursor Follower (Neon Dark Blue) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[14px] h-[14px] rounded-full border-[2px] border-[#0A58FF]/60 bg-transparent pointer-events-none z-[9999] hidden md:block transition-all duration-300 ease-out will-change-transform"
        style={{
          marginTop: -7,
          marginLeft: -7,
          boxShadow: isHovering
            ? "0 0 28px 4px rgba(10,88,255,0.28), inset 0 0 10px rgba(10,88,255,0.1)"
            : "0 0 18px 2px rgba(10,88,255,0.18)"
        }}
      />

      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-[#0A58FF] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        id="cursor-dot"
      />

      <script dangerouslySetInnerHTML={{
        __html: `
                const dot = document.getElementById('cursor-dot');
                if(dot) {
                    document.addEventListener('mousemove', (e) => {
                        dot.style.left = e.clientX + 'px';
                        dot.style.top = e.clientY + 'px';
                    });
                }
            `}} />
    </>
  );
}
