# Nivaan Recruitment

The website for Nivaan Recruitment, a specialist agency placing people in permanent, contract, and temporary roles across technology, finance, engineering, healthcare, sales, and operations.

## What's on the site

- **Home** (`/`): the brand story, a job search, featured roles, sectors, how the process works, and testimonials.
- **Job board** (`/jobs`): every live role, with keyword, sector, location, and job-type filters kept in the URL so searches can be shared. Also has a general "register your CV" form.
- **Job detail** (`/jobs/:id`): the full listing, with an application form that includes a CV upload.
- **Employers** (`/employers`): services for hiring teams and a hiring-brief form.

Applications and hiring briefs go to **Netlify Forms**, so they show up in the Netlify dashboard under Forms, where you can set up email or Slack notifications.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- Tailwind CSS v4
- Netlify Forms for submissions, including file uploads
- Netlify Image CDN for responsive WebP images
- Vitest for unit tests

## Run locally

```bash
pnpm install
netlify dev        # http://localhost:8888 (emulates Netlify features)
# or
pnpm dev           # plain Vite on http://localhost:3000
pnpm test
```

Form submissions only go through on a deployed Netlify site. Local previews show the error state.

## Editing content

- **Jobs:** `src/data/jobs.ts`. Add, remove, or edit listings here. Set `featured: true` to show a role on the home page.
- **Company details, stats, sectors, process, testimonials:** `src/data/site.ts`.
- **Images:** `public/img/`, served through the Image CDN with the `image()` helper.

The jobs, contact details, statistics, and testimonials are realistic sample content. Replace them with Nivaan's real information before launch.

## Possible next steps

- Move the job listings into Netlify Database and add a password-protected admin page so consultants can post roles without changing code.
- Add consultant profile pages and a blog with hiring advice.
- Add job alerts by email for registered candidates.
