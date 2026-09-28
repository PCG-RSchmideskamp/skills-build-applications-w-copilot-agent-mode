// Without VITE_CODESPACE_NAME, components fall back to the local API instead of https://undefined-8000...
export const hasCodespaceName = Boolean(import.meta.env.VITE_CODESPACE_NAME?.trim())

// Accepts plain arrays, paginated `{ results: [...] }`, or `{ data: [...] }` payloads.
export function normalizeList(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchList(endpoint, signal) {
  const response = await fetch(endpoint, { signal })
  if (!response.ok) {
    throw new Error(`Request to ${endpoint} failed with status ${response.status}`)
  }
  const payload = await response.json()
  console.log(`Fetched ${endpoint}`, payload)
  return normalizeList(payload)
}
