import { BarChart3, Bell, ShoppingBag } from 'lucide-react';
import React from 'react'

const Fitur = () => {
    const features = [
        {
            title: "Katalog Produk",
            description: "Kelola produk Anda dengan mudah. Tambahkan foto, deskripsi, dan varian hanya dalam hitungan detik.",
            icon: <ShoppingBag className="w-6 h-6 text-emerald-600" />,
        },
        {
            title: "Notifikasi Order",
            description: "Terima pesanan secara real-time melalui WhatsApp atau aplikasi. Jangan lewatkan satu pembeli pun.",
            icon: <Bell className="w-6 h-6 text-emerald-600" />,
        },
        {
            title: "Laporan Penjualan",
            description: "Pantau performa bisnis Anda dengan grafik intuitif. Pahami produk terlaris Anda dengan mudah.",
            icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
        }
    ];
    return (
        <section id="fitur" className="py-24 bg-slate-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Fitur Dahsyat Untuk Bisnis Anda</h2>
                    <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Fitur