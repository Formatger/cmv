import { Link } from 'react-router-dom'
import { usePageContent } from '../hooks/usePageContent'
import { useNews } from '../hooks/useNews'
import { useEvents } from '../hooks/useEvents'
import Card from '../components/ui/Card'
import EventCard from '../components/ui/EventCard'
import Spinner from '../components/ui/Spinner'

function SectionHeader({ title, accent, linkTo, linkLabel }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-black text-gray-900">
          {title} <span className="text-gold">{accent}</span>
        </h2>
        <div className="mt-1.5 h-1 w-12 bg-gold rounded-full" />
      </div>
      <Link
        to={linkTo}
        className="text-sm font-semibold text-gray-500 hover:text-gold transition-colors flex items-center gap-1"
      >
        {linkLabel} <span>→</span>
      </Link>
    </div>
  )
}

export default function Home() {
  const { data: pageData, loading: pageLoading } = usePageContent('home')
  const { data: newsData, loading: newsLoading } = useNews(1)
  const { data: eventsData, loading: eventsLoading } = useEvents()

  return (
    <div>
      {/* Hero */}
      <section className="relative rounded-3xl overflow-hidden bg-primary text-white px-8 py-20 mb-16 text-center">
        {/* Green radial glow */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, #7DC142, transparent)' }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(125,193,66,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(125,193,66,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10">
          <span className="inline-block bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-gold/30">
            Col·lectiu de Músics de Vilasar de Dalt
          </span>

          {pageLoading ? (
            <Spinner />
          ) : pageData ? (
            <>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{pageData.title}</h1>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">{pageData.body}</p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Música en directe</h1>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">Al cor del Maresme.</p>
            </>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/esdeveniments"
              className="px-6 py-3 bg-gold text-gray-900 font-bold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-200 text-sm"
            >
              Propers concerts
            </Link>
            <Link
              to="/sobre-nosaltres"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 text-sm border border-white/20"
            >
              Qui som
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="mb-16">
        <SectionHeader title="Propers" accent="esdeveniments" linkTo="/esdeveniments" linkLabel="Veure tots" />
        {eventsLoading ? (
          <Spinner />
        ) : eventsData?.results?.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.results.slice(0, 3).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        ) : (
          <p className="text-gray-400">No hi ha esdeveniments publicats.</p>
        )}
      </section>

      {/* News */}
      <section>
        <SectionHeader title="Últimes" accent="notícies" linkTo="/noticies" linkLabel="Veure totes" />
        {newsLoading ? (
          <Spinner />
        ) : newsData?.results?.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.results.slice(0, 3).map((a) => <Card key={a.id} article={a} />)}
          </div>
        ) : (
          <p className="text-gray-400">No hi ha notícies publicades.</p>
        )}
      </section>
    </div>
  )
}
