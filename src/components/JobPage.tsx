import { Link } from '@tanstack/react-router'
import jobs, { postedLabel, type Job } from '../data/jobs'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { JobCard } from './JobCard'
import { ApplicationForm } from './ApplicationForm'

export function JobPage({ job }: { job: Job }) {
  const related = jobs
    .filter((other) => other.id !== job.id && other.sector === job.sector)
    .concat(
      jobs.filter(
        (other) => other.id !== job.id && other.sector !== job.sector,
      ),
    )
    .slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8">
            <Link
              to="/jobs"
              className="text-sm font-medium text-moss hover:underline"
            >
              ← All jobs
            </Link>
            <p className="eyebrow mt-8 text-moss">{job.sector}</p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
              {job.title}
            </h1>
            <p className="mt-3 text-lg text-ink/70">{job.company}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Salary', job.salary],
                ['Location', `${job.location} · ${job.mode}`],
                ['Job type', job.type],
                ['Consultant', job.consultant],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col rounded-2xl bg-paper p-4"
                >
                  <dt className="text-xs uppercase tracking-wider text-ink/50">
                    {label}
                  </dt>
                  <dd className="mt-1 font-semibold text-forest">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#apply" className="btn-primary">
                Apply for this role
              </a>
              <span className="text-sm text-ink/50">
                {postedLabel(job.posted)}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-10">
            <section>
              <h2 className="font-display text-3xl">The role</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {job.summary}
              </p>
            </section>
            <List title="What you’ll do" items={job.responsibilities} />
            <List title="What you’ll bring" items={job.requirements} />
            <List title="What’s on offer" items={job.benefits} />
          </article>

          <aside
            id="apply"
            aria-labelledby="apply-heading"
            className="scroll-mt-8 lg:sticky lg:top-8 lg:self-start"
          >
            <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(29,58,50,0.5)] sm:p-8">
              <h2 id="apply-heading" className="font-display text-3xl">
                Apply now
              </h2>
              <p className="mb-6 mt-2 text-sm text-ink/60">
                Your application goes straight to {job.consultant}, who’s
                handling this role.
              </p>
              <ApplicationForm job={job} />
            </div>
          </aside>
        </div>

        <section
          aria-labelledby="related-heading"
          className="border-t border-ink/10"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <h2 id="related-heading" className="mb-8 font-display text-3xl">
              You might also like
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((other) => (
                <JobCard key={other.id} job={other} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function List({ title, items }: { title: string; items: Array<string> }) {
  return (
    <section>
      <h2 className="font-display text-2xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
