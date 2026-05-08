'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const newsItems = [
    {
        id: 1,
        category: "News",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=1600&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=e49f66a9a3508223f02e24fd4fa242a7",
        author: "Carrie Rose",
        authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
        time: "2 mins",
        title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    },
    {
        id: 2,
        category: "Food/Hospitality/Drink",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1776098692&s=4d246e011936e8fd124105dd2af2e88e",
        author: "Ray Saddiq",
        authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
        time: "2 mins",
        title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    },
    {
        id: 3,
        category: "Food/Hospitality/Drink",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=1080&h=1350&q=100&auto=format&fit=crop&dm=1775034474&s=210ed78a74e52af8566a68c66f40d85a",
        author: "Carrie Rose",
        authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
        time: "2 mins",
        title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    },
];

export default function WhatsNew() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
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
        <section ref={sectionRef} id="news" className="bg-[#efeeec] py-20 text-black">
            <div className="max-w-screen-2xl mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-end mb-16">
                    <div className="flex items-center flex-wrap gap-6">
                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">What's</h2>
                        <div className="relative w-20 h-20 md:w-24 md:h-24 -mb-2 rounded-xl overflow-hidden border border-black/10">
                            <Image
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                                alt="Team Meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter">New</h2>
                    </div>
                    <a
                        href="#"
                        className="group hidden md:flex items-center gap-3 text-black bg-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition"
                    >
                        Explore More Thoughts
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className="news-card group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative h-72 w-full bg-gray-200 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:blur-[10px] transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-6 left-6 bg-transparent backdrop-blur-md text-xs text-white font-medium px-4 py-1.5 rounded-full shadow">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                                        <Image
                                            src={item.authorImage}
                                            alt={item.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{item.author}</p>
                                        <p className="text-xs text-gray-500">{item.time}</p>
                                    </div>
                                </div>

                                <h3 className="text-[21px] leading-tight font-semibold flex-1">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <a
                        href="#"
                        className="group flex justify-center items-center gap-3 text-black bg-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition"
                    >
                        Explore More Thoughts
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}