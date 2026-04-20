interface Props {
  id: string
}

export function ArtistDetails({ id }: Props) {
  return <section aria-label={`Artist ${id}`} />
}
