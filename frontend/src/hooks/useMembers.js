import { useState, useEffect } from 'react'
import { getMembers } from '../api/members'

export function useMembers() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMembers()
      .then((res) => setData(res.results ?? res))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
