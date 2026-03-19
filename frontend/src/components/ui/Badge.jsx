export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-gray-900 text-white',
    gold: 'bg-gold text-gray-900',
    green: 'bg-gold text-gray-900',
    gray: 'bg-gray-200 text-gray-600',
  }
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant] ?? variants.default}`}>
      {children}
    </span>
  )
}
