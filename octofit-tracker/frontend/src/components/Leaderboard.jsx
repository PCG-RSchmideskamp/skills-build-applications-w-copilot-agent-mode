import ResourceTable from './ResourceTable.jsx'

const columns = [
  { label: 'Rank', render: (_, index) => index + 1 },
  { label: 'User', render: (e) => e.user?.name ?? e.user },
  { label: 'Points', render: (e) => e.points ?? 0 },
]

function Leaderboard() {
  return <ResourceTable title="Leaderboard" component="leaderboard" columns={columns} />
}

export default Leaderboard
