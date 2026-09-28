import { getEndpoint } from '../api.js'
import { useResource } from '../useResource.js'

function ResourceTable({ title, component, columns }) {
  const { items, loading, error } = useResource(component)

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title h4">{title}</h2>
        <p className="text-muted small mb-3">
          Endpoint: <code>{getEndpoint(component)}</code>
        </p>

        {loading && <div className="spinner-border text-primary" role="status" aria-label="Loading" />}
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          items.length === 0 ? (
            <p className="text-muted">No {title.toLowerCase()} found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    {columns.map((column) => (
                      <th key={column.label} scope="col">{column.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item._id ?? item.id ?? index}>
                      {columns.map((column) => (
                        <td key={column.label}>{column.render(item, index)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ResourceTable
