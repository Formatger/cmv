import { useState } from 'react'
import { useNews } from '../hooks/useNews'
import Card from '../components/ui/Card'
import Spinner from '../components/ui/Spinner'
import EmptyState from '../components/ui/EmptyState'
import Pagination from '../components/ui/Pagination'

export default function News() {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useNews(page)

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Notícies</h1>
      {loading && <Spinner />}
      {error && <p className="text-red-500">Error en carregar les notícies.</p>}
      {!loading && !error && (
        <>
          {data?.results?.length === 0 && <EmptyState message="No hi ha notícies publicades." />}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.results?.map((a) => <Card key={a.id} article={a} />)}
          </div>
          <Pagination page={page} count={data?.count ?? 0} onPage={setPage} />
        </>
      )}
    </div>
  )
}
