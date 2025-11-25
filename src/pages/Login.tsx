import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleLogin = () => {
    login()
    navigate('/dashboard')
  }

  return (
    <div className="auth-card">
      <h1 className="title">Đăng nhập</h1>
      <p className="subtitle">Truy cập BlogDash để xem bài viết</p>
      <input ref={usernameRef} className="input" placeholder="Tên người dùng" />
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn btn-primary" onClick={handleLogin}>Đăng nhập</button>
        <a className="btn btn-secondary" href="/lab">Xem mục Lab</a>
      </div>
    </div>
  )
}