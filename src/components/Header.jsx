import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 bg-slate-900 border-b border-white/5 md:bg-transparent md:border-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-100 transition-colors">
          Sean Tyler
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
          <a href="/#case-studies" className="hidden md:block hover:text-white transition-colors">Case Studies</a>
          <a href="/#about" className="hidden md:block hover:text-white transition-colors">About</a>
          <Link to="/personal" className="px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all shadow-lg">
            Off The Clock
          </Link>
        </nav>
      </div>
    </header>
  );
}
