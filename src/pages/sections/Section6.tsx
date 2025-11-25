import { ThemeProvider } from '../../context/ThemeContext'
import ContextDemoDashboard from '../../components/context-demo/Dashboard'

export default function Section6() {
  return (
    <div>
      <h1>Phần 6: Context API</h1>
      <ThemeProvider>
        <ContextDemoDashboard />
      </ThemeProvider>
    </div>
  )
}
