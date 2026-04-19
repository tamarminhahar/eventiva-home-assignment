export const queryKeys = {
  artists: {
    search: (q: string) => ['artists', 'search', q] as const,
    detail: (id: string) => ['artists', 'detail', id] as const,
    tracks: (artistName: string) => ['artists', 'tracks', artistName] as const,
  },
}
