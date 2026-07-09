import Link from "next/link";
import { Button } from "@/components/Button";

// This simulates a database fetch
function getProject(id: string) {
  const projects = {
    "luxe-ecommerce": {
      title: "Luxe Jewels",
      type: "E-Commerce",
      client: "Luxe International",
      timeline: "8 Weeks",
      img: "portfolio-ecommerce.jpg",
      color: "magenta",
      content: `We redesigned the digital flagship for Luxe Jewels, combining highly performant 3D product rendering with an ultra-smooth purchase flow. The result is a headless Shopify build that feels more like an editorial magazine than a standard store.`
    },
    // ... we would have more here, but we will use a fallback for any unmatched id
  };
  
  return projects[id as keyof typeof projects] || {
    title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    type: "Case Study",
    client: "Confidential",
    timeline: "6 Weeks",
    img: "portfolio-saas.jpg",
    color: "cyan",
    content: `This project involved a complete ground-up rebuild of the client's digital presence. We focused on high-performance animations, accessible design, and a robust CMS backend that empowers their marketing team to move fast without breaking things.`
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const data = getProject(project);

  return (
    <article className="w-full min-h-screen bg-canvas">
      {/* Hero */}
      <header className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto z-10">
        <div className="font-mono text-sm uppercase tracking-widest text-magenta mb-6">{data.type}</div>
        <h1 className="font-unbounded text-5xl md:text-8xl font-bold mb-12 max-w-4xl tracking-tighter leading-[0.9]">
          {data.title}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-charcoal/10 pt-8 font-mono text-sm">
          <div>
            <div className="text-charcoal/50 uppercase tracking-widest mb-2">Client</div>
            <div>{data.client}</div>
          </div>
          <div>
            <div className="text-charcoal/50 uppercase tracking-widest mb-2">Timeline</div>
            <div>{data.timeline}</div>
          </div>
          <div>
            <div className="text-charcoal/50 uppercase tracking-widest mb-2">Services</div>
            <div>UX/UI, Dev</div>
          </div>
          <div>
            <div className="text-charcoal/50 uppercase tracking-widest mb-2">Live Site</div>
            <a href="#" className="text-magenta hover:underline">Visit Project ↗</a>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full px-6 max-w-7xl mx-auto mb-32">
        <div className="w-full aspect-video bg-charcoal rounded-2xl overflow-hidden relative">
          <img src={`/images/${data.img}`} alt={data.title} className="w-full h-full object-cover opacity-80" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 mb-32">
        <h2 className="font-unbounded text-3xl font-bold mb-8">The Challenge</h2>
        <p className="font-hanken text-xl text-charcoal/80 leading-relaxed mb-12">
          {data.content}
        </p>
        
        <h2 className="font-unbounded text-3xl font-bold mb-8">The Approach</h2>
        <p className="font-hanken text-xl text-charcoal/80 leading-relaxed mb-12">
          By utilizing a modern headless architecture with Next.js and Sanity, we unlocked unprecedented load times. We integrated Framer Motion and GSAP to provide delightful micro-interactions without compromising on core web vitals.
        </p>
      </div>

      {/* Next Project */}
      <div className="border-t border-charcoal/10 py-32 px-6 text-center">
        <div className="font-mono text-sm uppercase tracking-widest text-charcoal/50 mb-6">Up Next</div>
        <Link href="/work" className="inline-block group">
          <h2 className="font-unbounded text-4xl md:text-7xl font-bold group-hover:text-magenta transition-colors">
            Back to Portfolio
          </h2>
        </Link>
      </div>
    </article>
  );
}
