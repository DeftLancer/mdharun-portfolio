"use client";

import { useEffect, useRef } from "react";

export default function PointerGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) return;

        const desktopPointer = window.matchMedia(
            "(min-width: 1024px) and (pointer: fine)",
        );

        if (!desktopPointer.matches) return;

        let frameId = null;

        const moveGlow = (event) => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }

            frameId = requestAnimationFrame(() => {
                glow.style.transform = `translate3d(${event.clientX - 160}px, ${
                    event.clientY - 160
                }px, 0)`;

                glow.style.opacity = "1";
            });
        };

        const hideGlow = () => {
            glow.style.opacity = "0";
        };

        window.addEventListener("mousemove", moveGlow);
        document.documentElement.addEventListener("mouseleave", hideGlow);

        return () => {
            window.removeEventListener("mousemove", moveGlow);
            document.documentElement.removeEventListener(
                "mouseleave",
                hideGlow,
            );

            if (frameId) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return <div ref={glowRef} className="pointer-glow" aria-hidden="true" />;
}
