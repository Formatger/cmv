import { useState, useEffect } from 'react'
import { getEvents, getEventDetail } from '../api/events'

export function useEvents(upcoming) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getEvents(upcoming)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [upcoming])

  return { data, loading, error }
}

export function useEventDetail(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    getEventDetail(slug)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [slug])

  return { data, loading, error }
}
