'use client';

import { useState } from 'react';
import Logo from './Logo';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! You'll be added to the Rise newsletter.");
        setEmail('');
    };

    return (
        <footer className="bg-black text-white/80 pt-20 pb-12">
            <div className="max-w-screen-2xl mx-auto px-8">
                {/* Newsletter + Links */}
                <div className="grid md:grid-cols-12 gap-y-16">
                    {/* Newsletter */}
                    <div className="md:col-span-5">
                        <h3 className="text-2xl font-semibold mb-6">Stay updated with Rise news</h3>

                        <form onSubmit={handleSubmit} className="relative max-w-md mb-8">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address"
                                className="w-full bg-zinc-900 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#a3f7a3] hover:bg-[#8ff58f] text-black rounded-full flex items-center justify-center transition-all active:scale-95"
                            >
                                →
                            </button>
                        </form>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {['f', '𝕏', 'in', '▶', '♪', '📷'].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 border border-white/20 hover:border-white/50 rounded-full flex items-center justify-center text-sm transition hover:bg-white/5"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Column 1 */}
                        <div>
                            <div className="uppercase text-xs tracking-widest mb-6 text-white">Services</div>
                            <ul className="space-y-3 text-[15px]">
                                <li><a href="#" className="hover:text-white transition">Work</a></li>
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white transition">Culture</a></li>
                                <li><a href="#" className="hover:text-white transition">Meet The Risers</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <div className="uppercase text-xs tracking-widest mb-6 text-white">Company</div>
                            <ul className="space-y-3 text-[15px]">
                                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
                                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <div className="uppercase text-xs tracking-widest mb-6 text-white">Offices</div>
                            <ul className="space-y-3 text-[15px]">
                                <li>Sheffield</li>
                                <li>Manchester</li>
                                <li>London</li>
                                <li>New York</li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Big Logo */}
                <div className="mt-24 mb-12">
                    <div className="h-[11vw]">
                        <Logo />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-white/60">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <span>© {new Date().getFullYear()} Rise at Seven Ltd. All rights reserved.</span>
                        <span>Company Number 11955187</span>
                        <span>VAT Registered GB 322402945</span>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms &amp; conditions</a>
                    </div>

                    <div className="text-white/40 text-[10px]">Website Made By Shape</div>
                </div>
            </div>
        </footer>
    );
}