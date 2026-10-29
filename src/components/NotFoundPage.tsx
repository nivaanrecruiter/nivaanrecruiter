import { Link } from '@tanstack/react-router'
import { SiteHeader } from './SiteHeader'

export function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="eyebrow text-moss">404</p>
        <h1 className="mt-3 font-display text-5xl">This page has moved on.</h1>
        <p className="mt-4 text-ink/70">
          The role may have been filled, or the link is out of date.
        </p>
        <Link to="/jobs" className="btn-dark mt-8">
          Browse current jobs
        </Link>
      </main>
    </>
  )
}
