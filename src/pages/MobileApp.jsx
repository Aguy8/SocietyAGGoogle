import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const FEATURES = [
  {
    icon: 'users',
    title: 'Fil communautaire',
    desc: 'Un fil d\'actualité vivant. Les causes, les communautés qui vous parlent. Photos, vidéos, campagnes.',
    color: '#14110D',
    bg: '#E8F0FD',
  },
  {
    icon: 'shield',
    title: 'Espace fondateur',
    desc: 'Suivi, finances, membres, billetterie. Tout votre tableau de bord, dans votre poche.',
    color: '#14110D',
    bg: '#F0FDF4',
  },
  {
    icon: 'money',
    title: 'Campagnes & dons',
    desc: 'Lancez une collecte, suivez les dons en direct, remerciez les contributeurs. Depuis l\'app.',
    color: '#14110D',
    bg: '#FDF2F8',
  },
  {
    icon: 'calendar',
    title: 'Évènements & billets',
    desc: 'Créez, publiez, vendez. QR code à l\'entrée, liste des présents. Tout en mobile.',
    color: '#14110D',
    bg: '#FDF6EC',
  },
  {
    icon: 'link',
    title: 'Mise en relation',
    desc: 'Rejoignez d\'autres organisations. Bâtissez des partenariats. Avancez ensemble sur des projets à impact.',
    color: '#14110D',
    bg: '#F3F0FF',
  },
  {
    icon: 'award',
    title: 'Espace créateur',
    desc: 'Les leaders animent leur audience, partagent du contenu exclusif, monétisent leur influence.',
    color: '#14110D',
    bg: '#FFF5F7',
  },
]

const SCREENS = [
  {
    label: 'Fil',
    title: "Un fil d'actualité vivant",
    desc: 'Les causes qui vous touchent. Les communautés actives autour de vous. Chaque publication raconte une histoire vraie.',
    bg: '#1A2BFF',
    img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778355341/Accueil_1_bjfghm.png',
    checks: ['Communautés certifiées avec badge', 'Stories et publications photo/vidéo', 'Fil personnalisé selon vos intérêts'],
    checkColor: '#1A2BFF',
    checkBg: '#E8F0FD',
  },
  {
    label: 'Profil',
    title: "Le tableau de bord de l'organisation",
    desc: 'Suivi, membres, collectes, bénévoles. Toute la puissance de Society, dans une interface sombre et nette.',
    bg: '#14110D',
    img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778355345/P_com_neclph.png',
    checks: ['Reporting & statistiques temps réel', 'Gestion des membres et bénévoles', 'Rapports financiers exportables'],
    checkColor: '#B22842',
    checkBg: 'transparent',
  },
  {
    label: 'Communauté',
    title: 'Explorez. Rejoignez.',
    desc: 'Par type : associations, ONG, mutuelles, institutions. Créez votre espace en quelques secondes.',
    bg: '#1a1a1a',
    img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778355344/Creer_com1_ae1u3e.png',
    checks: ['8 types de communautés disponibles', "Création d'espace en 3 étapes", 'Recommandations personnalisées'],
    checkColor: '#1A2BFF',
    checkBg: '#F3F0FF',
  },
  {
    label: 'Créateur',
    title: "L'espace des leaders",
    desc: "Les influenceurs et figures publiques animent leur audience, partagent du contenu exclusif, mobilisent leur communauté.",
    bg: '#1E3A6E',
    img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778355344/Fil_Prof_2_e43gk7.png',
    checks: ['153K+ abonnés, gestion de l\'audience', 'Contenu exclusif et live streaming', 'Monétisation de l\'influence'],
    checkColor: '#9D174D',
    checkBg: '#FDF2F8',
  },
]

