"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export default function StartProject() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-magenta rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-8">✓</div>
          <h1 className="font-unbounded text-4xl font-bold mb-4">Request Sent.</h1>
          <p className="font-hanken text-charcoal/70 mb-8">
            Thanks for reaching out. We'll review your project details and get back to you within 24 hours to schedule a discovery call.
          </p>
          <button onClick={() => setSubmitted(false)} className="font-mono text-sm uppercase tracking-widest text-magenta hover:underline">
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-32 pb-32 px-6 max-w-3xl mx-auto">
      <h1 className="font-unbounded text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-[0.9]">
        Start a <span className="text-magenta">Project.</span>
      </h1>
      <p className="font-hanken text-xl text-charcoal/70 mb-16">
        Fill out the form below to help us understand what you're looking to achieve. We'll get back to you with next steps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Name</label>
            <input required type="text" className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 font-hanken text-xl focus:outline-none focus:border-magenta transition-colors" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Email</label>
            <input required type="email" className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 font-hanken text-xl focus:outline-none focus:border-cyan transition-colors" placeholder="jane@company.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Project Type</label>
          <select defaultValue="" required className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 font-hanken text-xl focus:outline-none focus:border-yellow transition-colors appearance-none">
            <option value="" disabled>Select an option...</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="saas">SaaS Website</option>
            <option value="portfolio">Portfolio / Creative</option>
            <option value="booking">Booking / Platform</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Budget Range</label>
          <select defaultValue="" required className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 font-hanken text-xl focus:outline-none focus:border-violet transition-colors appearance-none">
            <option value="" disabled>Select a range...</option>
            <option value="starter">$5k - $12k (Starter)</option>
            <option value="growth">$12k - $30k (Growth)</option>
            <option value="studio">$30k+ (Studio)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Project Details</label>
          <textarea required rows={4} className="w-full bg-transparent border-b-2 border-charcoal/20 py-3 font-hanken text-xl focus:outline-none focus:border-magenta transition-colors resize-none" placeholder="Tell us about your goals, timeline, and what success looks like..."></textarea>
        </div>

        <div className="pt-8">
          <Button type="submit" variant="primary" className="w-full md:w-auto px-12">Submit Request</Button>
        </div>
      </form>
    </div>
  );
}
