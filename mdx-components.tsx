import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-unbounded text-4xl md:text-6xl font-bold mb-6 mt-12">{children}</h1>,
    h2: ({ children }) => <h2 className="font-unbounded text-3xl md:text-4xl font-bold mb-4 mt-10">{children}</h2>,
    h3: ({ children }) => <h3 className="font-unbounded text-2xl font-bold mb-4 mt-8">{children}</h3>,
    p: ({ children }) => <p className="font-hanken text-lg mb-6 leading-relaxed text-charcoal/80">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 font-hanken text-lg text-charcoal/80">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 font-hanken text-lg text-charcoal/80">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    a: ({ href, children }) => <a href={href} className="text-magenta hover:text-cyan transition-colors underline underline-offset-4">{children}</a>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-magenta pl-6 italic my-8 text-xl text-charcoal/70">{children}</blockquote>,
    ...components,
  }
}
