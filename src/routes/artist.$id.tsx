import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'
import { ArtistHeader } from '@/features/artists/components/ArtistHeader'
import { Biography } from '@/features/artists/components/Biography'
import { TopTracks } from '@/features/artists/components/TopTracks'
import { useArtistDetails } from '@/features/artists/hooks/useArtistDetails'
import { ArtistNotFoundError } from '@/features/artists/services/artistService'
import { ErrorState } from '@/shared/components/ErrorState'

export const Route = createFileRoute('/artist/$id')({
  parseParams: (params) => ({
    id: z.string().min(1).parse(params['id']),
  }),
  component: ArtistDetailsPage,
})

function ArtistDetailsPage() {
  const { id } = Route.useParams()
  const { isError, error, refetch } = useArtistDetails(id)

  if (isError) {
    const isNotFound = error instanceof ArtistNotFoundError
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <ErrorState
          message={isNotFound ? 'Artist not found.' : 'Failed to load artist.'}
          onRetry={isNotFound ? undefined : () => void refetch()}
        />
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-gray-600 underline hover:text-gray-900">
            ← Back to search
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
        ← Back to search
      </Link>
      <ArtistHeader id={id} />
      <Biography id={id} />
      <TopTracks id={id} />
    </main>
  )
}
