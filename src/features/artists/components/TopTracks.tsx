import { EmptyState } from '@/shared/components/EmptyState'
import { ErrorState } from '@/shared/components/ErrorState'
import { Skeleton } from '@/shared/components/Skeleton'
import { useArtistDetails } from '../hooks/useArtistDetails'
import { useTopTracks } from '../hooks/useTopTracks'

interface Props {
  id: string
}

export function TopTracks({ id }: Props) {
  const { data: artist } = useArtistDetails(id)
  const { data: tracks, isPending, isError, refetch } = useTopTracks(artist?.name)

  return (
    <section aria-labelledby="tracks-heading">
      <h2 id="tracks-heading" className="mb-3 text-xl font-semibold text-gray-900">
        Top Tracks
      </h2>

      {isPending && (
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-14 w-full rounded-md" />
          ))}
        </div>
      )}

      {isError && <ErrorState message="Failed to load tracks." onRetry={() => void refetch()} />}

      {!isPending && !isError && (!tracks || tracks.length === 0) && (
        <EmptyState message="No tracks available." />
      )}

      {tracks && tracks.length > 0 && (
        <ol className="space-y-2">
          {tracks.map((track, index) => (
            <li
              key={track.id}
              className="flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3"
            >
              <span className="w-4 font-mono text-sm text-gray-400">{index + 1}</span>
              <div>
                <p className="font-medium text-gray-900">{track.name}</p>
                {track.album && <p className="text-sm text-gray-500">{track.album}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
