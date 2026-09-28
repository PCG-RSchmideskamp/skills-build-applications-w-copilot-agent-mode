import { hasCodespaceName } from '../api.js'
import ResourceTable from './ResourceTable.jsx'

const endpoint = hasCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { label: 'Name', render: (w) => w.name },
  { label: 'Level', render: (w) => <span className="badge text-bg-info">{w.level}</span> },
  { label: 'Description', render: (w) => w.description ?? '-' },
]

function Workouts() {
  return <ResourceTable title="Workouts" endpoint={endpoint} columns={columns} />
}

export default Workouts
