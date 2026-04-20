import type { Song } from '../types/song.types'

interface Props {
  song: Song
}

export function SongItem({ song }: Props) {
  return <li>{song.name}</li>
}
