import { NavLink } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Icon from '../../components/Icon.jsx'
import Reveal from '../../components/Reveal.jsx'

const FEATURES = [
  ['Base de données membres', 'Profils complets : nom, contact, rôle, historique de cotisations, niveau d\'implication, date d\'adhésion.'],
  ['Segmentation avancée', 'Créez des sous-groupes : comités, régions, statuts — et communiquez de façon ciblée.'],
  ['Gestion des rôles & permissions', 'Administrateur, modérateur, trésorier, bénévole, membre standard — granulaires et personnalisables.'],
  ['Import & export', 'Importez depuis Excel/CSV, exportez à tout moment. Migration depuis WhatsApp en 1 clic.'],
  ['Suivi de l\'engagement', 'Taux de présence aux événements, ponctualité des cotisations, participation aux sondages.'],
  ['Communication ciblée', 'Envoyez un message à un segment précis sans polluer les autres groupes.'],
  ['Gestion des bénévoles', 'Missions, disponibilités, compétences — gérez vos bénévoles comme des professionnels.'],
  ['Accueil automatique', 'Les nouveaux membres reçoivent une invitation personnalisée et un guide de bienvenue.'],
]

export default function FeatureMembres() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: 'var(--cobalt)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <NavLink to="/fonctionnalites" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>← Fonctionnalités</NavLink>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'white', fontSize: 14 }}>Gestion membres</span>
          </div>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(255,255,255,0.12)', borderRadius: 999, marginBottom: 24 }}>
            <Icon name="users" size={18} color="white" />
            <span style={{ color: 'white', fontWeight: 700, fontSize: 13, marginLeft: 8 }}>MODULE 01</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 800 }}>
            Gestion<br /><span style={{ color: 'var(--cobalt)' }}>membres.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            Tout ce qu'il faut pour gérer votre communauté sans Excel ni WhatsApp. Un cœur opérationnel solide, conçu pour les non-techniciens.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <Reveal>
                <span className="eyebrow">Fonctionnalités</span>
                <h2 style={{ fontSize: 48, marginTop: 20 }}>Tout ce dont<br />vous avez besoin.</h2>
              </Reveal>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {FEATURES.map(([t, d], i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div style={{ padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}>
                        <Icon name="check" size={18} color='var(--cobalt)' />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16 }}>{t}</div>
                        <div style={{ color: '#6B6B6B', fontSize: 14, marginTop: 4, lineHeight: 1.5 }}>{d}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="right">
              <div style={{ position: 'sticky', top: 120 }}>
                <div style={{ background: '#F8F8F8', borderRadius: 28, padding: 32 }}>
                  <div style={{ background: 'white', borderRadius: 20, padding: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>BASE DE DONNÉES</div>
                        <div style={{ fontSize: 18, fontWeight: 800, marginTop: 2 }}>Cansein Fondation</div>
                      </div>
                      <div style={{ padding: '6px 12px', background: '#E8FBF1', color: '#0F8B4F', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>● Live</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
                      {[['1 248', 'Membres'], ['94 %', 'À jour'], ['87 %', 'Actifs']].map(([v, l], i) => (
                        <div key={i} style={{ padding: 14, background: '#F8F8F8', borderRadius: 12, textAlign: 'center' }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--cobalt)' }}>{v}</div>
                          <div style={{ fontSize: 11, color: '#6B6B6B', marginTop: 2 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    {[
                      { n: 'Charles M.', r: 'Trésorière · À jour', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778377222/Les_5_signes_que_vous_avez_une_forte_personnalit%C3%A9_les_gens_vous_trouvent_intimidante_oecmtz.jpg', ok: true },
                      { n: 'Mickael Y D.', r: 'Bénévole · À jour', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370768/STEVE_ONOJA_re85d4.jpg', ok: true },
                      { n: 'Abraham B.', r: 'Membre · En retard', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370768/t%C3%A9l%C3%A9chargement_4_iabetd.jpg', ok: false },
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: '1px solid #F2F2F2' }}>
                        <img src={m.img} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} alt={m.n} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{m.n}</div>
                          <div style={{ fontSize: 11, color: '#6B6B6B' }}>{m.r}</div>
                        </div>
                        <div style={{ padding: '4px 10px', background: m.ok ? '#E8EFFC' : '#FEE2E2', color: m.ok ? 'var(--cobalt)' : '#991B1B', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{m.ok ? 'À jour' : 'Relancer'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px', background: '#F8F8F8' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Prêt à gérer votre communauté<br />comme un pro ?
          </h2>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Créer mon espace gratuitement <Icon name="arrow" size={16} color="white" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
