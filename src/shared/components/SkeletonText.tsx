interface Props {
  className?: string
}

export function SkeletonText({ className = '' }: Props) {
  return <div className={`h-4 rounded bg-gray-200 animate-pulse ${className}`} />
}
