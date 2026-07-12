"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/95 backdrop-blur border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-unbounded text-xl font-bold text-charcoal hover:text-magenta transition-colors">
          WebArtist
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/#work" className="font-mono text-sm uppercase tracking-widest text-charcoal hover:text-magenta transition-colors">
            Work
          </Link>
          <Link href="/about" className="font-mono text-sm uppercase tracking-widest text-charcoal hover:text-magenta transition-colors">
            About
          </Link>
          <Link href="/#services" className="font-mono text-sm uppercase tracking-widest text-charcoal hover:text-magenta transition-colors">
            Services
          </Link>
          <Link href="/start-a-project">
            <Button variant="primary">Start Project</Button>
          </Link>
        </div>
        
        <button className="md:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 p-6 border-t border-charcoal/10">
          <Link href="/#work" className="text-charcoal hover:text-magenta">Work</Link>
          <Link href="/about" className="text-charcoal hover:text-magenta">About</Link>
          <Link href="/#services" className="text-charcoal hover:text-magenta">Services</Link>
          <Link href="/start-a-project" className="block">
            <Button variant="primary" className="w-full">Start Project</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}