import { NavLink, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { SEGMENTS } from '../data/segments.js'

function Star({ size = 20, color = 'var(--cobalt)', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" width={size} style={{ display: 'block', ...style }} aria-hidden="true">
      <path d="M12 2 L14.4 9.2 L22 9.2 L16 13.8 L18.4 21 L12 16.4 L5.6 21 L8 13.8 L2 9.2 L9.6 9.2 Z"
        fill={color} />
    </svg>
  )
}

export default function Accueil() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <Nav active="Accueil" />

      {/* HERO */}
      <section
        className="hero-fullscreen"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://res.cloudinary.com/dyqeot2wi/image/upload/v1779188721/Sans_titre-1_qcvuck.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />

        <div style={{
          position: 'relative', zIndex: 2,
          padding: '140px 32px 0',
          textAlign: 'center',
          maxWidth: 1100,
          width: '100%',
        }}>
          <Reveal>
            <h1 style={{ fontSize: 'clamp(34px, 4.2vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--encre)', fontWeight: 800 }}>
              Donnez vie à votre <span style={{ color: 'var(--cobalt)' }}>communauté</span>.
            </h1>

            <p style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', marginTop: 22, maxWidth: 560, margin: '22px auto 0', lineHeight: 1.55, color: 'var(--encre)', fontWeight: 500 }}>
              Vos membres, vos cotisations, vos événements. Au même endroit.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-lg">
                Rejoindre les premiers
                <Icon name="arrow" size={14} color="currentColor" />
              </NavLink>
              <NavLink to="/fonctionnalites" className="btn btn-outline btn-lg" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
                Voir les fonctionnalités
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section style={{ padding: '88px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow">Le problème structurel</span>
              <h2 style={{ marginTop: 20, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                Gérer une communauté prend <span style={{ color: 'var(--cobalt)' }}>plus de temps</span> que l'animer.
              </h2>
              <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
                {[
                  { icon: '', t: 'Relances manuelles chaque mois', d: 'Des heures perdues à identifier qui a cotisé, qui est en retard, qui a annulé — via des screenshots WhatsApp et des tableurs non synchronisés.' },
                  { icon: '', t: 'Aucune donnée exploitable', d: 'Impossible de produire un bilan d\'activité fiable, de prouver votre impact à un bailleur ou de piloter la croissance de vos membres.' },
                  { icon: '', t: 'Gestion d\'événements fragmentée', d: 'Les inscriptions sur Forms, les paiements sur Wave, la liste de présence sur WhatsApp, les billets dans un carnet. Rien ne se parle.' },
                  { icon: '', t: 'Communication non ciblée', d: 'Un seul groupe pour tout le monde. Impossible de segmenter, de notifier uniquement les membres actifs ou les non-payeurs.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '18px 20px', background: 'white', borderRadius: 14,
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}>
                    <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--encre)', marginBottom: 4 }}>{item.t}</div>
                      <div style={{ fontSize: 13, color: '#847B6C', lineHeight: 1.55 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ padding: '24px', background: 'white', borderRadius: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#9B9B9B', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Ce que la plupart utilisent aujourd'hui</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[
                      { n: 'WhatsApp', r: 'Annonces & membres' },
                      { n: 'Excel', r: 'Cotisations & comptabilité' },
                      { n: 'Google Forms', r: 'Inscriptions événements' },
                      { n: 'Wave / Orange Money', r: 'Collecte de paiements' },
                      { n: 'Facebook / Instagram', r: 'Visibilité & recrutement' },
                      { n: 'Google Drive', r: 'Documents & PV' },
                      { n: 'Tikerama / HelloAsso', r: 'Billetterie ponctuelle' },
                      { n: 'Mailchimp', r: 'Newsletters' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '12px 14px', background: '#F8F8F8', borderRadius: 10,
                        position: 'relative',
                      }}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: '#4A4438' }}>{item.n}</div>
                        <div style={{ fontSize: 11, color: '#9B9B9B', marginTop: 2 }}>{item.r}</div>
                        <div style={{
                          position: 'absolute', top: 8, right: 8,
                          width: 18, height: 18, borderRadius: '50%',
                          background: '#FEF2F2', color: 'var(--terre)',
                          display: 'grid', placeItems: 'center',
                          fontSize: 10, fontWeight: 800,
                        }}>x</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '24px 28px', background: 'var(--encre)', borderRadius: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.03em', color: 'white' }}>Society</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>
                      L'alternative qu'il vous faut si vous souhaitez aller plus loin.
                    </div>
                  </div>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--cobalt)',
                    display: 'grid', placeItems: 'center',
                    fontWeight: 800, fontSize: 20, color: 'white',
                    flexShrink: 0,
                  }}>&#10003;</div>
                </div>

                <div style={{
                  padding: '20px 24px', background: 'white', borderRadius: 14,
                  borderLeft: '4px solid var(--cobalt)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex', gap: 20, alignItems: 'center',
                }}>
                  <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--cobalt)', lineHeight: 1 }}>05-10h</div>
                  <div style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.5 }}>
                    perdues chaque semaine en gestion administrative, par leader communautaire.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ padding: '88px 64px', background: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <span className="eyebrow">5 modules · 1 plateforme</span>
                <h2 style={{ marginTop: 20, maxWidth: 760, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                  Tout ce qu'il faut pour faire tourner une <span style={{ color: 'var(--cobalt)' }}>communauté</span>.
                </h2>
              </div>
              <NavLink to="/fonctionnalites" className="btn btn-outline">Explorer en détail <Icon name="arrow" size={14} /></NavLink>
            </div>
          </Reveal>

          <div className="modules-grid">
            <Reveal direction="left" style={{ gridColumn: 'span 7' }}>
              <div className="module-card module-blue" style={{
                minHeight: 380,
                background: 'linear-gradient(135deg, var(--cobalt) 0%, var(--cobalt) 60%, #2463E8 100%)',
                boxShadow: '0 20px 60px rgba(26,43,255,0.25)',
              }}>
                <div>
                  <div className="module-tag" style={{ background: 'rgba(255,255,255,0.15)' }}>01 — Gestion communautaire</div>
                  <h3 style={{ fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.08, color: 'white', maxWidth: 440, marginTop: 16, letterSpacing: '-0.025em' }}>
                    Vos membres, parfaitement organisés.
                  </h3>
                  <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.85)', fontSize: 16, maxWidth: 440 }}>
                    Profils, sous-groupes, rôles, messages ciblés, annimation communautaire automatique. Society transforme votre communauté en une machine autonome.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Base de données', 'Sous-groupes', 'Rôles & permissions', 'Tableau de bord'].map(t => (
                    <span key={t} style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 13, fontWeight: 500, color: 'white' }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" style={{ gridColumn: 'span 5' }}>
              <div className="module-card" style={{
                minHeight: 380,
                background: 'var(--encre)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              }}>
                <div>
                  <div className="module-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>02 — Monétisation</div>
                  <h3 style={{ fontSize: 'clamp(22px, 2.2vw, 30px)', lineHeight: 1.1, color: 'white', marginTop: 16, letterSpacing: '-0.02em' }}>
                    L'argent rentre. C'est suivi. Sans courir derrière.
                  </h3>
                  <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.75)', fontSize: 15 }}>
                    Cagnottes, cotisations, billetterie, abonnements. Vous développez votre communauté, le système sécurise vos encaissements.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  {['Orange Money', 'Wave', 'MTN MoMo', 'Banques', 'Cartes prépayées', 'Flooz'].map(p => (
                    <div key={p} style={{
                      background: 'rgba(255,255,255,0.1)', padding: '10px 6px',
                      borderRadius: 12, fontSize: 11, fontWeight: 700, textAlign: 'center',
                      color: 'white',
                    }}>{p}</div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} style={{ gridColumn: 'span 4' }}>
              <div className="module-card" style={{
                minHeight: 280,
                background: 'linear-gradient(135deg, #F0F6FF 0%, #E8EFFC 100%)',
                boxShadow: '0 4px 24px rgba(26,43,255,0.08)',
              }}>
                <div className="module-tag" style={{ background: 'white', color: 'var(--encre)' }}>03 — Gestion des entités</div>
                <h3 style={{ fontSize: 26, marginTop: 12, color: 'var(--encre)' }}>Coordination & centralisation.</h3>
                <p style={{ marginTop: 12, fontSize: 15, color: '#4A4438' }}>
                  Sous-entités, multiples implantations géographiques, groupements. Society unifie votre écosystème.
                </p>
                <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                  {['Trésorerie', 'Événements', 'Centralisation'].map(t => (
                    <span key={t} style={{ padding: '6px 12px', background: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, color: 'var(--encre)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} style={{ gridColumn: 'span 4' }}>
              <div className="module-card" style={{
                minHeight: 280,
                background: 'linear-gradient(135deg, var(--encre) 0%, #1a1a2e 100%)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
              }}>
                <div className="module-tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }}>04 — Visibilité & Impact</div>
                <h3 style={{ fontSize: 24, color: 'white', marginTop: 12 }}>Prouvez votre impact. En chiffres.</h3>
                <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>
                  Membres actifs, cotisations encaissées, bénéficiaires touchés — Society documente votre impact.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} style={{ gridColumn: 'span 4' }}>
              <div className="module-card" style={{
                minHeight: 280,
                background: '#E8EFFC',
                boxShadow: '0 4px 24px rgba(26,43,255,0.1)',
              }}>
                <div className="module-tag" style={{ background: 'rgba(255,255,255,0.6)', color: 'var(--encre)' }}>05 — Espace Leader</div>
                <h3 style={{ fontSize: 26, marginTop: 12, color: 'var(--encre)' }}>Votre audience.<br />Vos règles.</h3>
                <p style={{ marginTop: 12, fontSize: 14, color: '#4A4438', lineHeight: 1.6 }}>
                  Pas d'algorithme qui décide qui voit quoi. Votre espace, votre communauté, vos revenus — directement à vous.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEGMENTS — 6 cartes clean */}
      <section style={{ padding: '88px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <span className="eyebrow">Pour qui ?</span>
                <h2 style={{ marginTop: 20, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                  Tontine, club, asso, diaspora ? <span style={{ color: 'var(--cobalt)' }}>— même outil.</span>
                </h2>
              </div>
              <NavLink to="/pour-qui" className="btn btn-outline">Voir tous les profils <Icon name="arrow" size={14} /></NavLink>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {SEGMENTS.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <NavLink
                  to={`/pour-qui/${s.slug}`}
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  <div style={{
                    borderRadius: 20, overflow: 'hidden',
                    border: '1px solid rgba(20,17,13,0.08)',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                    background: 'white',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {/* Image */}
                    <div style={{
                      height: 200, overflow: 'hidden',
                      backgroundImage: `url(${s.img})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                    }} />
                    {/* Contenu */}
                    <div style={{ padding: '24px' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--encre)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 8 }}>
                        {s.nom}
                      </h3>
                      <p style={{ fontSize: 13, color: '#847B6C', lineHeight: 1.55, marginBottom: 16 }}>
                        {s.tagline}
                      </p>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'var(--encre)' }}>
                        Découvrir <Icon name="arrow" size={12} color='var(--encre)' />
                      </div>
                    </div>
                  </div>
                </NavLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SYNERGIE */}
      <section style={{
        padding: '88px 64px',
        background: 'var(--cobalt)',
        color: 'white', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow white">La force du réseau</span>
              <h2 style={{ marginTop: 20, color: 'white', fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Quand les communautés s'unissent, elles déplacent des montagnes.
              </h2>
              <p style={{ fontSize: 17, marginTop: 24, color: 'rgba(255,255,255,0.8)', maxWidth: 480, lineHeight: 1.6 }}>
                Concerts caritatifs, campagnes de dons, master classes, collectes groupées. Society passe vos actions à l'échelle du réseau.
              </p>
              <NavLink to="/inscription" className="btn btn-dark btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
                Rejoindre le réseau
                <Icon name="arrow" size={16} color="white" />
              </NavLink>
            </Reveal>

            <Reveal direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: 'users', t: 'Campagnes de don', d: 'Plusieurs communautés. Une seule cause.' },
                  { icon: 'play', t: 'Concerts & galas', d: 'Organiser à plusieurs. Remplir la salle.' },
                  { icon: 'award', t: 'Master classes', d: 'Vos leaders partagent. Tout le réseau apprend.' },
                  { icon: 'users', t: 'Mobilisations', d: 'Des milliers de personnes derrière un projet.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: 24,
                    background: 'rgba(255,255,255,0.10)',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'transform 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: 'rgba(255,255,255,0.12)',
                      display: 'grid', placeItems: 'center', marginBottom: 16,
                    }}>
                      <Icon name={item.icon} size={20} color="rgba(255,255,255,0.8)" />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'white', marginBottom: 6 }}>{item.t}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{ padding: '88px 64px', background: 'white' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <div style={{
                borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}>
                <img
                  src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372215/t%C3%A9l%C3%A9chargement_9_mln4bz.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt="témoin"
                />
              </div>
            </Reveal>
            <Reveal direction="right">
              <span className="eyebrow">Ce que Society va changer</span>
              <blockquote style={{
                margin: '32px 0 0',
                fontSize: 34, fontWeight: 700,
                lineHeight: 1.25, letterSpacing: '-0.02em',
                color: 'var(--encre)',
              }}>
                «&#160;Imaginez : plus un seul week-end à relancer 200 cotisantes sur WhatsApp. Tout suivre en temps réel. Et du temps, enfin, pour <span style={{ color: 'var(--cobalt)' }}>animer</span> la mutuelle.&#160;»
              </blockquote>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>Awa K.</div>
                  <div style={{ color: '#6B6B6B', fontSize: 15 }}>
                    Présidente de mutuelle, Abobo · 80 membres
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 28 }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={22} color='var(--cobalt)' />
                ))}
                <span style={{ fontSize: 14, color: '#6B6B6B', marginLeft: 8, alignSelf: 'center' }}>5 / 5</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LE YET */}
      <section data-nav-theme="dark" style={{ padding: '88px 64px', background: 'var(--encre)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'var(--cobalt)',
          opacity: 0.06,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <span className="eyebrow dark">Le YET</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', marginTop: 20, lineHeight: 1.08, color: 'white', maxWidth: 800, letterSpacing: '-0.03em' }}>
              L'efficience d'une infrastructure<span style={{ color: 'var(--so-blue-soft)' }}> pensée </span>pour faire exploser votre intelligence collective. Le moteur est technologique <span style={{ color: 'var(--so-blue-soft)' }}>mais</span> c'est vous qui batissez votre propre expérience.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 20, marginTop: 40, maxWidth: 600, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
              
            </p>
            <NavLink to="/manifeste" className="btn btn-outline" style={{ marginTop: 40, display: 'inline-flex', color: 'white', borderColor: 'rgba(255,255,255,0.35)' }}>
              Lire notre manifeste
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* CO-CONSTRUCTION */}
      <section style={{ padding: '88px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow">Vous bâtissez avec nous</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', marginTop: 20, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                Nos premiers <span style={{ color: 'var(--cobalt)' }}>partenaires co-créent.</span>
              </h2>
              <p style={{ fontSize: 18, marginTop: 28, lineHeight: 1.65, maxWidth: 480 }}>
                Les premières communautés qui rejoignent Society ne sont pas des clients. Ce sont des partenaires de construction. Leur terrain, nos décisions produit.
              </p>
              <NavLink to="/inscription" className="btn btn-primary btn-lg" style={{ marginTop: 40, display: 'inline-flex' }}>
                Rejoindre les premiers partenaires
              </NavLink>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { n: '25', label: 'Leaders interviewés avant la première ligne de code' },
                  { n: '06', label: 'Types de communautés différents dans notre panel de validation' },
                  { n: '100%', label: 'Des décisions produit issues du terrain africain' },
                ].map((s, i) => (
                  <div key={i} style={{
                    padding: '32px 36px',
                    background: 'white',
                    borderRadius: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 28,
                  }}>
                    <div style={{ fontSize: 56, fontWeight: 900, color: 'var(--cobalt)', letterSpacing: '-0.04em', lineHeight: 1, minWidth: 100 }}>
                      {s.n}
                    </div>
                    <div style={{ fontSize: 17, lineHeight: 1.45, color: '#4A4438', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 64px 120px', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <div style={{
              borderRadius: 40, padding: '80px 64px',
              position: 'relative', overflow: 'hidden',
              background: 'var(--encre)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
            }}>
              <div style={{ position: 'relative', zIndex: 2 }} className="cta-grid">
                <div>
                  <h2 style={{ color: 'white', fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                    Votre communauté mérite mieux qu'un <span style={{ color: '#FFFFFF' }}>groupe WhatsApp.</span>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginTop: 24, maxWidth: 480, lineHeight: 1.6 }}>
                    5 minutes pour démarrer. Gratuit pour les premiers. Sans engagement, sans carte bancaire.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <NavLink
                    to="/inscription"
                    className="btn btn-primary btn-xl"
                    style={{
                      justifyContent: 'space-between', padding: '24px 32px',
                      boxShadow: '0 8px 24px rgba(26,43,255,0.4)',
                    }}
                  >
                    <span>Inscrire ma communauté</span>
                    <Icon name="arrow" size={18} color="white" />
                  </NavLink>
                  <NavLink
                    to="/tarifs"
                    className="btn btn-xl"
                    style={{
                      justifyContent: 'space-between', padding: '24px 32px',
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span>Voir les tarifs</span>
                    <Icon name="arrow" size={18} color="white" />
                  </NavLink>
                  <div style={{
                    marginTop: 8, color: 'rgba(255,255,255,0.55)',
                    fontSize: 13, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
                  }}>
                    <Icon name="check" size={14} color="#3DDC84" /> 5 minutes pour démarrer
                    <span style={{ margin: '0 8px' }}>·</span>
                    <Icon name="check" size={14} color="#3DDC84" /> Aucune carte bancaire
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
