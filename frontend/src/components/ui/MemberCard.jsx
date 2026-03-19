import Badge from './Badge'

export default function MemberCard({ member }) {
  const { name, bio, photo, instruments, joined_year } = member

  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden h-64">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center">
            <span className="text-gold/40 text-6xl">♪</span>
          </div>
        )}
        {/* Gradient overlay with name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-white text-lg drop-shadow-md">{name}</h3>
          {joined_year && (
            <p className="text-xs text-white/70 mt-0.5">Des de {joined_year}</p>
          )}
        </div>
      </div>

      <div className="p-4">
        {instruments?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {instruments.map((i) => <Badge key={i.id} variant="gold">{i.name}</Badge>)}
          </div>
        )}
        {bio && <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{bio}</p>}
      </div>
    </div>
  )
}
