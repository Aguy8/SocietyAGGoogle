import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const COMMUNITY_EVENTS = [
  { icon: 'users', nom: 'Forums B2B & Salons', desc: 'Matchmaking inter-entreprises, délégations sectorielles, networking structuré.', color: '#14110D' },
  { icon: 'globe', nom: 'Festivals & Divertissement', desc: 'Concerts, festivals culturels, événements artistiques — billetterie grand public.', color: '#14110D' },
  { icon: 'layers', nom: 'Congrès & Conférences', desc: 'Événements académiques, remises de prix, keynotes — accréditations digitales.', color: '#14110D' },
  { icon: 'award', nom: 'Galas & Cérémonies', desc: 'Dîners de prestige, remises de distinctions, soirées de levée de fonds.', color: '#14110D' },
  { icon: 'file-text', nom: 'Assemblées générales', desc: 'AG ordinaires et extraordinaires, votes en ligne, quorum automatique.', color: '#14110D' },
  { icon: 'calendar', nom: 'Événements culturels & sportifs', desc: 'Tournois, compétitions, spectacles — gestion des inscriptions et des accès.', color: '#14110D' },
]

const SOCIETY_INITIATIVES = [
  {
    icon: 'layers',
    nom: 'Caravanes nationales',
    desc: 'Society organise des tournées multi-villes pour connecter les communautés locales entre elles — networking, ateliers, synergies de terrain.',
    color: 'white',
  },
  {
    icon: 'link',
    nom: 'Synergies sectorielles',
    desc: 'Nous réunissons associations, mutuelles et réseaux d\'un même secteur pour créer des coalitions nationales durables avec une vraie portée collective.',
    color: '#1A2BFF',
  },
  {
    icon: 'globe',
    nom: 'Projets à impact',
    desc: 'Des programmes alignés sur les ODD, co-construits avec des institutions locales et portés par les communautés les plus actives sur la plateforme.',
    color: '#1A2BFF',
  },
  {
    icon: 'settings',
    nom: 'Campagnes citoyennes',
    desc: 'Salubrité, santé, éducation — Society coordonne et mobilise à l\'échelle nationale, avec reporting de participation en temps réel pour chaque ville.',
    color: '#1A2BFF',
  },
]

const COMMUNITY_FEATURES = [
  { icon: 'bell', title: 'Teasing progressif', desc: 'Annonces, visuels, comptes à rebours et exclusivités pour créer l\'attente avant le jour J.' },
  { icon: 'chat', title: 'Espace de discussion', desc: 'Les futurs participants interagissent entre eux et avec les organisateurs avant même que l\'événement commence.' },
  { icon: 'lock', title: 'Contrôle des accès', desc: 'Définissez qui peut rejoindre, voir les contenus, s\'inscrire ou acheter un billet — par niveau d\'accès.' },
  { icon: 'chart', title: 'Taux de participation live', desc: 'Visualisez l\'engouement en temps réel : inscriptions, interactions, partages. Créez la preuve sociale.' },
  { icon: 'database', title: 'Archive communautaire', desc: 'Après l\'événement, la communauté devient une mémoire collective : photos, compte-rendus, next edition.' },
  { icon: 'refresh', title: 'Réutilisable', desc: 'Recyclez la communauté pour la prochaine édition — les membres restent, l\'élan se poursuit.' },
]

const STEPS = [
  { num: '01', title: 'Créez l\'événement', desc: 'Titre, date, lieu, capacité, tarif. En ligne en 3 minutes — zéro compétence technique.', icon: 'activity' },
  { num: '02', title: 'Communauté créée', desc: 'Society crée un espace communautaire dédié à votre événement. Vos participants s\'y retrouvent avant même le jour J.', icon: 'grid' },
  { num: '03', title: 'Teasing & inscriptions', desc: 'Animez, vendez des billets, collectez par Mobile Money. L\'engouement se construit avant d\'arriver.', icon: 'ticket' },
  { num: '04', title: 'Jour J & après', desc: 'QR codes à l\'entrée, suivi en temps réel, bilan post-événement. Et la prochaine édition repart sur les mêmes bases.', icon: 'arrow' },
]

