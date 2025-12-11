"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function ReticleCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => { cursorX.set(e.clientX - 16); cursorY.set(e.clientY - 16); };
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest("a, button, [role='button'], input, textarea"));
        };
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <motion.div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference" style={{ x: cursorXSpring, y: cursorYSpring }}>
            <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Center Dot */}
                <motion.div animate={{ scale: isHovering ? 0 : 1 }} className="w-1 h-1 bg-[var(--accent-green)] rounded-full" />

                {/* Outer Ring */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.6 : 1,
                        opacity: isHovering ? 1 : 0.5,
                        rotate: isClicking ? 360 : 0,
                        borderColor: isClicking ? "#00FFC2" : "var(--accent-green)"
                    }}
                    transition={{
                        rotate: { duration: 0.4, ease: "linear" },
                        scale: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className={cn(
                        "absolute inset-0 border border-[var(--accent-green)] rounded-full",
                        !isHovering && "animate-holo-pulse"
                    )}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-[var(--accent-green)]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-[var(--accent-green)]" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[1px] bg-[var(--accent-green)]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-[1px] bg-[var(--accent-green)]" />
                </motion.div>

                {/* Hover Spin Ring */}
                {isHovering && <motion.div initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1.5, opacity: 1 }} exit={{ scale: 2, opacity: 0 }} className="absolute inset-0 border border-dashed border-[var(--accent-green)] opacity-50 rounded-full animate-spin-slow" />}
            </div>
        </motion.div>
    );
}
