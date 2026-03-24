import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

const links = [
  { to: '/noticies', label: 'Notícies' },
  { to: '/esdeveniments', label: 'Esdeveniments' },
  { to: '/socis', label: 'Socis' },
  { to: '/membres', label: 'Membres de la Junta' },
  { to: '/sobre-nosaltres', label: 'Sobre nosaltres' },
  { to: '/protocols', label: 'Protocols i Manuals' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary shadow-lg border-b-2 border-gold/40 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
          <img src={logo} alt="CMV - Col·lectiu de Músics de Vilassar" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'px-4 py-2 rounded-lg text-sm font-semibold bg-gold text-gray-900 transition-all'
                  : 'px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200'
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://cmv.server.tmisl.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-bold bg-gold text-gray-900 hover:brightness-110 shadow-md ring-2 ring-gold/60 transition-all duration-200"
          >
            Reserves
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-white/10 px-4 pb-4 pt-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm font-medium mb-1 ${
                  isActive
                    ? 'bg-gold text-gray-900'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } transition-all duration-200`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://cmv.server.tmisl.es/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-bold mt-2 bg-gold text-gray-900 text-center shadow-md ring-2 ring-gold/60 transition-all duration-200"
          >
            Reserves
          </a>
        </nav>
      )}
    </header>
  )
}
