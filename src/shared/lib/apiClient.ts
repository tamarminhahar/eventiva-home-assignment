/// <reference types="vite/client" />

const BASE_URL = import.meta.env.VITE_AUDIODB_BASE_URL
const API_KEY = import.meta.env.VITE_AUDIODB_KEY

export const API_BASE_URL = `${BASE_URL}/${API_KEY}`
export const apiClient = async <T>(url: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}
