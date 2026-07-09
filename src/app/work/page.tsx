"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ALL_WORK = [
  { id: "luxe-ecommerce", title: "Luxe Jewels", type: "E-Commerce", category: "ecommerce", color: "magenta", img: "portfolio-ecommerce.jpg" },
  { id: "datapulse-saas", title: "DataPulse", type: "SaaS", category: "saas", color: "cyan", img: "portfolio-saas.jpg" },
  { id: "ember-kitchen", title: "Ember Kitchen", type: "Booking site", category: "booking", color: "yellow", img: "portfolio-restaurant.jpg" },
  { id: "vitalfit-app", title: "VitalFit", type: "Portfolio", category: "portfolio", color: "violet", img: "portfolio-fitness.jpg" },
  { id: "artisan-market", title: "Artisan Market", type: "E-Commerce", category: "ecommerce", color: "magenta", img: "portfolio-ecommerce.jpg" },
  { id: "cloudvault-saas", title: "CloudVault", type: "SaaS", category: "saas", color: "cyan", img: "portfolio-saas.jpg" },
  { id: "noir-studio", title: "Noir Studio", type: "Portfolio", category: "portfolio", color: "yellow", img: "portfolio-fitness.jpg" },
  { id: "zenith-labs", title: "Zenith Labs", type: "Booking site", category: "booking", color: "violet", img: "portfolio-restaurant.jpg" },
];

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "SaaS", value: "saas" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Booking site", value: "booking" },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState("all");

  const filteredWork = ALL_WORK.filter((item) => filter === "all" || item.category === filter);

  return (
    <div className="w-full min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <h1 className="font-unbounded text-5xl md:text-8xl font-bold mb-12 tracking-tighter">Our Work</h1>
        
        <div className="flex flex-wrap gap-4 font-mono text-sm uppercase tracking-widest">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300",
                filter === f.value 
                  ? "bg-charcoal text-canvas" 
                  : "bg-charcoal/5 text-charcoal hover:bg-charcoal/10"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredWork.map((item, i) => (
            <motion.div
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
            >
              <Link 
                href={`/work/${item.id}`} 
                className="group block relative overflow-hidden rounded-xl bg-charcoal/5 aspect-square"
              >
                {/* Paint Splash Hover Reveal */}
                <div className={cn(
                  "absolute inset-0 z-10 scale-0 group-hover:scale-150 transition-transform duration-700 ease-in-out origin-center rounded-full mix-blend-multiply opacity-80",
                  item.color === "magenta" && "bg-magenta",
                  item.color === "cyan" && "bg-cyan",
                  item.color === "yellow" && "bg-yellow",
                  item.color === "violet" && "bg-violet"
                )} />
                
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-charcoal/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={`/images/${item.img}`} alt={item.title} className="w-full h-full object-cover mix-blend-overlay opacity-50" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  <div className="flex justify-end">
                    <span className="font-mono text-xs uppercase tracking-widest bg-canvas text-charcoal px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-unbounded text-2xl md:text-3xl font-bold text-canvas group-hover:text-white transition-colors">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
