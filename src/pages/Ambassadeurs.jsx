import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const PERKS = [
  { icon: 'money', color: 'var(--cobalt)', bg: '#E8EFFC', t: '20 % de commission', d: 'Sur chaque abonnement payant des communautés que vous amenez. Pendant 12 mois.' },
  { icon: 'award', color: 'var(--cobalt)', bg: '#E8EFFC', t: 'Accès Pro offert', d: 'Un compte Society Pro à vous, tant que vous êtes ambassadeur actif.' },
  { icon: 'trending', color: 'var(--cobalt)', bg: '#E8EFFC', t: 'Formation certifiante', d: 'Le programme Society Leader, pour structurer encore mieux une communauté.' },
  { icon: 'users', color: 'var(--encre)', bg: '#F8F8F8', t: 'Réseau ambassadeurs', d: 'Le groupe privé des ambassadeurs Society. Échanges, stratégies, entraide.' },
  { icon: 'chart', color: 'var(--encre)', bg: '#F8F8F8', t: 'Tableau de bord clair', d: 'En temps réel : commissions, filleuls actifs, volume généré.' },
  { icon: 'globe', color: 'var(--encre)', bg: '#F2F2F2', t: 'Visibilité partagée', d: 'Votre profil mis en avant sur Society et dans nos communications.' },
]

const TEMOINS = [
  { img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370098/DJ_NOEL_jo0ve1.jpg', n: 'Sébastien K.', r: 'Leader associatif — Abidjan', gain: 'Jusqu\'à 840 000 FCFA/mois', q: 'Le milieu associatif abidjanais, je le connais. 12 communautés à présenter Society en 3 mois ? Faisable, sans forcer.' },
  { img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370124/Lifestyle_fjsv0c.jpg', n: 'Mariam D.', r: 'Consultante associative — Dakar', gain: 'Jusqu\'à 1,2 M FCFA/mois', q: 'Mes clientes associations n\'ont aucun outil. Society, je le recommanderais à toutes, sans hésiter.' },
  { img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370153/zzzz_hwtnnw.jpg', n: 'Kofi A.', r: 'Développeur réseau — Accra', gain: 'Jusqu\'à 620 000 FCFA/mois', q: 'Ce qui me plaît : la transparence. Je vois ce que je génère et comment mes filleuls avancent. En temps réel.' },
]

export default function Ambassadeurs() {
  const [sent, setSent] = React.useState(false)
  const [form, setForm] = React.useState({ nom: '', email: '', message: '' })

  function handleSubmit() {
    if (!form.nom || !form.email) return
    setSent(true)
  }

  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: 'var(--encre)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'var(--cobalt)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, marginBottom: 32 }}>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: 13 }}>● Lancement imminent — Candidatures ouvertes</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Devenez<br /><span style={{ color: 'var(--cobalt)' }}>Ambassadeur</span><br />Society.
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Recommandez Society. Touchez 20 % sur chaque abonnement. Un revenu qui rentre, pendant que vous aidez les communautés à se structurer.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <a href="#candidater" className="btn btn-primary btn-xl">Je deviens ambassadeur <Icon name="arrow" size={16} color="white" /></a>
            <a href="#fonctionnement" className="btn btn-outline-white btn-xl">Comment ça marche</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: 'var(--cobalt)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['20 %', 'Commission récurrente'], ['12 mois', 'Durée des commissions'], ['0 €', 'Pour rejoindre'], ['Illimité', 'Filleuls possibles']].map(([v, l], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 56, fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>{v}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" style={{ padding: '100px 64px' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Comment ça marche</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Simple. Transparent. Rémunérateur.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { n: '01', t: 'Candidatez', d: 'Le formulaire ci-dessous. On vous répond sous 48 h.' },
              { n: '02', t: 'Recevez votre lien', d: 'Lien de parrainage, tableau de bord, formation de démarrage.' },
              { n: '03', t: 'Recommandez', d: 'Présentez Society aux leaders autour de vous.' },
              { n: '04', t: 'Touchez', d: '20 % chaque mois sur les abonnements de vos filleuls.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div style={{ padding: 32, background: '#F8F8F8', borderRadius: 24 }}>
                  <div style={{ fontSize: 72, fontWeight: 900, color: '#E8EFFC', lineHeight: 1 }}>{s.n}</div>
                  <h3 style={{ fontSize: 20, marginTop: 12 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, marginTop: 10, lineHeight: 1.6, color: '#4A4438' }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Avantages</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Tout ce que vous gagnez.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PERKS.map((p, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div className="hover-lift" style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: p.bg, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                    <Icon name={p.icon} size={24} color={p.color} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 10 }}>{p.t}</h3>
                  <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.6 }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Témoignages</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Et si c'était vous.</h2>
            <p style={{ marginTop: 12, fontSize: 14, color: '#6B6B6B' }}>Projections basées sur un réseau de 10 à 20 communautés référées actives.</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEMOINS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ padding: 32, background: 'var(--encre)', borderRadius: 24, color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <img src={t.img} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} alt={t.n} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{t.n}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{t.r}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--cobalt)', marginBottom: 16 }}>{t.gain}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>« {t.q} »</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="candidater" data-nav-theme="dark" style={{ padding: '100px 64px 120px', background: 'var(--cobalt)' }}>
        <div className="container" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800 }}>Candidater au programme.</h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginTop: 16, lineHeight: 1.6 }}>
              Réservé à ceux qui ont déjà un réseau dans le monde communautaire africain.
            </p>
            {sent ? (
              <div style={{ marginTop: 40, padding: '40px 32px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>Candidature reçue.</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginTop: 8 }}>On revient vers vous sous 48 h pour la suite.</div>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 14, marginTop: 40, textAlign: 'left' }}>
                <input
                  placeholder="Votre nom complet *"
                  value={form.nom}
                  onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: `1px solid ${form.nom ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'}`, background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }}
                />
                <input
                  placeholder="Votre email *"
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: `1px solid ${form.email ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'}`, background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }}
                />
                <textarea
                  placeholder="Votre réseau, et pourquoi devenir ambassadeur (3–5 lignes)..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ padding: '18px 20px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!form.nom || !form.email}
                  className="btn"
                  style={{ width: '100%', justifyContent: 'center', background: form.nom && form.email ? 'white' : 'rgba(255,255,255,0.3)', color: 'var(--cobalt)', fontWeight: 700, cursor: form.nom && form.email ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}
                >
                  Envoyer ma candidature <Icon name="arrow" size={16} color='var(--cobalt)' />
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
