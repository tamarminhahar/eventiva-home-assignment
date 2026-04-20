import type { Artist } from '../types/artist.types'
import type { RawArtist } from '../types/api.types'

export const mapArtist = (raw: RawArtist): Artist => ({
  id: raw.idArtist,
  name: raw.strArtist,
  imageUrl: raw.strArtistThumb || null,
})
