import React from 'react';
import { Camera, Map, Tent, MountainSnow, Compass } from 'lucide-react';

export default function Personal() {
  const images = [
    { title: "Alpine Hiking", color: "from-blue-400 to-emerald-400", h: "h-64", icon: <MountainSnow className="w-8 h-8 text-white/50" /> },
    { title: "Weekend Camping", color: "from-orange-400 to-amber-600", h: "h-96", icon: <Tent className="w-8 h-8 text-white/50" /> },
    { title: "Photography", color: "from-purple-500 to-pink-500", h: "h-80", icon: <Camera className="w-8 h-8 text-white/50" /> },
    { title: "Trail Mapping", color: "from-teal-400 to-cyan-500", h: "h-72", icon: <Map className="w-8 h-8 text-white/50" /> },
    { title: "Exploration", color: "from-indigo-500 to-blue-600", h: "h-80", icon: <Compass className="w-8 h-8 text-white/50" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="pt-40 pb-24 px-6 md:px-12 bg-slate-900 text-white shadow-xl relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Off The Clock</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            While my 9-to-5 is dedicated to optimizing HR infrastructure, the rest of my time is spent navigating trails, chasing horizons, and capturing the moments that matter.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Masonry-style abstract grid placeholders */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`w-full rounded-3xl bg-gradient-to-br ${img.color} ${img.h} flex flex-col items-center justify-center shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer overflow-hidden relative group`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              {img.icon}
              <span className="text-white/90 font-bold tracking-wide mt-4 drop-shadow-md">{img.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
