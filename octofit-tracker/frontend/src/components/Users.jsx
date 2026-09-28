import { hasCodespaceName } from '../api.js'
import ResourceTable from './ResourceTable.jsx'

const endpoint = hasCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { label: 'Name', render: (u) => u.name },
  { label: 'Email', render: (u) => u.email },
]

function Users() {
  return <ResourceTable title="Users" endpoint={endpoint} columns={columns} />
}

export default Users
