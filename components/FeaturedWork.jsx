import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { PiChartLineUp } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";

const WORKS = [
    {
        id: 1,
        title: "SIXT",
        tag: "Car Rental",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
        year: "[2023-2025]",
        hoverColor: "#CB7B3A",
        hoverText: "An extra 3m clicks regionally through SEO",
        badgeColor: "#b0f3e0",
    },
    {
        id: 2,
        title: "Dojo-B2B",
        tag: "Card Machines",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
        year: "[2021-2025]",
        hoverColor: "#FDD8C4",
        hoverText: "A B2B success story for Dojo card machine",
        badgeColor: "#b0f3e0",
    },
    {
        id: 3,
        title: (
            <>
                Magnet
                <br />
                Trade-B2B
            </>
        ),
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
        year: "[2023-2024]",
        hoverColor: "#D8C4FD",
        hoverText: "A full service SEO success story 170% + increase.",
        badgeColor: "#b0f3e0",
    },
    {
        id: 4,
        title: (
            <>
                Leading E Sim <br />
                Brand Globally
            </>
        ),
        tag: "Esims",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
        year: "[2023-2025]",
        hoverColor: "#CB7B3A",
        hoverText: "Increasing brand and non brand visibility UK/ES",
        badgeColor: "#b0f3e0",
    },
    {
        id: 5,
        title: "JD Sports",
        tag: "Trainers",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=19d31221b717bb829b65ed531322d432",
        year: "[2025]",
        hoverColor: "#3A8CCB",
        hoverText: "65% up YoY in clicks for JDSports, FR, IT, ES",
        badgeColor: "#b0f3e0",
    },
    {
        id: 6,
        title: "Parkdean Resorts",
        tag: "Easter Breaks",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=e29b3435cbe0e68f30856e79714a50f3",
        year: "[2019-2025]",
        hoverColor: "#D2B59D",
        hoverText: "Dominating google and AI search",
        badgeColor: "#b0f3e0",
    },
    {
        id: 7,
        title: "Pooky",
        tag: "Rechargeable Lights",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=5e3e3b48f331495fa309422c715b5b6d",
        year: "[2025]",
        hoverColor: "#39B0BD",
        hoverText: "Driving Demand for Pooky Rechargeable Lights",
        badgeColor: "#b0f3e0",
    },
    {
        id: 8,
        title: "Parkdean Resorts",
        tag: "UK holidays",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=3c150315749c6ae2cd242ca0763932c7",
        year: "[2019-2025]",
        hoverColor: "#D29DD0",
        hoverText: "Social search and multi talent content #1.",
        badgeColor: "#b0f3e0",
    },
    {
        id: 9,
        title: "Revolution Beauty",
        tag: "Beauty Dupes",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=66887254ebb0061e76bd4843483830d5",
        year: "[2022-2025]",
        hoverColor: "#FECACC",
        hoverText: "Building the UK's beauty dupe brand.",
        badgeColor: "#b0f3e0",
    },
    {
        id: 10,
        title: "Loyds Pharmacy",
        tag: "STI tests",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=ca93939dbf531401a1b3805445611f1c",
        year: "[2022-2023]",
        hoverColor: "#60DCFB",
        hoverText: "Driving category leadership for STI tests.",
        badgeColor: "#b0f3e0",
    },
    {
        id: 11,
        title: "PrettyLittleThing",
        tag: "Outfits",
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=95854cccfcf8440a9dffe2897976126a",
        year: "[2021-2023]",
        hoverColor: "#FECACC",
        hoverText: 'Driving discovery everything for "outfits" PLT',
        badgeColor: "#b0f3e0",
    },
];

