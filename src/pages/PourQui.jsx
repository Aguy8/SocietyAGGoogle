import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import { SEGMENTS } from '../data/segments.js'

export default function PourQui() {
  return (
    <div className="page">
      <Nav />

      {/* HERO — texte aligné à gauche */}
      <section style={{ background: 'white', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -80, right: -60, width: 380, height: 380, borderRadius: '50%', background: 'rgba(26,43,255,0.05)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div className="container" style={{ padding: '120px 64px 96px', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <span className="eyebrow">Pour qui ?</span>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', marginTop: 24, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--encre)', maxWidth: 1000 }}>
              Quelle que soit votre communauté,<br /><span style={{ color: 'var(--cobalt)' }}>Society pour vous.</span>
            </h1>
            <p style={{ fontSize: 19, marginTop: 32, maxWidth: 600, lineHeight: 1.65, color: '#4A4438' }}>
              7 types de communautés. 7 réalités. Une plateforme qui s'adapte.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ boxShadow: '0 8px 24px rgba(26,43,255,0.3)' }}>Inscrire ma communauté</NavLink>
              <NavLink to="/tarifs" className="btn btn-outline btn-xl">Voir les plans</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRILLE SEGMENTS — light bg */}
      <section style={{
        padding: '80px 64px 120px',
        background: '#F8F8F8',
      }}>
        <div className="container">
          <div className="segments-grid">
            {SEGMENTS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60} direction="scale">
                <NavLink
                  to={`/pour-qui/${s.slug}`}
                  style={{
                    display: 'block', textDecoration: 'none',
                    borderRadius: 24, overflow: 'hidden',
                    position: 'relative', aspectRatio: '4/5',
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 8px 32px rgba(26,43,255,0.1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(26,43,255,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,43,255,0.1)'
                  }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--encre)' }} />
                  <div style={{
                    position: 'absolute', top: 18, right: 18,
                    padding: '6px 12px',
                    background: 'rgba(20,17,13,0.72)',
                    borderRadius: 999, fontSize: 12, fontWeight: 700, color: 'white',
                    backdropFilter: 'blur(8px)',
                  }}>{s.count} en CI</div>
                  <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
                    <h2 style={{ color: 'white', fontSize: 26, lineHeight: 1, marginBottom: 10 }}>{s.nom}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>{s.tagline}</p>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '8px 14px',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      borderRadius: 999,
                      fontSize: 13, fontWeight: 700, color: 'white',
                      backdropFilter: 'blur(8px)',
                    }}>Voir le détail</div>
                  </div>
                </NavLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — vibrant blue gradient */}
      <section style={{
        padding: '120px 64px',
        background: 'linear-gradient(135deg, var(--cobalt) 0%, var(--cobalt) 50%, var(--cobalt-deep) 100%)',
        color: 'white', position: 'relative', overflow: 'hidden',
      }}>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow white">Prêt à démarrer ?</span>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', color: 'white', marginTop: 24, lineHeight: 1 }}>
            Donnez à votre communauté<br />l'infrastructure qu'elle mérite.
          </h2>
          <p style={{ fontSize: 18, marginTop: 24, color: 'rgba(255,255,255,0.8)', maxWidth: 540, margin: '24px auto 0', lineHeight: 1.65 }}>
            Rejoignez les premiers.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl" style={{
              background: 'linear-gradient(135deg, #000000, #000000)',
              boxShadow: '0 8px 24px transparent',
            }}>Inscrire ma communauté</NavLink>
            <NavLink to="/tarifs" className="btn btn-xl" style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
            }}>Voir les plans</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
