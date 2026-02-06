"use client";
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'


const CTA = () => {
    const route = useRouter();
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto bg-emerald-950 rounded-[4rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative">Siap Bawa Toko Anda <br /> Ke Level Selanjutnya?</h2>
                <p className="text-emerald-200 mb-10 max-w-xl mx-auto font-medium relative italic opacity-80 text-sm">Bergabunglah dengan ribuan pengusaha lainnya hari ini juga.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                    <button onClick={() => route.replace('https://fe-ketujuan.vercel.app/auth/login')} className="bg-white text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                        Daftar Gratis <ChevronRight />
                    </button>
                </div>
            </div>
        </section >
    )
}

export default CTA