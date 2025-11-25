import { useEffect, useState } from 'react'

export default function MouseTracker() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handler)
    return () => {
      window.removeEventListener('mousemove', handler)
    }
  }, [])

  return (
    <div className="card" style={{ display: 'inline-block', padding: 16 }}>
      <div className="card-title">Toạ độ chuột</div>
      <div className="card-body">X: {pos.x}</div>
      <div className="card-body">Y: {pos.y}</div>
    </div>
  )
}