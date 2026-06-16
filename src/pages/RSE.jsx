import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const OFFRES = [
  {
    t: 'Partenariat RSE Standard',
    prix: 'Sur devis',
    color: 'var(--cobalt)',
    bg: '#F4F7FE',
    items: ['Financement de 1 à 3 communautés partenaires', 'Badge RSE Society sur votre communication', 'Rapport d\'impact trimestriel', 'Visibilité sur le site Society'],
  },
  {
    t: 'Partenariat RSE Premium',
    prix: 'Sur devis',
    color: 'rgba(255,255,255,0.9)',
    bg: 'var(--cobalt)',
    items: ['Financement de 5 à 20 communautés ciblées', 'Co-branding Society × Entreprise', 'Tableau de bord RSE dédié (KPI, ODD)', 'Rapport d\'impact mensuel PDF', 'Page partenaire sur aguy8.github.io/Society.ci', 'Événement de lancement co-organisé'],
    featured: true,
  },
  {
    t: 'Partenariat Institutionnel',
    prix: 'Sur devis',
    color: 'var(--encre)',
    bg: '#F8F8F8',
    items: ['Programme sur mesure — toutes communautés cibles', 'Dashboard RSE white-label', 'Indicateurs SDG certifiés', 'Présence terrain & animation', 'Rapport annuel complet', 'Accès API reporting RSE'],
  },
]

export default function RSE() {
  const [sent, setSent] = React.useState(false)
  const [rseForm, setRseForm] = React.useState({ entreprise: '', contact: '', projet: '' })

  function handleRseSubmit() {
    if (!rseForm.entreprise || !rseForm.contact) return
    setSent(true)
  }

  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: 'var(--encre)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'var(--cobalt)', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow dark">Responsabilité Sociale</span>
          <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Investissez dans<br />
            <span style={{ color: 'white' }}>les communautés</span><br />
            africaines.
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 640, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Society relie les entreprises qui investissent en RSE aux communautés à impact qui en ont besoin. Un pont transparent, mesurable, authentique.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <a href="#contact-rse" className="btn btn-primary btn-xl">Discuter d'un partenariat <Icon name="arrow" size={16} color="white" /></a>
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px', background: 'var(--cobalt)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['150 000+', 'Communautés cibles en Côte d\'Ivoire'], ['85 %', 'Sans outil numérique adapté'], ['7', 'Types de communautés ciblables'], ['100 %', 'Traçabilité de l\'impact possible']].map(([v, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>{v}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 6, maxWidth: 180 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Comment ça marche</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Un partenariat RSE<br />transparent de bout en bout.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { n: '01', icon: 'check', color: 'var(--cobalt)', t: 'Définissez vos objectifs', d: 'ODD ciblés, zones, types de communautés, budget. On construit le programme sur mesure.' },
              { n: '02', icon: 'users', color: 'var(--cobalt)', t: 'On connecte les communautés', d: 'Society identifie et vous présente les communautés alignées avec votre projet RSE.' },
              { n: '03', icon: 'chart', color: 'var(--encre)', t: 'Mesurez l\'impact réel', d: 'Rapports mensuels automatiques. Bénéficiaires touchés, fonds utilisés, indicateurs ODD, témoignages terrain.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div className="hover-lift" style={{ padding: 40, background: '#F8F8F8', borderRadius: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: s.color + '15', display: 'grid', placeItems: 'center' }}>
                      <Icon name={s.icon} size={24} color={s.color} />
                    </div>
                    <div style={{ fontSize: 60, fontWeight: 900, color: '#E5E5E5', lineHeight: 1 }}>{s.n}</div>
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 12 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.65 }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Nos offres</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Des programmes<br />adaptés à votre ambition.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {OFFRES.map((o, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ padding: 36, background: o.featured ? 'var(--cobalt)' : 'white', borderRadius: 28, border: o.featured ? 'none' : '1px solid #E5E5E5', position: 'relative' }}>
                  {o.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', background: 'white', borderRadius: 999, fontSize: 11, fontWeight: 800, color: 'var(--cobalt)', whiteSpace: 'nowrap' }}>LE PLUS POPULAIRE</div>}
                  <div style={{ fontSize: 18, fontWeight: 800, color: o.featured ? 'white' : 'var(--encre)', marginBottom: 8 }}>{o.t}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: o.featured ? 'rgba(255,255,255,0.9)' : o.color, marginBottom: 28 }}>{o.prix}</div>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {o.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: o.featured ? 'rgba(255,255,255,0.85)' : '#4A4438', lineHeight: 1.5 }}>
                        <span style={{ color: o.featured ? 'rgba(255,255,255,0.9)' : o.color, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <a href="#contact-rse" className={o.featured ? 'btn' : 'btn btn-outline'} style={{ marginTop: 32, width: '100%', justifyContent: 'center', display: 'flex', background: o.featured ? 'white' : undefined, color: o.featured ? 'var(--cobalt)' : undefined }}>
                    Nous contacter
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-rse" data-nav-theme="dark" style={{ padding: '100px 64px 120px', background: 'var(--cobalt)' }}>
        <div className="container" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <span className="eyebrow white">Partenariat RSE</span>
            <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800, marginTop: 20 }}>Discutons de votre projet.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginTop: 16, lineHeight: 1.6 }}>
              Notre équipe partenariats vous répond sous 48 h. On bâtit le programme adapté à votre entreprise.
            </p>
            {sent ? (
              <div style={{ marginTop: 48, padding: '40px 32px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>Demande envoyée.</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>Notre équipe partenariats vous contacte sous 48 h.</div>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 14, marginTop: 48, textAlign: 'left' }}>
                <input
                  placeholder="Entreprise *"
                  value={rseForm.entreprise}
                  onChange={e => setRseForm(f => ({ ...f, entreprise: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: `1px solid ${rseForm.entreprise ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'}`, background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }}
                />
                <input
                  placeholder="Votre nom & email *"
                  value={rseForm.contact}
                  onChange={e => setRseForm(f => ({ ...f, contact: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: `1px solid ${rseForm.contact ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'}`, background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }}
                />
                <textarea
                  rows={3}
                  placeholder="Votre projet RSE et vos objectifs..."
                  value={rseForm.projet}
                  onChange={e => setRseForm(f => ({ ...f, projet: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                />
                <button
                  onClick={handleRseSubmit}
                  disabled={!rseForm.entreprise || !rseForm.contact}
                  className="btn"
                  style={{ width: '100%', justifyContent: 'center', background: rseForm.entreprise && rseForm.contact ? 'white' : 'rgba(255,255,255,0.3)', color: 'var(--cobalt)', fontWeight: 700, cursor: rseForm.entreprise && rseForm.contact ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}
                >
                  Envoyer ma demande <Icon name="arrow" size={16} color='var(--cobalt)' />
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
