import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: "Overhauling Total Rewards & Driving P&L Efficiency",
      challenge: "The organization was operating with fragmented HR systems, outdated SOPs, and bloated vendor contracts silently draining the HR budget. They required an immediate operational overhaul to stabilize the Benefits and Compensation function.",
      approach: [
        "Financial Audit: Conducted a rigorous audit of all vendor relationships and broker agreements to identify cost-leakage.",
        "Systems Overhaul: Architected and launched a full ADP implementation for 200+ employees (500+ members), while sourcing and deploying new COBRA and HSA vendors.",
        "Process Standardization: Rewrote all HR SOPs and the core Employee Manual from scratch to eliminate compliance risks."
      ],
      outcome: "Secured $700,000 in annualized savings by aggressively renegotiating broker commissions from 8% to 0% (Year 1). Successfully delivered two flawless Open Enrollment cycles and established a fully compliant, scalable HR infrastructure."
    },
    {
      title: "Strategic Compensation Overhaul & Market-Pricing Alignment",
      challenge: "The organization struggled with talent retention and pay inequities due to outdated, ad-hoc compensation models and a lack of formalized salary benchmarking.",
      approach: [
        "Market Analysis: Conducted a comprehensive market-pricing audit across all departments, leveraging industry benchmarks to establish competitive salary bands.",
        "Equity Design: Designed and implemented a structured merit cycle and bonus framework tied directly to performance metrics and P&L targets."
      ],
      outcome: "Corrected historical pay inequities, established a transparent compensation philosophy, and significantly improved talent retention while keeping overall labor costs within the targeted financial models."
    }
  ];

  return (
    <section id="case-studies" className="scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h2>
        <p className="text-lg text-slate-600 max-w-2xl">Proven operational results prioritizing systemic efficiency, cost reduction, and scalability.</p>
      </div>

      <div className="flex flex-col gap-12">
        {cases.map((cs, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="text-blue-600" />
              {cs.title}
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">The Challenge</h4>
                <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">The Approach</h4>
                <ul className="space-y-4">
                  {cs.approach.map((bullet, i) => {
                    const [bold, ...rest] = bullet.split(':');
                    return (
                      <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                        <span><strong className="text-slate-900">{bold}:</strong>{rest.join(':')}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-emerald-500">
                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">The Outcome</h4>
                <p className="text-slate-900 font-medium">{cs.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
