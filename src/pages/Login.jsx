import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'
import Icon from '../components/Icon.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Identifiants incorrects'); setLoading(false); return }
      login(data.token, data.admin)
      navigate(from, { replace: true })
    } catch {
      setError('Impossible de joindre le serveur')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--encre)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>

      {/* Glow background */}
      <div style={{ position: 'fixed', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'var(--cobalt)', opacity: 0.12, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: -150, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'var(--hibiscus)', opacity: 0.07, filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em', color: 'white', fontFamily: 'Georgia, serif' }}>
            Society<span style={{ color: 'var(--cobalt)' }}>.</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 6, fontWeight: 500 }}>
            Espace administration
          </div>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 40 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 8 }}>Connexion</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
            Accès réservé à l'équipe Society.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 8, letterSpacing: '0.05em' }}>
                EMAIL
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setError('') }}
                required
                autoComplete="email"
                placeholder="admin@society.ci"
                style={{ width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${error ? 'rgba(194,59,90,0.6)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 12, fontSize: 15, color: 'white', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 8, letterSpacing: '0.05em' }}>
                MOT DE PASSE
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => { setForm(f => ({ ...f, password: e.target.value })); setError('') }}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  style={{ width: '100%', padding: '14px 48px 14px 18px', background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${error ? 'rgba(194,59,90,0.6)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 12, fontSize: 15, color: 'white', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', padding: 4 }}>
                  <Icon name={showPass ? 'eye-off' : 'eye'} size={16} color="rgba(255,255,255,0.35)" />
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{ padding: '12px 16px', background: 'rgba(194,59,90,0.15)', border: '1px solid rgba(194,59,90,0.3)', borderRadius: 10, fontSize: 13, color: '#E57291', fontWeight: 600 }}>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: 8, width: '100%', padding: '16px', background: loading ? 'rgba(26,43,255,0.5)' : 'var(--cobalt)', color: 'white', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              {loading ? (
                <>
                  <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                  Connexion…
                </>
              ) : 'Se connecter →'}
            </button>
          </form>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
          Society · Difero Fundry · Abidjan
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
