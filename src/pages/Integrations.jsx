import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const PAYMENTS = [
  { n: 'Orange Money', region: 'CI, SN, ML, CM, BF', color: 'var(--cobalt)' },
  { n: 'Wave', region: 'CI, SN, ML, BF', color: 'var(--cobalt)' },
  { n: 'MTN MoMo', region: 'CI, GH, CM, RW', color: 'var(--encre)' },
  { n: 'Moov Money (Flooz)', region: 'CI, BJ, NE', color: 'var(--cobalt)' },
  { n: 'M-Pesa', region: 'KE, TZ, UG, RW', color: 'var(--encre)' },
  { n: 'Visa / Mastercard', region: 'International', color: 'var(--encre)' },
]

const TOOLS = [
  { cat: 'Communication', icon: 'chat', color: 'var(--cobalt)', items: ['WhatsApp Business', 'SMS Pro', 'Email Marketing', 'Notifications push'] },
  { cat: 'Productivité', icon: 'grid', color: 'var(--cobalt)', items: ['Google Workspace', 'Microsoft 365', 'Notion', 'Trello'] },
  { cat: 'Comptabilité', icon: 'money', color: 'var(--cobalt)', items: ['Export CSV/Excel', 'PDF automatique', 'API comptable', 'Rapports donateurs'] },
  { cat: 'Marketing', icon: 'chart', color: 'var(--cobalt)', items: ['Mailchimp', 'Analytics Society', 'Meta Ads pixel', 'Google Analytics'] },
]

export default function Integrations() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="eyebrow">Intégrations</span>
            <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9 }}>
              Connecté à tout<br />
              <span style={{ color: 'var(--cobalt)' }}>ce que vous</span><br />
              utilisez déjà.
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 640, lineHeight: 1.5 }}>
              Mobile Money africain, outils du quotidien, paiements internationaux. Society se branche à ce que vous utilisez déjà.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Paiements mobiles</span>
            <h2 style={{ fontSize: 56, marginTop: 20, marginBottom: 48 }}>Le Mobile Money africain,<br />directement intégré.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PAYMENTS.map((p, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div className="hover-lift" style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: p.color, marginBottom: 16 }} />
                  <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--encre)' }}>{p.n}</div>
                  <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 6 }}>{p.region}</div>
                  <div style={{ marginTop: 16, padding: '6px 12px', background: '#F8F8F8', borderRadius: 8, display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#0F8B4F' }}>✓ Intégré nativement</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px', background: 'var(--encre)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow dark">Outils & services</span>
            <h2 style={{ fontSize: 56, marginTop: 20, marginBottom: 56, color: 'white' }}>Connectez vos outils<br /><span style={{ color: 'var(--cobalt)' }}>en quelques clics.</span></h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {TOOLS.map((t, i) => (
              <Reveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="glass-card" style={{ padding: 36 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: t.color + '22', display: 'grid', placeItems: 'center' }}>
                      <Icon name={t.icon} size={22} color={t.color} />
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>{t.cat}</div>
                  </div>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {t.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                        <span style={{ color: t.color, fontSize: 12, fontWeight: 800 }}>✓</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal direction="left">
              <span className="eyebrow">API publique</span>
              <h2 style={{ fontSize: 56, marginTop: 20 }}>Vous développez ?<br />On a une API.</h2>
              <p style={{ fontSize: 17, marginTop: 20, lineHeight: 1.6 }}>
                Accédez aux données de votre communauté. Automatisez vos flux. Construisez des intégrations sur mesure avec notre API REST documentée.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <NavLink to="/documentation" className="btn btn-primary">Voir la documentation</NavLink>
                <NavLink to="/contact" className="btn btn-outline">Contacter l'équipe API</NavLink>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div style={{ background: 'var(--encre)', borderRadius: 20, padding: 28, fontFamily: 'monospace' }}>
                <div style={{ fontSize: 12, color: '#6B6B6B', marginBottom: 16 }}>// Exemple — Récupérer les membres</div>
                {[
                  { color: 'var(--cobalt)', text: 'GET' },
                  { color: 'var(--cobalt)', text: ' /v1/communities/{id}/members' },
                ].map((l, i) => (
                  <div key={i} style={{ color: l.color, fontSize: 15, marginBottom: 4 }}>{l.text}</div>
                ))}
                <div style={{ marginTop: 20, background: '#1a1a1a', borderRadius: 12, padding: 20 }}>
                  <pre style={{ color: 'var(--cobalt)', fontSize: 12, margin: 0 }}>{`{
  "data": [
    { "id": "usr_01", "name": "Awa K.",
      "status": "active",
      "cotisations": "à jour" }
  ],
  "meta": { "total": 1248 }
}`}</pre>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
