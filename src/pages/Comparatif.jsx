import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const ROWS = [
  ['Gestion des membres & rôles', true, false, false, false, true],
  ['Cotisations automatisées', true, false, false, false, false],
  ['Mobile Money (OM, Wave, MoMo)', true, false, false, false, false],
  ['Cagnottes & crowdfunding', true, false, true, false, false],
  ['Billetterie + QR codes', true, false, true, true, false],
  ["Rapports d'impact RSE", true, false, false, false, false],
  ['Matching besoins/ressources', true, false, false, false, false],
  ['Espace Leader monétisé', true, true, true, false, false],
  ['Prix adapté Afrique', true, true, false, false, true],
  ['Multilinguisme local', true, false, false, false, false],
  ['Support francophone dédié', true, false, false, false, false],
  ['Données hébergées en Afrique', true, false, false, false, false],
]

const COLS = ['Society', 'WhatsApp', 'Circle.so', 'Eventbrite', 'Excel']
const COLORS = ['var(--cobalt)', '#25D366', '#6B46C1', '#F05537', '#1E6F3E']

export default function Comparatif() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: 'var(--encre)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow dark">Comparatif</span>
            <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
              Society vs<br /><span style={{ color: 'var(--cobalt)' }}>les alternatives.</span>
            </h1>
            <p style={{ fontSize: 20, marginTop: 28, maxWidth: 640, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
              Pourquoi les leaders communautaires africains choisissent Society. Et ce qu'ils laissent derrière.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <Reveal>
            <div style={{ background: 'white', borderRadius: 28, overflow: 'hidden', border: '1px solid #E5E5E5', boxShadow: '0 20px 80px rgba(0,0,0,0.06)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '24px 28px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em', background: '#F8F8F8', borderBottom: '1px solid #E5E5E5' }}>
                        Fonctionnalité
                      </th>
                      {COLS.map((col, i) => (
                        <th key={col} style={{ padding: '24px 20px', textAlign: 'center', fontSize: 14, fontWeight: 800, background: i === 0 ? 'var(--cobalt)' : '#F8F8F8', color: i === 0 ? 'white' : 'var(--encre)', borderBottom: '1px solid #E5E5E5', minWidth: 110 }}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS[i] }} />
                            {col}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row, ri) => (
                      <tr key={ri} style={{ borderTop: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '18px 28px', fontSize: 14, fontWeight: 600, color: 'var(--encre)' }}>{row[0]}</td>
                        {row.slice(1).map((v, ci) => (
                          <td key={ci} style={{ padding: 18, textAlign: 'center', background: ci === 0 ? '#F4F7FE' : 'transparent' }}>
                            {v
                              ? <span style={{ display: 'inline-grid', placeItems: 'center', width: 28, height: 28, borderRadius: '50%', background: ci === 0 ? 'var(--cobalt)' : '#DCFCE7', color: ci === 0 ? 'white' : 'var(--acacia)', fontSize: 14, fontWeight: 800 }}>✓</span>
                              : <span style={{ color: '#D1D5DB', fontSize: 20, fontWeight: 400 }}>—</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 64 }}>
            {[
              { icon: 'money', color: 'var(--cobalt)', bg: '#E8EFFC', t: 'Mobile Money natif', d: 'Orange Money, Wave, MTN MoMo — intégrés directement, sans passerelle tierce, sans frais cachés.' },
              { icon: 'globe', color: 'var(--cobalt)', bg: '#E8EFFC', t: 'Pensé pour l\'Afrique', d: 'Serveurs en Afrique, support francophone, app pensée pour les réseaux qui flanchent.' },
              { icon: 'shield', color: 'var(--hibiscus)', bg: '#FFFFFF', t: 'Souverain. Vraiment.', d: 'Vos données vous appartiennent. Aucun algorithme tiers. Aucune dépendance à une plateforme externe.' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ padding: 36, background: '#F8F8F8', borderRadius: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: c.bg, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                    <Icon name={c.icon} size={24} color={c.color} />
                  </div>
                  <h3 style={{ fontSize: 20, marginBottom: 10 }}>{c.t}</h3>
                  <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.65 }}>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px 120px', background: 'var(--cobalt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Passez à la vraie plateforme.
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">
              Rejoindre la liste d'attente <Icon name="arrow" size={16} color='var(--encre)' />
            </NavLink>
            <NavLink to="/tarifs" className="btn btn-outline-white btn-xl">Voir les tarifs</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
