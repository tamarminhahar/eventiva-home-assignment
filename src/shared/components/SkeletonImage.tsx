interface Props {
  className?: string
}

export function SkeletonImage({ className = '' }: Props) {
  return <div className={`bg-gray-200 animate-pulse ${className}`} />
}
