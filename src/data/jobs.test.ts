import { describe, expect, it } from 'vitest'
import jobs, { filterJobs, findJob, postedLabel } from './jobs'

describe('jobs', () => {
  it('finds jobs by exact id', () => {
    expect(findJob('data-analyst')?.title).toBe('Data Analyst')
    expect(findJob('data')).toBeUndefined()
  })

  it('filters by keyword, sector, location, and type', () => {
    expect(filterJobs(jobs, {}).length).toBe(jobs.length)
    expect(filterJobs(jobs, { q: 'power bi' }).map((job) => job.id)).toEqual([
      'data-analyst',
    ])
    expect(
      filterJobs(jobs, { sector: 'Technology', location: 'London' }).map(
        (job) => job.id,
      ),
    ).toEqual(['senior-platform-engineer'])
    expect(
      filterJobs(jobs, { type: 'Contract' }).every(
        (job) => job.type === 'Contract',
      ),
    ).toBe(true)
  })

  it('formats posting dates relative to today', () => {
    const now = new Date('2026-10-28T12:00:00Z')
    expect(postedLabel('2026-10-28', now)).toBe('Posted today')
    expect(postedLabel('2026-10-27', now)).toBe('Posted yesterday')
    expect(postedLabel('2026-10-22', now)).toBe('Posted 6 days ago')
  })
})
