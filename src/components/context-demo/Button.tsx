import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function Button() {
  const theme = useContext(ThemeContext)
  return <button className={`button-${theme}`}>Nút theo chủ đề</button>
}
