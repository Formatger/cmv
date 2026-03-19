import { useState } from 'react'
import { useEvents } from '../hooks/useEvents'
import EventCard from '../components/ui/EventCard'
import Spinner from '../components/ui/Spinner'
import EmptyState from '../components/ui/EmptyState'

export default function Events() {
  const [filter, setFilter] = useState('all')
  const upcoming = filter === 'upcoming' ? true : filter === 'past' ? false : undefined
  const { data, loading, error } = useEvents(upcoming)

  const events = data?.results ?? data ?? []

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Esdeveniments</h1>

      <div className="flex gap-2 mb-8">
        {[['upcoming', 'Propers'], ['past', 'Passats'], ['all', 'Tots']].map(([val, label]) => (
          <button
            key={val}
            onClick={() => setFilter(val)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === val ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {loading && <Spinner />}
      {error && <p className="text-red-500">Error en carregar els esdeveniments.</p>}
      {!loading && !error && (
        events.length === 0
          ? <EmptyState message="No hi ha esdeveniments en aquesta categoria." />
          : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
      )}
    </div>
  )
}
