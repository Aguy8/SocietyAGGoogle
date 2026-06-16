import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const STATS = [
  { value: '25+', label: 'Leaders interviewés', sub: 'avant la première ligne de code', color: 'var(--cobalt)' },
  { value: '14', label: 'Pays africains ciblés', sub: 'dès le lancement en Afrique de l\'Ouest', color: 'var(--cobalt)' },
  { value: '6', label: 'Types de communautés', sub: 'dans notre panel de validation terrain', color: 'var(--encre)' },
  { value: '850M', label: 'FCFA mobilisables/an', sub: 'estimation basée sur nos études de cas', color: 'var(--cobalt)' },
]

const SECTEURS = [
  { nom: 'ONG & Associations', pct: 34, color: 'var(--cobalt)', count: '~34 % des demandes' },
  { nom: 'Mutuelles & Tontines', pct: 28, color: 'var(--encre)', count: '~28 % des demandes' },
  { nom: 'Alumni & Jeunesse', pct: 18, color: 'var(--cobalt)', count: '~18 % des demandes' },
  { nom: 'Leaders & Influenceurs', pct: 11, color: 'var(--encre)', count: '~11 % des demandes' },
  { nom: 'Groupes religieux', pct: 6, color: 'var(--cobalt)', count: '~6 % des demandes' },
  { nom: 'Réseaux professionnels', pct: 3, color: 'var(--cobalt)', count: '~3 % des demandes' },
]

const MILESTONES = [
  { date: 'Nov 2025', label: 'Fondation', desc: 'Society est créée par Difero Fundry à Abidjan. Enquête de validation auprès de 25 leaders communautaires.', done: true },
  { date: 'Avr 2026', label: 'Liste d\'attente ouverte', desc: 'Ouverture publique de la liste d\'attente bêta. Des leaders de 14 pays africains expriment leur intérêt.', done: true },
  { date: 'Juil 2026', label: 'Lancement · Objectif', desc: 'Ouverture progressive aux premières communautés prioritaires. Billetterie, cotisations et Mobile Money opérationnels.', done: false },
  { date: '2026–2027', label: 'Expansion Afrique de l\'Ouest · Vision', desc: 'Déploiement progressif : Sénégal, Mali, Burkina Faso, Guinée. Partenariats Mobile Money locaux.', done: false },
  { date: '2027+', label: 'Infrastructure continentale · Vision', desc: 'Society devient le standard de la gestion communautaire en Afrique francophone — et au-delà.', done: false },
]

const IMPACT_CARDS = [
  {
    icon: 'users',
    title: 'Des liens qui durent',
    desc: 'Des milliers de membres qui ne se croisaient pas vont se retrouver. Sur la même plateforme. Vivante, animée.',
    metric: '+300 %',
    metricLabel: 'd\'engagement estimé (études de cas)',
    color: 'var(--cobalt)',
  },
  {
    icon: 'money',
    title: 'L\'économie communautaire',
    desc: 'Cotisations, tontines, collectes. Tracées, sécurisées, accessibles depuis n\'importe quel téléphone, via Mobile Money.',
    metric: '−80 %',
    metricLabel: 'de temps administratif estimé',
    color: 'var(--cobalt)',
  },
  {
    icon: 'chart',
    title: 'Plus de disputes d\'argent',
    desc: 'Chaque membre voit son solde en temps réel. Transparence totale. Les frictions s\'évitent avant d\'arriver.',
    metric: '100 %',
    metricLabel: 'de traçabilité financière',
    color: 'var(--encre)',
  },
  {
    icon: 'globe',
    title: 'Un réseau panafricain',
    desc: 'Des communautés connectées dans 14 pays. Le maillage communautaire le plus dense d\'Afrique.',
    metric: '14+',
    metricLabel: 'pays cibles dès le lancement',
    color: 'var(--encre)',
  },
]

