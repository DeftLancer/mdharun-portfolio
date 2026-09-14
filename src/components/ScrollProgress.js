"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 28,
        mass: 0.25,
    });

    return (
        <motion.div
            aria-hidden="true"
            className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400"
            style={{ scaleX }}
        />
    );
}
