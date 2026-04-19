import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/lib/queryKeys'
import { getTopTracks } from '../services/artistService'

export function useTopTracks(artistName: string | undefined) {
  return useQuery({
    queryKey: queryKeys.artists.tracks(artistName ?? ''),
    queryFn: ({ signal }) => {
      if (!artistName) throw new Error('invariant: artistName must be defined when enabled')
      return getTopTracks(artistName, signal)
    },
    enabled: !!artistName,
  })
}
