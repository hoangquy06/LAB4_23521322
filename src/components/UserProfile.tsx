import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const { userId } = useParams()
  return <h1>Hồ sơ người dùng: {userId}</h1>
}