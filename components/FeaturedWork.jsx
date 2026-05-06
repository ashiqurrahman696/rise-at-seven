'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        client: "SIXT",
        tag: "Car rental",
        period: "[2023-2025]",
        description: "An extra 3m clicks regionally through SEO",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
    },
    {
        id: 2,
        client: "Dojo - B2B",
        tag: "Card Machines",
        period: "[2021-2025]",
        description: "A B2B success story for Dojo card machines",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
    },
    {
        id: 3,
        client: "Magnet Trade - B2B",
        tag: "",
        period: "[2023-2024]",
        description: "A full service SEO success story 170%+ increase",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
    },
    {
        id: 4,
        client: "Leading E Sim brand globally",
        tag: "Esims",
        period: "[2023-2025]",
        description: "Increasing brand and non brand visibility UK/ES",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
    },
];

export default function FeaturedWork() {
    const [activeProject, setActiveProject] = useState(0);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    const current = projects[activeProject];

    // Switch Project with GSAP
    const switchProject = (index) => {
        if (index === activeProject) return;

        gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.96,
            duration: 0.6,
            ease: "power3.inOut",
            onComplete: () => {
                setActiveProject(index);
                gsap.fromTo(imageRef.current,
                    { opacity: 0, scale: 0.96 },
                    { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
                );
            }
        });
    };

    // Hover Effect - Show Description Overlay
    const handleMouseEnter = () => {
        gsap.to(overlayRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(overlayRef.current, { opacity: 0, y: 30, duration: 0.4, ease: "power3.in" });
    };

    // Scroll Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".featured-title", {
                y: 80,
                opacity: 0,
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={sectionRef} className="bg-black text-white py-12 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="featured-title mb-10">
                    <h2 className="uppercase tracking-[3px] text-sm">Featured Work</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[90vh] lg:min-h-screen">
                    {/* LEFT PANEL - Project List */}
                    <div className="lg:pr-16 flex flex-col justify-center">
                        <div className="space-y-8 lg:space-y-12">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    onClick={() => switchProject(index)}
                                    className={`cursor-pointer group transition-all duration-300 ${activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                                        }`}
                                >
                                    <div className="flex items-baseline gap-6">
                                        <h3 className="text-6xl lg:text-7xl font-bold tracking-tighter group-hover:text-white/90">
                                            {project.client}
                                        </h3>
                                        <span className="text-sm font-mono text-white/50">{project.period}</span>
                                    </div>
                                    <p className="text-white/60 text-xl mt-2">{project.tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL - Image + Hover Overlay */}
                    <div
                        ref={imageRef}
                        className="relative h-[70vh] lg:h-screen rounded-3xl lg:rounded-none overflow-hidden group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={current.image}
                            alt={current.client}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />

                        {/* Hover Description Overlay */}
                        <div
                            ref={overlayRef}
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 flex items-center justify-center p-8"
                        >
                            <div className="max-w-lg text-center">
                                <div className="bg-[#FF6B00] text-black p-8 rounded-3xl mb-8">
                                    <p className="text-3xl font-semibold leading-tight">
                                        {current.description}
                                    </p>
                                </div>

                                <button className="mx-auto flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-sm uppercase tracking-widest">
                                    View Case Study
                                    <span className="text-xl">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium">
                            🔍 {current.tag}
                        </div>
                    </div>
                </div>

                {/* Mobile Cards (Below on mobile) */}
                <div className="lg:hidden mt-12 grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => switchProject(index)}
                            className={`relative rounded-3xl overflow-hidden aspect-video cursor-pointer ${activeProject === index ? 'ring-2 ring-white' : ''}`}
                        >
                            <Image src={project.image} alt={project.client} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-4xl font-bold">{project.client}</h3>
                                <p className="text-white/70">{project.tag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}