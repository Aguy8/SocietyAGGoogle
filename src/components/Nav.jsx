import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'

const mainLinks = [
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Pour qui ?', to: '/pour-qui' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'À propos', to: '/a-propos' },
]

const discoverSections = [
  {
    title: 'Produit',
    items: [
      { to: '/mobile-app', label: 'App mobile', desc: 'Society dans votre poche', icon: 'phone' },
      { to: '/evenements', label: 'Événements', desc: 'Billetterie & QR codes', icon: 'calendar' },
      { to: '/comparatif', label: 'Comparatif', desc: 'Society vs alternatives', icon: 'chart' },
      { to: '/integrations', label: 'Intégrations', desc: 'Mobile Money & outils', icon: 'link' },
    ],
  },
  {
    title: 'Communauté',
    items: [
      { to: '/impact', label: 'Impact collectif', desc: 'Notre vision & ambitions', icon: 'globe' },
      { to: '/benevolat', label: 'Bénévolat', desc: 'Gérez vos volontaires', icon: 'users' },
      { to: '/mise-en-relation', label: 'Mise en relation', desc: 'Connecter les communautés', icon: 'globe' },
      { to: '/ambassadeurs', label: 'Ambassadeurs', desc: 'Programme de parrainage', icon: 'award' },
    ],
  },
  {
    title: 'Ressources',
    items: [
      { to: '/etudes-de-cas', label: 'Études de cas', desc: 'Résultats détaillés', icon: 'layers' },
      { to: '/blog', label: 'Blog & articles', desc: 'Ressources pour leaders', icon: 'chart' },
      { to: '/webinaires', label: 'Webinaires', desc: 'Formations gratuites', icon: 'play' },
      { to: '/centre-aide', label: "Centre d'aide", desc: 'Questions fréquentes', icon: 'shield' },
    ],
  },
  {
    title: 'Society',
    items: [
      { to: '/manifeste', label: 'Manifeste', desc: 'Nos valeurs & vision', icon: 'file-text' },
      { to: '/rse', label: 'RSE', desc: 'Partenariats à impact', icon: 'globe' },
      { to: '/newsletter', label: 'Newsletter', desc: 'Restez informé', icon: 'bell' },
      { to: '/changelog', label: 'Nouveautés', desc: 'Dernières mises à jour', icon: 'refresh' },
    ],
  },
]

export default function Nav({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [founderOpen, setFounderOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [autoTheme, setAutoTheme] = useState('light')
  const [toast, setToast] = useState(null)
  const lastY = useRef(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(t)
  }, [toast])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 80) {
        setNavHidden(y > lastY.current)
      } else {
        setNavHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const detect = () => {
      const navH = 68
      const sections = document.querySelectorAll('[data-nav-theme]')
      let theme = 'light'
      sections.forEach(s => {
        const r = s.getBoundingClientRect()
        if (r.top <= navH + 4 && r.bottom > navH + 4) {
          theme = s.dataset.navTheme
        }
      })
      setAutoTheme(theme)
    }
    detect()
    window.addEventListener('scroll', detect, { passive: true })
    window.addEventListener('resize', detect)
    const id = setTimeout(detect, 100)
    return () => {
      window.removeEventListener('scroll', detect)
      window.removeEventListener('resize', detect)
      clearTimeout(id)
    }
  }, [])

  const themeCls = variant === 'dark' ? 'theme-dark' : variant === 'blue' ? 'blue' : (autoTheme === 'dark' ? 'theme-dark' : '')
  const cls = `nav ${themeCls}`.trim()

  return (
    <>
      {toast && (
        <div role="status" aria-live="polite" style={{ position: 'fixed', bottom: 90, left: '50%', transform: 'translateX(-50%)', background: '#14110D', color: 'white', padding: '14px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600, boxShadow: '0 8px 32px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)', zIndex: 9999, whiteSpace: 'nowrap', maxWidth: 'calc(100vw - 48px)', textAlign: 'center' }}>
          {toast}
        </div>
      )}
      <nav className={`${cls}${navHidden ? ' nav--hidden' : ''}`}>
        <a onClick={() => navigate('/')} className="nav-logo" style={{ cursor: 'pointer' }}>
          Society<span>.</span>
        </a>

        <div className="nav-links nav-links--desktop">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Accueil</NavLink>
          {mainLinks.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDiscoverOpen(o => !o)}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, color: 'inherit', padding: 0, fontSize: 14, fontWeight: 600 }}>
              Découvrir
              <span style={{ fontSize: 9, transition: 'transform 0.2s', display: 'inline-block', transform: discoverOpen ? 'rotate(180deg)' : 'none' }}>&#9660;</span>
            </button>

            {discoverOpen && (
              <div style={{
                position: 'fixed',
                top: 68,
                left: 0,
                right: 0,
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                borderBottom: '1px solid rgba(20,17,13,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.10)',
                zIndex: 200,
                padding: '48px 0 40px',
              }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
                    {discoverSections.map((section, si) => (
                      <div key={section.title} style={{
                        paddingRight: si < discoverSections.length - 1 ? 40 : 0,
                        paddingLeft: si > 0 ? 40 : 0,
                        borderRight: si < discoverSections.length - 1 ? '1px solid rgba(20,17,13,0.07)' : 'none',
                      }}>
                        <div style={{
                          fontSize: 11, fontWeight: 800, color: '#B0A99A',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          marginBottom: 20,
                        }}>{section.title}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {section.items.map(item => (
                            <NavLink key={item.to} to={item.to} onClick={() => setDiscoverOpen(false)}
                              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 12px', textDecoration: 'none', borderRadius: 12, background: 'transparent', transition: 'background 0.15s' }}
                              onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,17,13,0.05)'}
                              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                              <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: 'rgba(20,17,13,0.06)',
                                display: 'grid', placeItems: 'center', flexShrink: 0,
                              }}>
                                <Icon name={item.icon} size={16} color="#4A4438" />
                              </div>
                              <div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: '#14110D', lineHeight: 1.2 }}>{item.label}</div>
                                <div style={{ fontSize: 12, color: '#9B9B9B', marginTop: 2, lineHeight: 1.2 }}>{item.desc}</div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 36, paddingTop: 24,
                    borderTop: '1px solid rgba(20,17,13,0.07)',
                    display: 'flex', gap: 12, alignItems: 'center',
                  }}>
                    <NavLink to="/demarrer" onClick={() => setDiscoverOpen(false)} style={{
                      padding: '12px 22px', background: '#14110D', borderRadius: 12,
                      textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                    }}>
                      <Icon name="arrow" size={14} color="white" />
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Comment démarrer</span>
                    </NavLink>
                    <NavLink to="/documentation" onClick={() => setDiscoverOpen(false)} style={{
                      padding: '12px 22px', background: 'rgba(20,17,13,0.06)', borderRadius: 12,
                      textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                    }}>
                      <Icon name="layers" size={14} color="#14110D" />
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#14110D' }}>Documentation</span>
                    </NavLink>
                    <div style={{ marginLeft: 'auto', fontSize: 13, color: '#B0A99A' }}>
                      Plateforme pour les communautés africaines
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="nav-cta nav-cta--desktop" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setFounderOpen(o => !o)}
              className="btn btn-ghost"
              style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}>
              Connexion
              <span style={{ fontSize: 10, transition: 'transform 0.2s', display: 'inline-block', transform: founderOpen ? 'rotate(180deg)' : 'none' }}>&#9660;</span>
            </button>
            {founderOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid rgba(20,17,13,0.08)', minWidth: 220, overflow: 'hidden', zIndex: 100 }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Espace membre</div>
                <button onClick={() => { setFounderOpen(false); setToast('Connexion disponible au lancement — inscrivez-vous pour être notifié !') }} style={{ width: '100%', padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F0F0F0', display: 'grid', placeItems: 'center' }}><Icon name="users" size={14} color="#4A4438" /></div>
                  Se connecter
                </button>
                <div style={{ padding: '12px 16px', borderTop: '1px solid #F2F2F2', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fondateur Society</div>
                <NavLink to="/dashboard" onClick={() => setFounderOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', textDecoration: 'none', color: '#14110D', fontSize: 14, fontWeight: 600 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F0F0F0', display: 'grid', placeItems: 'center' }}><Icon name="grid" size={14} color="#4A4438" /></div>
                  Dashboard admin
                </NavLink>
                <div style={{ padding: '10px 16px', background: '#F8F8F8', fontSize: 11, color: '#6B6B6B' }}>Réservé à l'équipe Difero Fundry</div>
              </div>
            )}
          </div>
          <NavLink to="/inscription" className={variant === 'blue' ? 'btn btn-white' : 'btn btn-primary'}>
            Rejoindre les premiers
            <Icon name="arrow" size={14} color="currentColor" />
          </NavLink>
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <NavLink to="/" end className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Accueil</NavLink>
          {mainLinks.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 16, marginBottom: 4 }}>Découvrir</div>
          {discoverSections.flatMap(s => s.items).map(item => (
            <NavLink key={item.to} to={item.to} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
          ))}
          <NavLink to="/demarrer" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Comment démarrer</NavLink>
          <NavLink to="/dashboard" className="nav-mobile-link" onClick={() => setMenuOpen(false)}
            style={{ color: '#1A2BFF', fontWeight: 700, marginTop: 12 }}>
            Dashboard fondateur
          </NavLink>
          <NavLink to="/inscription" className="btn btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8 }}>
            Rejoindre les premiers
          </NavLink>
        </div>
      )}

      {founderOpen && (
        <div onClick={() => setFounderOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
      {discoverOpen && (
        <div onClick={() => setDiscoverOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
    </>
  )
}
