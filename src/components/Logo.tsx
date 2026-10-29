export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
        <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.12" />
        <path
          d="M9 23V9l14 14V9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="9" r="2.4" fill="var(--color-saffron)" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">
        Nivaan
        <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] ml-2 opacity-70">
          Recruiter
        </span>
      </span>
    </span>
  )
}
