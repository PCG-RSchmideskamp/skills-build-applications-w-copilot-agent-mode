import ResourceTable from './ResourceTable.jsx'

const columns = [
  { label: 'Type', render: (a) => a.type },
  { label: 'Duration (min)', render: (a) => a.duration },
  { label: 'User', render: (a) => a.user?.name ?? a.user },
  { label: 'Date', render: (a) => (a.date ? new Date(a.date).toLocaleDateString() : '-') },
]

function Activities() {
  return <ResourceTable title="Activities" component="activities" columns={columns} />
}

export default Activities
