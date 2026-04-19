import { EmptyState } from '@/shared/components/EmptyState'
import { ErrorState } from '@/shared/components/ErrorState'
import { Skeleton } from '@/shared/components/Skeleton'
import type { Artist } from '../types/artist'
import { ArtistCard } from './ArtistCard'

interface Props {
  artists: Artist[] | undefined
  isPending: boolean
  isError: boolean
  onRetry: () => void
  query: string
}

const SKELETON_COUNT = 8

export function ArtistGrid({ artists, isPending, isError, onRetry, query }: Props) {
  const hasMinQuery = query.trim().length >= 2

  if (!hasMinQuery) return null

  if (isPending) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-gray-200">
            <Skeleton className="aspect-square w-full" />
            <div className="p-3">
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (isError) {
    return <ErrorState message="Failed to load artists." onRetry={onRetry} />
  }

  if (!artists || artists.length === 0) {
    return <EmptyState message={`No artists found for "${query.trim()}"`} />
  }

  return (
    <>
      <p className="sr-only" aria-live="polite">
        {artists.length} {artists.length === 1 ? 'artist' : 'artists'} found
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </>
  )
}
