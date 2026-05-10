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

        // Split text into letters
        const originalText = text.innerText;
        text.innerHTML = originalText
            .split('')
            .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        const letterSpans = text.querySelectorAll('span');

        // Initial position - far right (off screen)
        gsap.set(text, { x: '155vw' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: 1.8,           // Very smooth
                invalidateOnRefresh: true,
            },
        });

        // Main horizontal movement: Right → Left
        tl.to(text, {
            x: '-100vw',
            ease: 'none',
        }, 0);

        // === Smooth Wavy Sine Animation ===
        letterSpans.forEach((span, i) => {
            const delay = i * 0.012; // Wave propagation speed

            gsap.to(span, {
                y: -35,                    // Wave height
                duration: 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: delay,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play pause resume pause',
                },
            });

            // Subtle rotation for more organic wave
            gsap.to(span, {
                rotation: 2.5,
                duration: 3.8,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: delay * 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                },
            });
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