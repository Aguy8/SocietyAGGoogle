import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

export default function Confirmation() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px', background: 'linear-gradient(180deg, #F4F7FE 0%, white 100%)', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div style={{ maxWidth: 940, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: 88, height: 88, borderRadius: '50%', background: '#1A2BFF', margin: '0 auto', display: 'grid', placeItems: 'center', position: 'relative' }}>
              <Icon name="check" size={44} color="white" />
              <div style={{ position: 'absolute', inset: -14, borderRadius: '50%', border: '2px solid #1A2BFF', opacity: 0.3 }} />
              <div style={{ position: 'absolute', inset: -28, borderRadius: '50%', border: '2px solid #1A2BFF', opacity: 0.15 }} />
            </div>
            <h1 style={{ fontSize: 80, marginTop: 48, lineHeight: 0.95 }}>
              Votre communauté<br />
              est <span style={{ color: '#1A2BFF' }}>sur Society</span>.
            </h1>
            <p style={{ fontSize: 20, marginTop: 28, maxWidth: 640, margin: '28px auto 0', lineHeight: 1.5 }}>
              Bienvenue. Votre espace est prêt. Trois étapes pour bien démarrer.
            </p>
            <div style={{ marginTop: 24, padding: '8px 16px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13 }}>
              <span style={{ padding: '2px 10px', background: '#0F8B4F', color: 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>● ACTIVÉ</span>
              <span>Plan Communauté · Essai 30 jours</span>
              <span style={{ color: '#6B6B6B' }}>Accès fondateur inclus</span>
            </div>
          </div>

          {/* Next steps */}
          <div style={{ maxWidth: 1060, margin: '72px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { n: '01', t: 'Importez vos membres', d: 'Votre fichier Excel, ou un par un. On s\'occupe du reste.', cta: 'Importer mes membres', icon: 'users', color: '#1A2BFF' },
              { n: '02', t: 'Lancez votre 1ʳᵉ cagnotte', d: 'Trois clics. Lien partageable. Mobile Money intégré.', cta: 'Lancer une cagnotte', icon: 'money', color: '#1A2BFF' },
              { n: '03', t: 'Personnalisez votre page', d: 'Photos, présentation, projets en cours. Votre vitrine publique.', cta: 'Personnaliser', icon: 'settings', color: '#14110D' },
            ].map((s, i) => (
              <div key={i} style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: s.color, letterSpacing: '0.05em' }}>{s.n}</span>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: s.color, display: 'grid', placeItems: 'center' }}>
                    <Icon name={s.icon} size={20} color="white" />
                  </div>
                </div>
                <h3 style={{ fontSize: 22, lineHeight: 1.1 }}>{s.t}</h3>
                <p style={{ fontSize: 14, marginTop: 10, lineHeight: 1.5 }}>{s.d}</p>
                <button style={{ marginTop: 24, width: '100%', padding: 14, background: s.color, color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>{s.cta} →</button>
              </div>
            ))}
          </div>

          {/* App download */}
          <div style={{ maxWidth: 1060, margin: '32px auto 0', padding: 48, background: 'linear-gradient(135deg, #1A2BFF 0%, #1A2BFF 100%)', color: 'white', borderRadius: 28, display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 20px 60px rgba(14,71,171,0.25)' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.05em' }}>● BONUS</div>
              <h3 style={{ fontSize: 32, marginTop: 10, color: 'white' }}>Téléchargez l'app mobile.</h3>
              <p style={{ fontSize: 15, marginTop: 10, color: 'rgba(255,255,255,0.8)', maxWidth: 440 }}>Vos membres restent connectés, votent, suivent les cagnottes. Depuis leur poche.</p>
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[{ icon: 'play', store: 'App Store' }, { icon: 'play', store: 'Google Play' }].map((b, i) => (
                  <button key={i} style={{ padding: '14px 22px', background: 'white', color: '#14110D', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                    <Icon name={b.icon} size={16} color="#14110D" />
                    <span>
                      <div style={{ fontSize: 10, opacity: 0.7 }}>Disponible sur</div>
                      <div>{b.store}</div>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div style={{ width: 100, height: 100, background: 'white', borderRadius: 14, padding: 10, flexShrink: 0 }}>
              <div style={{ width: '100%', height: '100%', background: 'repeating-conic-gradient(#1A2BFF 0% 25%, white 0% 50%) 0/8px 8px' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <NavLink to="/" className="btn btn-outline">← Retour à l'accueil</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
