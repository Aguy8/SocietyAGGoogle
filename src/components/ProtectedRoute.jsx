import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth()
  const location = useLocation()

  if (loading) return (
    <div style={{ minHeight: '100vh', background: 'var(--encre)', display: 'grid', placeItems: 'center' }}>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Vérification…</div>
    </div>
  )

  if (!admin) return <Navigate to="/login" state={{ from: location }} replace />

  return children
}
