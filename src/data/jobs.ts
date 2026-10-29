// Sample listings. Replace with real vacancies (or a database) when ready.
export type JobType = 'Permanent' | 'Contract' | 'Temporary'
export type WorkMode = 'On-site' | 'Hybrid' | 'Remote'

export interface Job {
  id: string
  title: string
  company: string
  sector: string
  location: string
  type: JobType
  mode: WorkMode
  salary: string
  posted: string
  summary: string
  responsibilities: Array<string>
  requirements: Array<string>
  benefits: Array<string>
  consultant: string
  featured?: boolean
}

const jobs: Array<Job> = [
  {
    id: 'senior-platform-engineer',
    title: 'Senior Platform Engineer',
    company: 'Fintech scale-up, Series B',
    sector: 'Technology',
    location: 'London',
    type: 'Permanent',
    mode: 'Hybrid',
    salary: '£85,000 – £98,000',
    posted: '2026-10-24',
    summary:
      'Own the Kubernetes platform behind a payments product processing £2.3bn a year, and help a 14-person engineering team ship faster with better tooling.',
    responsibilities: [
      'Run and evolve the AWS and Kubernetes platform used by every product team',
      'Build golden-path tooling for CI/CD, observability, and secrets management',
      'Lead incident reviews and drive reliability improvements',
      'Mentor two mid-level engineers',
    ],
    requirements: [
      '5+ years in platform, SRE, or infrastructure roles',
      'Hands-on Terraform and Kubernetes in production',
      'Comfort with Go or Python for internal tooling',
      'Experience in a regulated environment is a plus',
    ],
    benefits: [
      '2 office days a week in Farringdon',
      '10% pension contribution',
      '£2,000 annual learning budget',
      '28 days holiday plus bank holidays',
    ],
    consultant: 'Arjun Mehta',
    featured: true,
  },
  {
    id: 'financial-controller',
    title: 'Financial Controller',
    company: 'Family-owned logistics group',
    sector: 'Finance & Accounting',
    location: 'Birmingham',
    type: 'Permanent',
    mode: 'Hybrid',
    salary: '£72,000 – £80,000',
    posted: '2026-10-22',
    summary:
      'Lead a team of six through month-end, audit, and a new ERP rollout at a profitable £140m logistics business with a genuinely flat structure.',
    responsibilities: [
      'Own month-end close, group consolidation, and statutory reporting',
      'Manage the external audit relationship',
      'Co-lead the Microsoft Dynamics 365 implementation',
      'Develop and coach a team of six',
    ],
    requirements: [
      'ACA, ACCA, or CIMA qualified',
      'Previous controller or senior finance manager experience',
      'Multi-entity consolidation experience',
      'Calm, clear communicator with non-finance colleagues',
    ],
    benefits: [
      '15% annual bonus potential',
      'Car allowance',
      'Private medical cover for your family',
    ],
    consultant: 'Hannah Okafor',
    featured: true,
  },
  {
    id: 'quality-engineer',
    title: 'Quality Engineer',
    company: 'Precision medical device manufacturer',
    sector: 'Engineering & Manufacturing',
    location: 'Leeds',
    type: 'Permanent',
    mode: 'On-site',
    salary: '£46,000 – £52,000',
    posted: '2026-10-21',
    summary:
      'Keep a 200-person ISO 13485 site audit-ready while improving yield on a new surgical instrument line.',
    responsibilities: [
      'Lead CAPA, non-conformance, and root-cause investigations',
      'Support supplier audits and incoming inspection',
      'Write and maintain validation protocols (IQ/OQ/PQ)',
      'Work with production to reduce scrap on Line 3',
    ],
    requirements: [
      'Degree in engineering or a related science',
      '3+ years in a regulated manufacturing environment',
      'Working knowledge of ISO 13485 or ISO 9001',
      'Six Sigma Green Belt desirable',
    ],
    benefits: [
      'Early finish on Fridays',
      'Fully funded Black Belt training',
      '8% pension contribution',
    ],
    consultant: 'Dev Patel',
    featured: true,
  },
  {
    id: 'clinical-nurse-lead',
    title: 'Clinical Nurse Lead – Outpatients',
    company: 'Independent hospital group',
    sector: 'Healthcare',
    location: 'Manchester',
    type: 'Permanent',
    mode: 'On-site',
    salary: '£54,500 – £59,000',
    posted: '2026-10-19',
    summary:
      'Lead a 22-strong outpatients nursing team in a newly refurbished hospital, with protected time for service development.',
    responsibilities: [
      'Lead day-to-day clinical delivery across outpatient clinics',
      'Own staffing, rotas, and professional development',
      'Champion patient safety and CQC readiness',
    ],
    requirements: [
      'NMC registered nurse',
      'Band 7 or equivalent leadership experience',
      'Outpatient or ambulatory care background',
    ],
    benefits: [
      'No nights or weekends',
      'Revalidation support',
      'Free on-site parking',
    ],
    consultant: 'Hannah Okafor',
  },
  {
    id: 'enterprise-account-executive',
    title: 'Enterprise Account Executive',
    company: 'B2B SaaS, HR technology',
    sector: 'Sales & Marketing',
    location: 'Remote (UK)',
    type: 'Permanent',
    mode: 'Remote',
    salary: '£70,000 base, £140,000 OTE',
    posted: '2026-10-17',
    summary:
      'Open and close six-figure deals with UK enterprise accounts for a product that already has strong inbound demand.',
    responsibilities: [
      'Manage a full sales cycle from discovery to signature',
      'Build relationships with HR and finance leaders',
      'Work with solutions engineers on tailored demos',
    ],
    requirements: [
      '4+ years of SaaS closing experience',
      'Track record with deals above £100k ACV',
      'Experience selling to HR or finance buyers is a bonus',
    ],
    benefits: [
      'Uncapped commission',
      'Quarterly team meet-ups',
      'Home office allowance',
    ],
    consultant: 'Arjun Mehta',
  },
  {
    id: 'supply-chain-planner',
    title: 'Supply Chain Planner',
    company: 'National food and drink brand',
    sector: 'Operations & Supply Chain',
    location: 'Birmingham',
    type: 'Contract',
    mode: 'Hybrid',
    salary: '£300 – £340 per day',
    posted: '2026-10-15',
    summary:
      'A 9-month contract to stabilise demand and supply planning across 412 SKUs during a warehouse move.',
    responsibilities: [
      'Run weekly S&OP inputs and supply plans',
      'Balance stock levels across two distribution centres',
      'Report on forecast accuracy and service levels',
    ],
    requirements: [
      'FMCG planning experience',
      'Strong Excel; SAP APO or IBP preferred',
      'Available within four weeks',
    ],
    benefits: ['Outside IR35', 'Likely extension'],
    consultant: 'Dev Patel',
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    company: 'Housing association',
    sector: 'Technology',
    location: 'Manchester',
    type: 'Permanent',
    mode: 'Hybrid',
    salary: '£38,000 – £43,000',
    posted: '2026-10-12',
    summary:
      'Turn repairs and tenancy data into insight that helps 31,000 households get faster, better service.',
    responsibilities: [
      'Build and maintain Power BI dashboards',
      'Write SQL to model repairs and tenancy data',
      'Present findings to operational managers',
    ],
    requirements: [
      '2+ years in a data analyst role',
      'Confident with SQL and Power BI',
      'Clear storyteller with data',
    ],
    benefits: [
      '35-hour week',
      '30 days holiday',
      'Defined benefit pension option',
    ],
    consultant: 'Arjun Mehta',
  },
  {
    id: 'warehouse-shift-manager',
    title: 'Warehouse Shift Manager',
    company: 'Third-party logistics provider',
    sector: 'Operations & Supply Chain',
    location: 'Leeds',
    type: 'Temporary',
    mode: 'On-site',
    salary: '£21.50 per hour',
    posted: '2026-10-09',
    summary:
      'Lead a team of 40 on the night shift through peak season at a busy e-commerce fulfilment centre. Temp-to-perm for the right person.',
    responsibilities: [
      'Hit pick, pack, and dispatch targets',
      'Manage shift rotas and agency labour',
      'Keep the site safe and audit-ready',
    ],
    requirements: [
      'Previous shift leadership in a warehouse',
      'WMS experience',
      'Counterbalance licence desirable',
    ],
    benefits: ['Night shift premium', 'Weekly pay', 'Temp-to-perm route'],
    consultant: 'Dev Patel',
  },
]

export default jobs

export const sectors = [...new Set(jobs.map((job) => job.sector))].sort()
export const locations = [...new Set(jobs.map((job) => job.location))].sort()
export const jobTypes: Array<JobType> = ['Permanent', 'Contract', 'Temporary']

export function findJob(id: string) {
  return jobs.find((job) => job.id === id)
}

export interface JobFilters {
  q?: string
  sector?: string
  location?: string
  type?: string
}

export function filterJobs(list: Array<Job>, filters: JobFilters) {
  const q = filters.q?.trim().toLowerCase()
  return list.filter(
    (job) =>
      (!filters.sector || job.sector === filters.sector) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.type || job.type === filters.type) &&
      (!q ||
        [job.title, job.company, job.summary, job.sector, job.location]
          .join(' ')
          .toLowerCase()
          .includes(q)),
  )
}

export function postedLabel(date: string, now = new Date()) {
  const days = Math.max(
    0,
    Math.floor((now.getTime() - new Date(date).getTime()) / 86_400_000),
  )
  if (days === 0) return 'Posted today'
  if (days === 1) return 'Posted yesterday'
  if (days < 14) return `Posted ${days} days ago`
  return `Posted ${new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`
}
