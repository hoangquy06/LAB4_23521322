import { useEffect, useState } from 'react'

type Post = { id: number; title: string }
const viPosts: Record<number, { title: string }> = {
  1: { title: 'Giới thiệu về React Router' },
  2: { title: 'Hướng dẫn sử dụng useEffect' },
  3: { title: 'Quản lý form trong React' },
  4: { title: 'So sánh fetch và axios' },
  5: { title: 'Xây dựng Protected Route' },
  6: { title: 'Hiểu về Context API' },
  7: { title: 'Tạo custom hook useLocalStorage' },
  8: { title: 'Chi tiết bài viết và useParams' },
  9: { title: 'Tối ưu hoá UI theo thực tiễn' },
  10: { title: 'Tổng kết dự án BlogDash' },
}

export default function PostFetcher() {
  const [data, setData] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = (await res.json()) as Post
        setData(json)
        setError(null)
      } catch (e) {
        setError(e as Error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [])

  if (loading) return <div>Đang tải...</div>
  if (error) return <div>Lỗi: {error.message}</div>
  if (!data) return <div>Không có dữ liệu</div>
  const vi = viPosts[data.id]
  const title = vi?.title ?? data.title
  return <h1>Tiêu đề: {title}</h1>
}