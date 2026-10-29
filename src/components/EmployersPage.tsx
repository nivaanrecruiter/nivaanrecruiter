import { image, site } from '../data/site'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { HiringForm } from './HiringForm'

const services = [
  {
    name: 'Permanent hiring',
    detail: 'Fixed-percentage fee, payable on start. 12-week rebate promise.',
  },
  {
    name: 'Contract & interim',
    detail: 'Vetted day-rate specialists, often available within a week.',
  },
  {
    name: 'Temporary staffing',
    detail: 'Reliable cover for peaks, projects, and absences, paid weekly.',
  },
  {
    name: 'Volume campaigns',
    detail: 'Dedicated team for site openings and multi-hire programmes.',
  },
]

export function EmployersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-moss">For employers</p>
            <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">
              Hire people who <em className="font-normal text-clay">stay</em>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              One consultant, one brief, and a shortlist of three to five
              candidates we’d hire ourselves. Most clients see their first
              profiles within {site.stats[1].value}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#brief" className="btn-dark">
                Start a hiring brief
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="btn-ghost text-forest"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
          <img
            src={image('employers.png', 1000)}
            srcSet={`${image('employers.png', 640)} 640w, ${image('employers.png', 1000)} 1000w, ${image('employers.png', 1400)} 1400w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="A hiring team reviewing candidate profiles together on a whiteboard"
            width={1408}
            height={768}
            className="aspect-[4/3] w-full rounded-[2.5rem] rounded-br-[7rem] object-cover"
          />
        </section>

        <section
          aria-labelledby="services-heading"
          className="bg-forest text-cream"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl"
            >
              However you need to hire
            </h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-cream/10 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.name} className="bg-forest p-8">
                  <h3 className="font-display text-2xl text-saffron">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-cream/70">{service.detail}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-14 grid gap-8 sm:grid-cols-3">
              {site.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="text-sm text-cream/60">{stat.label}</dt>
                  <dd className="order-first font-display text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="brief"
          aria-labelledby="brief-heading"
          className="scroll-mt-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-moss">Hiring brief</p>
              <h2
                id="brief-heading"
                className="mt-3 font-display text-4xl sm:text-5xl"
              >
                Tell us who you need
              </h2>
              <p className="mt-5 leading-relaxed text-ink/70">
                Share the basics and a specialist will call within one working
                day to scope the role, agree terms, and start the search.
              </p>
              <figure className="mt-10 rounded-3xl bg-cream p-7">
                <blockquote className="font-display text-xl leading-snug">
                  “{site.testimonials[0].quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">
                    {site.testimonials[0].name}
                  </span>
                  <span className="text-ink/60">
                    {' '}
                    — {site.testimonials[0].role}
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-10">
              <HiringForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
