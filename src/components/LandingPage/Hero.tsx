"use client";
import { HeroType } from '@/types/HeroType';
import { Get } from '@/utils/Get';
import { ArrowRight, ShieldCheck, Smartphone } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const route = useRouter();
    const [hero, setHero] = useState<HeroType | null>();
    useEffect(() => {
        getHero()
    }, []);

    const getHero = async () => {
        try {
            const res = await Get<{ status: boolean; data: HeroType; }>(
                `/hero-sections/active`
            );

            if (res?.status) {
                setHero(res?.data)
            }
        } catch (err: any) {
        }
    }
    return (
        hero &&
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--primary-color)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
                    <ShieldCheck size={14} /> {hero?.badge_text}
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                    {hero?.title_line_1} <br />
                    <span className="text-[var(--primary-color)]">{hero?.title_line_2}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                    {hero?.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => route.replace(hero?.primary_button_url)} className="w-full sm:w-auto bg-[var(--primary-color)] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[var(--secondary-color)] shadow-xl shadow-[var(--secondary-color)] flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                        {hero?.primary_button_text}<ArrowRight size={20} />
                    </button>
                    {
                        hero?.secondary_button_text &&
                        <button className="w-full sm:w-auto bg-white text-slate-800 px-10 py-5 rounded-2xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <Smartphone size={20} className="text-[var(--primary-color)]" /> {hero?.secondary_button_text}
                        </button>
                    }
                </div>

                {/* Social Proof */}
                <div className="mt-16 pt-10 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">{hero?.social_proof_text}</p>
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