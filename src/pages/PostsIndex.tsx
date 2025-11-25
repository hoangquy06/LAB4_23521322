import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

type Post = { id: number; title: string; body?: string }

const viPosts: Record<number, { title: string; body: string }> = {
  1: { title: 'Giới thiệu về React Router', body: 'Hiểu cách cấu hình và điều hướng giữa các trang trong ứng dụng React hiện đại.' },
  2: { title: 'Hướng dẫn sử dụng useEffect', body: 'Quản lý side effect đúng cách, cleanup hợp lý và tránh lỗi trong Strict Mode.' },
  3: { title: 'Quản lý form trong React', body: 'Phân biệt controlled và uncontrolled, tối ưu hiệu năng khi xử lý biểu mẫu.' },
  4: { title: 'So sánh fetch và axios', body: 'Khác biệt về parse JSON và xử lý lỗi; kiểm tra HTTP status với fetch.' },
  5: { title: 'Xây dựng Protected Route', body: 'Bảo vệ trang nội bộ bằng wrapper, tránh race condition với loader dữ liệu.' },
  6: { title: 'Hiểu về Context API', body: 'Giảm prop drilling, cân nhắc hiệu năng khi truyền trạng thái toàn cục.' },
  7: { title: 'Tạo custom hook useLocalStorage', body: 'Chia sẻ logic thay vì trạng thái; lưu và đọc dữ liệu bền vững.' },
  8: { title: 'Chi tiết bài viết và useParams', body: 'Đọc tham số đường dẫn, fetch dữ liệu động theo ID bài viết.' },
  9: { title: 'Tối ưu hoá UI theo thực tiễn', body: 'Sử dụng card, grid, nhãn rõ ràng, và trạng thái tải/thất bại thân thiện.' },
  10: { title: 'Tổng kết dự án BlogDash', body: 'Kết hợp routing, context, protected route, và fetch để tạo dashboard.' },
}

export default function PostsIndex() {
  const { data, loading, error } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  )

  if (loading)
    return (
      <div className="container">
        <div className="list-header">
          <h1>Danh sách bài viết</h1>
          <span className="badge">Đang tải…</span>
        </div>
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <article className="card skeleton skeleton-card" key={i}>
              <div className="skeleton-line" style={{ width: '70%' }} />
              <div className="skeleton-line" style={{ width: '90%' }} />
              <div className="skeleton-line" style={{ width: '60%' }} />
            </article>
          ))}
        </div>
      </div>
    )

  if (error) return <div className="container">Lỗi: {error.message}</div>
  if (!data) return <div className="container">Không có dữ liệu</div>

  const items = data.slice(0, 10)

  return (
    <div className="container">
      <div className="list-header">
        <h1>Danh sách bài viết</h1>
        <span className="badge">{items.length} bài</span>
      </div>
      <div className="grid">
        {items.map((p) => {
          const vi = viPosts[p.id]
          const title = vi?.title ?? p.title
          const body = vi?.body ?? (p.body || '')
          const excerpt = body.length > 120 ? body.slice(0, 120) + '…' : body
          return (
            <article className="card" key={p.id}>
              <h3 className="card-title">
                <Link to={`/dashboard/post/${p.id}`}>📄 {title}</Link>
              </h3>
              <p className="card-body">{excerpt}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}