'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RxArrowTopRight } from 'react-icons/rx';

const services = [
    { title: "Digital PR", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&h=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=7ea281e95deb6580b017259baf4973c8" },
    { title: "Organic Social & Content", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=400&h=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=cc2be00d98af9041654b77b39d0ae9e9" },
    { title: "Search & Growth Strategy", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=400&h=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=15f03803066c8eebcb069c1fe33d91b6" },
    { title: "Content Experience", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=400&h=400&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=4fa7d71a86fa006daa765368b1a1c695" },
    { title: "Data & Insights", image: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=400&h=400&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=818d69b36673d243881f05c956c4b104" },
    { title: "Onsite SEO", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=400&h=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=710877ff5d673967913cb77f97c73e0e" },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-item", {
                y: 50,
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
        <section ref={sectionRef} className="bg-[#efeeec] py-20 md:py-28 text-black">
            <div className="max-w-screen-2xl mx-auto px-8">
                {/* Header */}
                <div className="flex justify-between items-end mb-16">
                    <div className="flex items-center flex-wrap gap-6">
                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">Our</h2>

                        <div className="relative w-20 h-20 md:w-24 md:h-24 -mb-2 rounded-xl overflow-hidden border border-black/10">
                            <Image
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea"
                                alt="Team"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">Services</h2>
                    </div>

                    <a
                        href="#"
                        className="group hidden md:flex items-center gap-3 text-black bg-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition"
                    >
                        View All Services
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </a>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item group relative h-24 flex items-center cursor-pointer overflow-hidden rounded-full"
                        >
                            {/* Background Image - Only on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/70" />
                            </div>

                            {/* Service Content */}
                            <div className="relative z-10 flex items-center w-full px-8 group-hover:pl-18 transition-all duration-500">
                                {/* Arrow - Appears on Left on Hover */}
                                <span className="absolute left-8 text-4xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                                    <RxArrowTopRight />
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-black group-hover:text-white transition-all duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Underline */}
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-black/20 group-hover:bg-white/50 transition-all" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 md:hidden">
                    <a
                        href="#"
                        className="group flex justify-center items-center gap-3 text-black bg-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition"
                    >
                        View All Services
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}