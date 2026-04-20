import { useQuery } from '@tanstack/react-query'
import { getArtistById } from '../services/artistService'

export function useArtistDetails(id: string) {
  return useQuery({
    queryKey: ['artists', 'detail', id],
    queryFn: ({ signal }) => getArtistById(id, signal),
  })
}
