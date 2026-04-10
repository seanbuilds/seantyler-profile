import React from 'react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center md:text-left shadow-2xl flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Bridging HR & The Bottom Line</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I am an HR Operations and Total Rewards leader specializing in complex, multi-system environments. My work centers on the belief that HR systems should not just serve employees—they should drive financial and operational efficiency for the business.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            From leading ADP implementations to auditing vendor contracts to save hundreds of thousands of dollars, I bridge the gap between human resources and the company's bottom line. I don't just run HR processes; I build the infrastructure that ensures they never break in the first place.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          {/* Aesthetic geometric shape / placeholder for a headshot */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-90 shadow-2xl shadow-blue-500/20 blur-sm mix-blend-screen relative"></div>
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-800 border-4 border-slate-700/50 flex items-center justify-center text-slate-500 font-medium tracking-wide">
            [ Photo Placeholder ]
          </div>
        </div>
      </div>
    </section>
  );
}
