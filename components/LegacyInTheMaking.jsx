'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const legacyPoints = [
    {
        title: "Pioneers",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=fca4e779651c6bbd2dbe236d21673786",
        text: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    },
    {
        title: "Award Winning",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=b1befabf8bc726903f9a84284e5ff609",
        text: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    },
    {
        title: "Speed",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d00aadc5240b895dd5d4b08f7e61eb59",
        text: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster.We chase consumers, not algorithms.We’ve created a service which takes ideas to result within 60 minutes.",
    },
];

export default function LegacyInTheMaking() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 120,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tighter">Legacy In The Making</h2>
                </div>

                {/* Desktop View */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {legacyPoints.map((point, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="bg-black text-white rounded-3xl overflow-hidden group"
                        >
                            <div className="hidden md:grid md:grid-cols-12">
                                {/* Image */}
                                <div className="md:col-span-5 relative h-80 md:h-full min-h-[380px]">
                                    <Image
                                        src={point.image}
                                        alt={point.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                                    <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
                                        {point.title}
                                    </h3>
                                    <p className="text-lg md:text-xl leading-relaxed text-white/80">
                                        {point.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    >
                        {legacyPoints.map((point, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <div className="bg-black text-white rounded-3xl overflow-hidden group h-full">
                                    {/* Image */}
                                    <div className="relative h-80 md:h-full min-h-[380px]">
                                        <Image
                                            src={point.image}
                                            alt={point.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-10 md:p-16 flex flex-col justify-center">
                                        <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">
                                            {point.title}
                                        </h3>
                                        <p className="text-lg md:text-xl leading-relaxed text-white/80">
                                            {point.text}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}