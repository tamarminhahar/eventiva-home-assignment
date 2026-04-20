import { useQuery } from '@tanstack/react-query'
import { searchArtists } from '../services/artistService'

export function useArtistSearch(searchTerm: string) {
  return useQuery({
    queryKey: ['artists', 'search', searchTerm],
    queryFn: ({ signal }) => searchArtists(searchTerm, signal),
    enabled: searchTerm.trim().length > 0,
  })
}
