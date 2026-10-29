import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import jobs from '../data/jobs'
import { image, site } from '../data/site'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { JobCard } from './JobCard'

export function HomePage() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const featured = jobs.filter((job) => job.featured)

  function search(event: FormEvent) {
    event.preventDefault()
    navigate({ to: '/jobs', search: q.trim() ? { q: q.trim() } : {} })
  }

  return (
    <>
      <div className="grain relative overflow-hidden bg-forest text-cream">
        <SiteHeader tone="dark" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-40 h-[34rem] w-[34rem] rounded-full bg-moss/40 blur-3xl"
        />
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-14">
          <div>
            <p className="eyebrow rise text-saffron">
              Specialist recruitment · Est. 2016
            </p>
            <h1
              className="rise mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: '80ms' }}
            >
              The right people,
              <br />
              <em className="font-normal text-saffron">properly</em> matched.
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
              style={{ animationDelay: '160ms' }}
            >
              Nivaan Recruitment places skilled professionals in technology,
              finance, engineering, healthcare, and commercial roles — with
              consultants who know your sector and actually pick up the phone.
            </p>
            <form
              role="search"
              onSubmit={search}
              className="rise mt-9 flex max-w-xl flex-col gap-2 rounded-3xl bg-cream p-2 sm:flex-row sm:rounded-full"
              style={{ animationDelay: '240ms' }}
            >
              <label htmlFor="hero-search" className="sr-only">
                Search jobs
              </label>
              <input
                id="hero-search"
                value={q}
                onChange={(event) => setQ(event.target.value)}
                placeholder="Job title, skill, or city"
                className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-ink placeholder:text-ink/45 focus:outline-none"
              />
              <button type="submit" className="btn-primary">
                Search jobs
              </button>
            </form>
            <p
              className="rise mt-5 text-sm text-cream/60"
              style={{ animationDelay: '300ms' }}
            >
              Hiring?{' '}
              <Link
                to="/employers"
                className="text-cream underline decoration-saffron underline-offset-4"
              >
                Tell us who you need
              </Link>
            </p>
          </div>
          <div
            className="rise relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ animationDelay: '200ms' }}
          >
            <img
              src={image('hero.png', 720)}
              srcSet={`${image('hero.png', 480)} 480w, ${image('hero.png', 720)} 720w, ${image('hero.png', 1000)} 1000w`}
              sizes="(min-width: 1024px) 40vw, 90vw"
              alt="A Nivaan consultant laughing with a candidate over coffee in a bright office"
              width={768}
              height={1376}
              className="aspect-[4/5] w-full rounded-[2.5rem] rounded-tl-[8rem] object-cover object-[50%_60%] shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-paper p-5 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl text-forest">
                {jobs.length} live roles
              </p>
              <p className="text-sm text-ink/60">updated this week</p>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section
          aria-label="Nivaan in numbers"
          className="border-b border-ink/10"
        >
          <dl className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 sm:px-8">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col border-l-2 border-saffron pl-5"
              >
                <dt className="text-sm text-ink/60">{stat.label}</dt>
                <dd className="order-first font-display text-4xl text-forest">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="featured-heading"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-moss">Featured roles</p>
              <h2
                id="featured-heading"
                className="mt-3 font-display text-4xl sm:text-5xl"
              >
                Hiring now
              </h2>
            </div>
            <Link to="/jobs" className="btn-ghost text-forest">
              View all {jobs.length} jobs →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        <section aria-labelledby="sectors-heading" className="bg-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <p className="eyebrow text-moss">Where we specialise</p>
              <h2
                id="sectors-heading"
                className="mt-3 font-display text-4xl sm:text-5xl"
              >
                Six sectors. Consultants who’ve worked in them.
              </h2>
              <p className="mt-5 text-ink/70 leading-relaxed">
                Each desk is run by someone with hands-on experience of the
                roles they recruit for, so the questions they ask are the ones
                your interviewer will.
              </p>
            </div>
            <ol className="divide-y divide-ink/10 border-y border-ink/10">
              {site.sectors.map((sector, index) => (
                <li key={sector.name}>
                  <Link
                    to="/jobs"
                    search={{ sector: sector.name }}
                    className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 transition hover:bg-paper/60 sm:px-4"
                  >
                    <span className="font-display text-lg text-saffron">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block font-display text-2xl group-hover:text-forest">
                        {sector.name}
                      </span>
                      <span className="mt-1 block text-sm text-ink/60">
                        {sector.blurb}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-moss transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="audiences-heading"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
        >
          <h2 id="audiences-heading" className="sr-only">
            How we help
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem] bg-ink text-cream">
              <img
                src={image('candidates.png', 900)}
                alt="An engineer and a technician walking through a modern manufacturing floor"
                loading="lazy"
                width={1408}
                height={768}
                className="h-64 w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 sm:h-80"
              />
              <div className="p-8 sm:p-10">
                <p className="eyebrow text-saffron">For candidates</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  Your next move, with someone in your corner.
                </h3>
                <p className="mt-4 text-cream/70">
                  Honest feedback on your CV, interview prep from people who
                  know the hiring manager, and roles that aren’t advertised
                  anywhere else.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/jobs" className="btn-primary">
                    Browse jobs
                  </Link>
                  <Link to="/jobs" hash="register" className="btn-ghost">
                    Register your CV
                  </Link>
                </div>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-[2rem] bg-sage/60 text-ink lg:mt-16">
              <img
                src={image('employers.png', 900)}
                alt="A hiring team reviewing candidate profiles on a whiteboard"
                loading="lazy"
                width={1408}
                height={768}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
              />
              <div className="p-8 sm:p-10">
                <p className="eyebrow text-moss">For employers</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  A shortlist you’ll want to interview.
                </h3>
                <p className="mt-4 text-ink/70">
                  Permanent, contract, and temporary hiring. Fixed fees, a
                  rebate promise, and a single consultant from brief to start
                  date.
                </p>
                <div className="mt-7">
                  <Link to="/employers" className="btn-dark">
                    Start a hiring brief
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="process-heading"
          className="bg-forest text-cream"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="eyebrow text-saffron">How it works</p>
            <h2
              id="process-heading"
              className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl"
            >
              Fewer CVs. Better conversations.
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
              {site.process.map((step, index) => (
                <li key={step.title} className="bg-forest p-7">
                  <span className="font-display text-5xl text-saffron/80">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="testimonials-heading"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
        >
          <p className="eyebrow text-moss">In their words</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-4xl sm:text-5xl"
          >
            What people say after the offer
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-[1.3fr_1fr]">
            {site.testimonials.map((t, index) => (
              <figure
                key={t.name}
                className={`rounded-3xl border border-ink/10 p-8 ${index === 0 ? 'bg-cream md:row-span-2 md:p-12' : 'bg-white'}`}
              >
                <blockquote
                  className={`font-display leading-snug text-ink ${index === 0 ? 'text-3xl' : 'text-xl'}`}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-ink/60"> — {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-saffron px-8 py-14 text-ink sm:px-14">
            <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Ready to talk? We’re a phone call away.
              </h2>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-dark"
                >
                  Call {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-semibold underline underline-offset-4"
                >
                  or email {site.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
