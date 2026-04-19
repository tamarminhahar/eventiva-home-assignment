interface Props {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <p className="text-red-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          Try again
        </button>
      )}
    </div>
  )
}
