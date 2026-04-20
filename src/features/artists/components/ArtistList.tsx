import { useArtistSearch } from '../hooks/useArtistSearch'
import { ArtistCard } from './ArtistCard'
import { EmptyState } from '@/shared/components/EmptyState'
import { GlobalError } from '@/shared/components/GlobalError'

interface Props {
  searchTerm: string
}

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-100">
      <div className="aspect-square bg-gray-200" />
      <div className="px-3 py-2.5">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export function ArtistList({ searchTerm }: Props) {
  const { data, isLoading, isError, refetch } = useArtistSearch(searchTerm)

  if (!searchTerm) return null

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <GlobalError
        message="Couldn't load search results. Please try again."
        onRetry={() => void refetch()}
      />
    )
  }

  if (!data?.length) {
    return <EmptyState message={`No artists found for "${searchTerm}"`} />
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {data.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}
