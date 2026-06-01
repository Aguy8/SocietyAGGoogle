import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const UPCOMING = [
  { date: 'Prochainement', h: '18h00 GMT', t: 'Gérer la trésorerie de votre communauté avec Society', desc: 'Cotisations, relances, suivi : tout en moins d\'une heure par mois.', speaker: 'Équipe Society', cat: 'Finances', color: '#1A2BFF', bg: '#F8F8F8' },
  { date: 'Prochainement', h: '17h30 GMT', t: 'Convaincre un bailleur : le rapport d\'impact qui marche', desc: 'Structure, indicateurs, mise en forme — ce que les bailleurs lisent vraiment.', speaker: 'Équipe Society', cat: 'Impact', color: '#1A2BFF', bg: '#E8EFFC' },
  { date: 'Prochainement', h: '19h00 GMT', t: 'Monétiser sa communauté sans la trahir', desc: 'Ce qui marche en Afrique : abonnements, cagnottes, billetterie, contenu premium.', speaker: 'Équipe Society', cat: 'Monétisation', color: '#1A2BFF', bg: '#F3F0FF' },
]

const PAST = [
  { t: 'Lancer une mutuelle avec Society — de A à Z', views: '2 840', cat: 'Mutuelles' },
  { t: 'Construire son réseau alumni en 90 jours', views: '1 920', cat: 'Alumni' },
  { t: 'Mobile Money pour les associations : tout ce qu\'il faut savoir', views: '3 100', cat: 'Paiements' },
  { t: 'ONG & donateurs : comment prouver son impact avec Society', views: '2 200', cat: 'ONG' },
]

export default function Webinaires() {
  const navigate = useNavigate()

  const sendRappel = (titre) => {
    const a = document.createElement('a')
    a.href = `mailto:angesamuelkeke@gmail.com?subject=${encodeURIComponent('[Society Webinaire] Rappel demandé')}&body=${encodeURIComponent(`Bonjour,\n\nJe souhaite recevoir un rappel pour le webinaire :\n« ${titre} »\n\nMerci de me prévenir dès que la date est confirmée.`)}`
    a.click()
  }

  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#14110D' }}>
        <div className="container">
          <span className="eyebrow dark">Webinaires gratuits</span>
          <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Formez-vous.<br />
            <span style={{ color: '#1A2BFF' }}>Gratuitement.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 620, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Chaque mois, des sessions en direct. Pour maîtriser Society et faire grandir votre communauté.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
            {[['Gratuit', '100 % des sessions'], ['Live', 'Interaction directe'], ['Replay', 'Sessions enregistrées'], ['Francophone', 'Support local']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#1A2BFF' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <span className="eyebrow">Prochaines sessions</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Inscrivez-vous.</h2>
          </Reveal>
          <div style={{ display: 'grid', gap: 24 }}>
            {UPCOMING.map((w, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ padding: 36, background: 'white', borderRadius: 28, border: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ padding: '16px 20px', background: w.bg, borderRadius: 16, textAlign: 'center', minWidth: 120, flexShrink: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: w.color }}>{w.cat.toUpperCase()}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#14110D', marginTop: 8 }}>{w.date}</div>
                      <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>{w.h}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ padding: '3px 10px', background: w.bg, color: w.color, borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{w.cat}</span>
                      <h3 style={{ fontSize: 22, marginTop: 10, lineHeight: 1.2 }}>{w.t}</h3>
                      <p style={{ fontSize: 14, color: '#4A4438', marginTop: 8, lineHeight: 1.6 }}>{w.desc}</p>
                      <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 10 }}>Animé par <strong style={{ color: '#14110D' }}>{w.speaker}</strong></div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
                    <button className="btn btn-primary" style={{ justifyContent: 'center' }} onClick={() => navigate('/inscription')}>
                      Je m'inscris <Icon name="arrow" size={14} color="white" />
                    </button>
                    <button className="btn btn-outline" style={{ justifyContent: 'center', fontSize: 13 }} onClick={() => sendRappel(w.t)}>
                      Recevoir un rappel
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 48 }}>
            <span className="eyebrow">Replays disponibles</span>
            <h2 style={{ fontSize: 56, marginTop: 20 }}>Sessions passées.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {PAST.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-lift" style={{ padding: 28, background: 'white', borderRadius: 20, border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: '#1A2BFF', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Icon name="play" size={22} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{p.t}</div>
                    <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 4 }}>{p.views} vues · {p.cat}</div>
                  </div>
                  <Icon name="arrow" size={16} color="#6B6B6B" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
