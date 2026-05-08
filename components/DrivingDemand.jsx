'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function DrivingDemand() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animate-text", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#efeeec] py-20 md:py-32 text-black">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Side - Desktop Only */}
                    <div className="hidden lg:block animate-text">
                        <p className="text-xl leading-tight max-w-lg">
                            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                        </p>
                    </div>

                    {/* Right Side - Main Headline + Image */}
                    <div className="animate-text flex flex-wrap items-center justify-start gap-x-2">
                        <h2 className="text-5xl font-semibold inline">
                            Driving
                        </h2>
                        <h2 className="text-5xl font-semibold inline">
                            Demand
                        </h2>
                        <h2 className="text-5xl font-semibold inline">
                            &
                        </h2>
                        <h2 className="text-5xl font-semibold inline">
                            Discovery
                        </h2>

                        {/* Embedded Image */}
                        <div className="inline mt-6 mb-8 lg:mb-0">
                            <Image
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                                alt="Pioneer holding sign"
                                width={50}
                                height={50}
                                className="rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-12 lg:mt-16">
                            <a
                                href="#"
                                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-zinc-800 transition"
                            >
                                Our Story
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </a>
                            <a
                                href="#services"
                                className="group inline-flex items-center gap-3 border border-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
                            >
                                Our Services
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </a>
                        </div>

                        {/* Mobile Text - Shown only on mobile */}
                        <div className="lg:hidden mt-8 leading-tight">
                            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}