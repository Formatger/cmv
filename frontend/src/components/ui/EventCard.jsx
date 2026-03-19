import { Link } from 'react-router-dom'
import Badge from './Badge'

export default function EventCard({ event }) {
  const { slug, title, description, date, location, image, is_upcoming, price } = event
  const dateStr = new Date(date).toLocaleDateString('ca-ES', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
  const timeStr = new Date(date).toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' })

  return (
    <Link
      to={`/esdeveniments/${slug}`}
      className="group block bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden h-48">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center">
            <span className="text-gold/40 text-5xl">🎵</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {/* Status badge overlaid on image */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={is_upcoming ? 'green' : 'gray'}>
            {is_upcoming ? 'Proper' : 'Passat'}
          </Badge>
          {(price === null || price === undefined) && (
            <Badge variant="gold">Entrada lliure</Badge>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 group-hover:text-gold transition-colors duration-200 leading-snug mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
          <span className="text-gold">📅</span>
          <span className="capitalize">{dateStr} · {timeStr}</span>
        </div>
        {location && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="text-gold">📍</span>
            <span>{location}</span>
          </div>
        )}
        {description && (
          <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">{description}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all duration-200">
          Veure detalls <span>→</span>
        </span>
      </div>
    </Link>
  )
}
