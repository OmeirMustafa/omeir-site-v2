export const MOTION = {
    spring: { type: "spring", stiffness: 140, damping: 20, mass: 0.9 },
    snap: { type: "spring", stiffness: 220, damping: 26 },
    subtle: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }, // cubic-bezier
    delay: (i: number) => ({ delay: i * 0.1 }),
};

export const VARIANTS = {
    staggerContainer: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: MOTION.spring
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: MOTION.snap
        },
    }
};
