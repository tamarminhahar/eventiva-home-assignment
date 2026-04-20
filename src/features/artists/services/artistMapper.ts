import type { Artist, ArtistDetail } from '../types/artist.types'
import type { RawArtist, RawSong } from '../types/api.types'
import type { Song } from '../types/song.types'

export const mapArtist = (raw: RawArtist): Artist => ({
  id: raw.idArtist,
  name: raw.strArtist,
  imageUrl: raw.strArtistThumb || null,
})

export const mapArtistDetail = (raw: RawArtist): ArtistDetail => ({
  id: raw.idArtist,
  name: raw.strArtist,
  imageUrl: raw.strArtistThumb || null,
  biography: raw.strBiography || null,
})

export const mapSong = (raw: RawSong): Song => ({
  id: raw.idTrack,
  name: raw.strTrack,
  duration: raw.intDuration || null,
  album: raw.strAlbum || null,
})
