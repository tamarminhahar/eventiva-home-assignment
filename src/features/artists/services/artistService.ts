import { apiFetch } from '@/shared/lib/apiClient'
import type { Artist, ArtistDetail, Track } from '../types/artist'

// Raw shapes returned by TheAudioDB — never leave this file
interface RawArtist {
  idArtist: string
  strArtist: string
  strArtistThumb: string | null
  strBiographyEN: string | null
}

interface RawTrack {
  idTrack: string
  strTrack: string
  intDuration: string | null
  strAlbum: string | null
}

interface ArtistResponse {
  artists: RawArtist[] | null
}

interface TrackResponse {
  track: RawTrack[] | null
}

export class ArtistNotFoundError extends Error {
  constructor(id: string) {
    super(`Artist with id "${id}" not found`)
    this.name = 'ArtistNotFoundError'
  }
}

function mapArtist(raw: RawArtist): Artist {
  return {
    id: raw.idArtist,
    name: raw.strArtist,
    imageUrl: raw.strArtistThumb ?? null,
  }
}

function mapArtistDetail(raw: RawArtist): ArtistDetail {
  return {
    id: raw.idArtist,
    name: raw.strArtist,
    imageUrl: raw.strArtistThumb ?? null,
    biography: raw.strBiographyEN ?? null,
  }
}

function mapTrack(raw: RawTrack): Track {
  return {
    id: raw.idTrack,
    name: raw.strTrack,
    duration: raw.intDuration ?? null,
    album: raw.strAlbum ?? null,
  }
}

export async function searchArtists(q: string, signal?: AbortSignal): Promise<Artist[]> {
  const data = await apiFetch<ArtistResponse>(`/search.php?s=${encodeURIComponent(q)}`, signal)
  return (data.artists ?? []).map(mapArtist)
}

export async function getArtistById(id: string, signal?: AbortSignal): Promise<ArtistDetail> {
  const data = await apiFetch<ArtistResponse>(`/artist.php?i=${encodeURIComponent(id)}`, signal)
  const first = data.artists?.[0]
  if (!first) throw new ArtistNotFoundError(id)
  return mapArtistDetail(first)
}

export async function getTopTracks(artistName: string, signal?: AbortSignal): Promise<Track[]> {
  const data = await apiFetch<TrackResponse>(
    `/track-top10.php?s=${encodeURIComponent(artistName)}`,
    signal
  )
  return (data.track ?? []).slice(0, 3).map(mapTrack)
}
