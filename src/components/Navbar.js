"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const links = [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? "border-b border-[var(--border)] bg-white/80 shadow-[0_8px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                        : "border-b border-transparent bg-white/95"
                }`}
            >
                <div
                    className={`container flex items-center justify-between gap-5 transition-all duration-300 ${
                        scrolled ? "min-h-[78px]" : "min-h-[110px]"
                    }`}
                >
                    <Link
                        href="/"
                        aria-label="MD Harun — Home"
                        className="flex min-w-0 shrink-0 items-center"
                        onClick={closeMenu}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="MD Harun — Mohammad Harun Or Rashid"
                            width={2172}
                            height={724}
                            priority
                            className={`h-auto transition-all duration-300 ${
                                scrolled
                                    ? "w-[185px] sm:w-[220px] md:w-[250px]"
                                    : "w-[205px] sm:w-[260px] md:w-[320px] lg:w-[380px]"
                            }`}
                        />
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href="mailto:mdharun.work@gmail.com"
                            className="button button-secondary whitespace-nowrap"
                        >
                            Work with me
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((current) => !current)}
                        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white shadow-sm lg:hidden"
                    >
                        <span className="sr-only">
                            {menuOpen ? "Close menu" : "Open menu"}
                        </span>

                        <div className="relative h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                                    menuOpen
                                        ? "translate-y-[7px] rotate-45"
                                        : ""
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                                    menuOpen ? "opacity-0" : ""
                                }`}
                            />

                            <span
                                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                                    menuOpen
                                        ? "-translate-y-[7px] -rotate-45"
                                        : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close navigation menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm lg:hidden"
                        />

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -12,
                                scale: 0.985,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                scale: 0.985,
                            }}
                            transition={{
                                duration: 0.22,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed left-4 right-4 top-[92px] z-[60] overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] lg:hidden"
                        >
                            <nav className="p-3">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.04 + index * 0.04,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-bold transition hover:bg-[var(--surface-soft)]"
                                        >
                                            {link.label}

                                            <span className="text-[var(--accent)]">
                                                →
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}

                                <div className="mt-2 border-t border-[var(--border)] p-3">
                                    <a
                                        href="mailto:mdharun.work@gmail.com"
                                        onClick={closeMenu}
                                        className="button button-primary w-full"
                                    >
                                        Work with me
                                        <span>→</span>
                                    </a>

                                    <p className="mt-4 text-center text-xs text-[var(--muted)]">
                                        mdharun.work@gmail.com
                                    </p>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
