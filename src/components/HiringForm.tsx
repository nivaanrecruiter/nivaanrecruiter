import { useState } from 'react'
import { forms, site } from '../data/site'
import { useNetlifyForm } from './useNetlifyForm'
import { FormFeedback } from './FormFeedback'

export function HiringForm() {
  const { status, submit, reset } = useNetlifyForm()
  const [formKey, setFormKey] = useState(0)
  const locked = status === 'pending' || status === 'success'

  return (
    <form
      key={formKey}
      name={forms.hiring}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      aria-busy={status === 'pending'}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value={forms.hiring} />
      <input type="hidden" name="subject" value="New hiring request" />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={locked} className="space-y-5 disabled:opacity-70">
        <legend className="sr-only">Your hiring request</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="hire-name" className="form-label">
              Your name
            </label>
            <input
              id="hire-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="hire-company" className="form-label">
              Company
            </label>
            <input
              id="hire-company"
              name="company"
              autoComplete="organization"
              required
              maxLength={150}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="hire-email" className="form-label">
              Work email
            </label>
            <input
              id="hire-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="hire-phone" className="form-label">
              Phone
            </label>
            <input
              id="hire-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="hire-role" className="form-label">
              Role you’re hiring for
            </label>
            <input
              id="hire-role"
              name="role"
              required
              maxLength={150}
              placeholder="e.g. Senior Data Engineer"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="hire-sector" className="form-label">
              Sector
            </label>
            <select
              id="hire-sector"
              name="sector"
              required
              className="form-input"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a sector
              </option>
              {site.sectors.map((sector) => (
                <option key={sector.name}>{sector.name}</option>
              ))}
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="hire-type" className="form-label">
              Hire type
            </label>
            <select
              id="hire-type"
              name="hire-type"
              required
              className="form-input"
              defaultValue="Permanent"
            >
              <option>Permanent</option>
              <option>Contract</option>
              <option>Temporary</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="hire-headcount" className="form-label">
              How many hires?
            </label>
            <input
              id="hire-headcount"
              name="headcount"
              type="number"
              min={1}
              max={500}
              defaultValue={1}
              required
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="hire-message" className="form-label">
            Tell us about the role
          </label>
          <textarea
            id="hire-message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
            placeholder="Team, must-have skills, salary range, and when you need someone to start."
            className="form-input"
          />
        </div>
        <button type="submit" className="btn-dark w-full sm:w-auto">
          {status === 'pending' ? 'Sending…' : 'Send hiring request'}
        </button>
      </fieldset>
      <FormFeedback
        status={status}
        success="Thanks — a specialist consultant will call you within one working day to scope the role."
        resetLabel="Send another request"
        onReset={() => {
          reset()
          setFormKey((k) => k + 1)
        }}
      />
    </form>
  )
}
