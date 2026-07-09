"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-canvas pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="md:col-span-2">
          <h2 className="font-unbounded text-4xl md:text-6xl mb-6">Let's build<br/>something bold.</h2>
          <Link 
            href="/start-a-project" 
            className="inline-flex items-center gap-2 font-mono uppercase tracking-widest text-magenta hover:text-cyan transition-colors"
          >
            Start a project <span className="text-xl">→</span>
          </Link>
        </div>
        
        <div className="flex flex-col gap-4 font-mono text-sm tracking-wider uppercase text-canvas/60">
          <h3 className="text-canvas font-bold mb-2">Connect</h3>
          <a href="#" className="hover:text-magenta transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-cyan transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-yellow transition-colors">Instagram</a>
          <a href="#" className="hover:text-violet transition-colors">Dribbble</a>
        </div>
        
        <div className="flex flex-col gap-4 font-mono text-sm tracking-wider uppercase text-canvas/60">
          <h3 className="text-canvas font-bold mb-2">Studio</h3>
          <Link href="/work" className="hover:text-magenta transition-colors">Work</Link>
          <Link href="/about" className="hover:text-cyan transition-colors">About</Link>
          <Link href="/start-a-project" className="hover:text-yellow transition-colors">Contact</Link>
          <a href="mailto:hello@webartist.studio" className="hover:text-violet transition-colors normal-case tracking-normal">hello@webartist.studio</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-canvas/10 font-mono text-xs text-canvas/40 tracking-widest uppercase">
        <p>© {new Date().getFullYear()} WebArtist Studio</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-canvas transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-canvas transition-colors">Terms</Link>
        </div>
      </div>
      
      {/* Abstract fading paint elements for footer background */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-magenta/20 blur-[120px] rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan/10 blur-[150px] rounded-full -translate-y-1/4 -translate-x-1/4 pointer-events-none" />
    </footer>
  );
}
