"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReticleLogo } from "@/components/ui/ReticleLogo";
import { Menu, X } from "lucide-react";

const LEFT_LINKS = [
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#portfolio" },
];

const RIGHT_LINKS = [
    { name: "Insights", href: "/#insights" },
    { name: "Contact", href: "/#contact" },
];

export function HUDNavigation() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavLink = ({ item, onClick }: { item: { name: string; href: string }, onClick?: () => void }) => (
        <Link
            href={item.href}
            onClick={onClick}
            className={cn(
                "relative text-sm font-mono tracking-wide transition-all duration-300 px-3 py-1",
                pathname === item.href ? "text-[var(--accent-green)] font-bold text-shadow-[0_0_8px_rgba(0,255,160,0.5)]" : "text-[var(--text-muted)] hover:text-[var(--accent-green)]"
            )}
        >
            {item.name}
        </Link>
    );

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
            <div
                className={cn(
                    "rounded-full px-4 md:px-8 py-2 flex items-center gap-8 pointer-events-auto transition-all duration-300 ease-in-out shadow-[0_0_20px_var(--halo)] relative border",
                    isScrolled
                        ? "bg-[#050505]/90 backdrop-blur-md border-green-500/10"
                        : "bg-transparent border-transparent backdrop-blur-none shadow-none"
                )}
            >

                {/* Left Group (Desktop) */}
                <div className="hidden md:flex items-center gap-6">
                    {LEFT_LINKS.map((item) => <NavLink key={item.name} item={item} />)}
                </div>

                {/* Center Logo */}
                <Link href="/" className="group relative flex items-center justify-center p-1">
                    <ReticleLogo />
                </Link>

                {/* Right Group (Desktop) */}
                <div className="hidden md:flex items-center gap-6">
                    {RIGHT_LINKS.map((item) => <NavLink key={item.name} item={item} />)}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-1 text-[var(--accent-green)]"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-black border border-white/10 rounded-2xl p-6 flex flex-col gap-4 items-center shadow-2xl md:hidden overflow-hidden backdrop-blur-xl"
                        >
                            {[...LEFT_LINKS, ...RIGHT_LINKS].map((item) => (
                                <NavLink key={item.name} item={item} onClick={() => setIsMobileOpen(false)} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
