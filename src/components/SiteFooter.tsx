import { Link } from '@tanstack/react-router'
import { site } from '../data/site'
import { Logo } from './Logo'

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="text-cream" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Specialist recruiters for permanent, contract, and temporary roles.
            People first, every placement.
          </p>
        </div>
        <div>
          <h2 className="eyebrow text-saffron mb-4">Get in touch with us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="hover:text-cream"
              >
                {site.phone}
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-saffron mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/jobs" className="hover:text-cream">
                Browse jobs
              </Link>
            </li>
            <li>
              <Link to="/jobs" hash="register" className="hover:text-cream">
                Register your CV
              </Link>
            </li>
            <li>
              <Link to="/employers" className="hover:text-cream">
                Hire with Nivaan
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
