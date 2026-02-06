import React from 'react'


const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-100 px-4 bg-slate-50/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">K</div>
                    <span className="text-lg font-black text-slate-800 tracking-tighter">Katujuan.net</span>
                </div>
                <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
                    <a href="#" className="hover:text-emerald-600 transition-colors">Help</a>
                </div>
                <p className="text-slate-400 text-xs font-medium italic">© 2024 Katujuan.net. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    )
}

export default Footer