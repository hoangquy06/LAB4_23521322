import { useLocalStorage } from '../hooks/useLocalStorage'

export default function PersistentCounter() {
  const [count, setCount] = useLocalStorage<number>('myCounter', 0)
  return (
    <div style={{ marginTop: 12 }}>
      <div>Giá trị đếm: {count}</div>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  )
}
