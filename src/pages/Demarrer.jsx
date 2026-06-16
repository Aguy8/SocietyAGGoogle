import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const STEPS = [
  {
    n: '01', icon: 'users', color: 'var(--cobalt)', bg: '#E8EFFC',
    t: 'Pré-réservez votre espace en 5 minutes',
    d: 'Nom, type, logo — quelques clics. Aucune carte demandée.',
    checks: ['Choisissez votre type de communauté', 'Personnalisez votre page publique', 'Invitez vos premiers membres'],
  },
  {
    n: '02', icon: 'money', color: 'var(--cobalt)', bg: '#F8F8F8',
    t: 'Importez vos membres',
    d: 'Excel, CSV, ou un par un. Vos membres reçoivent une invitation par SMS ou email.',
    checks: ['Import Excel / CSV en un clic', 'Invitation automatique par SMS', 'Migration depuis WhatsApp'],
  },
  {
    n: '03', icon: 'trending', color: 'var(--cobalt)', bg: '#F3F0FF',
    t: 'Lancez votre première activité',
    d: 'Cagnotte, cotisation, évènement — choisissez, lancez, regardez votre communauté répondre.',
    checks: ['Cagnotte en 3 clics', 'Cotisation mensuelle automatique', 'Évènement avec billetterie'],
  },
  {
    n: '04', icon: 'chart', color: 'var(--cobalt)', bg: '#E8EFFC',
    t: 'Suivez votre impact en temps réel',
    d: 'Tableau de bord : membres actifs, fonds collectés, engagement, projets en cours. Tout, au même endroit.',
    checks: ['Tableau de bord en temps réel', 'Rapports téléchargeables', 'Indicateurs d\'impact RSE'],
  },
]

export default function Demarrer() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(180deg, #F4F7FE 0%, white 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="eyebrow">Guide de démarrage</span>
            <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9 }}>
              Prêt en <span style={{ color: 'var(--cobalt)' }}>5 min</span>.<br />
              Opérationnel en<br />
              <span style={{ color: 'var(--cobalt)' }}>24h.</span>
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 600, lineHeight: 1.5 }}>
              Démarrer avec Society, étape par étape — de la création de votre espace à votre première activité.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl">
                Créer mon espace <Icon name="arrow" size={16} color="white" />
              </NavLink>
              <NavLink to="/tarifs" className="btn btn-outline btn-xl">Voir les plans</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 64 }}>
            {STEPS.map((s, i) => (
              <Reveal key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 16, background: s.bg, display: 'grid', placeItems: 'center' }}>
                        <Icon name={s.icon} size={24} color={s.color} />
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: s.color, letterSpacing: '0.06em' }}>ÉTAPE {s.n}</div>
                    </div>
                    <h2 style={{ fontSize: 44, lineHeight: 1.1 }}>{s.t}</h2>
                    <p style={{ fontSize: 17, marginTop: 20, lineHeight: 1.6, color: '#4A4438', maxWidth: 480 }}>{s.d}</p>
                    <div style={{ marginTop: 28, display: 'grid', gap: 12 }}>
                      {s.checks.map((c, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, fontWeight: 500 }}>
                          <div style={{ width: 26, height: 26, borderRadius: '50%', background: s.bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            <span style={{ color: s.color, fontSize: 13, fontWeight: 800 }}>✓</span>
                          </div>
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div style={{ background: s.bg, borderRadius: 28, aspectRatio: '4/3', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: s.color, opacity: 0.08 }} />
                      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: 80, fontWeight: 900, color: s.color, opacity: 0.15, letterSpacing: '-0.04em' }}>{s.n}</div>
                        <div style={{ width: 80, height: 80, borderRadius: 24, background: s.color, margin: '-40px auto 0', display: 'grid', placeItems: 'center' }}>
                          <Icon name={s.icon} size={36} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <div style={{ width: 2, height: 60, background: '#E5E5E5' }} />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Questions fréquentes</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>On vous aide à démarrer.</h2>
          </Reveal>
          <div style={{ maxWidth: 780, margin: '0 auto', display: 'grid', gap: 12 }}>
            {[
              ['Faut-il une carte bancaire pour s\'inscrire ?', 'Non. Le plan Starter est gratuit, aucune carte demandée. Vous démarrez tout de suite.'],
              ['Combien de temps pour tout configurer ?', '5 à 8 minutes : créer votre espace, le personnaliser, inviter vos premiers membres.'],
              ['Je peux importer mes membres WhatsApp ?', 'Oui. On a un guide d\'import depuis WhatsApp. CSV ou Excel acceptés.'],
              ['Y a-t-il un support en français ?', 'Oui, entièrement en français. Chat et email, du lundi au samedi.'],
              ['Et si je veux changer de plan ?', 'Vous changez à tout moment, sans pénalité. Le prorata est calculé tout seul.'],
            ].map(([q, a], i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ padding: '24px 28px', background: 'white', borderRadius: 20, border: '1px solid #E5E5E5' }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--encre)', marginBottom: 10 }}>{q}</div>
                  <div style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.6 }}>{a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px 120px', background: 'var(--encre)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 72, color: 'white', fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Votre communauté<br />n'attend plus que<br /><span style={{ color: 'var(--cobalt)' }}>vous.</span>
          </h2>
          <NavLink to="/inscription" className="btn btn-gold btn-xl" style={{ marginTop: 48, display: 'inline-flex' }}>
            Créer mon espace gratuitement <Icon name="arrow" size={16} color='var(--encre)' />
          </NavLink>
          <div style={{ marginTop: 20, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Aucune carte demandée · 5 minutes pour démarrer</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
