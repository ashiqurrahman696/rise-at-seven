'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const servicesLeft = [
    "Digital PR",
    "Search & Growth Strategy",
    "Data & Insights"
];

const servicesRight = [
    "Organic Social & Content",
    "Content Experience",
    "Onsite SEO"
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-item", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#F8F8F8] text-black py-20 md:py-28">
            <div className="max-w-screen-2xl mx-auto px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="flex items-center gap-6">
                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">Our</h2>

                        <div className="relative w-20 h-20 md:w-24 md:h-24 -mb-2 rounded-xl overflow-hidden border border-black/10">
                            <Image
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea"
                                alt="Team Meeting"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">Services</h2>
                    </div>

                    <a
                        href="#"
                        className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-zinc-800 transition self-start md:self-center"
                    >
                        View All Services
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {servicesLeft.map((service, index) => (
                            <div key={index} className="service-item group">
                                <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter group-hover:text-zinc-600 transition">
                                    {service}
                                </h3>
                                <div className="h-px bg-black/20 mt-4 group-hover:bg-black/40 transition" />
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {servicesRight.map((service, index) => (
                            <div key={index} className="service-item group">
                                <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter group-hover:text-zinc-600 transition">
                                    {service}
                                </h3>
                                <div className="h-px bg-black/20 mt-4 group-hover:bg-black/40 transition" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}