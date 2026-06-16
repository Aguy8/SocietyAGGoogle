import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const services = [
  { name: 'API REST', desc: 'Tous les endpoints operationnels', uptime: '99.98 %', status: 'operational' },
  { name: 'Application Web', desc: 'aguy8.github.io/Society.ci', uptime: '99.99 %', status: 'operational' },
  { name: 'Application Mobile', desc: 'iOS & Android', uptime: '99.97 %', status: 'operational' },
  { name: 'Paiements & Mobile Money', desc: 'Orange Money, Wave, MTN MoMo', uptime: '99.94 %', status: 'operational' },
  { name: 'Notifications & SMS', desc: 'Push, SMS, e-mail', uptime: '99.96 %', status: 'operational' },
  { name: 'Webhooks', desc: 'Livraison des evenements', uptime: '99.91 %', status: 'operational' },
  { name: 'CDN & Medias', desc: 'Photos, fichiers, documents', uptime: '100.00 %', status: 'operational' },
  { name: 'Base de donnees', desc: 'Stockage & replication', uptime: '100.00 %', status: 'operational' },
]

const days = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 3, 6 - (29 - i))
  return {
    label: d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
    status: 'ok',
  }
})

export default function Statut() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Statut du systeme</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 24 }}>
            <div style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--cobalt)', boxShadow: '0 0 0 6px rgba(22,163,74,0.2)', flexShrink: 0 }} />
            <h1 style={{ fontSize: 72, lineHeight: 0.95, color: 'var(--encre)', fontWeight: 900 }}>
              Tous les systemes sont operationnels.
            </h1>
          </div>
          <p style={{ fontSize: 17, marginTop: 24, color: '#4A4438', maxWidth: 600, lineHeight: 1.6 }}>
            Derniere verification : 6 mai 2026 a 14h23 GMT. Uptime global sur 30 jours : <strong>99,97 %</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 56 }}>
            {[
              { label: 'Uptime global 30j', value: '99,97 %', color: 'var(--cobalt)' },
              { label: 'Incidents ce mois', value: '0', color: 'var(--cobalt)' },
              { label: 'Temps de reponse API', value: '142 ms', color: 'var(--cobalt)' },
              { label: 'Disponibilite CDN', value: '100 %', color: 'var(--cobalt)' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '28px 24px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 20 }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: s.color, letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px' }}>
        <div className="container">
          <span className="eyebrow">Services</span>
          <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>Statut en temps reel.</h2>

          <div style={{ marginTop: 40, border: '1px solid #EBEBEB', borderRadius: 24, overflow: 'hidden', background: 'white' }}>
            {services.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 24, alignItems: 'center', padding: '24px 32px', borderBottom: i < services.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--cobalt)', boxShadow: '0 0 0 3px rgba(22,163,74,0.2)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--encre)' }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: '#9B9B9B', marginTop: 2 }}>{s.desc}</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: '#6B6B6B', textAlign: 'right' }}>
                  Uptime 30j : <strong style={{ color: 'var(--encre)' }}>{s.uptime}</strong>
                </div>
                <div style={{ padding: '6px 14px', background: '#E8EFFC', color: 'var(--cobalt)', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                  Operationnel
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Disponibilite</span>
          <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>30 derniers jours.</h2>
          <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 8 }}>Chaque barre represente un jour. Vert = aucun incident.</p>

          <div style={{ marginTop: 40, padding: '40px', background: 'white', borderRadius: 24, border: '1px solid #EBEBEB' }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
              {days.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: '100%', height: 60, background: 'var(--cobalt)', borderRadius: 6, opacity: 0.85 + (Math.random() * 0.15) }} title={`${d.label} - Operationnel`} />
                  {(i === 0 || i === 7 || i === 14 || i === 21 || i === 29) && (
                    <div style={{ fontSize: 10, color: '#9B9B9B', whiteSpace: 'nowrap' }}>{d.label}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 24, paddingTop: 20, borderTop: '1px solid #F0F0F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--cobalt)' }} />
                <span style={{ fontSize: 13, color: '#6B6B6B' }}>Operationnel</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: '#E5E5E5' }} />
                <span style={{ fontSize: 13, color: '#6B6B6B' }}>Incident</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: '#F2F2F2' }} />
                <span style={{ fontSize: 13, color: '#6B6B6B' }}>Degradation partielle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px' }}>
        <div className="container">
          <span className="eyebrow">Historique des incidents</span>
          <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>Aucun incident recent.</h2>

          <div style={{ marginTop: 40, padding: '48px', background: '#F8F8F8', borderRadius: 24, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: '#E8EFFC', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon name="check" size={28} color="#16A34A" />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800 }}>Aucun incident sur les 90 derniers jours</h3>
            <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 12, maxWidth: 480, margin: '12px auto 0', lineHeight: 1.6 }}>
              Aucune coupure, aucune degradation majeure, aucune fuite de donnees depuis le lancement. Uptime maintenu a 99,97 % sur toute notre infrastructure.
            </p>
          </div>

          <div style={{ marginTop: 40, padding: '28px 32px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>S'abonner aux alertes statut</div>
              <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>Un e-mail en cas d'incident ou de maintenance programmee.</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <input type="email" placeholder="votre@email.com" style={{ padding: '12px 18px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, outline: 'none', width: 240 }} />
              <button className="btn btn-primary">S'abonner</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 64px 80px' }}>
        <div className="container">
          <div style={{ padding: '32px 40px', background: 'var(--encre)', borderRadius: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Vous voyez un probleme ?</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'white' }}>Notre support repond 24/7</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="mailto:support@society.ci" style={{ padding: '14px 24px', background: 'var(--hibiscus)', color: 'var(--encre)', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                support@society.ci
              </a>
              <button style={{ padding: '14px 24px', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                <Icon name="chat" size={15} color="white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
