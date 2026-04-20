export interface Artist {
  id: string
  name: string
  imageUrl: string | null
}

export interface ArtistDetail {
  id: string
  name: string
  imageUrl: string | null
  biography: string | null
}
