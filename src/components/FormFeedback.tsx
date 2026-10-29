import type { FormStatus } from './useNetlifyForm'

export function FormFeedback({
  status,
  success,
  onReset,
  resetLabel,
}: {
  status: FormStatus
  success: React.ReactNode
  onReset: () => void
  resetLabel: string
}) {
  return (
    <>
      <p role="status" className="sr-only">
        {status === 'pending' ? 'Sending…' : ''}
      </p>
      {status === 'error' && (
        <p
          role="alert"
          className="rounded-xl bg-clay/10 px-4 py-3 text-sm text-clay"
        >
          We couldn’t send that just now. Your details are still here — please
          try again, or email us directly.
        </p>
      )}
      {status === 'success' && (
        <div className="rounded-2xl bg-sage/50 p-5" role="status">
          <p className="font-display text-xl text-forest">{success}</p>
          <button
            type="button"
            className="mt-3 text-sm underline"
            onClick={onReset}
          >
            {resetLabel}
          </button>
        </div>
      )}
    </>
  )
}
