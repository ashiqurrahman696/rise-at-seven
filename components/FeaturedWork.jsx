"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

// ─── ADD / REMOVE PROJECTS HERE ──────────────────────────────────────────────
// Everything else (scroll length, list, images, dots) scales automatically.
const projects = [
    {
        id: 1,
        name: "SIXT",
        period: "[2023-2025]",
        tag: "Car rental",
        description: "An extra 3m clicks regionally through SEO",
        overlayColor: "rgba(203, 123, 58, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
    },
    {
        id: 2,
        name: "Dojo - B2B",
        period: "[2021-2025]",
        tag: "Card Machines",
        description: "A B2B success story for Dojo card machines",
        overlayColor: "rgba(253, 216, 196, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
    },
    {
        id: 3,
        name: "Magnet Trade - B2B",
        period: "[2023-2024]",
        tag: "",
        description: "A full service SEO success story 170%+ increase",
        overlayColor: "rgba(216, 196, 253, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
    },
    {
        id: 4,
        name: "Leading E Sim brand globally",
        period: "[2023-2025]",
        tag: "Esims",
        description: "Increasing brand and non brand visibility UK/ES",
        overlayColor: "rgba(203, 123, 58, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
    },
    {
        id: 5,
        name: "JD Sports",
        period: "[2025]",
        tag: "Trainers",
        description: "65% up YoY in clicks for JDSports FR, IT, ES",
        overlayColor: "rgba(58, 140, 203, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=19d31221b717bb829b65ed531322d432",
    },
    {
        id: 6,
        name: "Parkdean Resorts",
        period: "[2019-2025]",
        tag: "Easter Breaks",
        description: "Dominating Google and AI search",
        overlayColor: "rgba(210, 181, 157, 0.8)",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=e29b3435cbe0e68f30856e79714a50f3",
    },
];
// ─────────────────────────────────────────────────────────────────────────────

/** Returns true when the overlay is light enough to need dark text */
function isLightOverlay(rgba) {
    const nums = rgba.match(/[\d.]+/g);
    if (!nums || nums.length < 4) return false;
    const [r, g, b, a] = nums.map(Number);
    return ((0.299 * r + 0.587 * g + 0.114 * b) / 255) * a > 0.55;
}

