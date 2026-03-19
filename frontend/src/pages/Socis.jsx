import { useSocisIndividuals, useGrups } from '../hooks/useSocis'
import Spinner from '../components/ui/Spinner'
import EmptyState from '../components/ui/EmptyState'

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function SociRow({ soci }) {
  const instruments = soci.instruments?.map((i) => i.name).join(', ') || '—'
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <span className="font-medium text-gray-900">{soci.name}</span>
        {soci.grup_name && (
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{soci.grup_name}</span>
        )}
      </div>
      {soci.phone && (
        <a href={`tel:${soci.phone}`} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors">
          <PhoneIcon /> {soci.phone}
        </a>
      )}
      <div className="text-sm text-gold font-medium min-w-[120px] text-right hidden sm:block">{instruments}</div>
      <div className="text-sm text-gold font-medium sm:hidden">{instruments}</div>
    </div>
  )
}

function GrupCard({ grup }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
      {grup.image && (
        <img src={grup.image} alt={grup.name} className="w-full h-40 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-black text-primary mb-2">{grup.name}</h3>
        {grup.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{grup.description}</p>
        )}

        {/* Links d'interès */}
        {grup.links?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {grup.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold hover:bg-gold/20 transition-colors border border-gold/20"
              >
                <LinkIcon /> {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Membres del grup */}
        {grup.socis?.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Membres</h4>
            <div className="divide-y divide-gray-100">
              {grup.socis.map((soci) => (
                <SociRow key={soci.id} soci={soci} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Socis() {
  const { data: individuals, loading: loadingInd, error: errorInd } = useSocisIndividuals()
  const { data: grups, loading: loadingGrups, error: errorGrups } = useGrups()

  const loading = loadingInd || loadingGrups
  const error = errorInd || errorGrups

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Socis</h1>
      <p className="text-gray-500 mb-10">Membres del Col·lectiu de Músics de Vilassar de Dalt</p>

      {loading && <Spinner />}
      {error && <p className="text-red-500">Error en carregar els socis.</p>}

      {!loading && !error && (
        <>
          {/* Grups */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-black text-gray-900">Grups</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            {grups.length === 0 ? (
              <EmptyState message="No hi ha grups registrats." />
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {grups.map((g) => <GrupCard key={g.id} grup={g} />)}
              </div>
            )}
          </section>

          {/* Socis individuals */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-black text-gray-900">Socis individuals</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            {individuals.length === 0 ? (
              <EmptyState message="No hi ha socis individuals registrats." />
            ) : (
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <div className="hidden sm:grid grid-cols-3 gap-2 pb-2 mb-1 border-b-2 border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Nom</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Telèfon</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 text-right">Instruments</span>
                </div>
                {individuals.map((s) => <SociRow key={s.id} soci={s} />)}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  )
}
