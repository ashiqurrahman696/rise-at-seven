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

        // Initial position: far right (off-screen)
        gsap.set(text, { x: '200vw' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1.2,           // Smooth scrubbing (feels premium)
                pin: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Animate from right → left as you scroll down
        tl.to(text, {
            x: '-90vw',           // Ends far left (off-screen)
            ease: 'none',
        });

        // Optional: Add slight scale/rotation for more drama
        // tl.to(text, { scale: 0.95, rotation: -2 }, 0);

        return () => {
            tl.kill();
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