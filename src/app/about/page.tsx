import { Button } from "@/components/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
        <div>
          <h1 className="font-unbounded text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">
            We don't do <br/><span className="text-magenta">templates.</span>
          </h1>
          <div className="space-y-6 font-hanken text-xl text-charcoal/80 leading-relaxed">
            <p>
              Hi. I started WebArtist because I was tired of seeing the same five layouts regurgitated across the internet. I believe that a website should be a digital flagship—a memorable experience that leaves a lasting impression, not just a digital brochure.
            </p>
            <p>
              We're a small, highly specialized team of designers and creative developers. We intentionally take on fewer projects so we can sweat the details. The micro-interactions, the typography scaling, the precise easing curves—that's the stuff we care about.
            </p>
            <p>
              When you work with us, you're not getting handed off to a junior account manager. You're working directly with the people building your site.
            </p>
          </div>
        </div>
        <div className="relative aspect-square bg-charcoal/5 rounded-3xl overflow-hidden flex items-center justify-center p-8">
          {/* Decorative CSS workspace/photo alternative since we have no photo */}
          <div className="relative w-full h-full max-w-md max-h-md">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-magenta rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-8 border border-charcoal/10 rounded-2xl bg-canvas/40 backdrop-blur-sm p-8 flex flex-col justify-end">
              <div className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Studio 01</div>
              <div className="font-unbounded text-2xl font-bold">Where the magic happens.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 border-y border-charcoal/10">
        <h2 className="font-unbounded text-3xl md:text-5xl font-bold mb-16 text-center">The Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="font-mono text-4xl mb-6">01</div>
            <h3 className="font-unbounded text-xl font-bold mb-4">Design</h3>
            <p className="font-hanken text-charcoal/70">Figma is our home. We build robust design systems and prototype heavily before writing a single line of code.</p>
          </div>
          <div>
            <div className="font-mono text-4xl mb-6">02</div>
            <h3 className="font-unbounded text-xl font-bold mb-4">Motion</h3>
            <p className="font-hanken text-charcoal/70">GSAP, Framer Motion, and custom WebGL. We use animation to guide attention and tell stories, not just for show.</p>
          </div>
          <div>
            <div className="font-mono text-4xl mb-6">03</div>
            <h3 className="font-unbounded text-xl font-bold mb-4">Engineering</h3>
            <p className="font-hanken text-charcoal/70">Next.js, TypeScript, and Tailwind CSS. Modern, type-safe, and blazingly fast architectures.</p>
          </div>
        </div>
      </div>

      <div className="pt-32 text-center">
        <h2 className="font-unbounded text-4xl md:text-6xl font-bold mb-8">Ready to build?</h2>
        <Link href="/start-a-project">
          <Button variant="primary" className="mx-auto">Let's talk</Button>
        </Link>
      </div>
    </div>
  );
}
