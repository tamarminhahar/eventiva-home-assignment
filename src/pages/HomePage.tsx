import { useState } from 'react'
import { useIsFetching } from '@tanstack/react-query'
import { SearchBar } from '@/features/artists/components/SearchBar'
import { ArtistList } from '@/features/artists/components/ArtistList'

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const isFetching = useIsFetching({ queryKey: ['artists', 'search'] }) > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Find Your Artist</h1>
          <p className="mt-2 text-base text-gray-500">
            Search for any artist to explore their music
          </p>
        </header>

        <SearchBar onSearch={setSearchTerm} isPending={isFetching} />

        <div className="mt-10">
          <ArtistList searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  )
}
