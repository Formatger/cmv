import { useParams, Link } from 'react-router-dom'
import { useEventDetail } from '../hooks/useEvents'
import Badge from '../components/ui/Badge'
import Spinner from '../components/ui/Spinner'

export default function EventDetail() {
  const { slug } = useParams()
  const { data, loading, error } = useEventDetail(slug)

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">Esdeveniment no trobat.</p>

  const dateStr = data?.date
    ? new Date(data.date).toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : ''
  const timeStr = data?.date
    ? new Date(data.date).toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' })
    : ''

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/esdeveniments" className="text-sm text-gold hover:underline mb-6 inline-block">← Tornar a esdeveniments</Link>
      {data?.image && (
        <img src={data.image} alt={data.title} className="w-full rounded-xl mb-8" />
      )}
      <div className="flex items-center gap-2 mb-3">
        <Badge variant={data?.is_upcoming ? 'green' : 'gray'}>{data?.is_upcoming ? 'Proper' : 'Passat'}</Badge>
        {!data?.price && <Badge variant="gold">Entrada lliure</Badge>}
      </div>
      <h1 className="text-3xl font-bold text-primary mb-4">{data?.title}</h1>
      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-700 space-y-1">
        <p><span className="font-medium">Data:</span> <span className="capitalize">{dateStr}</span> a les {timeStr}</p>
        <p><span className="font-medium">Lloc:</span> {data?.location}</p>
        {data?.address && <p><span className="font-medium">Adreça:</span> {data.address}</p>}
        {data?.price && <p><span className="font-medium">Preu:</span> {data.price} €</p>}
      </div>
      {data?.description && (
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">{data.description}</div>
      )}
      {data?.url_tickets && (
        <a
          href={data.url_tickets}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-gold/90 transition-colors"
        >
          Comprar entrades
        </a>
      )}
    </article>
  )
}
