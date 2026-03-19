import { Link } from 'react-router-dom'

export default function Card({ article }) {
  const { slug, title, excerpt, image, pub_date } = article
  const date = pub_date
    ? new Date(pub_date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <Link
      to={`/noticies/${slug}`}
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
            <span className="text-gold/60 text-5xl">♪</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        {date && (
          <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">{date}</p>
        )}
        <h3 className="font-bold text-gray-900 group-hover:text-gold transition-colors duration-200 leading-snug mb-2 line-clamp-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{excerpt}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all duration-200">
          Llegir més <span>→</span>
        </span>
      </div>
    </Link>
  )
}
