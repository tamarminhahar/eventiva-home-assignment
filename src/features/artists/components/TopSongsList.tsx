import type { Song } from '../types/song.types'
import { SongItem } from './SongItem'

interface Props {
  songs: Song[]
}

export function TopSongsList({ songs }: Props) {
  if (!songs.length) return <p className="text-sm text-gray-400">No songs available.</p>
  console.log('songs in top songs list', songs)

  return (
    <ul className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
      {songs.slice(0, 3).map((song, i) => (
        <SongItem key={song.id} song={song} index={i + 1} />
      ))}
    </ul>
  )
}
