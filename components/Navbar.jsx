'use client';
import { useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { LuCircleChevronDown, LuCircleChevronUp } from 'react-icons/lu';
import { FaBars, FaPlus, FaXmark } from 'react-icons/fa6';
import Logo from './Logo';
import { transformValue } from 'framer-motion';
import { RxArrowTopRight } from 'react-icons/rx';

const navLinks = [
    { label: 'Services', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'International', hasDropdown: true },
    { label: 'About', hasDropdown: true },
    { label: 'Work', hasDropdown: false },
    { label: 'Careers', hasDropdown: false },
    { label: 'Blog & Resources', hasDropdown: true },
    { label: 'Webinar', hasDropdown: false },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const toggleDesktopDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const toggleMobileDropdown = (label) => {
        setMobileDropdown(mobileDropdown === label ? null : label);
    };

    return (
        <nav className="text-white z-10 w-full">
            <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <Link href="/" className="h-5">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center text-sm font-medium">
                    {navLinks.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                        >
                            <button
                                onClick={() => item.hasDropdown && toggleDesktopDropdown(item.label)}
                                className="flex items-center gap-1 hover:bg-white hover:text-black transition py-2 px-4 rounded-full"
                            >
                                {item.label}
                                {item.hasDropdown && <FaPlus />}
                            </button>

                            {/* Desktop Dropdown */}
                            {item.hasDropdown && activeDropdown === item.label && (
                                <div className="absolute top-full left-0 pt-4 w-64 z-50">
                                    <div className="bg-white text-black rounded-2xl py-6 px-6 shadow-2xl">
                                        {item.label === 'Services' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block">Search & Growth Strategy</a>
                                                <a href="#" className="block">Onsite SEO</a>
                                                <a href="#" className="block">Content Experience</a>
                                                <a href="#" className="block">B2B Marketing</a>
                                                <a href="#" className="block">Digital PR</a>
                                                <a href="#" className="block">Social Media & Campaigns</a>
                                                <a href="#" className="block">Data & Insights</a>
                                                <a href="#" className="block">Social SEO/Search</a>
                                            </div>
                                        )}

                                        {item.label === 'Industries' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block">B2B Marketing</a>
                                            </div>
                                        )}

                                        {item.label === 'International' && (
                                            <div className="space-y-3 text-sm">
                                                <a href="#" className="block">US Digital PR</a>
                                                <a href="#" className="block">Spain Digital PR</a>
                                                <a href="#" className="block">Germany Digital PR</a>
                                                <a href="#" className="block">Netherlands Digital PR</a>
                                            </div>
                                        )}

                                        {item.label === 'About' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block">About Us</a>
                                                <a href="#" className="block">Meet The Risers</a>
                                                <a href="#" className="block">Culture</a>
                                                <a href="#" className="block">Testimonials</a>
                                            </div>
                                        )}

                                        {item.label === 'Blog & Resources' && (
                                            <div className="space-y-4 text-sm">
                                                <a href="#" className="block">Blog</a>
                                                <a href="#" className="block">Category Leaderboard</a>
                                                <a href="#" className="block">Multi-Channel Search Report</a>
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
                    className="hidden lg:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition"
                >
                    <span>Get In Touch</span>
                    <RxArrowTopRight />
                </a>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="lg:hidden text-2xl"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu with Dropdowns */}
            {mobileMenuOpen && (
                <div className="p-2 fixed lg:hidden inset-0 z-200  backdrop-blur-2xl">
                    <div className="flex flex-col justify-between gap-6 lg:hidden bg-black/80 p-8 rounded-3xl h-full overflow-y-auto">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <Link href="/" className="h-5">
                                    <Logo />
                                </Link>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl"
                                >
                                    <FaXmark />
                                </button>
                            </div>
                            <div className="flex flex-col gap-1 text-lg">
                                {navLinks.map((item) => (
                                    <div key={item.label}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleMobileDropdown(item.label)}
                                                    className="flex items-center text-2xl font-bold justify-between w-full transition"
                                                >
                                                    {item.label}
                                                    <span className="text-xl">{mobileDropdown === item.label ? <LuCircleChevronUp /> : <LuCircleChevronDown />}</span>
                                                </button>

                                                {/* Mobile Dropdown Content */}
                                                {mobileDropdown === item.label && (
                                                    <div className="my-4 space-y-1 text-base">
                                                        {item.label === 'Services' && (
                                                            <>
                                                                <a href="#" className="block">Search & Growth Strategy</a>
                                                                <a href="#" className="block">Onsite SEO</a>
                                                                <a href="#" className="block">Content Experience</a>
                                                                <a href="#" className="block">B2B Marketing</a>
                                                                <a href="#" className="block">Digital PR</a>
                                                                <a href="#" className="block">Social Media & Campaigns</a>
                                                                <a href="#" className="block">Data & Insights</a>
                                                                <a href="#" className="block">Social SEO/Search</a>
                                                            </>
                                                        )}
                                                        {item.label === 'Industries' && (
                                                            <>
                                                                <a href="#" className="block ">B2B Marketing</a>
                                                            </>
                                                        )}
                                                        {item.label === 'International' && (
                                                            <>
                                                                <a href="#" className="block">US Digital PR</a>
                                                                <a href="#" className="block">Spain Digital PR</a>
                                                                <a href="#" className="block">Germany Digital PR</a>
                                                                <a href="#" className="block">Netherlands Digital PR</a>
                                                            </>
                                                        )}
                                                        {item.label === 'About' && (
                                                            <>
                                                                <a href="#" className="block">About Us</a>
                                                                <a href="#" className="block">Meet The Risers</a>
                                                                <a href="#" className="block">Culture</a>
                                                                <a href="#" className="block">Testimonials</a>
                                                            </>
                                                        )}
                                                        {item.label === 'Blog & Resources' && (
                                                            <>
                                                                <a href="#" className="block">Blog</a>
                                                                <a href="#" className="block">Category Leaderboard</a>
                                                                <a href="#" className="block">Multi-Channel Search Report</a>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <a href="#" className="font-bold text-2xl">
                                                {item.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* CTA Button */}
                        <a
                            href="#"
                            className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition"
                        >
                            <span>Get In Touch</span>
                            <RxArrowTopRight />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}