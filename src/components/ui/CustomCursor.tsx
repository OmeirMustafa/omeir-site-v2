"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only enable on desktop
        if (window.matchMedia("(hover: none)").matches) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updatePosition);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        // Add listeners to all clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleLinkHover);
            el.addEventListener("mouseleave", handleLinkLeave);
        });

        // Mutation observer for dynamic content
        const observer = new MutationObserver(() => {
            const newClickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
            newClickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkHover); // Avoid duplicates
                el.removeEventListener("mouseleave", handleLinkLeave);
                el.addEventListener("mouseenter", handleLinkHover);
                el.addEventListener("mouseleave", handleLinkLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleLinkHover);
                el.removeEventListener("mouseleave", handleLinkLeave);
            });
            observer.disconnect();
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Hide default cursor globally via style when this is active to avoid double pointers */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>

            {/* Main Dot */}
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-slate-900 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 0.5 : 1})`
                }}
            />

            {/* Trailing Ring */}
            <div
                className="fixed top-0 left-0 w-8 h-8 border border-slate-900/30 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
                    backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent",
                    borderColor: isHovering ? "rgba(59, 130, 246, 0.3)" : "rgba(15, 23, 42, 0.1)"
                }}
            />
        </>
    );
}
