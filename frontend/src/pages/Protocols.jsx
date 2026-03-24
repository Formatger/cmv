import { useProtocols } from '../hooks/useProtocols'
import Spinner from '../components/ui/Spinner'
import EmptyState from '../components/ui/EmptyState'

const CATEGORY_ORDER = ['sala', 'normes', 'formularis', 'altres']

function FileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
    </svg>
  )
}

export default function Protocols() {
  const { data, loading, error } = useProtocols()

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">Error en carregar els protocols.</p>

  // Group by category
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = data.filter((p) => p.category === cat)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Protocols i Manuals</h1>
      <p className="text-gray-500 mb-8">Documentació i normativa d'ús de les sales i espais del CMV.</p>

      {data.length === 0 ? (
        <EmptyState message="Encara no hi ha protocols publicats." />
      ) : (
        <div className="space-y-10">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat}>
              <h2 className="text-lg font-bold text-primary border-b-2 border-gold/30 pb-2 mb-4">
                {items[0].category_display}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((protocol) => (
                  <a
                    key={protocol.id}
                    href={protocol.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all duration-200 group"
                  >
                    <FileIcon />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 group-hover:text-gold transition-colors duration-200 leading-snug">
                        {protocol.title}
                      </p>
                      {protocol.description && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{protocol.description}</p>
                      )}
                      <span className="inline-block mt-2 text-xs font-medium text-gold">
                        Descarregar / Veure →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
