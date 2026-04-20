import { createFileRoute } from '@tanstack/react-router'
import { ArtistDetails } from '../features/artists/components/ArtistDetails'

export const Route = createFileRoute('/artist/$id')({
  component: ArtistDetails,
})
