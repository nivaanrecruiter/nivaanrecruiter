import { Link } from '@tanstack/react-router'
import { postedLabel, type Job } from '../data/jobs'

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      to="/jobs/$jobId"
      params={{ jobId: job.id }}
      className="group relative flex flex-col gap-4 rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-moss/40 hover:shadow-[0_18px_40px_-24px_rgba(29,58,50,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow text-moss">{job.sector}</p>
        <span className="chip shrink-0">{job.type}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl leading-tight text-ink group-hover:text-forest">
          {job.title}
        </h3>
        <p className="mt-1 text-sm text-ink/60">{job.company}</p>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-ink/75">
        {job.summary}
      </p>
      <dl className="mt-auto flex flex-wrap gap-x-5 gap-y-1 border-t border-ink/10 pt-4 text-sm">
        <div>
          <dt className="sr-only">Location</dt>
          <dd>
            {job.location} · {job.mode}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Salary</dt>
          <dd className="font-semibold text-forest">{job.salary}</dd>
        </div>
      </dl>
      <p className="text-xs text-ink/45">{postedLabel(job.posted)}</p>
      <span
        aria-hidden="true"
        className="absolute right-6 bottom-6 text-xl text-saffron transition group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  )
}
