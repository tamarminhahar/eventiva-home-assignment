// export interface RawArtist {
//   idArtist: string
//   strArtist: string
//   strArtistThumb: string | null
//   strBiographyEN: string | null
// }

export interface RawSong {
  idTrack: string
  strTrack: string
  intDuration: string | null
  strAlbum: string | null
}

export interface ArtistSearchResponse {
  artists: RawArtist[] | null
}

export interface TopSongsResponse {
  track: RawSong[] | null
}
export interface RawArtist {
  idArtist: string
  strArtist: string
  strArtistThumb: string | null
}

export interface SearchArtistsResponse {
  artists: RawArtist[] | null
}
