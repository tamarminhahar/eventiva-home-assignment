import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'
import { ArtistGrid } from '@/features/artists/components/ArtistGrid'
import { SearchBar } from '@/features/artists/components/SearchBar'
import { useArtistSearch } from '@/features/artists/hooks/useArtistSearch'

const searchSchema = z.object({
  q: z.string().default(''),
})

export const Route = createFileRoute('/')({
  validateSearch: searchSchema,
  component: SearchPage,
})

function SearchPage() {
  const { q } = Route.useSearch()
  const navigate = useNavigate({ from: '/' })
  const { data, isPending, isError, refetch } = useArtistSearch(q)

  function handleSearch(value: string) {
    void navigate({ search: { q: value }, replace: true })
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Artist Search</h1>
      <div className="mb-6">
        <SearchBar q={q} onChange={handleSearch} isPending={isPending} />
      </div>
      <ArtistGrid
        artists={data}
        isPending={isPending}
        isError={isError}
        onRetry={() => void refetch()}
        query={q}
      />
    </main>
  )
}
