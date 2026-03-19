export default function EmptyState({ message = 'No hi ha contingut disponible.' }) {
  return (
    <div className="text-center py-16 text-gray-500">
      <p className="text-lg">{message}</p>
    </div>
  )
}