export default function MobileApp() {
  const [betaEmail, setBetaEmail] = React.useState('')
  const [betaSent, setBetaSent] = React.useState(false)

  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, borderRadius: '50%', background: '#1A2BFF', opacity: 0.12, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#1A2BFF', opacity: 0.1, filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow dark">Application mobile</span>
              <h1 style={{ fontSize: 88, lineHeight: 0.88, color: 'white', marginTop: 28 }}>
                Society<br />
                <span style={{ color: '#1A2BFF' }}>dans votre</span><br />
                poche.
              </h1>
              <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', marginTop: 28, lineHeight: 1.6, maxWidth: 460 }}>
                Animer votre communauté, lancer des collectes, organiser des évènements. Depuis votre téléphone. À toute heure.
              </p>
              <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { icon: 'FaApple', store: 'App Store', note: 'iOS bientôt' },
                  { icon: 'FaGooglePlay', store: 'Google Play', note: 'Android bientôt' },
                ].map((btn, i) => (
                  <a key={i} href="#notify" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'white', borderRadius: 14, textDecoration: 'none', color: '#14110D', fontWeight: 700, fontSize: 14 }}>
                    <div style={{ width: 32, height: 32, background: '#14110D', borderRadius: 8, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <Icon name={btn.icon} size={14} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{btn.store}</div>
                      <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 500 }}>{btn.note}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: '12px 18px', background: 'rgba(255,255,255,0.06)', borderRadius: 12, display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Icon name="calendar" size={15} color="#B3B3B3" />
                <span style={{ fontSize: 13, color: '#B3B3B3' }}>Bientôt disponible</span>
              </div>
            </div>

            {/* Phone cluster */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, height: 560, overflow: 'hidden' }}>
              <div className="phone-mockup" style={{ transform: 'rotate(-6deg) translateY(40px)', transformOrigin: 'bottom center' }}>
                <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778354781/accueil_xcou5d.png" className="phone-screen" alt="Communauté" />
              </div>
              <div className="phone-mockup" style={{ transform: 'scale(1.08)', zIndex: 2, boxShadow: '0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778354781/accueil_xcou5d.png" className="phone-screen" alt="Feed Society" />
              </div>
              <div className="phone-mockup" style={{ transform: 'rotate(6deg) translateY(40px)', transformOrigin: 'bottom center' }}>
                <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778354781/accueil_xcou5d.png" className="phone-screen" alt="Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ÉCRANS DÉTAILLÉS */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="eyebrow">Découverte de l'app</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Chaque écran,<br />une expérience.</h2>
          </div>

          <div style={{ display: 'grid', gap: 80 }}>
            {SCREENS.map((screen, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <span style={{ display: 'inline-block', padding: '5px 14px', background: '#1A2BFF', color: 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                    {screen.label}
                  </span>
                  <h3 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.03em' }}>{screen.title}</h3>
                  <p style={{ fontSize: 17, marginTop: 20, color: '#4A4438', lineHeight: 1.65 }}>{screen.desc}</p>
                  <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
                    {screen.checks.map((f, j) => (
                      <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: '#14110D', fontWeight: 500 }}>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: screen.checkBg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <span style={{ color: screen.checkColor, fontSize: 13, fontWeight: 800 }}>✓</span>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}>
                  <div className="phone-mockup" style={{ background: screen.bg }}>
                    <img src={screen.img} className="phone-screen" alt={screen.label} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Fonctionnalités</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>Tout ce dont vous avez<br />besoin, en un seul endroit.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', background: f.bg, borderRadius: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: f.color, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <Icon name={f.icon} size={24} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÊTA SIGNUP */}
      <section id="notify" data-nav-theme="dark" style={{ padding: '100px 64px 120px', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://res.cloudinary.com/dyqeot2wi/image/upload/v1778357843/14cb4620-97b5-4067-a09b-65b6464dea73_a0evwt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
        <div style={{ position: 'absolute', bottom: -120, left: '50%', transform: 'translateX(-50%)', width: 700, height: 350, borderRadius: '50%', background: '#1A2BFF', opacity: 0.18, filter: 'blur(100px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A2BFF', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>En développement actif</span>
          </div>
          <h2 style={{ fontSize: 64, color: 'white', lineHeight: 0.92, maxWidth: 700, margin: '0 auto' }}>
            Soyez parmi<br />
            <span style={{ color: '#FFFFFF' }}>les premiers.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginTop: 24, maxWidth: 480, margin: '24px auto 0', lineHeight: 1.6 }}>
            Rejoignez les premiers accès. Découvrez l'app Society avant tout le monde.
          </p>
          {betaSent ? (
            <div style={{ marginTop: 44, padding: '28px 32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 16, display: 'inline-block' }}>
              <span style={{ fontSize: 24, marginRight: 10 }}>✓</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>Vous êtes sur la liste. On vous prévient en premier.</span>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="votre@email.com"
                value={betaEmail}
                onChange={e => setBetaEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && betaEmail && setBetaSent(true)}
                style={{ padding: '18px 24px', borderRadius: 14, border: `1px solid ${betaEmail ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)'}`, background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: 15, width: 320, outline: 'none', maxWidth: '100%', boxSizing: 'border-box' }}
              />
              <button
                className="btn btn-primary btn-lg"
                onClick={() => betaEmail && setBetaSent(true)}
                disabled={!betaEmail}
                style={{ opacity: betaEmail ? 1 : 0.5, cursor: betaEmail ? 'pointer' : 'not-allowed' }}
              >
                Je rejoins les pionniers
                <Icon name="arrow" size={16} color="white" />
              </button>
            </div>
          )}
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>Pas de spam. Désinscription en un clic.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
