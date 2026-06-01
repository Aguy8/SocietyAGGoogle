import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const categories = [
  {
    icon: 'database',
    title: 'API Reference',
    description: 'Documentation complète de l\'API REST Society. Endpoints, paramètres, réponses et codes d\'erreur.',
    count: '47 endpoints',
    color: '#E8F0FD',
    iconColor: '#1A2BFF',
    link: '/docs/api',
  },
  {
    icon: 'play',
    title: 'Guides de démarrage',
    description: 'Intégrez Society en moins de 30 minutes. Tutoriels pas à pas pour les cas d\'usage courants.',
    count: '12 guides',
    color: '#F8F8F8',
    iconColor: '#14110D',
    link: '/docs/guides',
  },
  {
    icon: 'globe',
    title: 'Webhooks',
    description: 'Recevez des notifications en temps réel pour chaque événement important de votre communauté.',
    count: '23 événements',
    color: '#F8F8F8',
    iconColor: '#1A2BFF',
    link: '/docs/webhooks',
  },
  {
    icon: 'layers',
    title: 'SDK Mobile',
    description: 'Kits de développement Android (Kotlin/Java) et iOS (Swift) pour intégrer Society dans vos apps.',
    count: '2 plateformes',
    color: '#F8F8F8',
    iconColor: '#1A2BFF',
    link: '/docs/sdk',
  },
  {
    icon: 'lock',
    title: 'Authentification',
    description: 'OAuth 2.0, tokens JWT, clés API et gestion des permissions. Sécurisez vos intégrations.',
    count: '3 méthodes',
    color: '#E8EFFC',
    iconColor: '#3730A3',
    link: '/docs/auth',
  },
  {
    icon: 'check',
    title: 'Cas d\'usage',
    description: 'Exemples concrets : collecte de cotisations, gestion d\'événements, envoi de notifications SMS.',
    count: '18 exemples',
    color: '#F8F8F8',
    iconColor: '#92400E',
    link: '/docs/use-cases',
  },
]

const updates = [
  {
    version: 'v2.4.0',
    date: '28 avril 2026',
    type: 'Nouveau',
    desc: 'Endpoint POST /payments/mobile-money supporte désormais Wave CI et MTN MoMo.',
    typeColor: '#1A2BFF',
    typeBg: '#E8F0FD',
  },
  {
    version: 'v2.3.5',
    date: '14 avril 2026',
    type: 'Correction',
    desc: 'Correction d\'un bug sur le webhook member.joined qui émettait des doublons dans certains cas.',
    typeColor: '#1A2BFF',
    typeBg: '#F0FDF4',
  },
  {
    version: 'v2.3.0',
    date: '2 avril 2026',
    type: 'Amélioré',
    desc: 'Rate limits augmentés à 1 000 requêtes/min sur les plans Pro et Institution.',
    typeColor: '#14110D',
    typeBg: '#FDF6EC',
  },
  {
    version: 'v2.2.0',
    date: '15 mars 2026',
    type: 'Nouveau',
    desc: 'SDK Android v2.2 publié avec support natif des notifications push groupées.',
    typeColor: '#1A2BFF',
    typeBg: '#E8F0FD',
  },
]

export default function Documentation() {
  const [search, setSearch] = useState('')

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(160deg, #F0F6FF 0%, #F4F1FF 50%, #FFFBF2 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(14,71,171,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(212,167,91,0.15) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">Documentation</span>
          <h1 style={{ fontSize: 80, marginTop: 24, lineHeight: 0.92, color: '#14110D', maxWidth: 800 }}>
            Construisez avec<br />
            <span style={{ color: '#1A2BFF' }}>Society API.</span>
          </h1>
          <p style={{ fontSize: 18, marginTop: 28, maxWidth: 560, lineHeight: 1.55, color: '#4A4438' }}>
            Documentation complète, exemples de code et SDKs pour intégrer Society dans vos applications en quelques heures.
          </p>
          <div style={{ marginTop: 48, maxWidth: 600, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
              <Icon name="search" size={18} color="#1A2BFF" />
            </div>
            <input
              type="text"
              placeholder="Rechercher dans la documentation... ex : « webhook cotisation »"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '18px 24px 18px 52px', borderRadius: 16, border: '1px solid rgba(14,71,171,0.15)', background: 'white', color: '#14110D', fontSize: 15, outline: 'none', boxSizing: 'border-box', boxShadow: '0 4px 16px rgba(14,71,171,0.08)' }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            {['Démarrage rapide', 'Authentification', 'Webhooks', 'Mobile Money', 'SDK'].map(tag => (
              <button key={tag} style={{ padding: '8px 16px', background: 'white', border: '1px solid rgba(14,71,171,0.15)', borderRadius: 999, color: '#1A2BFF', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <span className="eyebrow">Catégories</span>
              <h2 style={{ fontSize: 40, marginTop: 16, fontWeight: 800 }}>Tout ce dont vous avez besoin.</h2>
            </div>
            <a href="https://github.com/DiferoCorp/society-sdk" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: '#14110D', color: 'white', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
              <Icon name="globe" size={16} color="white" />
              GitHub SDK open-source
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {categories.map((cat, i) => (
              <div key={i} style={{ padding: 32, border: '1px solid #EBEBEB', borderRadius: 24, cursor: 'pointer', transition: 'border-color 0.2s', background: 'white' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name={cat.icon} size={24} color={cat.iconColor} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800 }}>{cat.title}</h3>
                  <span style={{ fontSize: 11, color: '#9B9B9B', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{cat.count}</span>
                </div>
                <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 10, lineHeight: 1.55 }}>{cat.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 24, color: cat.iconColor, fontSize: 14, fontWeight: 700 }}>
                  Explorer <Icon name="arrow" size={14} color={cat.iconColor} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Mises à jour</span>
              <h2 style={{ fontSize: 40, marginTop: 20, fontWeight: 800 }}>Changelog récent.</h2>
              <p style={{ fontSize: 16, color: '#4A4438', marginTop: 16, lineHeight: 1.6 }}>
                Suivez l'évolution de l'API Society. Chaque version est documentée avec les migrations nécessaires.
              </p>
              <button className="btn btn-dark" style={{ marginTop: 32 }}>Voir tout le changelog</button>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              {updates.map((u, i) => (
                <div key={i} style={{ padding: '20px 24px', background: 'white', borderRadius: 16, border: '1px solid #EBEBEB', display: 'grid', gridTemplateColumns: '100px 1fr', gap: 16, alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#14110D' }}>{u.version}</div>
                    <div style={{ fontSize: 11, color: '#9B9B9B', marginTop: 4 }}>{u.date}</div>
                    <span style={{ display: 'inline-block', marginTop: 8, padding: '3px 10px', background: u.typeBg, color: u.typeColor, borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.04em' }}>
                      {u.type}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.5 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 80px' }}>
        <div className="container">
          <div style={{ background: '#1A2BFF', borderRadius: 28, padding: '56px 64px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 36, color: 'white', fontWeight: 800 }}>Une question technique ? La communauté répond.</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginTop: 16, lineHeight: 1.6 }}>
                Plus de 400 développeurs africains sur notre Discord et GitHub Discussions. Posez vos questions, partagez vos intégrations, trouvez des co-builders.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
              <a href="https://github.com/DiferoCorp" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 22px', background: 'white', color: '#14110D', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                <Icon name="globe" size={16} color="#14110D" />
                GitHub · DiferoCorp
              </a>
              <button style={{ padding: '14px 22px', background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="chat" size={16} color="white" />
                Discord des devs
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
