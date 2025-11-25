import type { FormEvent } from 'react'
import { useRef } from 'react'

export default function UncontrolledLogin() {
  const usernameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert(usernameRef.current?.value || '')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input ref={usernameRef} type="text" placeholder="Tên người dùng" />
      <button type="submit" className="btn btn-primary">Gửi</button>
    </form>
  )
}