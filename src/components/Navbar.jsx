import { useState } from 'react'
import { site } from '../data/siteData.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="font-display text-xl font-bold">
          {site.shortName}
          <span className="text-lime">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition hover:text-lime">
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-2xl text-text md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-muted transition hover:text-lime"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}