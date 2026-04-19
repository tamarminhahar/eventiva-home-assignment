interface Props {
  q: string
  onChange: (q: string) => void
  isPending: boolean
}

export function SearchBar({ q, onChange, isPending }: Props) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="artist-search" className="sr-only">
        Search for an artist
      </label>
      <input
        id="artist-search"
        type="search"
        value={q}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search artists…"
        aria-busy={isPending}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
    </form>
  )
}
