import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { api } from '../api/client.js'

const EDITIONS = [
  { n: '#12', t: 'Comment une mutuelle de Yopougon a réduit ses impayés de 80 %', date: 'Avril 2026', cat: 'Étude de cas' },
  { n: '#11', t: 'Mobile Money en Afrique : l\'état du marché en 2026', date: 'Mars 2026', cat: 'Tendances' },
  { n: '#10', t: '5 erreurs que font tous les leaders communautaires (et comment les éviter)', date: 'Mars 2026', cat: 'Conseils' },
  { n: '#09', t: 'Le guide complet du rapport d\'impact pour les donateurs institutionnels', date: 'Février 2026', cat: 'Guide' },
  { n: '#08', t: 'Alumni networks : comment INPHB a reconstitué 12 000 diplômés en 3 mois', date: 'Février 2026', cat: 'Étude de cas' },
  { n: '#07', t: 'Monétiser sa communauté sans la perdre — le bon équilibre', date: 'Janvier 2026', cat: 'Conseils' },
]

export default function Newsletter() {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) { setErrorMsg('Email invalide'); setState('error'); return }
    setState('loading')
    try {
      await api.newsletter.subscribe({ email, prenom, source: 'newsletter-page' })
      setState('success')
    } catch (err) {
      setErrorMsg(err.message || 'Une erreur est survenue')
      setState('error')
    }
  }

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(135deg, #1A2BFF 0%, #0a3a8f 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow dark" style={{ color: 'rgba(255,255,255,0.7)' }}>Newsletter</span>
              <h1 style={{ fontSize: 80, marginTop: 24, lineHeight: 0.9, color: 'white' }}>
                Society<br /><span style={{ color: '#1A2BFF' }}>Weekly.</span>
              </h1>
              <p style={{ fontSize: 18, marginTop: 28, maxWidth: 500, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)' }}>
                Chaque semaine, les bonnes pratiques, les études de cas, les tendances. Pour les leaders communautaires africains. Rejoignez les premiers abonnés.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['🇨🇮 Côte d\'Ivoire', '🇸🇳 Sénégal', '🇲🇱 Mali', '🇫🇷 Diaspora', '+ 40 pays'].map((p, i) => (
                  <span key={i} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.12)', borderRadius: 999, fontSize: 13, fontWeight: 600, color: 'white' }}>{p}</span>
                ))}
              </div>
            </div>
            <Reveal direction="right">
              <div style={{ background: 'white', borderRadius: 28, padding: 40 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#6B6B6B', marginBottom: 8 }}>ABONNEZ-VOUS — C'EST GRATUIT</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#14110D', marginBottom: 24 }}>Soyez parmi<br />les premiers abonnés.</div>
                {state === 'success' ? (
                  <div style={{ padding: '28px 24px', background: '#E8EFFC', borderRadius: 16, textAlign: 'center' }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#1A2BFF' }}>Bienvenue dans la communauté.</div>
                    <div style={{ fontSize: 13, color: '#1A2BFF', marginTop: 6 }}>Vous recevrez le prochain numéro dès sa sortie.</div>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: 12 }}>
                    <input value={prenom} onChange={e => setPrenom(e.target.value)} placeholder="Votre prénom" style={{ padding: '16px 18px', borderRadius: 12, border: '1px solid #E5E5E5', fontSize: 15, outline: 'none', fontFamily: 'inherit' }} />
                    <input type="email" value={email} onChange={e => { setEmail(e.target.value); setState('idle') }} placeholder="votre@email.com" style={{ padding: '16px 18px', borderRadius: 12, border: `1px solid ${state === 'error' ? '#C23B5A' : '#E5E5E5'}`, fontSize: 15, outline: 'none', fontFamily: 'inherit' }} />
                    {state === 'error' && <div style={{ fontSize: 12, color: '#1A2BFF', fontWeight: 600 }}>{errorMsg}</div>}
                    <button onClick={handleSubscribe} disabled={state === 'loading'} className="btn btn-primary btn-lg" style={{ justifyContent: 'center', opacity: state === 'loading' ? 0.7 : 1 }}>
                      {state === 'loading' ? 'Inscription...' : <>Je m'abonne gratuitement <Icon name="arrow" size={16} color="white" /></>}
                    </button>
                  </div>
                )}
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#6B6B6B' }}>
                  <Icon name="shield" size={13} color="#0F8B4F" />
                  Aucun spam · Désabonnement en 1 clic
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 56 }}>
            <span className="eyebrow">Éditions récentes</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Les derniers numéros.</h2>
          </Reveal>
          <div style={{ display: 'grid', gap: 16 }}>
            {EDITIONS.map((e, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="hover-lift" style={{ padding: '24px 28px', background: 'white', borderRadius: 20, border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: 24, cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#1A2BFF', minWidth: 40 }}>{e.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: '#14110D', lineHeight: 1.3 }}>{e.t}</div>
                    <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>{e.date}</div>
                  </div>
                  <span style={{ padding: '4px 12px', background: '#E8EFFC', color: '#1A2BFF', borderRadius: 999, fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' }}>{e.cat}</span>
                  <Icon name="arrow" size={16} color="#6B6B6B" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: 'trending', color: '#1A2BFF', t: 'Études de cas', d: 'Des transformations réelles. Chiffres à l\'appui.' },
              { icon: 'chart', color: '#1A2BFF', t: 'Tendances & données', d: 'L\'économie communautaire africaine, chaque semaine.' },
              { icon: 'users', color: '#14110D', t: 'Conseils pratiques', d: 'Des méthodes à appliquer directement dans votre communauté.' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: c.color + '15', display: 'grid', placeItems: 'center', marginBottom: 18 }}>
                    <Icon name={c.icon} size={22} color={c.color} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.t}</h3>
                  <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.6 }}>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
