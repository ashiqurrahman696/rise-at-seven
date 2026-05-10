'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RiseAtSevenText() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;

        if (!section || !text) return;

        // Split text into letters for zigzag control
        const letters = text.innerText.split('');
        text.innerHTML = letters
            .map((char, i) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        const letterSpans = text.querySelectorAll('span');

        // Initial position - far right
        gsap.set(text, { x: '80vw' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                end: 'bottom 25%',
                scrub: 1.5,
                invalidateOnRefresh: true,
            },
        });

        // Main horizontal slide (right → left)
        tl.to(text, {
            x: '-95vw',
            ease: 'none',
            duration: 1,
        }, 0);

        // Zigzag wave animation on letters
        letterSpans.forEach((span, i) => {
            gsap.to(span, {
                y: i % 2 === 0 ? -25 : 25,        // Alternate up/down
                rotation: i % 3 === 0 ? -4 : 4,   // Slight rotation for zigzag feel
                ease: 'sine.inOut',
                duration: 1.8,
                delay: i * 0.02,
                yoyo: true,
                repeat: -1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play pause resume pause',
                },
            });
        });

        // Optional subtle scale pulse
        gsap.to(letterSpans, {
            scale: 1.03,
            stagger: 0.03,
            duration: 2.2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: section,
                scrub: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative pt-10 pb-0 flex items-center justify-center overflow-hidden"
        >
            <div
                ref={textRef}
                className="font-bold tracking-[-0.04em] whitespace-nowrap text-[11em]"
            >
                Ready to Rise at Seven?
            </div>
        </section>
    );
}