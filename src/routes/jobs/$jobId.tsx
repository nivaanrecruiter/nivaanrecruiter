import { createFileRoute, notFound } from '@tanstack/react-router'
import { findJob } from '../../data/jobs'
import { site } from '../../data/site'
import { JobPage } from '../../components/JobPage'

export const Route = createFileRoute('/jobs/$jobId')({
  loader: ({ params }) => {
    const job = findJob(params.jobId)
    if (!job) throw notFound()
    return job
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            {
              title: `${loaderData.title} – ${loaderData.location} | ${site.name}`,
            },
            { name: 'description', content: loaderData.summary },
            {
              property: 'og:title',
              content: `${loaderData.title} | ${site.name}`,
            },
            { property: 'og:description', content: loaderData.summary },
          ],
        }
      : {},
  component: JobRoute,
})

function JobRoute() {
  const job = Route.useLoaderData()
  return <JobPage key={job.id} job={job} />
}
