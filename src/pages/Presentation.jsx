import { NavLink } from 'react-router-dom'
import { SEGMENTS } from '../data/segments.js'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const MODULES = [
  { n: '01', title: 'Gestion communautaire', color: '#1A2BFF', desc: 'Profils membres, segmentation intelligente, rôles et permissions, sous-groupes, communication ciblée. Une vue claire sur chaque personne qui fait partie de votre communauté.', tags: ['Annuaire membres', 'Sous-groupes', 'Rôles & permissions', 'Tableau de bord live'] },
  { n: '02', title: 'Monétisation', color: '#1A2BFF', desc: 'Cagnottes, cotisations automatisées, billetterie avec QR codes, abonnements premium — paiement Mobile Money intégré dès le départ. Vos membres paient facilement, vous collectez sereinement.', tags: ['Orange Money', 'Wave', 'MTN MoMo', 'Billetterie QR'] },
  { n: '03', title: 'Gestion des entités', color: '#1A2BFF', desc: 'Trésorerie centralisée, coordination d\'événements, collecte de dons, gestion de sous-entités. Tout ce que vous pilotez aujourd\'hui en 10 outils différents — dans un seul endroit.', tags: ['Trésorerie', 'Événements', 'Dons en ligne', 'Multi-entités'] },
  { n: '04', title: 'Visibilité & Impact', color: '#1A2BFF', desc: 'Rapports d\'impact automatiques, page publique de la communauté, analytics en temps réel. Prouvez votre impact aux donateurs, partenaires et au monde — sans effort manuel.', tags: ['Rapports PDF auto', 'Page publique', 'Analytics', 'ODD & donateurs'] },
  { n: '05', title: 'Espace Leader', color: '#14110D', desc: 'Communauté propriétaire indépendante des algorithmes, contenus premium monétisés, lives privés, boutique de contenus. Votre audience vous appartient — pas à Instagram.', tags: ['Abonnements fans', 'Contenus premium', 'Lives & Q&A', 'Indépendance totale'] },
]

const SYNERGIES = [
  { icon: 'users', title: 'Bénévolat & Volontariat', desc: 'Coordonnez vos bénévoles comme une équipe professionnelle. Missions, disponibilités, compétences, suivi des heures — chaque volontaire sait où il en est. Ensemble, vous déplacez des montagnes.', stat: '∞ bénévoles coordonnés', color: '#1A2BFF' },
  { icon: 'calendar', title: 'Événements Nationaux & Sectoriels', desc: 'Des galas caritatifs aux forums professionnels, des concerts aux retraites spirituelles — Society centralise billetterie, communication, check-in QR et rapport post-événement. Organisez grand. Organisez serein.', stat: 'Du local au national', color: '#1A2BFF' },
  { icon: 'globe', title: 'Synergie entre Communautés', desc: 'Quand une ONG, une mutuelle et un réseau d\'alumni décident de s\'unir pour une cause, Society est le lien. Campagnes croisées, cagnottes communes, événements inter-communautés — le réseau amplifie chaque action.', stat: 'Le pouvoir du collectif', color: '#1A2BFF' },
  { icon: 'trending', title: 'Impact Socio-Économique Mesurable', desc: 'Emplois créés, personnes aidées, fonds levés, membres formés — Society génère automatiquement les indicateurs que les donateurs institutionnels, les partenaires RSE et les médias attendent. Votre impact, prouvé.', stat: 'Données ODD en temps réel', color: '#1A2BFF' },
]

