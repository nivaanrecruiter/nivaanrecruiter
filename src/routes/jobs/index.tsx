import { createFileRoute } from '@tanstack/react-router'
import { JobsPage } from '../../components/JobsPage'
import type { JobFilters } from '../../data/jobs'
import { site } from '../../data/site'

const text = (value: unknown) =>
  typeof value === 'string' && value ? value.slice(0, 100) : undefined

export const Route = createFileRoute('/jobs/')({
  validateSearch: (search: Record<string, unknown>): JobFilters => ({
    q: text(search.q),
    sector: text(search.sector),
    location: text(search.location),
    type: text(search.type),
  }),
  head: () => ({
    meta: [
      { title: `Jobs | ${site.name}` },
      {
        name: 'description',
        content:
          'Browse live permanent, contract, and temporary jobs with Nivaan Recruitment, or register your CV.',
      },
    ],
  }),
  component: JobsRoute,
})

function JobsRoute() {
  const filters = Route.useSearch()
  const navigate = Route.useNavigate()
  return (
    <JobsPage
      filters={filters}
      onChange={(next) =>
        navigate({ search: next, replace: true, resetScroll: false })
      }
    />
  )
}