export default function FeaturedWork() {
    const sectionRef = useRef(null);
    const pinnedRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(false);

    const activeIndexRef = useRef(0);
    const listRefs = useRef([]);
    const imageRefs = useRef([]);
    const scrollTriggerRef = useRef(null);
    // Stable ref so the ScrollTrigger closure never captures a stale switchProject
    const switchProjectRef = useRef(() => { });

    const switchProject = useCallback((next) => {
        if (next === activeIndexRef.current) return;
        if (next < 0 || next >= projects.length) return;

        const prev = activeIndexRef.current;
        const dir = next > prev ? 1 : -1;

        const prevImg = imageRefs.current[prev];
        const nextImg = imageRefs.current[next];

        if (prevImg) {
            gsap.to(prevImg, {
                opacity: 0, y: dir * -60, scale: 0.96,
                duration: 0.55, ease: "power3.inOut",
            });
        }
        if (nextImg) {
            gsap.fromTo(
                nextImg,
                { opacity: 0, y: dir * 60, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.inOut" },
            );
        }

        listRefs.current.forEach((el, i) => {
            if (!el) return;
            const label = el.querySelector(".project-label");
            const period = el.querySelector(".project-period");
            if (i === next) {
                gsap.to(label, { color: "#ffffff", duration: 0.3 });
                gsap.to(period, { opacity: 1, duration: 0.3 });
            } else if (i === prev) {
                gsap.to(label, { color: "rgba(255,255,255,0.22)", duration: 0.3 });
                gsap.to(period, { opacity: 0, duration: 0.3 });
            }
        });

        activeIndexRef.current = next;
        setActiveIndex(next);
    }, []);

    // Always point the ref at the latest closure
    useEffect(() => { switchProjectRef.current = switchProject; }, [switchProject]);

    // Re-creates ScrollTrigger whenever projects.length changes so
    // the scroll end distance is always correct: (n-1) × 1 viewport
    useEffect(() => {
        const section = sectionRef.current;
        const pinned = pinnedRef.current;
        if (!section || !pinned) return;

        // Hard-reset all visual state to project 0
        imageRefs.current.forEach((el, i) => {
            if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0, scale: 1 });
        });
        listRefs.current.forEach((el, i) => {
            if (!el) return;
            const label = el.querySelector(".project-label");
            const period = el.querySelector(".project-period");
            if (label) label.style.color = i === 0 ? "#ffffff" : "rgba(255,255,255,0.22)";
            if (period) period.style.opacity = i === 0 ? "1" : "0";
        });
        activeIndexRef.current = 0;
        setActiveIndex(0);

        const totalSteps = projects.length - 1;   // one transition per extra project
        const stepHeight = window.innerHeight;     // one full viewport per step

        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${totalSteps * stepHeight}`,
            pin: pinned,
            pinSpacing: true,
            scrub: false,
            onUpdate(self) {
                const idx = Math.min(
                    Math.round(self.progress * totalSteps),
                    projects.length - 1,
                );
                switchProjectRef.current(idx);
            },
        });

        return () => { scrollTriggerRef.current?.kill(); };
    }, [projects.length]); // re-runs automatically when you add/remove projects

    return (
        <section ref={sectionRef} className="featured-work-section bg-black">
            {/* Pinned container — exactly 1 screen tall */}
            <div
                ref={pinnedRef}
                className="w-full h-screen flex flex-col md:flex-row overflow-hidden"
            >
                {/* ── LEFT: project list (desktop only) ── */}
                <div className="hidden md:flex flex-col justify-between w-[42%] h-full px-10 py-10 overflow-hidden">
                    <span
                        className="text-white/60 text-sm tracking-widest uppercase font-light"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Featured Work
                    </span>

                    <div className="flex flex-col gap-1 mt-auto pb-4">
                        {projects.map((p, i) => (
                            <div
                                key={p.id}
                                ref={(el) => { listRefs.current[i] = el; }}
                                className="flex items-baseline gap-4 cursor-pointer py-1"
                                onClick={() => switchProject(i)}
                            >
                                <span
                                    className="project-label text-[clamp(2rem,3.8vw,3.8rem)] font-bold leading-none tracking-tight"
                                    style={{
                                        fontFamily: "'Clash Display','DM Sans',sans-serif",
                                        color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.22)",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    {p.name}
                                </span>
                                <span
                                    className="project-period text-white/50 text-xs font-light"
                                    style={{ opacity: i === 0 ? 1 : 0, transition: "opacity 0.3s" }}
                                >
                                    {p.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: image panel ── */}
                <div className="relative flex-1 h-full md:py-6 md:pr-6">
                    {/* Mobile "Featured Work" label */}
                    <div className="md:hidden absolute top-4 left-4 z-20">
                        <span className="text-white/60 text-xs tracking-widest uppercase">
                            Featured Work
                        </span>
                    </div>

                    {/* Stacked images — all absolute, only active one visible */}
                    <div className="relative w-full h-full md:rounded-2xl overflow-hidden">
                        {projects.map((p, i) => (
                            <div
                                key={p.id}
                                ref={(el) => { imageRefs.current[i] = el; }}
                                className="absolute inset-0 w-full h-full"
                                style={{ opacity: i === 0 ? 1 : 0 }}
                                onMouseEnter={() => setHoveredImage(true)}
                                onMouseLeave={() => setHoveredImage(false)}
                            >
                                {/* Photo */}
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    draggable={false}
                                />

                                {/* Solid colour hover overlay */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-500"
                                    style={{
                                        background: p.overlayColor,
                                        opacity: i === activeIndex && hoveredImage ? 1 : 0,
                                        pointerEvents: "none",
                                    }}
                                />

                                {/* Hover content */}
                                <div
                                    className="absolute inset-0 flex justify-center items-center text-center px-10 z-10 transition-opacity duration-500"
                                    style={{
                                        opacity: i === activeIndex && hoveredImage ? 1 : 0,
                                        pointerEvents: "none",
                                    }}
                                >
                                    <p
                                        className="text-3xl md:text-5xl font-semibold max-w-lg leading-snug"
                                        style={{
                                            fontFamily: "'Clash Display',sans-serif",
                                            color: isLightOverlay(p.overlayColor) ? "#111" : "#fff",
                                        }}
                                    >
                                        {p.description}
                                    </p>
                                </div>

                                {/* Tag pill — bottom right */}
                                {p.tag && <div
                                    className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black"
                                >
                                    <IoIosSearch />
                                    <span className="text-xs font-medium">{p.tag}</span>
                                    <PiChartLineUpLight />
                                </div>}

                                {/* Name + period — bottom left (mobile always / desktop hidden) */}
                                <div className="absolute bottom-5 left-5 z-20 md:opacity-0">
                                    <p className="text-white/60 text-xs mb-0.5">{p.period}</p>
                                    <p
                                        className="text-white text-2xl font-bold leading-none"
                                        style={{ fontFamily: "'Clash Display',sans-serif" }}
                                    >
                                        {p.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile dot nav — one dot per project, auto-generated */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => switchProject(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                            height: "6px",
                            width: i === activeIndex ? "20px" : "6px",
                            background: i === activeIndex ? "#fff" : "rgba(255,255,255,0.3)",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}