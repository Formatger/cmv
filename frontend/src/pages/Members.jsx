import { useMembers } from '../hooks/useMembers'
import MemberCard from '../components/ui/MemberCard'
import Spinner from '../components/ui/Spinner'
import EmptyState from '../components/ui/EmptyState'

export default function Members() {
  const { data, loading, error } = useMembers()

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Membres</h1>
      {loading && <Spinner />}
      {error && <p className="text-red-500">Error en carregar els membres.</p>}
      {!loading && !error && (
        data.length === 0
          ? <EmptyState message="No hi ha membres registrats." />
          : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((m) => <MemberCard key={m.id} member={m} />)}
            </div>
      )}
    </div>
  )
}
