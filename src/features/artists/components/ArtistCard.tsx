import { Link } from '@tanstack/react-router'
import { SafeImage } from '@/shared/components/SafeImage'
import type { Artist } from '../types/artist.types'

interface Props {
  artist: Artist
}

export function ArtistCard({ artist }: Props) {
  return (
    <Link to="/artist/$id" params={{ id: artist.id }}>
      <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
        <SafeImage
          src={artist.imageUrl}
          alt={artist.name}
          className="aspect-square w-full object-cover"
        />
        <div className="px-3 py-2.5">
          <p className="truncate text-sm font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
            {artist.name}
          </p>
        </div>
      </div>
    </Link>
  )
}
