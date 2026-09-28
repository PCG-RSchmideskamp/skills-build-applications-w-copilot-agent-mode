import ResourceTable from './ResourceTable.jsx'

const columns = [
  { label: 'Name', render: (t) => t.name },
  { label: 'Members', render: (t) => (Array.isArray(t.members) ? t.members.length : 0) },
]

function Teams() {
  return <ResourceTable title="Teams" component="teams" columns={columns} />
}

export default Teams
