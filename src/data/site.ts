export const site = {
  name: 'Nivaan Recruitment',
  shortName: 'Nivaan',
  description:
    'Nivaan Recruitment connects skilled people with teams that need them across technology, finance, engineering, healthcare, and commercial roles. Browse live jobs or tell us who you need to hire.',
  email: 'hr@nivaanrecruiter.com',
  phone: '+91 7284 913 678',
  address:
    '381, Phase 4, Sector 59, Mohali Stadium Rd, Sahibzada Ajit Singh Nagar, Punjab 160062, India',
  hours: 'Mon–Fri, 8:30am–6pm',
  stats: [
    { value: '1,284', label: 'placements made since 2016' },
    { value: '11 days', label: 'average time to first shortlist' },
    { value: '93%', label: 'of hires still in role after 12 months' },
  ],
  sectors: [
    {
      name: 'Technology',
      blurb: 'Engineers, data specialists, product and platform teams.',
    },
    {
      name: 'Finance & Accounting',
      blurb: 'Finance business partners, controllers, and analysts.',
    },
    {
      name: 'Engineering & Manufacturing',
      blurb: 'Process, quality, mechanical, and production leadership.',
    },
    {
      name: 'Healthcare',
      blurb: 'Clinical, allied health, and healthcare operations.',
    },
    {
      name: 'Sales & Marketing',
      blurb: 'Account executives, growth marketers, and brand leads.',
    },
    {
      name: 'Operations & Supply Chain',
      blurb: 'Logistics, procurement, and operations management.',
    },
  ],
  process: [
    {
      title: 'A real conversation first',
      description:
        'We start with a 30-minute call to understand what you want next — or exactly who your team is missing.',
    },
    {
      title: 'A considered shortlist',
      description:
        'Every introduction is screened by a sector specialist. Expect three to five strong matches, not a pile of CVs.',
    },
    {
      title: 'Support through the offer',
      description:
        'We prepare candidates for interviews, handle the feedback loop, and help both sides land on a fair offer.',
    },
    {
      title: 'Check-ins after day one',
      description:
        'We call at 30, 90, and 180 days. If a placement doesn’t work out, our rebate promise covers it.',
    },
  ],
  testimonials: [
    {
      quote:
        'Nivaan sent four candidates for our controller role and we wanted to hire two of them. They understood the brief better than our own job advert did.',
      name: 'Priyanka Desai',
      role: 'CFO, Halden Logistics',
    },
    {
      quote:
        'I’d been applying for months. Within three weeks of my first call with Nivaan I had two offers and honest advice on which to take.',
      name: 'Tomasz Wierzbicki',
      role: 'Senior Platform Engineer, placed 2026',
    },
    {
      quote:
        'They kept every candidate updated, even the ones we didn’t hire. That reflects well on us as an employer, and it matters.',
      name: 'Gemma Achterberg',
      role: 'Head of People, Brightwater Health',
    },
  ],
}

export const forms = {
  endpoint: '/__forms.html',
  application: 'job-application',
  hiring: 'hiring-request',
}

export const image = (file: string, width: number) =>
  `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
