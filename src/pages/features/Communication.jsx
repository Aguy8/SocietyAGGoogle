import { NavLink } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Icon from '../../components/Icon.jsx'
import Reveal from '../../components/Reveal.jsx'

export default function FeatureCommunication() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <NavLink to="/fonctionnalites" style={{ color: '#6B6B6B', textDecoration: 'none', fontSize: 14 }}>← Fonctionnalités</NavLink>
          </div>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#E8EFFC', borderRadius: 999, marginBottom: 24 }}>
            <Icon name="chat" size={18} color='var(--cobalt)' />
            <span style={{ color: 'var(--cobalt)', fontWeight: 700, fontSize: 13, marginLeft: 8 }}>COMMUNICATION</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, maxWidth: 900 }}>
            Communiquez<br /><span style={{ color: 'var(--cobalt)' }}>mieux.</span><br />
            Pas plus fort.
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: '#4A4438' }}>
            Fini la pollution de groupe WhatsApp. Society vous donne des canaux précis, des messages ciblés, et des membres qui lisent vraiment ce que vous envoyez.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
            {[
              { icon: 'chat', color: 'var(--cobalt)', bg: '#E8EFFC', t: 'Canaux par sous-groupe', d: 'Créez des canaux de communication distincts par comité, région, thématique — sans pollution croisée.' },
              { icon: 'bell', color: 'var(--hibiscus)', bg: '#FFFFFF', t: 'Messages ciblés', d: 'Envoyez un message uniquement aux trésoriers, aux bénévoles actifs, ou aux membres en retard de cotisation.' },
              { icon: 'bell', color: 'var(--acacia)', bg: '#DCFCE7', t: 'Notifications push', d: 'Vos membres reçoivent une notification sur leur téléphone. Taux d\'ouverture 4x supérieur à l\'email.' },
              { icon: 'users', color: 'var(--cobalt)', bg: '#F3F0FF', t: 'Annonces & newsletters', d: 'Envoyez une newsletter hebdomadaire automatique avec les actualités, événements et cotisations.' },
              { icon: 'check', color: '#9D174D', bg: '#FDF2F8', t: 'Confirmations automatiques', d: 'Accusés de réception, confirmations d\'inscription, reçus de paiement — tout est automatique.' },
              { icon: 'shield', color: 'var(--encre)', bg: '#F2F2F2', t: 'Historique & archivage', d: 'Toutes les communications sont archivées et consultables. Plus aucune information perdue.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div className="hover-lift" style={{ padding: 32, background: '#F8F8F8', borderRadius: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: f.bg, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                    <Icon name={f.icon} size={24} color={f.color} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 10 }}>{f.t}</h3>
                  <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.65 }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ background: 'var(--encre)', borderRadius: 32, padding: '64px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--cobalt)', marginBottom: 16 }}>● LE VRAI PROBLÈME</div>
                <h2 style={{ fontSize: 48, color: 'white', lineHeight: 1.1 }}>WhatsApp n'est pas fait pour ça.</h2>
                <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
                  {[
                    { pb: 'Un groupe de 200 membres = chaos garanti', sol: 'Des canaux structurés par sous-groupe' },
                    { pb: 'Les messages importants se perdent', sol: 'Épinglage, priorités, accusés de lecture' },
                    { pb: 'Impossible de cibler certains membres', sol: 'Segmentation précise par rôle / statut' },
                  ].map((r, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.04)', borderRadius: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                        <span style={{ color: 'var(--cobalt)', marginRight: 8 }}>✕</span>{r.pb}
                      </div>
                      <div style={{ padding: '14px 16px', background: 'rgba(26,43,255,0.2)', borderRadius: 12, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                        <span style={{ color: '#3DDC84', marginRight: 8 }}>✓</span>{r.sol}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>CANAUX SOCIETY — Cansein Fondation</div>
                {[
                  { n: '# general', d: 'Message de la semaine', t: '14:32', unread: 3 },
                  { n: '# tresorerie', d: 'Relance cotisations envoyée', t: '13:15', unread: 0 },
                  { n: '# benevoles', d: 'Planning du samedi confirmé', t: '11:04', unread: 7 },
                  { n: '# evenements', d: 'Gala — 480 billets vendus 🎉', t: '09:22', unread: 1 },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderTop: i ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div style={{ opacity: 0.5 }}><Icon name="chat" size={18} color="white" /></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{c.n}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{c.d}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{c.t}</div>
                      {c.unread > 0 && <div style={{ background: 'var(--cobalt)', color: 'white', borderRadius: 999, fontSize: 10, fontWeight: 800, padding: '2px 6px', marginTop: 4, display: 'inline-block' }}>{c.unread}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px', background: '#F8F8F8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, fontWeight: 800, maxWidth: 600, margin: '0 auto' }}>
            Vos membres méritent<br />une vraie communication.
          </h2>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Essayer gratuitement <Icon name="arrow" size={16} color="white" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
