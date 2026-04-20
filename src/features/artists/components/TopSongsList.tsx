import type { Song } from '../types/song.types'
import { SongItem } from './SongItem'

interface Props {
  songs: Song[]
}

export function TopSongsList({ songs }: Props) {
  if (!songs.length) return null
  return (
    <ul>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </ul>
  )
}
