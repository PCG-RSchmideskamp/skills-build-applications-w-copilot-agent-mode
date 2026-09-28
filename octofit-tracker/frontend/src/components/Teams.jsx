import { hasCodespaceName } from '../api.js'
import ResourceTable from './ResourceTable.jsx'

const endpoint = hasCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { label: 'Name', render: (t) => t.name },
  { label: 'Members', render: (t) => (Array.isArray(t.members) ? t.members.length : 0) },
]

function Teams() {
  return <ResourceTable title="Teams" endpoint={endpoint} columns={columns} />
}

export default Teams
