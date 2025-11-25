import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let active = true
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        const json = (await res.json()) as T
        if (active) {
          setData(json)
          setError(null)
        }
      } catch (e) {
        if (active) {
          setError(e as Error)
          setData(null)
        }
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchData()
    return () => {
      active = false
    }
  }, [url])

  return { data, loading, error }
}