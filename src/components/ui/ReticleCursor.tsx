"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function ReticleCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Physics-based mouse smoothing
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest("a, button, [role='button'], input, textarea, .hover-trigger")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <style jsx global>{`
                body, a, button, [role='button'], input, textarea {
                    cursor: none !important;
                }
            `}</style>

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            >
                <div className="relative w-8 h-8 flex items-center justify-center">

                    {/* Center Dot */}
                    <motion.div
                        className="w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{
                            scale: isHovering ? 0 : 1,
                            opacity: isHovering ? 0 : 1
                        }}
                    />

                    {/* Outer Ring */}
                    <motion.div
                        className="absolute inset-0 border border-cyan-400/60 rounded-full"
                        animate={{
                            scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
                            opacity: isHovering ? 1 : 0.5,
                            rotate: isClicking ? 90 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    {/* Tactical Crosshairs - Only visible on hover */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            scale: isHovering ? 1 : 0.5,
                            rotate: isHovering ? 45 : 0
                        }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyan-400" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-cyan-400" />
                    </motion.div>

                    {/* Data Spinner */}
                    {isHovering && (
                        <div className="absolute inset-[-8px] border border-dashed border-cyan-500/30 rounded-full animate-[spin_4s_linear_infinite]" />
                    )}

                </div>
            </motion.div>
        </>
    );
}
