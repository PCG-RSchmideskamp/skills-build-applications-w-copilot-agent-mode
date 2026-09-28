import { hasCodespaceName } from '../api.js'
import ResourceTable from './ResourceTable.jsx'

const endpoint = hasCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { label: 'Type', render: (a) => a.type },
  { label: 'Duration (min)', render: (a) => a.duration },
  { label: 'User', render: (a) => a.user?.name ?? a.user },
  { label: 'Date', render: (a) => (a.date ? new Date(a.date).toLocaleDateString() : '-') },
]

function Activities() {
  return <ResourceTable title="Activities" endpoint={endpoint} columns={columns} />
}

export default Activities
