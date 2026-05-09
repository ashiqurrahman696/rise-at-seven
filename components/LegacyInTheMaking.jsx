import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
    {
        id: 1,
        title: "Pioneers",
        description:
            "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
        mission:
            "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=fca4e779651c6bbd2dbe236d21673786",
        bgColor: "bg-black",
        textColor: "text-white",
    },
    {
        id: 2,
        title: "Award Winning",
        description:
            "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=b1befabf8bc726903f9a84284e5ff609",
        bgColor: "bg-[#A7F3D0]",
        textColor: "text-black",
    },
    {
        id: 3,
        title: "Speed",
        description:
            "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
        extra:
            "We've created a service which takes ideas to result within 60 minutes.",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d00aadc5240b895dd5d4b08f7e61eb59",
        bgColor: "bg-white",
        textColor: "text-black",
    },
];

const LegacyInTheMaking = () => {
    const containerRef = useRef(null);
    const mobileScrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const { scrollXProgress } = useScroll({
        container: mobileScrollRef,
    });

    const mobileWidth = useTransform(scrollXProgress, [0, 1], ["33.33%", "100%"]);

    return (
        <div
            ref={containerRef}
            className="relative h-auto md:h-[350vh] bg-[#f0f0f0]"
        >
            {/* MOBILE VERSION (UNTOUCHED) */}
            <div className="md:hidden w-full pt-10 pb-24">
                <h2 className="text-center text-base font-medium text-gray-900 mb-6">
                    Legacy In The Making
                </h2>
                <div
                    ref={mobileScrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 px-6"
                >
                    {CARDS.map((card) => (
                        <div
                            key={`mob-${card.id}`}
                            className={`snap-center shrink-0 w-[88vw] min-h-[550px] ${card.bgColor} ${card.textColor} rounded-[32px] p-6 flex flex-col shadow-xl overflow-hidden`}
                        >
                            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-grow text-center items-center">
                                <h3 className="text-4xl font-medium tracking-tighter mb-4 leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-[15px] leading-snug font-medium opacity-90 mb-4 px-2">
                                    {card.description}
                                </p>
                                {(card.mission || card.extra) && (
                                    <p className="text-[15px] font-medium leading-snug border-t border-current/20 pt-4 px-2">
                                        {card.mission || card.extra}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-12 mt-14">
                    <div className="relative w-full h-[4px] bg-gray-300 rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black rounded-full"
                            style={{ width: mobileWidth, transformOrigin: "0%" }}
                        />
                    </div>
                </div>
            </div>

            {/* DESKTOP VERSION (REFINED INCREMENTAL ROTATION) */}
            <div className="hidden md:flex sticky top-0 h-screen w-full flex-col items-center overflow-hidden">
                <h2 className="mt-8 mb-2 text-base md:text-xl font-medium text-gray-900 tracking-tight z-[100]">
                    Legacy In The Making
                </h2>

                <div className="relative w-full flex-1 flex items-center justify-center">
                    {CARDS.map((card, index) => {
                        const start = index * 0.25;
                        const end = start + 0.4;
                        const isLastCard = index === CARDS.length - 1;

                        // --- INCREMENTAL FANNING LOGIC ---
                        // Card 1: 2deg, Card 2: 5deg, Card 3: 8deg (Subtle fanning)
                        const initialRotation = (index + 1) * 2.8;

                        // X and Y offset to peek out from the top-left/bottom-right
                        const initialX = index * -4;
                        const initialY = index * 2;

                        const yScroll = useTransform(
                            scrollYProgress,
                            [start, end],
                            [`${initialY}px`, "-120vh"],
                        );

                        const rotateScroll = useTransform(
                            scrollYProgress,
                            [start, end],
                            [initialRotation, -12],
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [start - 0.2, start],
                            [0.98, 1],
                        );

                        return (
                            <motion.div
                                key={card.id}
                                style={{
                                    x: `${initialX}px`,
                                    y: isLastCard ? `${initialY}px` : yScroll,
                                    rotate: isLastCard ? initialRotation : rotateScroll,
                                    scale: index === 0 ? 1 : scale,
                                    zIndex: CARDS.length - index,
                                }}
                                className={`absolute w-[650px] h-[90vh] rounded-[32px] shadow-2xl p-10 flex flex-col items-center text-center justify-center border-none ${card.bgColor} ${card.textColor}`}
                            >
                                <div className="mb-8 overflow-hidden rounded-2xl w-60 h-80">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover aspect-square"
                                    />
                                </div>
                                <h3 className="text-6xl font-medium mb-6 tracking-tighter">
                                    {card.title}
                                </h3>
                                <p className="text-xl leading-snug mb-6 opacity-90 max-w-2xl font-medium">
                                    {card.description}
                                </p>
                                {(card.mission || card.extra) && (
                                    <p className="text-xl max-w-2xl pt-4">
                                        {card.mission || card.extra}
                                    </p>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LegacyInTheMaking;