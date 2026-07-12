import Link from "next/link";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Start a Project", href: "/start-a-project" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-canvas py-16 border-t border-canvas/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-unbounded text-lg font-bold mb-4">WebArtist</h3>
            <p className="text-canvas/60 text-sm">A web design and development studio that builds outstanding custom websites.</p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-canvas/50 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-canvas hover:text-magenta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-canvas/50 mb-4">Social</h4>
            <ul className="space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-canvas hover:text-magenta transition-colors">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-canvas/10 pt-8 flex justify-between items-center text-canvas/60 text-sm">
          <p>© 2026 WebArtist. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-magenta transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-magenta transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}