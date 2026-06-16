import { useParams, NavLink, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { SEGMENT_BY_SLUG, SEGMENTS } from '../data/segments.js'

const HOW_STEPS = [
  { num: '01', title: 'Pré-réservez votre espace', desc: '5 min, sans carte bancaire', icon: 'activity' },
  { num: '02', title: 'Choisissez vos modules', desc: 'Adapté à vos besoins réels', icon: 'grid' },
  { num: '03', title: 'Invitez vos membres', desc: 'Lien, QR code, email — ils arrivent', icon: 'users' },
  { num: '04', title: 'Animez et grandissez', desc: 'Dashboard, analytics, votre communauté vit', icon: 'chart' },
]

const MODULE_ICONS = {
  'Gestion communautaire': 'users',
  'Visibilité & Impact': 'globe',
  'Monétisation': 'layers',
  'Mise en relation': 'link',
  'Espace Leader': 'award',
}

export default function Segment() {
  const { slug } = useParams()
  const s = SEGMENT_BY_SLUG[slug]

  if (!s) return <Navigate to="/pour-qui" replace />

  const idx = SEGMENTS.findIndex(x => x.slug === slug)
  const prev = SEGMENTS[idx - 1]
  const next = SEGMENTS[idx + 1]

  const accentColor = 'var(--cobalt)'
  const textOnAccent = 'white'
  const ctaColor = 'var(--cobalt)'

  /* ── Carousel state ── */
  const carouselImages = s.carousel && s.carousel.length > 0
    ? s.carousel
    : [s.img, s.heroImg, s.temoignage?.img].filter(Boolean)
  const [slideIdx, setSlideIdx] = useState(0)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSliding(true)
      setTimeout(() => {
        setSlideIdx(i => (i + 1) % carouselImages.length)
        setSliding(false)
      }, 500)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  return (
    <div className="page">
      <Nav />

      {/* ── HERO — Great Meetings style, fond couleur segment + galerie pills ── */}
      <section data-nav-theme="dark" style={{
        position: 'relative',
        minHeight: '70vh',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.12) 0%, transparent 35%),
          radial-gradient(circle at bottom right, rgba(0,0,0,0.20) 0%, transparent 40%),
          linear-gradient(135deg, ${accentColor} 0%, ${accentColor}e0 50%, ${accentColor}aa 100%)
        `,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', filter: 'blur(90px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 280, height: 280, borderRadius: '50%', background: 'rgba(20,17,13,0.25)', filter: 'blur(90px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 120, left: '8%', width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
        <div style={{ position: 'absolute', bottom: 180, left: '4%', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
        <div style={{ position: 'absolute', top: 220, right: '6%', width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 64px 60px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>

            {/* ── Gauche : texte ── */}
            <div>
              <Reveal>
                <NavLink to="/pour-qui" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 13, fontWeight: 600,
                  textDecoration: 'none', marginBottom: 28, letterSpacing: '0.02em',
                }}>
                  ← Tous les segments
                </NavLink>
              </Reveal>

              <Reveal delay={60}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '8px 18px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 999, marginBottom: 28,
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.7)' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {s.count} en Côte d'Ivoire
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1 style={{
                  fontSize: 'clamp(36px, 4.5vw, 60px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.035em',
                  color: 'white',
                  marginBottom: 20, maxWidth: 560,
                }}>{s.nom}.</h1>
              </Reveal>

              <Reveal delay={180}>
                <p style={{
                  fontSize: 'clamp(16px, 1.3vw, 18px)',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.65, maxWidth: 480, marginBottom: 32,
                }}>{s.tagline}</p>
              </Reveal>

              <Reveal delay={240}>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <NavLink to="/inscription" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '16px 30px',
                    background: 'white',
                    color: accentColor,
                    borderRadius: 999, fontWeight: 700,
                    fontSize: 15, textDecoration: 'none',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.22)',
                  }}>Démarrer gratuitement</NavLink>
                  <NavLink to="/tarifs" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '16px 30px',
                    background: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: 999, color: 'white', fontWeight: 700,
                    fontSize: 15, textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                  }}>Voir les plans</NavLink>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div style={{
                  marginTop: 52,
                  display: 'inline-flex', alignItems: 'center', gap: 14,
                  padding: '14px 22px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 22,
                  backdropFilter: 'blur(14px)',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'grid', placeItems: 'center',
                  }}>
                    <Icon name="users" size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Modules recommandés</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.modules?.slice(0, 2).join(' · ') || 'Gestion · Impact'}</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── Droite : galerie pills — 6 images indépendantes via s.heroGallery ── */}
            <Reveal delay={120} className="seg-gallery-pills">
              {(() => {
                const G = s.heroGallery && s.heroGallery.length >= 6
                  ? s.heroGallery
                  : [s.heroImg, s.img, s.temoignage?.img || s.img, s.heroImg, s.img, s.temoignage?.img || s.heroImg]
                return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ height: 280, borderRadius: 999, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.30)' }}>
                        <img src={G[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                      </div>
                      <div style={{ height: 180, borderRadius: 999, overflow: 'hidden', position: 'relative', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}>
                        <img src={G[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 40 }}>
                      <div style={{ height: 220, borderRadius: 999, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}>
                        <img src={G[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                      </div>
                      <div style={{ height: 300, borderRadius: 999, overflow: 'hidden', position: 'relative', boxShadow: '0 20px 48px rgba(0,0,0,0.30)' }}>
                        <img src={G[3]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 80 }}>
                      <div style={{ height: 240, borderRadius: 999, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.30)' }}>
                        <img src={G[4]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                      </div>
                      <div style={{ height: 200, borderRadius: 999, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}>
                        <img src={G[5]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                      </div>
                    </div>
                  </div>
                )
              })()}
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── USE CASES — white ── */}
      <section style={{ padding: '100px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <span className="eyebrow" style={{ color: accentColor }}>Ce que vous faites avec Society</span>
              <h2 style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                marginTop: 18, color: 'var(--encre)', lineHeight: 1.08, maxWidth: 640, letterSpacing: '-0.03em',
              }}>
                Des outils. Des actions. <span style={{ color: accentColor }}>Des résultats.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {s.useCases.map((uc, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{
                  background: 'white',
                  border: `1px solid ${accentColor}20`,
                  borderRadius: 20,
                  padding: 32, position: 'relative', overflow: 'hidden',
                  height: '100%',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `0 16px 48px ${accentColor}25`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColor }} />
                  <div style={{
                    display: 'inline-block', padding: '4px 12px',
                    background: `${accentColor}12`,
                    border: `1px solid ${accentColor}28`,
                    borderRadius: 999,
                    fontSize: 11, fontWeight: 700, color: accentColor,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    marginBottom: 20,
                  }}>{uc.tag}</div>
                  <div style={{ marginBottom: 14 }}>
                    <Icon name={uc.icon} size={24} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--encre)', lineHeight: 1.25, marginBottom: 12 }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B6B6B', lineHeight: 1.6, margin: 0 }}>
                    {uc.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS INCLUSES + MODULES — warm light bg ── */}
      <section style={{
        padding: '100px 64px',
        background: 'linear-gradient(160deg, #F8FAFE 0%, #F2F7FD 100%)',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* LEFT — ce que Society change (s.sol) */}
            <Reveal direction="left">
              <span className="eyebrow" style={{ color: accentColor }}>Ce que Society change</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 20, color: 'var(--encre)', lineHeight: 1.1, marginBottom: 36 }}>
                Tout ce dont vous avez besoin,<br />
                <span style={{ color: accentColor }}>intégré.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {s.sol.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '16px 20px',
                    background: 'white',
                    borderRadius: 14,
                    border: `1px solid ${accentColor}18`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}28`,
                      display: 'grid', placeItems: 'center',
                      fontSize: 14, fontWeight: 800, color: accentColor,
                    }}>✓</div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A' }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* RIGHT — modules */}
            <Reveal direction="right" delay={80}>
              <span className="eyebrow" style={{ color: accentColor }}>Modules clés</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 20, color: 'var(--encre)', lineHeight: 1.1, marginBottom: 36 }}>
                Les outils taillés pour<br />
                <span style={{ color: accentColor }}>{s.nom}</span>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {s.modules.map((mod, i) => (
                  <div key={i} style={{
                    padding: '20px 24px',
                    background: 'white',
                    borderRadius: 16,
                    border: `1px solid ${accentColor}18`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    display: 'flex', alignItems: 'center', gap: 18,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 8px 28px ${accentColor}20`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}28`,
                      display: 'grid', placeItems: 'center',
                    }}>
                      <Icon name={MODULE_ICONS[mod] ?? 'grid'} size={20} color={accentColor} />
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--encre)' }}>{mod}</div>
                      <NavLink to="/fonctionnalites" style={{ fontSize: 12, color: accentColor, fontWeight: 600, textDecoration: 'none' }}>
                        Découvrir →
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALERIE PLEINE LARGEUR — deux piles d'images ── */}
      <section style={{ background: 'var(--encre)', overflow: 'hidden' }}>
        <div className="seg-piles-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '70vh', gap: 3 }}>

          {/* Pile gauche */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {carouselImages[2] && (
              <div style={{
                position: 'absolute', top: '6%', left: '4%', right: '10%', bottom: '6%',
                backgroundImage: `url(${carouselImages[2]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: 20, transform: 'rotate(2.5deg)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
              }} />
            )}
            {carouselImages[1] && (
              <div style={{
                position: 'absolute', top: '3%', left: '2%', right: '6%', bottom: '3%',
                backgroundImage: `url(${carouselImages[1]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: 20, transform: 'rotate(1deg)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              }} />
            )}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${carouselImages[0]})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 48, left: 48, right: 48, zIndex: 2 }}>
              <span style={{
                display: 'inline-block', marginBottom: 14,
                padding: '5px 14px', borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
              }}>Vie communautaire</span>
              <h3 style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', color: 'white', lineHeight: 1.05, fontWeight: 800 }}>
                {s.nom}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 12, fontSize: 14, lineHeight: 1.6, maxWidth: 340 }}>
                {s.tagline}
              </p>
            </div>
          </div>

          {/* Pile droite */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {carouselImages[5] && (
              <div style={{
                position: 'absolute', top: '6%', left: '10%', right: '4%', bottom: '6%',
                backgroundImage: `url(${carouselImages[5]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: 20, transform: 'rotate(-2.5deg)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
              }} />
            )}
            {carouselImages[4] && (
              <div style={{
                position: 'absolute', top: '3%', left: '6%', right: '2%', bottom: '3%',
                backgroundImage: `url(${carouselImages[4]})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: 20, transform: 'rotate(-1deg)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              }} />
            )}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${carouselImages[3] || carouselImages[0]})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 48, left: 48, right: 48, zIndex: 2 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {s.sol.slice(0, 3).map(t => (
                  <span key={t} style={{
                    padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                    background: 'rgba(255,255,255,0.12)', color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                  }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 32px)', color: 'white', lineHeight: 1.1, fontWeight: 800 }}>
                Des outils pensés pour votre realite.
              </h3>
              <NavLink to="/inscription" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 22,
                padding: '13px 22px', background: 'var(--cobalt)', borderRadius: 12,
                fontSize: 13, fontWeight: 700, color: 'white', textDecoration: 'none',
              }}>
                Demarrer gratuitement
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — white ── */}
      <section style={{ padding: '100px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64 }}>
              <span className="eyebrow" style={{ color: accentColor }}>Simple par design</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginTop: 20, color: 'var(--encre)', lineHeight: 1.0 }}>
                De l'idée à la communauté<br />
                <span style={{ color: accentColor }}>en 4 étapes.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            border: `1px solid ${accentColor}22`,
            borderRadius: 20, overflow: 'hidden',
            background: 'white',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          }}>
            {HOW_STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  padding: '40px 28px',
                  borderRight: i < HOW_STEPS.length - 1 ? `1px solid ${accentColor}12` : 'none',
                  background: i % 2 === 0 ? 'white' : `${accentColor}04`,
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 800, color: accentColor,
                    letterSpacing: '0.1em', marginBottom: 20, opacity: 0.6,
                  }}>{step.num}</div>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${accentColor}12`,
                    border: `1px solid ${accentColor}28`,
                    display: 'grid', placeItems: 'center', marginBottom: 20,
                  }}>
                    <Icon name={step.icon} size={20} color={accentColor} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--encre)', lineHeight: 1.25, marginBottom: 10 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6B6B6B', lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL — accent bg ── */}
      <section style={{
        padding: '100px 64px',
        background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}e8 100%)`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle blob */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'center' }}>
            <Reveal direction="left">
              <div style={{
                borderRadius: 28, overflow: 'hidden', aspectRatio: '1/1',
                boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
              }}>
                <img src={s.temoignage.img} alt={s.temoignage.auteur}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
            <Reveal direction="right" delay={80}>
              <div>
                <div style={{
                  fontSize: 120,
                  color: textOnAccent === 'white' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.1)',
                  fontFamily: 'Georgia, serif', lineHeight: 0.8,
                  marginBottom: -20, userSelect: 'none',
                }}>"</div>
                <blockquote style={{
                  margin: 0, fontSize: 'clamp(18px, 2vw, 26px)',
                  fontWeight: 600, lineHeight: 1.4,
                  color: textOnAccent === 'white' ? 'white' : 'var(--encre)',
                }}>{s.temoignage.texte}</blockquote>
                <div style={{
                  marginTop: 36, paddingTop: 28,
                  borderTop: `1px solid ${textOnAccent === 'white' ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.12)'}`,
                }}>
                  <div style={{ fontWeight: 800, fontSize: 17,
                    color: textOnAccent === 'white' ? 'white' : 'var(--encre)' }}>{s.temoignage.auteur}</div>
                  <div style={{ fontSize: 14, marginTop: 4,
                    color: textOnAccent === 'white' ? 'rgba(255,255,255,0.62)' : 'rgba(0,0,0,0.52)' }}>
                    {s.temoignage.role}
                  </div>
                  <div style={{
                    display: 'inline-block', marginTop: 12,
                    padding: '3px 10px',
                    background: textOnAccent === 'white' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                    borderRadius: 999,
                    fontSize: 11, fontWeight: 600,
                    color: textOnAccent === 'white' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)',
                    letterSpacing: '0.03em',
                  }}>Scénario illustratif</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA — blue gradient (never gold, to avoid over-saturation) ── */}
      <section style={{
        padding: '100px 64px',
        background: `linear-gradient(135deg, ${ctaColor} 0%, ${ctaColor}e0 60%, ${ctaColor}bb 100%)`,
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle blobs */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 280, height: 280, borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -40,
          width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(0,0,0,0.06)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 68px)', color: 'white',
              lineHeight: 1.0, margin: '0 auto 20px', maxWidth: 700,
            }}>
              Prêt à faire grandir<br />votre communauté ?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.6 }}>
              Accès gratuit pour les premiers — sans carte bancaire, sans engagement. Votre communauté commence aujourd'hui.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-lg" style={{
                background: 'white',
                color: ctaColor,
                fontWeight: 800,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}>Démarrer gratuitement</NavLink>
              <NavLink to="/tarifs" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: 999, color: 'white', fontWeight: 700,
                fontSize: 15, textDecoration: 'none',
              }}>Voir les plans</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FORMULAIRE DE DIAGNOSTIC — téléchargeable ── */}
      <section style={{ padding: '80px 64px', background: '#F8FAFE' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal direction="left">
              <span className="eyebrow" style={{ color: accentColor }}>Formulaire de diagnostic</span>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 20, color: 'var(--encre)', lineHeight: 1.1 }}>
                Vos besoins.<br />Vos <span style={{ color: accentColor }}>limites</span>.<br />Vos ambitions.
              </h2>
              <p style={{ fontSize: 16, marginTop: 24, color: '#4A4438', lineHeight: 1.65, maxWidth: 440 }}>
                Téléchargez notre formulaire de diagnostic gratuit, conçu spécifiquement pour les <strong>{s.nom.toLowerCase()}</strong>. 15 minutes pour cartographier vos défis et évaluer comment Society peut transformer votre communauté.
              </p>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Comprendre vos outils actuels et leurs limites',
                  'Identifier vos priorités et votre budget',
                  'Mesurer votre intérêt réel pour Society (score NPS)',
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: '#4A4438' }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                      background: `${accentColor}15`, border: `1px solid ${accentColor}30`,
                      display: 'grid', placeItems: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={80}>
              <div style={{
                background: 'white', borderRadius: 24, padding: 36,
                boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                border: '1px solid #E8ECF4',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.03em', color: 'var(--encre)' }}>Diagnostic Society</div>
                    <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>{s.nom} · Formulaire PDF</div>
                  </div>
                  <div style={{
                    padding: '4px 12px', background: `${accentColor}12`,
                    border: `1px solid ${accentColor}28`,
                    color: accentColor, borderRadius: 999, fontSize: 11, fontWeight: 700,
                  }}>Gratuit</div>
                </div>
                <div style={{ display: 'grid', gap: 8, marginBottom: 28 }}>
                  {['6 parties · ~15 minutes', 'Imprimable + remplissable en ligne', 'Score NPS inclus', 'Retournable par email à notre équipe'].map((f, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 10, fontSize: 14, color: '#4A4438',
                      padding: '10px 14px', background: '#F8FAFE', borderRadius: 10,
                    }}>
                      <span style={{ color: accentColor, fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <NavLink
                  to={`/diagnostic/${s.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '15px 24px',
                    background: `linear-gradient(135deg, ${ctaColor}, ${ctaColor}dd)`,
                    color: 'white',
                    borderRadius: 999, fontWeight: 700, fontSize: 15,
                    textDecoration: 'none', width: '100%',
                    boxShadow: `0 6px 20px ${ctaColor}35`,
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Télécharger le formulaire PDF
                </NavLink>
                <p style={{ fontSize: 12, color: '#9B9B9B', textAlign: 'center', marginTop: 12 }}>
                  Ctrl+P pour sauvegarder directement en PDF
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NAV PREV/NEXT ── */}
      <section style={{ padding: '40px 64px 80px', borderTop: '1px solid #E5E5E5', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            {prev ? (
              <NavLink to={`/pour-qui/${prev.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 24px', background: '#F8F8F8',
                borderRadius: 16, textDecoration: 'none', color: 'var(--encre)',
              }}>
                <span>←</span>
                <div>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Précédent</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{prev.nom}</div>
                </div>
              </NavLink>
            ) : <div />}
            <NavLink to="/pour-qui" style={{ fontSize: 14, fontWeight: 600, color: '#6B6B6B', textDecoration: 'none' }}>
              Tous les segments
            </NavLink>
            {next ? (
              <NavLink to={`/pour-qui/${next.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 24px', background: '#F8F8F8',
                borderRadius: 16, textDecoration: 'none', color: 'var(--encre)',
              }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>Suivant</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{next.nom}</div>
                </div>
                <span>→</span>
              </NavLink>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
