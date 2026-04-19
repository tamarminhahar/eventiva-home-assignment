import { ErrorState } from '@/shared/components/ErrorState'
import { Skeleton } from '@/shared/components/Skeleton'
import { useArtistDetails } from '../hooks/useArtistDetails'

interface Props {
  id: string
}

export function Biography({ id }: Props) {
  const { data, isPending, isError, refetch } = useArtistDetails(id)

  if (isPending) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    )
  }

  if (isError) {
    return <ErrorState message="Failed to load biography." onRetry={() => void refetch()} />
  }

  return (
    <section aria-labelledby="bio-heading">
      <h2 id="bio-heading" className="mb-3 text-xl font-semibold text-gray-900">
        Biography
      </h2>
      <p className="whitespace-pre-line leading-relaxed text-gray-600">
        {data.biography?.trim() || 'No biography available.'}
      </p>
    </section>
  )
}
