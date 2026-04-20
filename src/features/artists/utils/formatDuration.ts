export const formatDuration = (ms: string | null): string => {
  if (!ms) return '—'

  const totalSeconds = Math.floor(Number(ms) / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
