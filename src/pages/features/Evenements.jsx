import { NavLink } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Icon from '../../components/Icon.jsx'
import Reveal from '../../components/Reveal.jsx'

export default function FeatureEvenements() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(135deg, var(--encre) 0%, #1a1a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'var(--cobalt)', opacity: 0.15, filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <NavLink to="/fonctionnalites" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>← Fonctionnalités</NavLink>
          </div>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(26,43,255,0.3)', border: '1px solid rgba(26,43,255,0.5)', borderRadius: 999, marginBottom: 24 }}>
            <Icon name="calendar" size={18} color="#7BA7F7" />
            <span style={{ color: '#7BA7F7', fontWeight: 700, fontSize: 13, marginLeft: 8 }}>ÉVÉNEMENTS</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Événements<br /><span style={{ color: 'var(--cobalt)' }}>& billetterie.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            Créez, publiez et gérez vos événements communautaires. Vente de billets, QR code de contrôle à l'entrée, liste des présents — tout en mobile.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <Reveal>
                <span className="eyebrow">Fonctionnalités événements</span>
                <h2 style={{ fontSize: 48, marginTop: 20 }}>De la création<br />au bilan — tout ici.</h2>
              </Reveal>
              <div style={{ marginTop: 40, display: 'grid', gap: 24 }}>
                {[
                  { icon: 'calendar', color: 'var(--cobalt)', t: 'Création en 3 étapes', d: 'Titre, date, lieu, places disponibles — votre événement est en ligne en moins de 3 minutes.' },
                  { icon: 'money', color: 'var(--hibiscus)', t: 'Billetterie intégrée', d: 'Billetterie payante ou gratuite, avec paiement Mobile Money. Les fonds arrivent directement sur votre compte Society.' },
                  { icon: 'check', color: 'var(--acacia)', t: 'QR code de contrôle', d: 'Chaque participant reçoit un QR code unique. À l\'entrée, scannez avec votre téléphone — rapide, infalsifiable.' },
                  { icon: 'users', color: 'var(--cobalt)', t: 'Gestion des présents', d: 'Liste des inscrits, des présents, des absences — consultable en temps réel depuis votre téléphone.' },
                  { icon: 'chart', color: '#9D174D', t: 'Bilan post-événement', d: 'Revenus générés, taux de participation, feedback des membres — archivé automatiquement.' },
                ].map((f, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: f.color + '15', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        <Icon name={f.icon} size={22} color={f.color} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{f.t}</div>
                        <div style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.55 }}>{f.d}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal direction="right">
              <div style={{ position: 'sticky', top: 120 }}>
                <div style={{ background: 'var(--encre)', borderRadius: 28, padding: 32, color: 'white' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>ÉVÉNEMENT EN COURS</div>
                  <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>Gala Annuel INPHB Alumni 2026</div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
                    {[['calendar', 'Samedi 15 Juin'], ['map-pin', 'Hôtel Ivoire, Abidjan'], ['ticket', '480 / 500 places']].map(([e, t], i) => (
                      <div key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Icon name={e} size={13} color="rgba(255,255,255,0.7)" />{t}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 13 }}>Places vendues</span>
                      <span style={{ fontWeight: 700, color: 'var(--cobalt)' }}>480 / 500</span>
                    </div>
                    <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{ width: '96%', height: '100%', background: 'var(--hibiscus)' }} />
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>20 places restantes · 35 000 FCFA / billet</div>
                  </div>
                  <div style={{ marginTop: 16, padding: '16px 20px', background: 'rgba(212,167,91,0.1)', borderRadius: 16, border: '1px solid rgba(212,167,91,0.2)' }}>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Revenus collectés</div>
                    <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--cobalt)', marginTop: 4 }}>16 800 000 <span style={{ fontSize: 14 }}>FCFA</span></div>
                  </div>
                  <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                    <button className="btn btn-gold" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>Scanner QR</button>
                    <button style={{ flex: 1, padding: 14, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, color: 'white', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Liste présents</button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px', background: '#F8F8F8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, fontWeight: 800, maxWidth: 600, margin: '0 auto' }}>
            Votre prochain événement commence ici.
          </h2>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Créer mon premier événement <Icon name="arrow" size={16} color="white" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
