'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RxArrowTopRight } from 'react-icons/rx';

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
        <section ref={sectionRef} className="py-20">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 md:gap-20">

                    {/* Left Side - Desktop Only */}
                    <div className="hidden md:block animate-text">
                        <p className="text-xl leading-tight max-w-lg tracking-tight font-semibold">
                            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                        </p>
                    </div>

                    {/* Right Side - Main Headline + Image */}
                    <div className="animate-text space-y-6">
                        <div className="flex flex-wrap gap-x-2 items-start md:items-end text-4xl lg:text-5xl xl:text-7xl font-semibold max-w-90 md:max-w-full">
                            <h2 className="inline">
                                Driving
                            </h2>
                            <h2 className="inline">
                                Demand
                            </h2>
                            <h2 className="inline">
                                &
                            </h2>
                            <h2 className="inline">
                                Discovery
                            </h2>

                            {/* Embedded Image */}
                            <div className="inline size-13 lg:size-15">
                                <img
                                    src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                                    alt="Pioneer holding sign"
                                    className="rounded-xl shadow-lg size-full"
                                />
                            </div>
                        </div>

                        <div className="md:hidden animate-text">
                            <p className="text-xl leading-tight max-w-90 tracking-tight font-semibold">
                                A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm tracking-tighter hover:rounded-xl transition max-md:w-full justify-center"
                            >
                                <span>Our Story</span>
                                <RxArrowTopRight />
                            </a>
                            <a
                                href="#services"
                                className="group flex items-center gap-3 text-black py-4 rounded-full text-sm tracking-tighter transition max-md:w-full justify-center"
                            >
                                <span>Our Services</span>
                                <RxArrowTopRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}