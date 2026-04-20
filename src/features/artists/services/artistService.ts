// import { API_BASE_URL } from '@/shared/lib/apiClient'
// import { apiClient } from '@/shared/lib/apiClient'

// export const searchArtists = async (artistName: string, signal?: AbortSignal) => {
//   const trimmed = artistName.trim()
//   if (!trimmed) return []

//   const url = `${API_BASE_URL}/search.php?s=${encodeURIComponent(trimmed)}`
//   return apiClient(url, signal)
// }
import { API_BASE_URL, apiClient } from '@/shared/lib/apiClient'
import type { Artist, ArtistDetail } from '../types/artist.types'
import type { Song } from '../types/song.types'
import type { SearchArtistsResponse, TopTracksResponse } from '../types/api.types'
import { mapArtist, mapArtistDetail, mapSong } from './artistMapper'

export const searchArtists = async (
  artistName: string,
  signal?: AbortSignal
): Promise<Artist[]> => {
  const trimmed = artistName.trim()
  if (!trimmed) return []

  const url = `${API_BASE_URL}/search.php?s=${encodeURIComponent(trimmed)}`
  const response = await apiClient<SearchArtistsResponse>(url, signal)

  return response.artists?.map(mapArtist) ?? []
}

export const getArtistById = async (
  id: string,
  signal?: AbortSignal
): Promise<ArtistDetail | null> => {
  const url = `${API_BASE_URL}/artist.php?i=${encodeURIComponent(id)}`
  const response = await apiClient<SearchArtistsResponse>(url, signal)

  return response.artists?.[0] ? mapArtistDetail(response.artists[0]) : null
}

export const getTopSongs = async (artistName: string, signal?: AbortSignal): Promise<Song[]> => {
  const trimmed = artistName.trim()
  if (!trimmed) return []

  const url = `${API_BASE_URL}/track-top10.php?s=${encodeURIComponent(trimmed)}`
  const response = await apiClient<TopTracksResponse>(url, signal)

  return response.track?.map(mapSong) ?? []
}
