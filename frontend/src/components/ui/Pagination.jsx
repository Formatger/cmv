export default function Pagination({ page, count, pageSize = 9, onPage }) {
  const totalPages = Math.ceil(count / pageSize)
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page <= 1}
        className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium disabled:opacity-30 hover:bg-gold hover:text-gray-900 transition-all duration-200 shadow-sm"
      >
        ← Anterior
      </button>
      <span className="text-sm text-gray-400 font-medium">
        {page} / {totalPages}
      </span>
      <button
        onClick={() => onPage(page + 1)}
        disabled={page >= totalPages}
        className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium disabled:opacity-30 hover:bg-gold hover:text-gray-900 transition-all duration-200 shadow-sm"
      >
        Següent →
      </button>
    </div>
  )
}
