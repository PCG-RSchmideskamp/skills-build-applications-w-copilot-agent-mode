const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

// Without VITE_CODESPACE_NAME, fall back to the local API instead of https://undefined-8000...
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getEndpoint(component) {
  return `${apiBaseUrl}/${component}/`
}

// Accepts plain arrays, paginated `{ results: [...] }`, or `{ data: [...] }` payloads.
export function normalizeList(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchList(component, signal) {
  const endpoint = getEndpoint(component)
  const response = await fetch(endpoint, { signal })
  if (!response.ok) {
    throw new Error(`Request to ${endpoint} failed with status ${response.status}`)
  }
  const payload = await response.json()
  console.log(`Fetched ${component} from ${endpoint}`, payload)
  return normalizeList(payload)
}
