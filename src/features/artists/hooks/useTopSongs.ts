import { useQuery } from '@tanstack/react-query'
import { getTopSongs } from '../services/artistService'

export function useTopSongs(artistName: string) {
  return useQuery({
    queryKey: ['artists', 'topSongs', artistName],
    queryFn: ({ signal }) => getTopSongs(artistName, signal),
    enabled: artistName.length > 0,
  })
}
