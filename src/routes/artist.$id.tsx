import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artist/$id')({
  component: () => <div>Artist Details Page</div>,
})
