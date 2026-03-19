import { useParams, Link } from 'react-router-dom'
import { useNewsDetail } from '../hooks/useNews'
import Spinner from '../components/ui/Spinner'

export default function NewsDetail() {
  const { slug } = useParams()
  const { data, loading, error } = useNewsDetail(slug)

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">Article no trobat.</p>

  const date = data?.pub_date
    ? new Date(data.pub_date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/noticies" className="text-sm text-gold hover:underline mb-6 inline-block">← Tornar a notícies</Link>
      {data?.image && (
        <img src={data.image} alt={data.title} className="w-full max-h-96 object-cover rounded-xl mb-8" />
      )}
      {date && <p className="text-sm text-gray-400 mb-2">{date}</p>}
      <h1 className="text-3xl font-bold text-primary mb-4">{data?.title}</h1>
      {data?.excerpt && <p className="text-lg text-gray-600 mb-6 leading-relaxed">{data.excerpt}</p>}
      <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">{data?.body}</div>
    </article>
  )
}
