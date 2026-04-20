import { useArtistSearch } from '../hooks/useArtistSearch'
import { ArtistCard } from './ArtistCard'
import { EmptyState } from '@/shared/components/EmptyState'
import { GlobalError } from '@/shared/components/GlobalError'
import { SkeletonText } from '@/shared/components/SkeletonText'
import { SkeletonImage } from '@/shared/components/SkeletonImage'
interface Props {
  searchTerm: string
}

export function ArtistList({ searchTerm }: Props) {
  const { data, isLoading, isError, refetch } = useArtistSearch(searchTerm)

  if (!searchTerm) return null

  if (isLoading) {
    return (
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <SkeletonImage className="h-16 w-16 rounded-xl" />
              <SkeletonText className="w-1/2" />
            </div>
          </li>
        ))}
      </ul>
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
