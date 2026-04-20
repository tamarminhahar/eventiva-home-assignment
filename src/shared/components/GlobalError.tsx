interface Props {
  message?: string
  onRetry?: () => void
}

export function GlobalError({ message = 'Something went wrong.', onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
        <svg
          className="h-6 w-6 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z"
          />
        </svg>
      </div>
      <p className="text-sm font-medium text-gray-700">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          Try again
        </button>
      )}
    </div>
  )
}
