import { useState } from 'react'
import { forms } from '../data/site'
import type { Job } from '../data/jobs'
import { useNetlifyForm } from './useNetlifyForm'
import { FormFeedback } from './FormFeedback'

const MAX_CV_BYTES = 5 * 1024 * 1024

export function ApplicationForm({ job }: { job?: Job }) {
  const { status, submit, reset } = useNetlifyForm()
  const [fileError, setFileError] = useState('')
  const [formKey, setFormKey] = useState(0)
  const roleTitle = job ? job.title : 'General CV registration'
  const locked = status === 'pending' || status === 'success'

  return (
    <form
      key={formKey}
      name={forms.application}
      method="POST"
      encType="multipart/form-data"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(event) => {
        if (fileError) return event.preventDefault()
        submit(event)
      }}
      aria-busy={status === 'pending'}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value={forms.application} />
      <input type="hidden" name="subject" value={`Application: ${roleTitle}`} />
      <input type="hidden" name="job-id" value={job?.id ?? 'general'} />
      <input type="hidden" name="job-title" value={roleTitle} />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={locked} className="space-y-5 disabled:opacity-70">
        <legend className="sr-only">Your application</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="app-name" className="form-label">
              Full name
            </label>
            <input
              id="app-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="app-email" className="form-label">
              Email
            </label>
            <input
              id="app-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="app-phone" className="form-label">
              Phone
            </label>
            <input
              id="app-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={30}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="app-linkedin" className="form-label">
              LinkedIn or portfolio{' '}
              <span className="font-normal text-ink/50">(optional)</span>
            </label>
            <input
              id="app-linkedin"
              name="linkedin"
              type="url"
              placeholder="https://"
              maxLength={300}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="app-cv" className="form-label">
            CV{' '}
            <span className="font-normal text-ink/50">
              (PDF or Word, max 5 MB)
            </span>
          </label>
          <input
            id="app-cv"
            name="cv"
            type="file"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            aria-describedby={fileError ? 'app-cv-error' : undefined}
            onChange={(event) => {
              const file = event.target.files?.[0]
              setFileError(
                file && file.size > MAX_CV_BYTES
                  ? 'That file is over 5 MB. Please upload a smaller version.'
                  : '',
              )
            }}
            className="form-input file:mr-4 file:rounded-full file:border-0 file:bg-forest file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream"
          />
          {fileError && (
            <p id="app-cv-error" className="mt-2 text-sm text-clay">
              {fileError}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="app-message" className="form-label">
            {job ? 'Why this role?' : 'What are you looking for next?'}
          </label>
          <textarea
            id="app-message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={4}
            placeholder={
              job
                ? 'A few lines on what draws you to it and your notice period.'
                : 'Sectors, locations, salary expectations, and notice period.'
            }
            className="form-input"
          />
        </div>
        <label className="flex items-start gap-3 text-sm text-ink/70">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            className="mt-1 h-4 w-4 accent-forest"
          />
          I agree that Nivaan Recruitment may store my details and contact me
          about this and similar roles.
        </label>
        <button type="submit" className="btn-dark w-full sm:w-auto">
          {status === 'pending'
            ? 'Sending…'
            : job
              ? 'Submit application'
              : 'Register my CV'}
        </button>
      </fieldset>
      <FormFeedback
        status={status}
        success={
          job
            ? `Thanks — your application for ${job.title} is with ${job.consultant}. Expect a call within two working days.`
            : 'Thanks — you’re registered. A consultant in your sector will be in touch within two working days.'
        }
        resetLabel="Submit another application"
        onReset={() => {
          reset()
          setFormKey((k) => k + 1)
        }}
      />
    </form>
  )
}
