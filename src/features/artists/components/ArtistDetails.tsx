import { Link } from '@tanstack/react-router'
import { Route } from '@/routes/artist.$id'
import { useArtistDetails } from '../hooks/useArtistDetails'
import { useTopSongs } from '../hooks/useTopSongs'
import { SafeImage } from '@/shared/components/SafeImage'
import { TopSongsList } from './TopSongsList'
import { GlobalError } from '@/shared/components/GlobalError'
import { useState } from 'react'
import { SkeletonText } from '@/shared/components/SkeletonText'
import { SkeletonImage } from '@/shared/components/SkeletonImage'
export function ArtistDetails() {
  const { id } = Route.useParams()
  const { data: artist, isLoading, isError, refetch } = useArtistDetails(id)
  const { data: songs = [], isLoading: songsLoading } = useTopSongs(artist?.name ?? '')
  const [isExpanded, setIsExpanded] = useState(false)
  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 px-4 py-16">
        <div className="flex justify-center rounded-2xl bg-gray-100 p-6">
          <SkeletonImage className="h-64 w-64 rounded-2xl sm:h-80 sm:w-80" />
        </div>

        <SkeletonText className="h-8 w-1/2" />

        <div className="space-y-2">
          <SkeletonText />
          <SkeletonText className="w-5/6" />
          <SkeletonText className="w-4/6" />
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <GlobalError message="Couldn't load artist details." onRetry={() => void refetch()} />
      </div>
    )
  }

  if (!artist) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center text-sm text-gray-500">
        Artist not found.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline"
        >
          ← Back to search
        </Link>

        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex justify-center bg-gray-50 px-6 pt-6 pb-4">
            <SafeImage
              src={artist.imageUrl}
              alt={artist.name}
              className="h-48 w-48 rounded-2xl object-cover shadow-md sm:h-56 sm:w-56"
            />
          </div>
          <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-900">{artist.name}</h1>

            <div>
              <h2 className="mb-3 text-base font-semibold text-gray-900">Biography</h2>

              <p
                className={`text-sm leading-relaxed text-gray-600 ${
                  isExpanded ? '' : 'line-clamp-3'
                }`}
              >
                {artist.biography || 'No biography available.'}
              </p>

              {artist.biography && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="mt-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {isExpanded ? 'Show less ▲' : 'Show more ▼'}
                </button>
              )}
            </div>
            {/* // API currently returns limited results (free tier), UI supports up to 3 items */}
            <div>
              <h2 className="mb-3 text-base font-semibold text-gray-900">Top Songs</h2>
              {songsLoading ? (
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map((i) => (
                    <SkeletonText key={i} className="h-10 rounded-lg bg-gray-100" />
                  ))}
                </div>
              ) : (
                <TopSongsList songs={songs} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
