import { useState, useEffect } from 'react'
import { getNews, getNewsDetail } from '../api/news'

export function useNews(page = 1) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getNews(page)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [page])

  return { data, loading, error }
}

export function useNewsDetail(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    getNewsDetail(slug)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { data, loading, error }
}