export default function Impact() {
  return (
    <div className="page">
      <Nav />

      {/* HERO — clair */}
      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8', position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: -200, left: -200, width: 700, height: 700, borderRadius: '50%', background: 'var(--cobalt)', opacity: 0.08, filter: 'blur(120px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(26,43,255,0.08)', border: '1px solid rgba(26,43,255,0.20)', borderRadius: 999, marginBottom: 32 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cobalt)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--cobalt)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Impact en temps réel</span>
            </div>
            <h1 style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.88, color: 'var(--encre)', maxWidth: 900 }}>
              L'Afrique<br />
              <span style={{ color: 'var(--cobalt)' }}>va s'organiser.</span><br />
              Ensemble.
            </h1>
            <p style={{ fontSize: 20, marginTop: 40, maxWidth: 600, lineHeight: 1.6, color: '#4A4438' }}>
              Society n'est pas encore lancée. C'est une infrastructure en train de naître. Pour des milliers de communautés africaines qui reprennent la main sur leur destin collectif.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-primary btn-xl">Rejoindre le mouvement</NavLink>
              <NavLink to="/pour-qui" className="btn btn-outline btn-xl">Voir les communautés</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS COUNTER — clair */}
      <section style={{ padding: '0 64px 40px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 999, fontSize: 12, fontWeight: 700, color: '#6B6B6B', letterSpacing: '0.04em' }}>
              ✦ Projections & objectifs — ces chiffres illustrent notre ambition à 12 mois
            </span>
          </div>
          <div className="impact-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px solid #EBEBEB', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ padding: '48px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid #F0F0F0' : 'none' }}>
                  <div style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'var(--cobalt)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--encre)', marginTop: 12 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 6, lineHeight: 1.4 }}>{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT CARDS — clair */}
      <section style={{ padding: '120px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Ce que Society change</span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginTop: 24, color: 'var(--encre)', maxWidth: 700, lineHeight: 0.95 }}>
              Des résultats mesurables,<br />
              <span style={{ color: 'var(--cobalt)' }}>à votre portée.</span>
            </h2>
          </Reveal>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 64 }}>
            {IMPACT_CARDS.map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ padding: '40px', background: '#F8F8F8', border: '1px solid #EBEBEB', borderRadius: 24, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--cobalt)' }} />
                  <div style={{ marginBottom: 20 }}><Icon name={card.icon} size={32} color='var(--cobalt)' /></div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--encre)', marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.6, marginBottom: 28 }}>{card.desc}</p>
                  <div style={{ padding: '16px 20px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 12, display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--cobalt)' }}>{card.metric}</span>
                    <span style={{ fontSize: 13, color: '#6B6B6B' }}>{card.metricLabel}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS — clair */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <Reveal>
              <span className="eyebrow">Répartition par secteur</span>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginTop: 24, color: 'var(--encre)', lineHeight: 1 }}>
                7 types de<br />
                <span style={{ color: 'var(--cobalt)' }}>communautés.</span><br />
                Une seule plateforme.
              </h2>
              <p style={{ fontSize: 16, marginTop: 24, color: '#4A4438', lineHeight: 1.65 }}>
                Des ONG aux tontines, des alumni aux influenceurs. Society s'adapte à chaque réalité communautaire africaine.
              </p>
              <NavLink to="/pour-qui" className="btn btn-outline" style={{ marginTop: 32, display: 'inline-flex' }}>
                Explorer les segments →
              </NavLink>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'grid', gap: 12, padding: 32, background: 'white', borderRadius: 20, border: '1px solid #EBEBEB' }}>
                {SECTEURS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--encre)' }}>{s.nom}</span>
                        <span style={{ fontSize: 12, color: '#9B9B9B' }}>{s.count}</span>
                      </div>
                      <div style={{ height: 8, borderRadius: 99, background: '#F2F2F2', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${s.pct}%`, background: 'var(--cobalt)', borderRadius: 99 }} />
                      </div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--cobalt)', minWidth: 36, textAlign: 'right' }}>{s.pct}%</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT PUBLICITAIRE — clair */}
      <section style={{ padding: '0 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal>
            <div style={{ padding: '28px 36px', background: 'white', border: '1px solid #EBEBEB', borderRadius: 20, display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}><Icon name="bell" size={28} color='var(--cobalt)' /></div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--cobalt)', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Notre engagement</div>
                <p style={{ fontSize: 16, color: '#4A4438', lineHeight: 1.65, margin: 0 }}>
                  Society reverse un pourcentage de ses revenus publicitaires aux communautés partenaires. La croissance de la plateforme profite à ceux qui font vivre le réseau, sur le terrain.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE — clair */}
      <section style={{ padding: '100px 64px', background: 'white' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Feuille de route</span>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginTop: 24, color: 'var(--encre)', lineHeight: 1 }}>
              De la vision<br />
              <span style={{ color: 'var(--cobalt)' }}>au déploiement.</span>
            </h2>
          </Reveal>
          <div style={{ marginTop: 64, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: '#E5E5E5' }} />
            <div style={{ display: 'grid', gap: 0 }}>
              {MILESTONES.map((m, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{ display: 'flex', gap: 40, paddingLeft: 60, paddingBottom: 48, position: 'relative', opacity: m.done ? 1 : 0.85 }}>
                    <div style={{ position: 'absolute', left: 12, top: 4, width: 18, height: 18, borderRadius: '50%', background: m.done ? 'var(--cobalt)' : '#E5E5E5', border: '3px solid white', boxShadow: `0 0 0 2px ${m.done ? 'var(--cobalt)' : '#D5D5D5'}` }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--cobalt)', letterSpacing: '0.06em' }}>{m.date}</span>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, background: '#E8EFFC', color: 'var(--cobalt)', letterSpacing: '0.04em' }}>{m.done ? '✓ RÉALISÉ' : '◦ OBJECTIF'}</span>
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--encre)', marginBottom: 8 }}>{m.label}</div>
                      <div style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.55 }}>{m.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-theme="dark" style={{ padding: '120px 64px', background: 'linear-gradient(135deg, var(--cobalt) 0%, var(--cobalt-deep) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'var(--hibiscus)', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'white', lineHeight: 0.95 }}>
              Votre communauté<br />mérite une infrastructure.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 24, maxWidth: 500, margin: '24px auto 0', lineHeight: 1.65 }}>
              Rejoignez-nous.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              <NavLink to="/inscription" className="btn btn-gold btn-xl">Inscrire ma communauté</NavLink>
              <NavLink to="/temoignages" className="btn btn-outline-white btn-xl">Voir les témoignages</NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
