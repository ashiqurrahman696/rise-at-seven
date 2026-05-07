'use client';
import { useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import Logo from './Logo';

const navLinks = [
    { label: 'Services', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'International', hasDropdown: true },
    { label: 'About', hasDropdown: true },
    { label: 'Work', hasDropdown: false },
    { label: 'Careers', hasDropdown: false },
    { label: 'Blog', hasDropdown: false },
    { label: 'Webinar', hasDropdown: false },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <Link href="/" className="h-5">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                        >
                            <button
                                onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                                className="flex items-center gap-1 hover:text-white/70 transition py-2"
                            >
                                {item.label}
                                {item.hasDropdown && <span className="text-xs">＋</span>}
                            </button>

                            {/* Dropdown Menu */}
                            {item.hasDropdown && activeDropdown === item.label && (
                                <div className="absolute top-full left-0 pt-4 w-64">
                                    <div className="bg-zinc-950 border border-white/10 rounded-2xl py-6 px-6 shadow-2xl">
                                        {/* Example dropdown content - customize per link */}
                                        {item.label === 'Services' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block hover:text-white">Search & Growth Strategy</a>
                                                <a href="#" className="block hover:text-white">Onsite SEO</a>
                                                <a href="#" className="block hover:text-white">Content Experience</a>
                                                <a href="#" className="block hover:text-white">B2B Marketing</a>
                                                <a href="#" className="block hover:text-white">Digital PR</a>
                                                <a href="#" className="block hover:text-white">Social Media & Campaigns</a>
                                                <a href="#" className="block hover:text-white">Data & Insights</a>
                                                <a href="#" className="block hover:text-white">Social SEO/Search</a>
                                            </div>
                                        )}

                                        {item.label === 'Industries' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block hover:text-white">B2B Marketing</a>
                                            </div>
                                        )}

                                        {item.label === 'International' && (
                                            <div className="space-y-3 text-sm">
                                                <a href="#" className="block hover:text-white">US Digital PR</a>
                                                <a href="#" className="block hover:text-white">Spain Digital PR</a>
                                                <a href="#" className="block hover:text-white">Germany Digital PR</a>
                                                <a href="#" className="block hover:text-white">Netherlands Digital PR</a>
                                            </div>
                                        )}

                                        {item.label === 'About' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block hover:text-white">About Us</a>
                                                <a href="#" className="block hover:text-white">Meet The Risers</a>
                                                <a href="#" className="block hover:text-white">Culture</a>
                                                <a href="#" className="block hover:text-white">Testimonials</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="#"
                    className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition"
                >
                    Get In Touch
                    <span>→</span>
                </a>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-xl"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-black border-t border-white/10 py-8 px-8">
                    <div className="flex flex-col gap-6 text-lg">
                        {navLinks.map((item) => (
                            <a key={item.label} href="#" className="hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}