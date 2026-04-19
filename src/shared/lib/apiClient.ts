const BASE_URL = `https://www.theaudiodb.com/api/v1/json/${import.meta.env.VITE_AUDIODB_KEY}`

export async function apiFetch<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal })
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }
  return response.json() as Promise<T>
}
