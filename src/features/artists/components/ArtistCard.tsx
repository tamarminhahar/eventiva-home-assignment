import { Link } from '@tanstack/react-router'
import { SafeImage } from '@/shared/components/SafeImage'
import type { Artist } from '../types/artist'

interface Props {
  artist: Artist
}

export function ArtistCard({ artist }: Props) {
  return (
    <Link
      to="/artist/$id"
      params={{ id: artist.id }}
      className="group block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
    >
      <SafeImage
        src={artist.imageUrl}
        alt={artist.name}
        className="aspect-square w-full object-cover"
      />
      <div className="p-3">
        <p className="truncate font-medium text-gray-900">{artist.name}</p>
      </div>
    </Link>
  )
}
