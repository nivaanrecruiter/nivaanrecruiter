import { useRef, useState, type FormEvent } from 'react'
import { forms } from '../data/site'

export type FormStatus = 'idle' | 'pending' | 'success' | 'error'

// Submits a Netlify-registered form via AJAX. Multipart is used when the form
// contains a file input, so the browser must set the Content-Type boundary.
export function useNetlifyForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    const form = event.currentTarget
    const data = new FormData(form)
    const multipart = form.querySelector('input[type="file"]') !== null
    submitting.current = true
    setStatus('pending')
    try {
      const response = await fetch(forms.endpoint, {
        method: 'POST',
        ...(multipart
          ? { body: data }
          : {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(
                [...data.entries()].map(([k, v]) => [k, String(v)]),
              ).toString(),
            }),
        signal: AbortSignal.timeout(30000),
      })
      // A plain static preview echoes the registration file back with 200.
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Submission was not accepted')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return { status, submit, reset: () => setStatus('idle') }
}
