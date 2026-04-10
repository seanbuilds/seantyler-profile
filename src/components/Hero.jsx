import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-slate-900 text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full text-center md:text-left flex flex-col items-center md:items-start">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
            Sean Tyler
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-emerald-400 mb-6">
            Director of Total Rewards & HR Operations
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Helping organizations reduce operational risk, modernize HR tech infrastructure, and optimize benefits strategy to drive human capital ROI and financial efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <a href="#case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
              View Case Studies
              <ArrowRight size={18} />
            </a>
            <a href="#connect" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-700 hover:text-white transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
