"use client";
import { ArrowRight, ShieldCheck, Smartphone } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Hero = () => {
    const route = useRouter();
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-emerald-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
                    <ShieldCheck size={14} /> Solusi No.1 UMKM Indonesia
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                    Bikin Toko Online <br />
                    <span className="text-emerald-600">Enggak Pake Ribet.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                    Katujuan membantu UMKM mengelola pesanan, katalog, dan laporan penjualan dalam satu platform SaaS yang ringan dan cepat. Fokus jualan, biar kami yang urus sistemnya.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => route.replace('https://fe-ketujuan.vercel.app/login')} className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                        Mulai Gratis <ArrowRight size={20} />
                    </button>
                    <button className="w-full sm:w-auto bg-white text-slate-800 px-10 py-5 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <Smartphone size={20} className="text-emerald-600" /> Lihat Demo
                    </button>
                </div>

                {/* Social Proof */}
                <div className="mt-16 pt-10 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Dipercaya oleh 10,000+ UMKM</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
                        <div className="text-2xl font-bold">KEDAIPOKO</div>
                        <div className="text-2xl font-bold">WARUNGPINTAR</div>
                        <div className="text-2xl font-bold">TOKOHATTA</div>
                        <div className="text-2xl font-bold">UMKMBISA</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero