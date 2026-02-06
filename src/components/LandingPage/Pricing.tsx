import { CheckCircle2 } from 'lucide-react';
import React from 'react'


const Pricing = () => {


    const pricing = [
        {
            name: "Pemula",
            price: "0",
            features: ["50 Produk", "Notifikasi WhatsApp", "Katalog Standar", "Domain katujuan.net/toko"],
            cta: "Mulai Gratis",
            popular: false
        },
        {
            name: "UMKM Juara",
            price: "149rb",
            features: ["Produk Tanpa Batas", "Laporan Penjualan Detail", "Katalog Custom", "Prioritas Support", "Custom Domain"],
            cta: "Pilih Paket",
            popular: true
        },
        {
            name: "Bisnis",
            price: "299rb",
            features: ["Semua Fitur Juara", "Multi-Admin", "Integrasi Pengiriman", "Eksport Data Excel"],
            cta: "Hubungi Kami",
            popular: false
        }
    ];

    return (
        <section id="harga" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Harga Jujur Untuk UMKM</h2>
                    <p className="text-slate-500 font-medium">Investasi terbaik untuk pertumbuhan toko online Anda.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricing.map((plan, idx) => (
                        <div key={idx} className={`relative p-10 rounded-[3rem] border ${plan.popular ? 'border-emerald-600 shadow-2xl shadow-emerald-100' : 'border-slate-100 shadow-sm'} flex flex-col`}>
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                                    Paling Populer
                                </div>
                            )}
                            <div className="mb-8">
                                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-slate-400 font-medium">Rp</span>
                                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                                    <span className="text-slate-400">/bulan</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing