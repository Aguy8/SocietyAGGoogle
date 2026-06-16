import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'

const MAIN_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/fonctionnalites', label: 'Fonctionnalités' },
  { to: '/pour-qui', label: 'Pour qui ?' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
]

const DISCOVER_SECTIONS = [
  {
    title: 'Produit',
    items: [
      { to: '/mobile-app',   label: 'App mobile',    desc: 'Society dans votre poche',  icon: 'phone',  color: 'var(--encre)' },
      { to: '/evenements',   label: 'Événements',    desc: 'Billetterie & QR codes',    icon: 'calendar',   color: 'var(--encre)' },
      { to: '/comparatif',   label: 'Comparatif',    desc: 'Society vs alternatives',   icon: 'chart',  color: 'var(--encre)' },
      { to: '/integrations', label: 'Intégrations',  desc: 'Mobile Money & outils',     icon: 'link',   color: 'var(--encre)' },
    ],
  },
  {
    title: 'Communauté',
    items: [
      { to: '/impact',          label: 'Impact collectif', desc: 'Notre vision & ambitions',    icon: 'globe', color: 'var(--encre)' },
      { to: '/benevolat',       label: 'Bénévolat',        desc: 'Gérez vos volontaires',       icon: 'users', color: 'var(--encre)' },
      { to: '/mise-en-relation',label: 'Mise en relation', desc: 'Connecter les communautés',   icon: 'globe', color: 'var(--encre)' },
      { to: '/ambassadeurs',    label: 'Ambassadeurs',     desc: 'Programme de parrainage',     icon: 'award',  color: 'var(--encre)' },
    ],
  },
  {
    title: 'Ressources',
    items: [
      { to: '/etudes-de-cas', label: 'Études de cas',  desc: 'Résultats détaillés',     icon: 'layers', color: 'var(--encre)' },
      { to: '/blog',          label: 'Blog & articles', desc: 'Ressources pour leaders', icon: 'chart',  color: 'var(--encre)' },
      { to: '/webinaires',    label: 'Webinaires',      desc: 'Formations gratuites',    icon: 'play',   color: 'var(--encre)' },
      { to: '/centre-aide',   label: "Centre d'aide",   desc: 'Questions fréquentes',    icon: 'shield', color: 'var(--encre)' },
    ],
  },
  {
    title: 'Society',
    items: [
      { to: '/manifeste',   label: 'Manifeste',  desc: 'Nos valeurs & vision',      icon: 'file-text', color: 'var(--encre)' },
      { to: '/rse',         label: 'RSE',        desc: 'Partenariats à impact',      icon: 'globe',  color: 'var(--encre)' },
      { to: '/newsletter',  label: 'Newsletter', desc: 'Restez informé',             icon: 'bell',   color: 'var(--encre)' },
      { to: '/changelog',   label: 'Nouveautés', desc: 'Dernières mises à jour',     icon: 'refresh',   color: 'var(--encre)' },
    ],
  },
]

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 298 }} />
      )}

      <div style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 299,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        pointerEvents: 'none',
      }}>

        {/* Panel — verre blanc translucide */}
        {open && (
          <div style={{
            pointerEvents: 'all',
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
            borderRadius: 20,
            padding: 8,
            boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.5)',
            width: 'min(720px, calc(100vw - 40px))',
            marginBottom: 4,
            transformOrigin: 'bottom center',
            animation: 'floatNavIn 0.2s cubic-bezier(0.16,1,0.3,1)',
            maxHeight: 'calc(100vh - 120px)',
            overflowY: 'auto',
          }}>

            {/* Main links row */}
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', padding: '6px 6px 2px' }}>
              {MAIN_LINKS.map(link => (
                <NavLink key={link.to} to={link.to} end={link.end}
                  style={({ isActive }) => ({
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: isActive ? 'rgba(26,43,255,0.1)' : 'rgba(20,17,13,0.04)',
                    color: isActive ? 'var(--cobalt)' : 'var(--encre)',
                    whiteSpace: 'nowrap',
                  })}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div style={{ margin: '8px 4px 4px', borderTop: '1px solid rgba(20,17,13,0.08)' }} />

            {/* 4-column discover grid */}
            <div className="float-nav-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, padding: '0 4px' }}>
              {DISCOVER_SECTIONS.map(section => (
                <div key={section.title}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(20,17,13,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4, paddingLeft: 8, paddingTop: 4 }}>
                    {section.title}
                  </div>
                  {section.items.map(item => (
                    <NavLink key={item.to} to={item.to}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '7px 8px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        background: isActive ? 'rgba(26,43,255,0.08)' : 'transparent',
                        marginBottom: 2,
                      })}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: `${item.color}18`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        <Icon name={item.icon} size={12} color={item.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--encre)', lineHeight: 1.2 }}>{item.label}</div>
                        <div style={{ fontSize: 10, color: 'rgba(20,17,13,0.5)', marginTop: 1, lineHeight: 1.3 }}>{item.desc}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div style={{ margin: '8px 4px 4px', paddingTop: 8, borderTop: '1px solid rgba(20,17,13,0.08)', display: 'flex', gap: 8 }}>
              <NavLink to="/demarrer" style={{ flex: 1, padding: '11px 14px', background: 'var(--cobalt)', borderRadius: 11, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="arrow" size={13} color="white" />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>Comment démarrer</span>
              </NavLink>
              <NavLink to="/documentation" style={{ flex: 1, padding: '11px 14px', background: 'rgba(20,17,13,0.05)', borderRadius: 11, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="layers" size={13} color="rgba(20,17,13,0.6)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--encre)' }}>Documentation</span>
              </NavLink>
            </div>
          </div>
        )}

        {/* Buttons row */}
        <div style={{ display: 'flex', gap: 10, pointerEvents: 'all', alignItems: 'center' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Remonter en haut"
            style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: 'var(--cobalt)',
              border: 'none',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 8px 24px rgba(26,43,255,0.45)',
              transition: 'opacity 0.25s, transform 0.25s',
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? 'scale(1)' : 'scale(0.6)',
              pointerEvents: scrolled ? 'all' : 'none',
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Navigation rapide"
            style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: open ? 'var(--cobalt)' : 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.5)',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
              transition: 'background 0.2s, transform 0.2s',
              transform: open ? 'rotate(45deg)' : 'rotate(0)',
            }}>
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke='var(--encre)' strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
