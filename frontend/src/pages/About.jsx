import { usePageContent } from '../hooks/usePageContent'
import Spinner from '../components/ui/Spinner'

export default function About() {
  const { data, loading, error } = usePageContent('about')

  if (loading) return <Spinner />
  if (error) return <p className="text-gray-500">Contingut no disponible.</p>

  return (
    <article className="max-w-3xl mx-auto">
      {data?.image && (
        <img src={data.image} alt={data.title} className="w-full max-h-80 object-cover rounded-xl mb-8" />
      )}
      <h1 className="text-3xl font-bold text-primary mb-6">{data?.title ?? 'Sobre nosaltres'}</h1>
      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{data?.body}</div>
    </article>
  )
}
