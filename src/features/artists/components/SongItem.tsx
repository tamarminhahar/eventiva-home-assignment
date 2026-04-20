import type { Song } from '../types/song.types'
import { formatDuration } from '../utils/formatDuration'
interface Props {
  song: Song
  index: number
}

export function SongItem({ song, index }: Props) {
  return (
    <li className="flex items-center gap-4 rounded-lg px-3 py-2.5 transition hover:bg-gray-50">
      <span className="w-5 text-center text-sm font-medium text-gray-400">{index}</span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{song.name}</p>
        {song.album && <p className="truncate text-xs text-gray-400">{song.album}</p>}
      </div>
      <span className="text-xs text-gray-400">{formatDuration(song.duration)}</span>
    </li>
  )
}
