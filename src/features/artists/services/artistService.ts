// import { apiClient } from '@/shared/lib/apiClient'
// import { mapArtist } from './artistMapper'
// import type { SearchArtistsResponse } from '../types/api.types'
// import type { Artist } from '../types/artist.types'

// const BASE_URL = 'https://www.theaudiodb.com/api/v1/json/2'

// export const searchArtists = async (
//   artistName: string,
//   signal?: AbortSignal,
// ): Promise<Artist[]> => {
//   const trimmedName = artistName.trim()
//   if (!trimmedName) return []

//   const url = `${BASE_URL}/search.php?s=${encodeURIComponent(trimmedName)}`
//   const data = await apiClient<SearchArtistsResponse>(url, signal)

//   return (data.artists ?? []).map(mapArtist)
// }
import { API_BASE_URL } from '@/shared/lib/apiClient'
import { apiClient } from '@/shared/lib/apiClient'

export const searchArtists = async (artistName: string, signal?: AbortSignal) => {
  const trimmed = artistName.trim()
  if (!trimmed) return []

  const url = `${API_BASE_URL}/search.php?s=${encodeURIComponent(trimmed)}`
  return apiClient(url, signal)
}
