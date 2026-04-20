import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface Props {
  src: string | null | undefined
  alt: string
  className?: string
  fallback?: ReactNode
}

export function SafeImage({ src, alt, className = '', fallback }: Props) {
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    setErrored(false)
  }, [src])

  if (!src || errored) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="text-xs text-gray-400">No image</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} />
}
