"use client";
import { Menu, X, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const route = useRouter();
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        {/* <div className="w-10 h-10 bg-[var(--primary-color)] rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                            <Zap className="text-white w-6 h-6" fill="white" />
                        </div> */}
                        {/* <span className="text-2xl font-black text-[var(--primary-color)] tracking-tight tracking-tighter">Katujuan<span className="text-[var(--secondary-color)]">.net</span></span> */}

                        <img src={'/ketujuan.png'} className='w-40' />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <a href="#fitur" className="text-sm font-semibold text-slate-600 hover:text-[var(--primary-color)] transition-colors">Fitur</a>
                        <a href="#harga" className="text-sm font-semibold text-slate-600 hover:text-[var(--primary-color)] transition-colors">Harga</a>
                        <a href="#tentang" className="text-sm font-semibold text-slate-600 hover:text-[var(--primary-color)] transition-colors">Tentang</a>
                        <div className="h-6 w-px bg-slate-200"></div>
                        <button className="text-sm font-bold text-slate-800 hover:text-[var(--primary-color)]" onClick={() => route.replace('https://fe-ketujuan.vercel.app/auth/login')}>Masuk</button>
                        <button className="bg-[var(--primary-color)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#3D68A8] shadow-md shadow-[#2C5294] transition-all active:scale-95" onClick={() => route.replace('https://fe-ketujuan.vercel.app/auth/register')}>
                            Daftar Sekarang
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4 animate-in slide-in-from-top-5">
                    <a href="#fitur" className="block text-lg font-bold text-slate-800">Fitur</a>
                    <a href="#harga" className="block text-lg font-bold text-slate-800">Harga</a>
                    <button className="w-full text-center py-3 font-bold text-slate-800 border border-slate-200 rounded-xl">Masuk</button>
                    <button className="w-full bg-[var(--primary-color)] text-white py-3 font-bold rounded-xl">Mulai Gratis</button>
                </div>
            )}
        </nav>
    )
}

export default Navigation