import { Link } from '@tanstack/react-router'
import { Route } from '@/routes/artist.$id'
import { useArtistDetails } from '../hooks/useArtistDetails'
import { useTopSongs } from '../hooks/useTopSongs'
import { SafeImage } from '@/shared/components/SafeImage'
import { TopSongsList } from './TopSongsList'
import { GlobalError } from '@/shared/components/GlobalError'

function SkeletonDetail() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-64 w-full rounded-2xl bg-gray-200 sm:h-80" />
      <div className="h-8 w-1/2 rounded bg-gray-200" />
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-4/6 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export function ArtistDetails() {
  const { id } = Route.useParams()
  const { data: artist, isLoading, isError, refetch } = useArtistDetails(id)
  const { data: songs = [], isLoading: songsLoading } = useTopSongs(artist?.name ?? '')

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <SkeletonDetail />
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
          <SafeImage
            src={artist.imageUrl}
            alt={artist.name}
            className="h-64 w-full object-cover sm:h-80"
          />
          <div className="space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-900">{artist.name}</h1>

            <div>
              <h2 className="mb-3 text-base font-semibold text-gray-900">Biography</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                {artist.biography || 'No biography available.'}
              </p>
            </div>
            {/* // API currently returns limited results (free tier), UI supports up to 3 items */}
            <div>
              <h2 className="mb-3 text-base font-semibold text-gray-900">Top Songs</h2>
              {songsLoading ? (
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 rounded-lg bg-gray-100" />
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
