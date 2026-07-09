"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-canvas pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <Link href="/" className="font-unbounded font-bold text-xl tracking-tight">
          WebArtist
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-[0.2em]">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "group relative py-2",
                pathname === link.href ? "text-magenta" : "text-canvas/80 hover:text-canvas transition-colors"
              )}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-magenta scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>
        
        <Link href="/start-a-project" className="pointer-events-auto">
          <Button variant="outline" className="text-canvas border-canvas hover:text-canvas hover:border-magenta py-3 px-6 text-xs mix-blend-normal">
            Start a project
          </Button>
        </Link>
      </div>
    </header>
  );
}
