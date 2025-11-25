import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: 12 }}>Nội dung học tập</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
        <Link className="btn btn-secondary" to="/dashboard/section/1">Phần 1: useEffect</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/2">Phần 2: useRef</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/3">Phần 3: Data Fetching</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/4">Phần 4: Forms</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/5">Phần 5: Router v6</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/6">Phần 6: Context API</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/7">Phần 7: Custom Hooks</Link>
        <Link className="btn btn-secondary" to="/dashboard/section/8">Phần 8: BlogDash</Link>
        <Link className="btn btn-primary" to="/dashboard/posts">Mở danh sách bài viết</Link>
      </div>
    </div>
  )
}