export default function Evenements() {
  return (
    <div className="page">
      <Nav />

      {/* HERO — clair */}
      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8', position: 'relative', overflow: 'hidden', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: -150, right: -150, width: 600, height: 600, borderRadius: '50%', background: '#1A2BFF', opacity: 0.05, filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: '#1A2BFF', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 999, marginBottom: 32 }}>
              <Icon name="ticket" size={16} color="#1A2BFF" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Billetterie & Événements</span>
            </div>
            <h1 style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.88, color: '#14110D', maxWidth: 900 }}>
              De la petite AG<br />
              au grand <span style={{ color: '#1A2BFF' }}>festival national.</span>
            </h1>
            <p style={{ fontSize: 20, marginTop: 40, maxWidth: 620, lineHeight: 1.6, color: '#4A4438' }}>
              Organisez vos propres événements avec Society — billetterie, communauté intégrée, QR codes et analytics. Et participez aux grandes initiatives nationales que Society organise directement.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl">Créer mon événement</NavLink>
              <NavLink to="/fonctionnalites" className="btn btn-outline btn-xl">Toutes les fonctionnalités</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1 — VOS ÉVÉNEMENTS */}
      <section style={{ padding: '100px 64px', background: '#FFFFFF' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Vos événements</span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#14110D', maxWidth: 700, lineHeight: 0.95, marginTop: 20 }}>
              Votre communauté,<br />
              <span style={{ color: '#1A2BFF' }}>vos événements.</span>
            </h2>
            <p style={{ fontSize: 17, marginTop: 24, color: '#4A4438', maxWidth: 620, lineHeight: 1.6 }}>
              Avec Society, chaque communauté organise ses propres événements en toute autonomie — billetterie, QR codes, accès multi-niveaux et une communauté dédiée créée automatiquement.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56 }}>
            {COMMUNITY_EVENTS.map((ev, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ padding: '28px', background: '#F8F8F8', borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid #EDE8DD' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: ev.color + '18', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                    <Icon name={ev.icon} size={22} color={ev.color || '#1A2BFF'} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#14110D', marginBottom: 8, lineHeight: 1.2 }}>{ev.nom}</h3>
                  <p style={{ fontSize: 14, color: '#6B6B6B', lineHeight: 1.55, margin: 0 }}>{ev.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNAUTÉ TEMPORAIRE — clair */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: '#E8EFFC', border: '1px solid rgba(26,43,255,0.2)', borderRadius: 999, marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A2BFF' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>La différence Society</span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#14110D', lineHeight: 1, marginBottom: 24 }}>
                Chaque événement crée<br />
                sa propre <span style={{ color: '#1A2BFF' }}>communauté.</span>
              </h2>
              <p style={{ fontSize: 17, color: '#4A4438', lineHeight: 1.7, marginBottom: 32 }}>
                Quand vous créez un événement sur Society, une communauté temporaire est automatiquement générée. Les futurs participants la rejoignent, interagissent, s'enthousiasment — avant même le jour J.
              </p>
              <p style={{ fontSize: 17, color: '#4A4438', lineHeight: 1.7 }}>
                Ce n'est pas juste de la billetterie. C'est un <strong style={{ color: '#14110D' }}>mouvement autour de votre événement</strong> — contrôlé, mesuré, monétisable.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px solid #EBEBEB', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#14110D', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="calendar" size={20} color="white" /></div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#14110D' }}>Forum B2B Côte d'Ivoire 2026</div>
                    <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>Communauté événement · 847 membres</div>
                  </div>
                  <div style={{ marginLeft: 'auto', padding: '4px 10px', background: '#E8EFFC', borderRadius: 999, fontSize: 11, fontWeight: 700, color: '#1A2BFF' }}>● Live</div>
                </div>
                <div style={{ padding: '18px 24px', borderBottom: '1px solid #F0F0F0' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#14110D', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icon name="bell" size={14} color="white" /></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#14110D', marginBottom: 4 }}>Organisateur · Teaser #3</div>
                      <p style={{ fontSize: 13, color: '#4A4438', lineHeight: 1.5, margin: 0 }}>
                        J-14 ! On révèle notre premier keynote speaker — un CEO panafricain que vous connaissez tous. Restez connectés.
                      </p>
                      <div style={{ display: 'flex', gap: 16, marginTop: 10 }}>
                        <span style={{ fontSize: 12, color: '#9B9B9B', display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="check" size={12} color="#9B9B9B" /> 124</span>
                        <span style={{ fontSize: 12, color: '#9B9B9B', display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="chat" size={12} color="#9B9B9B" /> 38 réponses</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '14px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[['ticket', '847', 'Inscrits'], ['eye', '2 400', 'Vues/j'], ['bell', '94 %', 'Notifiés']].map(([e, v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '10px 8px', background: '#F8F8F8', borderRadius: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}><Icon name={e} size={16} color="#6B6B6B" /></div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#14110D', marginTop: 4 }}>{v}</div>
                      <div style={{ fontSize: 10, color: '#9B9B9B', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '14px 24px 20px', borderTop: '1px solid #F0F0F0' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#9B9B9B', letterSpacing: '0.06em', marginBottom: 10 }}>CONTRÔLE D'ACCÈS</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {['VIP · 120 places', 'Standard · 500 places', 'Presse · Sur demande'].map((t, i) => (
                      <span key={i} style={{ padding: '4px 10px', background: i === 0 ? '#E8EFFC' : '#F2F2F2', borderRadius: 999, fontSize: 11, fontWeight: 600, color: i === 0 ? '#1A2BFF' : '#6B6B6B' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 64 }}>
            {COMMUNITY_FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ padding: '24px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 16, display: 'flex', gap: 16 }}>
                  <div style={{ flexShrink: 0 }}><Icon name={f.icon} size={20} color="#14110D" /></div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#14110D', marginBottom: 6 }}>{f.title}</div>
                    <p style={{ fontSize: 13, color: '#6B6B6B', lineHeight: 1.55, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE — clair */}
      <section style={{ padding: '100px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Simple par design</span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 24, color: '#14110D', lineHeight: 0.95 }}>
              De l'idée à l'événement<br />
              <span style={{ color: '#14110D' }}>en 4 étapes.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 64, background: '#F8F8F8', borderRadius: 24, overflow: 'hidden', border: '1px solid #EBEBEB' }}>
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ padding: '40px 28px', borderRight: i < 3 ? '1px solid #EBEBEB' : 'none', textAlign: 'center', background: 'white' }}>
                  <div style={{ marginBottom: 16 }}><Icon name={step.icon} size={28} color="#14110D" /></div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#14110D', letterSpacing: '0.1em', marginBottom: 12 }}>{step.num}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#14110D', marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: '#6B6B6B', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVES SOCIETY — clair */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Initiatives Society</span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#14110D', maxWidth: 750, lineHeight: 0.95, marginTop: 20 }}>
              Society organise aussi<br />
              ses <span style={{ color: '#1A2BFF' }}>propres événements.</span>
            </h2>
            <p style={{ fontSize: 17, marginTop: 24, color: '#4A4438', maxWidth: 640, lineHeight: 1.6 }}>
              Au-delà des outils, Society prend l'initiative de créer des espaces de rencontre et de synergie à l'échelle nationale.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gap: 2, marginTop: 56, borderRadius: 24, overflow: 'hidden', border: '1px solid #EBEBEB', background: 'white' }}>
            {SOCIETY_INITIATIVES.map((ev, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ padding: '36px 40px', background: 'white', display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, alignItems: 'center', borderBottom: i < SOCIETY_INITIATIVES.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: '#E8EFFC', display: 'grid', placeItems: 'center', margin: '0 auto 8px' }}>
                      <Icon name={ev.icon} size={24} color="#14110D" />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.08em' }}>0{i + 1}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: '#14110D', marginBottom: 10, lineHeight: 1.1 }}>{ev.nom}</h3>
                    <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.65, margin: 0 }}>{ev.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 32, padding: '20px 28px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div><Icon name="users" size={18} color="#1A2BFF" /></div>
              <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.55, margin: 0, flex: 1 }}>
                Les communautés actives sur Society seront invitées en priorité à participer et co-organiser ces initiatives nationales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-theme="dark" style={{ padding: '120px 64px', background: '#1A2BFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#14110D', opacity: 0.08 }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'white', lineHeight: 0.95 }}>
              Votre prochain événement<br />mérite Society.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 24, maxWidth: 500, margin: '24px auto 0', lineHeight: 1.65 }}>
              Billetterie, communauté intégrée, QR codes et analytics — gratuit pour démarrer.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-dark btn-xl">Démarrer gratuitement</NavLink>
              <NavLink to="/tarifs" className="btn" style={{ padding: '18px 32px', background: 'transparent', border: '2px solid #FFFFFF', color: '#FFFFFF', borderRadius: 14, fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Voir les tarifs</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
