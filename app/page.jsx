'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Footer from '@/components/Footer';
import LegacyInTheMaking from '@/components/LegacyInTheMaking';
import TheAgencyBehind from '@/components/TheAgencyBehind';
import DrivingDemand from '@/components/DrivingDemand';
import Services from '@/components/Services';
import WhatsNew from '@/components/WhatsNew';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value, { immediate: true });
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TheAgencyBehind />
      <DrivingDemand />
      <FeaturedWork />
      <Services />
      <LegacyInTheMaking />
      <WhatsNew />
      <Footer />
    </>
  );
}