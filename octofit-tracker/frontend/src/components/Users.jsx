import ResourceTable from './ResourceTable.jsx'

const columns = [
  { label: 'Name', render: (u) => u.name },
  { label: 'Email', render: (u) => u.email },
]

function Users() {
  return <ResourceTable title="Users" component="users" columns={columns} />
}

export default Users
