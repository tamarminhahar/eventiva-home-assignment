interface Props {
  message: string
}

export function EmptyState({ message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-gray-500">{message}</p>
    </div>
  )
}
