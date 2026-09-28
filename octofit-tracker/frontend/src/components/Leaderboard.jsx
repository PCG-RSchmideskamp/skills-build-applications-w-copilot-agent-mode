import { hasCodespaceName } from '../api.js'
import ResourceTable from './ResourceTable.jsx'

const endpoint = hasCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { label: 'Rank', render: (_, index) => index + 1 },
  { label: 'User', render: (e) => e.user?.name ?? e.user },
  { label: 'Points', render: (e) => e.points ?? 0 },
]

function Leaderboard() {
  return <ResourceTable title="Leaderboard" endpoint={endpoint} columns={columns} />
}

export default Leaderboard
