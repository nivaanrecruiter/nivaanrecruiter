import jobs, {
  filterJobs,
  jobTypes,
  locations,
  sectors,
  type JobFilters,
} from '../data/jobs'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { JobCard } from './JobCard'
import { ApplicationForm } from './ApplicationForm'

export function JobsPage({
  filters,
  onChange,
}: {
  filters: JobFilters
  onChange: (filters: JobFilters) => void
}) {
  const results = filterJobs(jobs, filters)
  const active = Object.values(filters).some(Boolean)
  const set = (key: keyof JobFilters, value: string) =>
    onChange({ ...filters, [key]: value || undefined })

  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8">
          <p className="eyebrow text-moss">Job board</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
            Find a role worth moving for.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Every listing here is a live brief one of our consultants is working
            on. Apply in two minutes — no account needed.
          </p>
        </section>

        <section
          aria-label="Filter jobs"
          className="sticky top-0 z-10 border-y border-ink/10 bg-paper/90 backdrop-blur"
        >
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto grid max-w-7xl gap-3 px-5 py-4 sm:px-8 md:grid-cols-[2fr_1fr_1fr_1fr_auto]"
          >
            <label className="sr-only" htmlFor="filter-q">
              Keyword
            </label>
            <input
              id="filter-q"
              type="search"
              value={filters.q ?? ''}
              onChange={(event) => set('q', event.target.value)}
              placeholder="Search title, skill, or company"
              className="form-input"
            />
            <Select
              id="filter-sector"
              label="Sector"
              value={filters.sector}
              options={sectors}
              onChange={(v) => set('sector', v)}
            />
            <Select
              id="filter-location"
              label="Location"
              value={filters.location}
              options={locations}
              onChange={(v) => set('location', v)}
            />
            <Select
              id="filter-type"
              label="Job type"
              value={filters.type}
              options={jobTypes}
              onChange={(v) => set('type', v)}
            />
            <button
              type="button"
              onClick={() => onChange({})}
              disabled={!active}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-moss underline-offset-4 hover:underline disabled:cursor-default disabled:no-underline disabled:opacity-40"
            >
              Clear
            </button>
          </form>
        </section>

        <section
          aria-labelledby="results-heading"
          className="mx-auto max-w-7xl px-5 py-10 sm:px-8"
        >
          <h2
            id="results-heading"
            className="mb-6 text-sm font-semibold text-ink/60"
            aria-live="polite"
          >
            {results.length} {results.length === 1 ? 'role' : 'roles'}
            {active ? ' match your search' : ' open now'}
          </h2>
          {results.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-ink/20 bg-cream/60 px-8 py-16 text-center">
              <p className="font-display text-3xl text-forest">
                Nothing matches — yet.
              </p>
              <p className="mx-auto mt-3 max-w-md text-ink/70">
                Most of our roles are filled before they’re advertised. Register
                your CV below and we’ll call you when the right one comes in.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => onChange({})}
                  className="btn-ghost text-forest"
                >
                  Clear filters
                </button>
                <a href="#register" className="btn-dark">
                  Register your CV
                </a>
              </div>
            </div>
          )}
        </section>

        <section
          id="register"
          aria-labelledby="register-heading"
          className="scroll-mt-24 bg-cream"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-moss">Not seeing the one?</p>
              <h2
                id="register-heading"
                className="mt-3 font-display text-4xl sm:text-5xl"
              >
                Register your CV with Nivaan
              </h2>
              <p className="mt-5 leading-relaxed text-ink/70">
                Tell us what you want next. A consultant in your sector will
                call within two working days to talk through roles that aren’t
                on the board.
              </p>
            </div>
            <div className="rounded-[2rem] bg-paper p-6 shadow-sm sm:p-10">
              <ApplicationForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function Select({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string
  label: string
  value?: string
  options: Array<string>
  onChange: (value: string) => void
}) {
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        className="form-input"
      >
        <option value="">All {label.toLowerCase()}s</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  )
}
