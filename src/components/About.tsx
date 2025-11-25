import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Giới thiệu</h1>
      <button className="btn btn-secondary" onClick={() => navigate('/lab')}>Quay lại Trang chủ</button>
    </div>
  )
}