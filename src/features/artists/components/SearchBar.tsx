import { useState } from 'react'

interface Props {
  onSearch: (term: string) => void
  isPending: boolean
}
const normalizeSearchTerm = (value: string) => value.trim().replace(/\s+/g, ' ')

export function SearchBar({ onSearch, isPending }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(normalizeSearchTerm(inputValue))
  }
  return (
    <form role="search" onSubmit={handleSubmit} className="relative flex items-center">
      <label htmlFor="artist-search" className="sr-only">
        Search for an artist
      </label>

      <div className="pointer-events-none absolute left-4 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 10.6 10.6z"
          />
        </svg>
      </div>

      <input
        id="artist-search"
        type="search"
        value={inputValue}
        onChange={(e) => {
          const nextValue = e.target.value
          setInputValue(nextValue)

          if (nextValue === '') {
            onSearch('')
          }
        }}
        placeholder="Search artists…"
        aria-busy={isPending}
        className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-28 text-base text-gray-900 shadow-sm placeholder:text-gray-400 transition focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />

      <button
        type="submit"
        disabled={isPending || !normalizeSearchTerm(inputValue)}
        className="absolute right-2 flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        Search
      </button>
    </form>
  )
}
