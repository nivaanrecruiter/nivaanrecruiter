import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'

const nav = [
  { to: '/jobs', label: 'Find a job' },
  { to: '/employers', label: 'Hire talent' },
] as const

export function SiteHeader({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const dark = tone === 'dark'
  return (
    <header
      className={`relative z-20 ${dark ? 'text-cream' : 'text-ink border-b border-ink/10'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" aria-label="Nivaan Recruiter home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium opacity-80 transition hover:opacity-100"
              activeProps={{
                className:
                  'opacity-100 underline underline-offset-8 decoration-saffron decoration-2',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="text-sm font-medium opacity-80 hover:opacity-100"
          >
            Contact
          </Link>
          <Link
            to="/jobs"
            hash="register"
            className="btn-primary !py-2.5 text-sm"
          >
            Send your CV
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden rounded-full p-2 hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h10'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full mx-4 rounded-2xl bg-paper p-4 text-ink shadow-xl md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium hover:bg-cream"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium hover:bg-cream"
          >
            Contact
          </Link>
          <Link
            to="/jobs"
            hash="register"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Send your CV
          </Link>
        </nav>
      )}
    </header>
  )
}
