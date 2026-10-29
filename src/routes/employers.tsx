import { createFileRoute } from '@tanstack/react-router'
import { EmployersPage } from '../components/EmployersPage'
import { site } from '../data/site'

export const Route = createFileRoute('/employers')({
  head: () => ({
    meta: [
      { title: `Hire talent | ${site.name}` },
      {
        name: 'description',
        content:
          'Permanent, contract, and temporary hiring with specialist consultants. Send Nivaan Recruitment your hiring brief.',
      },
    ],
  }),
  component: EmployersPage,
})
