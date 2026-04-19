import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/shared/lib/queryKeys'
import { getArtistById } from '../services/artistService'

export function useArtistDetails(id: string) {
  return useQuery({
    queryKey: queryKeys.artists.detail(id),
    queryFn: ({ signal }) => getArtistById(id, signal),
  })
}
