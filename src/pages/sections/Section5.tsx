import { Link, useNavigate } from 'react-router-dom'

export default function Section5() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Phần 5: React Router v6</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/lab/about">Đi tới Giới thiệu</Link>
        <Link to="/lab/users/123">Đi tới Người dùng 123</Link>
        <button className="btn btn-secondary" onClick={() => navigate('/lab')}>Quay về Trang chủ (Lab)</button>
      </div>
    </div>
  )
}
