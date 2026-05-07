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
    const [activeIndex, setActiveIndex] = useState(0);
    const imageContainerRef = useRef(null);

    const current = projects[activeIndex];

    const handleProjectSelect = (index) => {
        if (index !== activeIndex) {
            gsap.to(imageContainerRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                onComplete: () => {
                    setActiveIndex(index);
                    gsap.fromTo(imageContainerRef.current,
                        { opacity: 0, scale: 0.95 },
                        { opacity: 1, scale: 1, duration: 0.6 }
                    );
                }
            });
        }
    };

    return (
        <section id="work" className="bg-black text-white py-12 min-h-screen">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="hidden lg:grid lg:grid-cols-12 gap-12">

                    {/* LEFT - Project List */}
                    <div className="lg:col-span-5 lg:pr-16 flex flex-col justify-center">
                        <div className="uppercase tracking-[3px] text-sm mb-8">Featured Work</div>

                        <div className="space-y-12">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => handleProjectSelect(index)}
                                    onClick={() => handleProjectSelect(index)}
                                    className={`cursor-pointer transition-all group ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                                        }`}
                                >
                                    <div className="flex items-baseline gap-6">
                                        <h3 className="text-6xl lg:text-7xl font-bold tracking-tighter group-hover:text-white/90">
                                            {project.client}
                                        </h3>
                                        <span className="font-mono text-sm text-white/50">{project.period}</span>
                                    </div>
                                    <p className="text-white/60 text-xl mt-2">{project.tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - Image Area */}
                    <div
                        ref={imageContainerRef}
                        className="lg:col-span-7 relative h-[85vh] lg:h-screen rounded-3xl overflow-hidden group"
                    >
                        <Image
                            src={current.image}
                            alt={current.client}
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Top Right Tag */}
                        <div className="absolute top-8 right-8 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium">
                            🔍 {current.tag}
                        </div>

                        {/* Description Overlay - Hover on Desktop + Mobile */}
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 lg:p-12">
                            <div className="max-w-lg text-center">
                                <div className="bg-[#FF6B00] text-black p-8 md:p-10 rounded-3xl">
                                    <p className="text-xl md:text-2xl leading-tight font-medium">
                                        {current.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Left Info */}
                        <div className="absolute bottom-12 left-12">
                            <p className="text-sm text-white/70">{current.period}</p>
                            <h3 className="text-5xl font-bold tracking-tighter">{current.client}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Vertical Stack with Hover/Tap Support */}
            <div className="lg:hidden mt-12 px-6 space-y-8">
                <div className="uppercase tracking-[3px] text-sm mb-8">Featured Work</div>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer"
                        onClick={() => handleProjectSelect(index)}
                    >
                        <Image src={project.image} alt={project.client} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm">
                            {project.tag}
                        </div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm opacity-70">{project.period}</p>
                            <h3 className="text-4xl font-bold">{project.client}</h3>
                        </div>

                        {/* Mobile Description Overlay */}
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 active:opacity-100 transition-all duration-500 p-8">
                            <div className="text-center max-w-sm">
                                <div className="bg-[#FF6B00] text-black p-8 rounded-3xl">
                                    <p className="text-xl leading-tight">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}