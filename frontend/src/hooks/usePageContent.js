import { useState, useEffect } from 'react'
import { getPage } from '../api/pages'

export function usePageContent(page) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!page) return
    setLoading(true)
    getPage(page)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [page])

  return { data, loading, error }
}
