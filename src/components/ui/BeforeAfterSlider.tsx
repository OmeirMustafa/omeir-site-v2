"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden select-none group border border-white/20 shadow-2xl" role="img" aria-label={alt}>
            {/* AFTER Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/10 z-10">
                    After
                </div>
            </div>

            {/* BEFORE Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/10 z-10">
                    Before
                </div>
            </div>

            {/* Slider Handle Line */}
            <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-900/10">
                    <ArrowLeftRight size={16} className="text-slate-900" />
                </div>
            </div>

            {/* Range Input Overlay for Interaction */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0 touch-none"
                aria-label="Comparison slider"
            />
        </div>
    );
}