const FeaturedWork = () => {
    const targetRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
    const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);

    const handleMouseMove = (e, containerRect) => {
        setMousePos({
            x: e.clientX - containerRect.left,
            y: e.clientY - containerRect.top,
        });
    };

    return (
        <section
            ref={targetRef}
            className="relative h-auto md:h-[990vh] bg-[#efeeec] pb-0"
        >
            <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col items-center justify-center p-4 lg:p-7">
                {/* Main Black Box */}
                <div className="relative w-full bg-[#111212] rounded-[25px] overflow-hidden flex flex-col md:flex-row h-auto md:h-full">
                    {/* Label: Featured Work */}
                    <div className="p-4 md:absolute md:top-14 md:left-14 z-[60]">
                        <h2 className="text-white font-semibold">
                            Featured Work
                        </h2>
                    </div>

                    {/* MOBILE LIST (Visible only on Mobile) */}
                    <div className="flex flex-col gap-6 px-4 pb-12 md:hidden">
                        {WORKS.map((work) => (
                            <div 
                                key={`mob-${work.id}`} 
                                className="relative w-full group cursor-pointer"
                                onMouseEnter={() => setHoveredId(work.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onMouseMove={(e) =>
                                    handleMouseMove(
                                        e,
                                        e.currentTarget.querySelector("[data-image-container]").getBoundingClientRect(),
                                    )
                                }
                            >
                                <div className="rounded-[20px] overflow-hidden aspect-[4/5] relative bg-neutral-900" data-image-container>
                                    <img
                                        src={work.img}
                                        alt="work"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    {/* Text Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <p className="text-white/60 text-[10px] font-medium mb-1">
                                            {work.year}
                                        </p>
                                        <h3 className="text-white text-3xl font-bold tracking-tighter">
                                            {work.title}
                                        </h3>
                                    </div>

                                    {work.tag && <div className="absolute top-4 right-4 rounded-full backdrop-blur p-3 text-white bg-white/20 flex items-center gap-1">
                                        <IoIosSearch />
                                        <span>{work.tag}</span>
                                        <PiChartLineUp />
                                    </div>}

                                    {/* Hover Overlay for Mobile */}
                                    <AnimatePresence>
                                        {hoveredId === work.id && (
                                            <motion.div
                                                className="absolute inset-0 z-30 flex flex-col p-6 cursor-none"
                                                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                                                animate={{ clipPath: "circle(150% at 50% 50%)" }}
                                                exit={{ clipPath: "circle(0% at 50% 50%)" }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.4, 0, 0.2, 1],
                                                }}
                                                style={{ backgroundColor: work.hoverColor }}
                                            >
                                                <motion.div
                                                    className="pointer-events-none absolute z-[100] flex items-center justify-center w-16 h-16 rounded-full bg-[#b0f3e0] text-black"
                                                    style={{
                                                        left: mousePos.x,
                                                        top: mousePos.y,
                                                        translateX: "-50%",
                                                        translateY: "-50%",
                                                    }}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <RxArrowTopRight className="text-3xl" />
                                                </motion.div>
                                                <motion.h4
                                                    className="text-black text-5xl font-semibold tracking-tighter leading-tight"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                >
                                                    {work.hoverText}
                                                </motion.h4>
                                                {work.tag && <motion.div className="absolute bottom-4 right-4 rounded-full p-3 text-black bg-white/20 flex items-center gap-1">
                                                    <IoIosSearch />
                                                    <span>{work.tag}</span>
                                                    <PiChartLineUp />
                                                </motion.div>}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP CONTENT (Hidden on Mobile) */}
                    <div className="!hidden md:!grid w-full h-full grid-cols-2">
                        {/* LEFT COLUMN: Typography */}
                        <div className="relative h-full z-20 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[35vh] bg-gradient-to-b from-[#111212] via-[#111212]/80 to-transparent z-30 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#111212] via-[#111212]/80 to-transparent z-30 pointer-events-none" />
                            <motion.div
                                style={{ y: leftY }}
                                className="flex flex-col pt-[45vh] px-10"
                            >
                                {WORKS.map((work) => (
                                    <motion.div
                                        key={work.id}
                                        onMouseEnter={() => setHoveredId(work.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        whileHover={{ x: 20 }}
                                        className="group py-2 cursor-pointer flex items-start gap-3"
                                    >
                                        <h3 className="text-white md:text-4xl lg:text-[70px] font-medium leading-[0.9] tracking-tighter transition-all duration-500 ">
                                            {work.title}
                                        </h3>
                                        <span className="text-white md:text-[14px] mt-5 font-medium">
                                            {work.year}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: Images */}
                        <div className="h-full relative z-10 pr-10 overflow-hidden">
                            <motion.div
                                style={{ y: rightY }}
                                className="flex flex-col gap-10 pt-[5vh] pb-[2vh]"
                            >
                                {WORKS.map((work) => (
                                    <div
                                        key={`img-${work.id}`}
                                        className="w-full flex justify-center items-center"
                                        onMouseEnter={() => setHoveredId(work.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        onMouseMove={(e) =>
                                            handleMouseMove(
                                                e,
                                                e.currentTarget.getBoundingClientRect(),
                                            )
                                        }
                                    >
                                        <div className="relative w-full max-w-[800px] aspect-[16/11] overflow-hidden rounded-[20px] shadow-2xl ring-1 ring-white/10 bg-neutral-900 group cursor-none">
                                            <img
                                                src={work.img}
                                                alt="work"
                                                className="w-full h-full object-cover"
                                            />
                                            {work.tag && <div className="absolute bottom-4 right-4 rounded-full backdrop-blur p-3 text-white bg-white/20 flex items-center gap-1">
                                                <IoIosSearch />
                                                <span>{work.tag}</span>
                                                <PiChartLineUp />
                                            </div>}
                                            <AnimatePresence>
                                                {hoveredId === work.id && (
                                                    <motion.div
                                                        className="absolute inset-0 z-30 flex flex-col items-start justify-start p-12 text-left"
                                                        initial={{ clipPath: "circle(0% at 50% 100%)" }}
                                                        animate={{ clipPath: "circle(150% at 50% 100%)" }}
                                                        exit={{ clipPath: "circle(0% at 50% 100%)" }}
                                                        transition={{
                                                            duration: 0.8,
                                                            ease: [0.4, 0, 0.2, 1],
                                                        }}
                                                        style={{ backgroundColor: work.hoverColor }}
                                                    >
                                                        <motion.div
                                                            className="pointer-events-none absolute z-[100] flex items-center justify-center w-24 h-24 rounded-full bg-[#b0f3e0] text-black"
                                                            style={{
                                                                left: mousePos.x,
                                                                top: mousePos.y,
                                                                translateX: "-50%",
                                                                translateY: "-50%",
                                                            }}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            exit={{ scale: 0 }}
                                                        >
                                                            <RxArrowTopRight className="text-5xl" />
                                                        </motion.div>
                                                        <motion.h4
                                                            className="text-black text-5xl font-medium tracking-tighter"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                        >
                                                            {work.hoverText}
                                                        </motion.h4>
                                                        {work.tag && <motion.div className="absolute bottom-4 right-4 rounded-full p-3 text-black bg-white/20 flex items-center gap-1">
                                                            <IoIosSearch />
                                                            <span>{work.tag}</span>
                                                            <PiChartLineUp />
                                                        </motion.div>}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;