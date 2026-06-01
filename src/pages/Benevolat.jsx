import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Publiez la mission',
    desc: "L'engagement, les compétences, la durée, le lieu. Visible par toute la communauté Society.",
    icon: 'file-text',
    color: '#1A2BFF',
  },
  {
    n: '02',
    title: 'Les bénévoles postulent',
    desc: 'Candidatures dans l\'application. Vous voyez les profils, les compétences, les disponibilités.',
    icon: 'users',
    color: '#1A2BFF',
  },
  {
    n: '03',
    title: 'Vous accueillez',
    desc: "Confirmez, planifiez, communiquez depuis le tableau de bord. Documents et logistique partagés d'un clic.",
    icon: 'calendar',
    color: '#1A2BFF',
  },
  {
    n: '04',
    title: 'Mesurez l\'impact',
    desc: 'Heures suivies, attestations exportées, rapport d\'impact prêt pour vos bailleurs.',
    icon: 'chart',
    color: '#1A2BFF',
  },
]

const FEATURES = [
  { icon: 'users', title: 'Profils bénévoles', desc: 'Compétences, disponibilités, missions passées, attestations. Tout sur la même fiche.' },
  { icon: 'calendar', title: 'Planning intégré', desc: 'Rotations, rappels automatiques, remplacements en cas d\'absence. Réglé.' },
  { icon: 'shield', title: 'Attestations automatiques', desc: 'PDF officiels avec heures et signature électronique. Générés par Society.' },
  { icon: 'chart', title: 'Suivi des heures', desc: 'Tableau de bord temps réel — par bénévole, par mission, par période.' },
  { icon: 'award', title: 'Reconnaissance', desc: 'Badges, mises à l\'honneur, avantages réservés. Vos bénévoles se sentent vus.' },
  { icon: 'database', title: 'Formation intégrée', desc: 'Modules, guides, ressources directement dans le profil du bénévole.' },
]


