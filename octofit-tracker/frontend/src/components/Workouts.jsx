import ResourceTable from './ResourceTable.jsx'

const columns = [
  { label: 'Name', render: (w) => w.name },
  { label: 'Level', render: (w) => <span className="badge text-bg-info">{w.level}</span> },
  { label: 'Description', render: (w) => w.description ?? '-' },
]

function Workouts() {
  return <ResourceTable title="Workouts" component="workouts" columns={columns} />
}

export default Workouts
