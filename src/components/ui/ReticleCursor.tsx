"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ReticleCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest("a, button, [role='button']")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role='button'] {
          cursor: none;
        }
      `}</style>

            {/* Main Reticle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                <div className="relative w-8 h-8 flex items-center justify-center">
                    {/* Center Dot */}
                    <div className={`w-1 h-1 bg-cyan-400 rounded-full ${isHovering ? 'bg-white' : ''}`} />

                    {/* Outer Ring */}
                    <div className={`absolute inset-0 border border-cyan-500/50 rounded-full transition-all duration-300 ${isHovering ? 'border-cyan-400 opacity-100 scale-110' : 'opacity-50'}`} />

                    {/* Crosshairs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400/50" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyan-400/50" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyan-400/50" />
                </div>
            </motion.div>
        </>
    );
}
