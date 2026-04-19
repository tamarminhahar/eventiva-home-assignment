import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { queryKeys } from '@/shared/lib/queryKeys'
import { searchArtists } from '../services/artistService'

export function useArtistSearch(q: string) {
  const debouncedQ = useDebounce(q.trim(), 300)

  return useQuery({
    queryKey: queryKeys.artists.search(debouncedQ),
    queryFn: ({ signal }) => searchArtists(debouncedQ, signal),
    enabled: debouncedQ.length >= 2,
  })
}