export default function Benevolat() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 640, display: 'flex', alignItems: 'flex-end', padding: '0 64px 80px', overflow: 'hidden', background: 'linear-gradient(160deg, #FFFBF2 0%, #F4F7FE 50%, #F0F6FF 100%)' }}>
        <div style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, borderRadius: '50%', background: '#1A2BFF', opacity: 0.1, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#B22842', opacity: 0.12, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #1A2BFF, #D4A75B)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 120 }}>
          <NavLink to="/fonctionnalites" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--so-grey-500)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 32 }}>
            ← Fonctionnalités
          </NavLink>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: 'linear-gradient(135deg, #1A2BFF, #1A2BFF)', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 20, boxShadow: '0 4px 12px rgba(14,71,171,0.25)' }}>
                Nouveau · Module Bénévolat
              </div>
              <h1 style={{ fontSize: 92, lineHeight: 0.92, color: '#14110D', marginBottom: 24 }}>
                Engagez vos<br />
                <span style={{ color: '#1A2BFF' }}>bénévoles.</span>
              </h1>
              <p style={{ fontSize: 22, color: '#4A4438', lineHeight: 1.45, maxWidth: 580 }}>
                Recrutez. Organisez. Valorisez. Society fait du volontariat une vraie force pour votre organisation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, paddingBottom: 4, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #1A2BFF, #1A2BFF)', boxShadow: '0 8px 24px rgba(14,71,171,0.3)' }}>Activer le module</NavLink>
              <NavLink to="/tarifs" className="btn btn-outline btn-lg">Voir les plans</NavLink>
            </div>
          </div>
        </div>
      </section>


      {/* PROBLÈME */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Le constat</span>
              <h2 style={{ fontSize: 52, marginTop: 20, lineHeight: 1.05 }}>Le bénévolat africain mérite mieux qu'un fichier Excel.</h2>
              <p style={{ fontSize: 17, marginTop: 24, color: '#4A4438', lineHeight: 1.7 }}>
                En Côte d'Ivoire, 80 % des associations gèrent leurs bénévoles sur WhatsApp ou Excel. Résultat : absences imprévues, heures non comptées, bénévoles qui décrochent.
              </p>
              <div style={{ marginTop: 36, display: 'grid', gap: 12 }}>
                {[
                  'Aucun suivi des heures',
                  'Pas d\'attestations officielles',
                  'Recrutement limité au cercle proche',
                  'Bénévoles peu valorisés, beaucoup décrochent',
                ].map((pb, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 20px', background: '#EEF1FF', borderRadius: 12, borderLeft: '4px solid #1A2BFF', alignItems: 'flex-start' }}>
                    <span style={{ color: '#1A2BFF', fontWeight: 800, flexShrink: 0 }}>✕</span>
                    <p style={{ fontSize: 15, color: '#14110D', margin: 0, lineHeight: 1.5 }}>{pb}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', boxShadow: '0 32px 64px rgba(0,0,0,0.15)' }}>
                <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778379825/t%C3%A9l%C3%A9chargement_12_m5soiq.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Bénévolat" />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', borderRadius: 20, padding: '20px 24px' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', marginBottom: 8 }}>Module Bénévolat Society</div>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#14110D', letterSpacing: '-0.03em' }}>∞</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>bénévoles actifs</div>
                      </div>
                      <div style={{ width: 1, height: 40, background: '#E5E5E5' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#1A2BFF', letterSpacing: '-0.03em' }}>∞h</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>suivies</div>
                      </div>
                      <div style={{ width: 1, height: 40, background: '#E5E5E5' }} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#1A2BFF', letterSpacing: '-0.03em' }}>∞</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>attestations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Comment ça marche</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>De la mission à l'attestation<br />en 4 étapes.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ padding: '36px 28px', background: 'white', borderRadius: 24, border: '1.5px solid #EBEBEB', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -16, right: -16, fontSize: 80, fontWeight: 900, color: '#F2F2F2', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none' }}>{step.n}</div>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: step.color, display: 'grid', placeItems: 'center', marginBottom: 20, position: 'relative' }}>
                  <Icon name={step.icon} size={24} color="white" />
                </div>
                <h3 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 12, position: 'relative' }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.6, position: 'relative' }}>{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: -12, transform: 'translateY(-50%)', fontSize: 20, color: '#C9C9C9', zIndex: 1 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Fonctionnalités complètes</span>
            <h2 style={{ fontSize: 52, marginTop: 20 }}>Tout pour valoriser<br />vos bénévoles.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ padding: '36px 32px', background: 'white', borderRadius: 24, border: '1px solid #EBEBEB' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#E8F0FD', display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <Icon name={f.icon} size={22} color="#1A2BFF" />
                </div>
                <h3 style={{ fontSize: 19, lineHeight: 1.2, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section data-nav-theme="dark" style={{ padding: '100px 64px', background: '#1A2BFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 32px 64px rgba(0,0,0,0.3)' }}>
              <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370100/eeee_omrrkt.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Testimonial" />
            </div>
            <div>
              <div style={{ fontSize: 96, color: 'rgba(255,255,255,0.15)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: -24 }}>"</div>
              <blockquote style={{ margin: 0, fontSize: 26, fontWeight: 600, lineHeight: 1.35, color: 'white' }}>
                Avec Society, je structure 120 bénévoles, je suis 890 heures et je sors les attestations pour tout le monde. Le rapport d'impact, les bailleurs ne s'y attendent pas.
              </blockquote>
              <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: 'white' }}>Mariama Kouyaté</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginTop: 4 }}>Coordinatrice bénévolat, ONG Eau Vive Abidjan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 64px 120px' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #1A2BFF 0%, #1A2BFF 50%, #0B17B8 100%)', borderRadius: 36, padding: '72px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(14,71,171,0.3)' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: '#B22842', opacity: 0.2, filter: 'blur(60px)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: '#B22842', opacity: 0.15, filter: 'blur(40px)' }} />
            <span className="eyebrow white" style={{ position: 'relative' }}>Prêt à démarrer ?</span>
            <h2 style={{ fontSize: 64, color: 'white', marginTop: 20, position: 'relative', lineHeight: 0.95 }}>
              Lancez votre programme<br />
              <span style={{ color: '#1A2BFF' }}>bénévolat aujourd'hui.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginTop: 24, maxWidth: 520, margin: '24px auto 0', lineHeight: 1.6, position: 'relative' }}>
              Gratuit jusqu'à 30 bénévoles. Aucune carte demandée. Vos premières missions en ligne en 10 minutes.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 44, flexWrap: 'wrap', position: 'relative' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl">
                Créer mon espace gratuitement
                <Icon name="arrow" size={16} color="#14110D" />
              </NavLink>
              <NavLink to="/centre-aide" className="btn btn-outline-white btn-xl">En savoir plus</NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
