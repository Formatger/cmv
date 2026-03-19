export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg text-white">Col·lectiu de Músics de Vilasar de Dalt</p>
            <p className="text-white/50 text-sm mt-1">Música en directe al Maresme</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-white/50">
            <p>Vilasar de Dalt, Maresme</p>
            <p className="text-white/30">© {new Date().getFullYear()} CMV</p>
            <a
              href="/admin/"
              className="text-white/25 hover:text-gold transition-colors text-xs mt-1"
            >
              Administrar
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
