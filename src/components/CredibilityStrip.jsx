import React from 'react';
import { Target, Server, TrendingDown } from 'lucide-react';

export default function CredibilityStrip() {
  const items = [
    {
      icon: <Target className="w-8 h-8 text-blue-500 mb-4" />,
      title: "Core Focus",
      metrics: "Total Rewards Strategy | Systems Architecture | Vendor & Budget Optimization"
    },
    {
      icon: <Server className="w-8 h-8 text-blue-500 mb-4" />,
      title: "Platforms",
      metrics: "ADP Workforce Now | Flock | HSA & COBRA Systems"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-emerald-500 mb-4" />,
      title: "Impact",
      metrics: "$700k+ in optimized operational budgets."
    }
  ];

  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6 md:px-12 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 text-center md:text-left flex flex-col items-center md:items-start">
            {item.icon}
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">{item.title}</h3>
            <p className="text-slate-900 font-medium leading-snug">{item.metrics}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
