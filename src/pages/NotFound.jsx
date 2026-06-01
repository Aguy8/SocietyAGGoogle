import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  return (
    <div className="page">
      <Nav />
      <section data-nav-theme="dark" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#14110D', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 'clamp(96px, 20vw, 160px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.06)', marginBottom: -20 }}>
            404
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>
            Cette page n'existe pas.
          </div>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 48 }}>
            Lien cassé ou page déplacée. Pas de panique — Society est toujours là.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <NavLink to="/" className="btn btn-primary">
              ← Retour à l'accueil
            </NavLink>
            <NavLink to="/contact" className="btn btn-ghost" style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Nous contacter
            </NavLink>
          </div>
          <div style={{ marginTop: 64, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { to: '/fonctionnalites', label: 'Fonctionnalités' },
              { to: '/tarifs', label: 'Tarifs' },
              { to: '/pour-qui', label: 'Pour qui ?' },
              { to: '/inscription', label: 'Inscription' },
            ].map(l => (
              <NavLink key={l.to} to={l.to} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 600 }}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
