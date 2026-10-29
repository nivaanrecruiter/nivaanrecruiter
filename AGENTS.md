# Nivaan Recruitment: agent guide

The marketing and job-board site for a recruitment agency. TanStack Start (React 19, SSR) with Tailwind v4, deployed on Netlify. There's no database or auth yet. Jobs are static data, and all submissions go through Netlify Forms.

## Layout

- `src/routes/`: file routes. `index.tsx` (home), `jobs/index.tsx` (board, with search params validated in `validateSearch`), `jobs/$jobId.tsx` (detail, which throws `notFound()` for unknown ids), `employers.tsx`, `__root.tsx` (document shell, fonts, default meta). `src/routeTree.gen.ts` is generated at build time.
- `src/components/`: one page component per route (`HomePage`, `JobsPage`, `JobPage`, `EmployersPage`, `NotFoundPage`), plus shared `SiteHeader`, `SiteFooter`, `Logo`, `JobCard`.
- Forms: `ApplicationForm` (job application or general CV registration, multipart with a `cv` file), `HiringForm` (employer brief), and shared `useNetlifyForm` hook + `FormFeedback`.
- `src/data/jobs.ts`: the single source for job listings, plus `filterJobs`, `findJob`, `postedLabel`. Swap this for a DB-backed loader later without touching the components (they take `Job` objects).
- `src/data/site.ts`: company details, stats, sectors, testimonials, form names/endpoint, and the `image(file, width)` Image CDN helper.
- `public/__forms.html`: the static registration Netlify needs to detect the JS-rendered forms. **Every field a form submits must be listed here with the same name.** Update it whenever you change form fields.
- `public/img/`: AI-generated photos (PNG). Always reference them through `image()`, never directly.

## Conventions

- Design tokens live in `@theme` in `src/styles.css` (ink, forest, moss, sage, cream, paper, saffron, clay; Fraunces display + Instrument Sans body). Use the `btn-primary`, `btn-dark`, `btn-ghost`, `eyebrow`, `chip`, `form-input`, and `form-label` utilities instead of one-off styles.
- Forms POST to `/__forms.html` (not `/`, which the SSR function would intercept). Forms with a file input are sent as multipart with no Content-Type header. Everything else is URL-encoded. A response that echoes the registration HTML counts as a failure, so local previews don't fake success.
- The job board's filters live in the URL search params (`q`, `sector`, `location`, `type`) and are updated with `replace: true`.
- Use UK English and £ in copy. The location and contact details are placeholders the owner should confirm.
- Don't run build, dev, or typecheck commands in agent sessions. The deploy pipeline validates them.
