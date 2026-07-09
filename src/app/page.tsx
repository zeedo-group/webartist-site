"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const WORK = [
  { id: "e-commerce-rebrand", title: "Luxe E-Commerce", type: "E-commerce", color: "magenta" },
  { id: "saas-dashboard", title: "DataPulse Analytics", type: "SaaS", color: "cyan" },
  { id: "creative-portfolio", title: "Studio Noir", type: "Portfolio", color: "yellow" },
  { id: "booking-platform", title: "Stay Boutique", type: "Booking site", color: "violet" }
];

const SERVICES = [
  { title: "Brand Identity", desc: "Logo, typography, and visual systems that make you unforgettable." },
  { title: "UX/UI Design", desc: "Intuitive, accessible, and stunning interfaces that convert." },
  { title: "Web Development", desc: "Performant, scalable, and tailored front-end engineering." },
  { title: "Motion & Interaction", desc: "GSAP, WebGL, and Framer Motion wizardry to bring sites to life." },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "We dig deep into your goals, audience, and market context." },
  { num: "02", title: "Design", desc: "Wireframes to high-fidelity prototypes that define the look." },
  { num: "03", title: "Build", desc: "Pixel-perfect implementation with modern tech stacks." },
  { num: "04", title: "Launch", desc: "Rigorous testing, SEO setup, and a smooth deployment." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Headline stagger reveal
    gsap.fromTo(".hero-headline-word", 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power4.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section ref={heroRef} className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative pt-20">
        <div className="max-w-5xl relative z-10">
          <h1 className="font-unbounded text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 overflow-hidden">
            <span className="block overflow-hidden"><span className="hero-headline-word inline-block">Websites</span></span>
            <span className="block overflow-hidden"><span className="hero-headline-word inline-block">That Command</span></span>
            <span className="block overflow-hidden"><span className="hero-headline-word inline-block text-magenta">Attention.</span></span>
          </h1>
          
          <p className="font-hanken text-xl md:text-2xl text-charcoal/70 max-w-2xl mb-12 animate-fade-in [animation-delay:1s] opacity-0 fill-mode-forwards">
            We build custom, high-performance digital flagship stores for brands that refuse to blend in.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:1.2s] opacity-0 fill-mode-forwards">
            <Link href="/start-a-project">
              <Button variant="primary">Start a project</Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary">See the work</Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-6 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-charcoal/50 animate-fade-in [animation-delay:1.5s] opacity-0 fill-mode-forwards">
          <span className="block w-4 h-[1px] bg-charcoal/50" />
          Scroll to explore
        </div>
      </section>

      {/* 2. MARQUEE */}
      <section className="py-12 border-y border-charcoal/10 bg-canvas overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center px-8 font-unbounded text-2xl md:text-4xl font-bold text-charcoal/20 uppercase tracking-tighter">
              <span>Next.js</span>
              <span className="text-magenta">•</span>
              <span>Tailwind</span>
              <span className="text-cyan">•</span>
              <span>Framer Motion</span>
              <span className="text-yellow">•</span>
              <span>GSAP</span>
              <span className="text-violet">•</span>
              <span>TypeScript</span>
              <span className="text-magenta">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED WORK */}
      <section className="py-32 px-6 max-w-7xl mx-auto" id="work">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-unbounded text-4xl md:text-6xl font-bold">Selected Work</h2>
          <Link href="/work" className="font-mono text-sm uppercase tracking-widest text-charcoal hover:text-magenta transition-colors hidden md:block">View all →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {WORK.map((item, i) => (
            <Link 
              href={`/work/${item.id}`} 
              key={item.id}
              className={cn(
                "group block relative overflow-hidden rounded-xl bg-charcoal/5 aspect-square md:aspect-[4/5]",
                i % 2 !== 0 ? "md:mt-24" : ""
              )}
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
                <img src={`/images/portfolio-ecommerce.jpg`} alt={item.title} className="w-full h-full object-cover mix-blend-overlay opacity-50" />
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
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <Link href="/work" className="font-mono text-sm uppercase tracking-widest text-charcoal hover:text-magenta transition-colors">View all projects →</Link>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-32 px-6 bg-charcoal text-canvas" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 border border-canvas/20 rounded-xl hover:bg-canvas/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-canvas/10 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-magenta transition-all">
                  ✦
                </div>
                <h3 className="font-unbounded text-xl font-bold mb-4">{srv.title}</h3>
                <p className="font-hanken text-canvas/70">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section ref={processRef} className="py-32 px-6 max-w-7xl mx-auto" id="process">
        <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-24 text-center">Our Process</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-charcoal/10 md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-magenta origin-top md:-translate-x-1/2"
            style={{ scaleY: processProgress }}
          />

          <div className="flex flex-col gap-24">
            {PROCESS.map((step, i) => (
              <div key={i} className={cn("relative flex items-center gap-8 md:gap-16", i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row")}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-canvas border-4 border-magenta md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-charcoal rounded-full" />
                </div>
                <div className="pl-16 md:pl-0 md:w-1/2">
                  <div className="font-mono text-magenta text-xl mb-2">{step.num}</div>
                  <h3 className="font-unbounded text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-charcoal/70 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-32 px-6 bg-canvas border-y border-charcoal/10" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h2>
            <p className="font-hanken text-xl text-charcoal/70 max-w-2xl mx-auto">Investment levels that match the scale of your ambition.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-charcoal/10 bg-white">
              <h3 className="font-mono uppercase tracking-widest text-sm text-charcoal/50 mb-2">Starter</h3>
              <div className="font-unbounded text-4xl font-bold mb-6">From $5k</div>
              <ul className="space-y-4 mb-8 text-charcoal/80">
                <li className="flex gap-2"><span>✓</span> 1-3 Page Website</li>
                <li className="flex gap-2"><span>✓</span> Basic Animations</li>
                <li className="flex gap-2"><span>✓</span> Responsive Design</li>
                <li className="flex gap-2"><span>✓</span> 2 Weeks Delivery</li>
              </ul>
              <Link href="/start-a-project?tier=starter" className="block w-full">
                <Button variant="outline" className="w-full">Book Discovery Call</Button>
              </Link>
            </div>
            
            {/* Growth */}
            <div className="p-8 rounded-2xl border-2 border-magenta bg-white relative shadow-xl shadow-magenta/10 md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-magenta text-white font-mono text-xs uppercase tracking-widest py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="font-mono uppercase tracking-widest text-sm text-magenta mb-2">Growth</h3>
              <div className="font-unbounded text-4xl font-bold mb-6">From $12k</div>
              <ul className="space-y-4 mb-8 text-charcoal/80">
                <li className="flex gap-2"><span>✓</span> Custom Multi-Page Site</li>
                <li className="flex gap-2"><span>✓</span> CMS Integration</li>
                <li className="flex gap-2"><span>✓</span> Advanced GSAP Motion</li>
                <li className="flex gap-2"><span>✓</span> SEO Optimization</li>
              </ul>
              <Link href="/start-a-project?tier=growth" className="block w-full">
                <Button variant="primary" className="w-full">Book Discovery Call</Button>
              </Link>
            </div>

            {/* Studio */}
            <div className="p-8 rounded-2xl border border-charcoal/10 bg-white">
              <h3 className="font-mono uppercase tracking-widest text-sm text-charcoal/50 mb-2">Studio</h3>
              <div className="font-unbounded text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-charcoal/80">
                <li className="flex gap-2"><span>✓</span> E-Commerce & Web Apps</li>
                <li className="flex gap-2"><span>✓</span> Complex WebGL / 3D</li>
                <li className="flex gap-2"><span>✓</span> Full Brand Identity</li>
                <li className="flex gap-2"><span>✓</span> Ongoing Retainer Option</li>
              </ul>
              <Link href="/start-a-project?tier=studio" className="block w-full">
                <Button variant="outline" className="w-full">Book Discovery Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="font-unbounded text-5xl md:text-7xl font-bold mb-12 leading-[1.1]">
          Stop blending in.<br/>
          <span className="text-magenta">Start standing out.</span>
        </h2>
        <Link href="/start-a-project">
          <Button variant="primary" className="mx-auto text-lg px-12 py-6">Start a project</Button>
        </Link>
      </section>

    </div>
  );
}