export default function Presentation() {
  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })

  return (
    <div className="page">
      <Nav />

      {/* Barre d'action */}
      <div className="no-print" style={{ background: '#14110D', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          Présentation <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Society</strong> · Se met à jour automatiquement · {today}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Ctrl+P → PDF</span>
          <button
            onClick={() => window.print()}
            style={{ padding: '10px 22px', background: '#B22842', color: '#14110D', border: 'none', borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger PDF
          </button>
        </div>
      </div>

      {/* ── 01 COUVERTURE ── */}
      <section className="slide slide-dark" style={{ background: 'linear-gradient(135deg, #14110D 60%, #1A2BFF 140%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: '#1A2BFF', opacity: 0.25, filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: '#B22842', opacity: 0.12, filter: 'blur(100px)' }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 64 }}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em', color: '#1A2BFF' }}>Society<span style={{ color: 'rgba(255,255,255,0.25)' }}>.</span></div>
              <div style={{ textAlign: 'right', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>
                <div style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Présentation de la solution</div>
                <div>{today} · Confidentiel</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(212,167,91,0.15)', border: '1px solid rgba(212,167,91,0.3)', borderRadius: 999, fontSize: 12, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.05em', marginBottom: 32 }}>
                  En construction avec nos premiers partenaires
                </div>
                <h1 style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 0.88, color: 'white', letterSpacing: '-0.04em', marginBottom: 32 }}>
                  L'infrastructure<br />numérique des<br /><span style={{ color: '#1A2BFF' }}>communautés<br />africaines.</span>
                </h1>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 520 }}>
                  Vos membres. Vos cotisations. Vos événements. Votre impact. Tout dans un seul espace — pensé pour les réalités africaines.
                </p>
              </div>
              <div style={{ display: 'grid', gap: 16 }}>
                {[['5', 'Modules intégrés', '#1A2BFF'], ['7', 'Types de communautés', '#B22842'], ['1', 'Espace unifié', 'rgba(255,255,255,0.1)']].map(([n, l, bg]) => (
                  <div key={l} style={{ padding: '24px 28px', background: bg, borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.04em', color: 'white', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 LE PROBLÈME ── */}
      <section className="slide slide-light" style={{ background: '#F8F8F8', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Le constat africain</span>
              <h2 style={{ fontSize: 'clamp(40px, 4vw, 72px)', lineHeight: 0.9, marginTop: 24 }}>
                Trop d'outils.<br /><span style={{ color: '#6B6B6B' }}>Trop peu de résultats.</span>
              </h2>
              <p style={{ fontSize: 17, marginTop: 28, lineHeight: 1.7, color: '#4A4438', maxWidth: 460 }}>
                WhatsApp pour la communication. Excel pour les finances. Google Forms pour les inscriptions. Mobile Money pour collecter. Et à la fin du mois — des heures perdues, des données éparpillées, et rien à montrer aux donateurs.
              </p>
              <p style={{ fontSize: 18, marginTop: 20, fontWeight: 700, color: '#14110D', lineHeight: 1.5 }}>
                Les leaders communautaires africains perdent en moyenne <span style={{ color: '#1A2BFF' }}>5 à 10h par semaine</span> en gestion manuelle. Society rend ces heures à ce qui compte : les gens.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {['WhatsApp', 'Excel', 'Google Forms', 'Facebook', 'Donorbox', 'Mailchimp', 'Wave / Paiements manuels', 'Google Drive'].map((n, i) => (
                  <div key={i} style={{ padding: '14px 18px', background: 'white', borderRadius: 12, fontSize: 14, fontWeight: 600, position: 'relative', border: '1px solid #E5E5E5' }}>
                    {n}
                    <div style={{ position: 'absolute', top: 10, right: 12, width: 20, height: 20, borderRadius: '50%', background: '#FEE2E2', color: '#1A2BFF', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>×</div>
                  </div>
                ))}
                <div style={{ gridColumn: 'span 2', padding: '18px 24px', background: '#1A2BFF', borderRadius: 14, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>Society</div>
                    <div style={{ opacity: 0.8, fontSize: 13 }}>Un seul espace. Tout intégré. Pour de vrai.</div>
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#B22842', display: 'grid', placeItems: 'center', fontWeight: 800, color: '#14110D', fontSize: 16 }}>✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 NOTRE VISION ── */}
      <section className="slide slide-dark" data-nav-theme="dark" style={{ background: '#14110D', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div className="container" style={{ width: '100%', textAlign: 'center' }}>
          <span className="eyebrow dark">Notre vision</span>
          <h2 style={{ color: 'white', fontSize: 'clamp(40px, 5vw, 88px)', marginTop: 24, lineHeight: 0.9 }}>
            Chaque communauté africaine<br />mérite une <span style={{ color: '#1A2BFF' }}>infrastructure</span> digne.
          </h2>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', marginTop: 32, maxWidth: 700, margin: '32px auto 0', lineHeight: 1.7 }}>
            Society n'est pas un outil de plus. C'est le socle sur lequel les communautés africaines bâtissent leur avenir — cotisation par cotisation, bénévole par bénévole, événement par événement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
            {[['Structurer', 'Membres, rôles, finances, sous-groupes'], ['Engager', 'Communication, événements, contenus, bénévolat'], ['Monétiser', 'Cotisations, cagnottes, abonnements, billetterie']].map(([t, d]) => (
              <div key={t} style={{ textAlign: 'center', maxWidth: 220 }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: '#1A2BFF', marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 5 MODULES ── */}
      <section className="slide slide-light" style={{ background: 'white', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Notre solution</span>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 64px)', marginTop: 20 }}>5 modules. 1 plateforme.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {MODULES.map((m) => (
              <div key={m.n} style={{ padding: 24, background: '#F8F8F8', borderRadius: 20, borderTop: `4px solid ${m.color}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: m.color, letterSpacing: '0.06em' }}>{m.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.2 }}>{m.title}</h3>
                <p style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.65, flex: 1 }}>{m.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {m.tags.map(t => (
                    <span key={t} style={{ padding: '3px 8px', background: `${m.color}12`, color: m.color, borderRadius: 999, fontSize: 10, fontWeight: 700 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 POUR QUI — blocs image verticaux ── */}
      <section className="slide slide-dark" data-nav-theme="dark" style={{ background: '#14110D', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow dark">Pour qui ?</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(32px, 3.5vw, 56px)', marginTop: 16 }}>Society s'adapte à <span style={{ color: '#1A2BFF' }}>7 réalités</span>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12 }}>
            {SEGMENTS.map((seg) => (
              <div key={seg.slug} style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                {/* Image de fond */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${seg.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.92) 100%)' }} />
                {/* Barre colorée en haut */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: seg.color }} />
                {/* Contenu */}
                <div style={{ position: 'relative', zIndex: 2, padding: '0 16px 20px' }}>
                  <div style={{ padding: '3px 10px', background: seg.color, color: seg.color === '#B22842' ? '#14110D' : 'white', borderRadius: 999, fontSize: 9, fontWeight: 800, display: 'inline-block', marginBottom: 10, letterSpacing: '0.04em' }}>
                    {seg.count}
                  </div>
                  <h3 style={{ color: 'white', fontSize: 14, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>{seg.nom}</h3>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: 12 }}>{seg.tagline}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {seg.sol.slice(0, 3).map(s => (
                      <span key={s} style={{ padding: '3px 8px', background: `${seg.color}25`, color: seg.color === '#14110D' ? 'rgba(255,255,255,0.7)' : seg.color, borderRadius: 999, fontSize: 9, fontWeight: 700, border: `1px solid ${seg.color}40`, display: 'inline-block', width: 'fit-content' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 BÉNÉVOLAT & SYNERGIES ── */}
      <section className="slide slide-blue" data-nav-theme="dark" style={{ background: '#1A2BFF', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow white">Au-delà de la gestion</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(36px, 4vw, 64px)', marginTop: 20 }}>
              Quand les communautés <span style={{ color: '#1A2BFF' }}>s'unissent</span>,<br />elles changent le monde.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, marginTop: 20, maxWidth: 640, margin: '20px auto 0', lineHeight: 1.7 }}>
              Society n'est pas qu'un outil de gestion. C'est un réseau vivant où chaque communauté amplifie les autres — bénévoles partagés, événements croisés, causes communes.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {SYNERGIES.map((s) => (
              <div key={s.title} style={{ padding: 28, background: 'rgba(255,255,255,0.08)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ marginBottom: 16 }}><Icon name={s.icon} size={32} color="white" /></div>
                <h3 style={{ color: 'white', fontSize: 16, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: 999, fontSize: 11, fontWeight: 700, color: '#1A2BFF', display: 'inline-block' }}>{s.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 POURQUOI SOCIETY ── */}
      <section className="slide slide-light" style={{ background: '#F8F8F8', display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Pourquoi Society</span>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 64px)', marginTop: 24, lineHeight: 0.92 }}>
                Conçu pour les<br /><span style={{ color: '#1A2BFF' }}>réalités africaines.</span><br />Pas adapté. Pensé.
              </h2>
              <p style={{ fontSize: 16, marginTop: 28, color: '#4A4438', lineHeight: 1.7, maxWidth: 440 }}>
                Society est né à Abidjan. Chaque décision de design, chaque intégration a été pensée avec et pour les communautés africaines. Pas un produit occidental localisé — un produit africain natif.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: 'phone', t: 'Mobile Money natif', d: 'Orange Money, Wave, MTN MoMo — sans carte internationale.' },
                { icon: 'globe', t: 'Hébergement souverain', d: 'Données stockées en Afrique de l\'Ouest. Conformité UEMOA.' },
                { icon: 'lock', t: 'Sécurité AES-256', d: 'Chiffrement end-to-end, 2FA, backups quotidiens.' },
                { icon: 'activity', t: 'Déploiement immédiat', d: 'Votre communauté opérationnelle en moins d\'une journée.' },
                { icon: 'users', t: 'Support local', d: 'Équipe à Abidjan. Nous comprenons vos enjeux.' },
                { icon: 'chart', t: 'Vos données, à vous', d: 'Export libre à tout moment. Vous restez maîtres.' },
              ].map((item) => (
                <div key={item.t} style={{ padding: '20px 22px', background: 'white', borderRadius: 16, border: '1px solid #E5E5E5' }}>
                  <div style={{ marginBottom: 8 }}><Icon name={item.icon} size={24} color="#1A2BFF" /></div>
                  <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{item.t}</div>
                  <div style={{ fontSize: 12, color: '#6B6B6B', lineHeight: 1.6 }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 CTA FINAL ── */}
      <section className="slide slide-dark" data-nav-theme="dark" style={{ background: '#14110D', display: 'flex', alignItems: 'center', padding: '0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: '#B22842', opacity: 0.1, filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: '#1A2BFF', opacity: 0.2, filter: 'blur(100px)' }} />
        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>✦</div>
          <h2 style={{ color: 'white', fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 0.9, marginBottom: 32 }}>
            Votre communauté<br />mérite <span style={{ color: '#1A2BFF' }}>mieux</span>.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, maxWidth: 580, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Rejoignez les premières communautés qui transforment leur gestion avec Society. Nous cherchons nos premiers partenaires communautaires — ceux qui façonneront le produit avec nous.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">Demander l'accès anticipé →</NavLink>
            <a href="mailto:angesamuelkeke@gmail.com" className="btn btn-outline-white btn-xl">Demander un entretien</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Contact</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>angesamuelkeke@gmail.com</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Site</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>aguy8.github.io/Society.ci</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Siège</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Abidjan, Côte d'Ivoire</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
