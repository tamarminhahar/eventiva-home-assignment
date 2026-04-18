import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div className="bg-red-500 p-4 text-white">Search Page</div>,
})
