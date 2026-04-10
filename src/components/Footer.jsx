import React from 'react';

export default function Footer() {
  return (
    <footer id="connect" className="bg-slate-950 text-slate-400 py-16 w-full mt-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's optimize your HR infrastructure.</h2>
        <a href="mailto:contact@seantyler.me" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors">
          Email Me
        </a>
        
        <div className="w-full h-px bg-slate-800 my-4" />
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Sean Tyler. All rights reserved.</p>
          <a href="https://linkedin.com/in/seantyler" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
