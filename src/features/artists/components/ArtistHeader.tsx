import { ErrorState } from '@/shared/components/ErrorState'
import { SafeImage } from '@/shared/components/SafeImage'
import { Skeleton } from '@/shared/components/Skeleton'
import { useArtistDetails } from '../hooks/useArtistDetails'

interface Props {
  id: string
}

export function ArtistHeader({ id }: Props) {
  const { data, isPending, isError, refetch } = useArtistDetails(id)

  if (isPending) {
    return (
      <div className="flex items-start gap-6">
        <Skeleton className="size-32 flex-shrink-0 rounded-full" />
        <Skeleton className="mt-2 h-8 w-48" />
      </div>
    )
  }

  if (isError) {
    return <ErrorState message="Failed to load artist." onRetry={() => void refetch()} />
  }

  return (
    <div className="flex items-start gap-6">
      <SafeImage
        src={data.imageUrl}
        alt={data.name}
        className="size-32 flex-shrink-0 rounded-full object-cover"
      />
      <h1 className="mt-2 text-3xl font-bold text-gray-900">{data.name}</h1>
    </div>
  )
}
