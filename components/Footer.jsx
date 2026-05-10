'use client';

import { useState } from 'react';
import Logo from './Logo';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { LuArrowRight } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import { RxArrowTopRight } from "react-icons/rx";

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! You'll be added to the Rise newsletter.");
        setEmail('');
    };

    const socialIcons = [
        {
            id: 1,
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/riseatseven",
        },
        {
            id: 2,
            icon: <FaXTwitter />,
            link: "https://x.com/riseatseven",
        },
        {
            id: 3,
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/company/riseatseven/",
        },
        {
            id: 4,
            icon: <FaYoutube />,
            link: "https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw",
        },
        {
            id: 5,
            icon: <FaTiktok />,
            link: "https://www.tiktok.com/@riseatseven",
        },
        {
            id: 6,
            icon: <FaInstagram />,
            link: "https://www.instagram.com/riseatseven/",
        },
    ];

    return (
        <footer className="p-2">
            <div className="bg-[#111212] text-white py-12 rounded-3xl">
                <div className="max-w-screen-2xl mx-auto px-8">
                    {/* Newsletter + Links */}
                    <div className="grid lg:grid-cols-12 gap-y-16">
                        {/* Newsletter */}
                        <div className="lg:col-span-5">
                            <h3 className="text-2xl font-semibold mb-4">Stay updated with Rise news</h3>

                            <form onSubmit={handleSubmit} className="relative w-full lg:w-[300px] mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email Address"
                                    className="w-full bg-neutral-800 rounded-full py-4 px-6 text-white placeholder:text-white/40 focus:outline-none text-xl font-medium"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#b2f6e3] hover:bg-white text-black rounded-full flex items-center justify-center transition-all hover:rotate-90"
                                >
                                    <RxArrowTopRight />
                                </button>
                            </form>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {socialIcons.map((icon) => (
                                    <a
                                        key={icon.id}
                                        href={icon.link}
                                        className="bg-white text-black rounded-full flex items-center justify-center text-sm p-1 transition-all hover:rounded"
                                    >
                                        {icon.icon} <RxArrowTopRight />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                            {/* Column 1 */}
                            <div>
                                <ul className="text-2xl font-semibold border-l pl-2 border-white/10">
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Services</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Work</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">About</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Culture</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Meet The Risers</a></li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <ul className="text-2xl font-semibold border-l pl-2 border-white/10">
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Testimonials</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Blog & Resources</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Webinars</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Careers</a></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                                <ul className="text-2xl font-semibold border-l pl-2 border-white/10">
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Sheffield</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">Manchester</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">London</a></li>
                                    <li><a href="#" className="hover:text-[#b0f3e0] transition">New York</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Big Logo */}
                    <div className="mt-24 mb-12">
                        <div className="h-[12vw]">
                            <Logo />
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="text-[10px] flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div className="flex flex-wrap gap-x-3 gap-y-2">
                            <span>© {new Date().getFullYear()} Rise at Seven Ltd. All rights reserved.</span>
                            <GoDotFill />
                            <span>Company Number 11955187</span>
                            <GoDotFill />
                            <span>VAT Registered GB 322402945</span>
                            <GoDotFill />
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <GoDotFill />
                            <a href="#" className="hover:text-white transition">Terms &amp; conditions</a>
                        </div>

                        <div className="text-[10px]">Website Made By Shape</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}