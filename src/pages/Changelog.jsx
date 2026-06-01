import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'

const RELEASES = [
  {
    v: 'v1.4',
    date: 'Mai 2026',
    tag: 'Majeure',
    tagColor: '#1A2BFF',
    tagBg: '#E8EFFC',
    titre: 'Module Espace Leader & Monétisation avancée',
    items: [
      { type: '✨ Nouveau', t: 'Espace Leader : abonnements, contenu premium, Q&A live' },
      { type: '✨ Nouveau', t: 'Billetterie + QR code pour les événements physiques' },
      { type: '✨ Nouveau', t: 'Reporting impact RSE — indicateurs ODD automatisés' },
      { type: '⚡ Amélioré', t: 'Dashboard fondateur entièrement redesigné' },
      { type: '⚡ Amélioré', t: 'Performance mobile : temps de chargement réduit de 40 %' },
      { type: '🐛 Corrigé', t: 'Synchronisation des cotisations en mode hors-ligne' },
    ],
  },
  {
    v: 'v1.3',
    date: 'Avril 2026',
    tag: 'Intermédiaire',
    tagColor: '#B22842',
    tagBg: '#FFFFFF',
    titre: 'Intégrations Mobile Money & Communication',
    items: [
      { type: '✨ Nouveau', t: 'Intégration Wave — Sénégal, Mali, Burkina Faso' },
      { type: '✨ Nouveau', t: 'Notifications push sur l\'application mobile' },
      { type: '⚡ Amélioré', t: 'Relances cotisations : personnalisation des messages SMS' },
      { type: '⚡ Amélioré', t: 'Export PDF des rapports d\'impact' },
      { type: '🐛 Corrigé', t: 'Calcul des statistiques de participation aux événements' },
    ],
  },
  {
    v: 'v1.2',
    date: 'Mars 2026',
    tag: 'Intermédiaire',
    tagColor: '#1F5D3A',
    tagBg: '#DCFCE7',
    titre: 'Mise en relation & Bénévolat',
    items: [
      { type: '✨ Nouveau', t: 'Module Mise en relation : matching besoins/ressources par IA' },
      { type: '✨ Nouveau', t: 'Gestion des bénévoles : profils, missions, disponibilités' },
      { type: '✨ Nouveau', t: 'Annuaire des compétences entre membres' },
      { type: '⚡ Amélioré', t: 'Interface de création de cagnotte simplifiée (3 étapes → 2)' },
      { type: '🐛 Corrigé', t: 'Affichage des membres inactifs dans le tableau de bord' },
    ],
  },
  {
    v: 'v1.1',
    date: 'Février 2026',
    tag: 'Patch',
    tagColor: '#6B6B6B',
    tagBg: '#F2F2F2',
    titre: 'Corrections & stabilité',
    items: [
      { type: '⚡ Amélioré', t: 'Import CSV / Excel des membres — support de 15 formats' },
      { type: '⚡ Amélioré', t: 'Accueil guidé pour les nouveaux fondateurs' },
      { type: '🐛 Corrigé', t: 'Envoi d\'invitations en lot (>50 membres)' },
      { type: '🐛 Corrigé', t: 'Affichage du logo sur la page publique de la communauté' },
    ],
  },
  {
    v: 'v1.0',
    date: 'Janvier 2026',
    tag: 'Lancement',
    tagColor: '#9D174D',
    tagBg: '#FDF2F8',
    titre: 'Lancement de la plateforme Society',
    items: [
      { type: '🚀 Lancement', t: 'Module Gestion communautaire complet' },
      { type: '🚀 Lancement', t: 'Module Monétisation : cagnottes & cotisations Orange Money' },
      { type: '🚀 Lancement', t: 'Page publique de la communauté' },
      { type: '🚀 Lancement', t: 'Tableau de bord fondateur' },
      { type: '🚀 Lancement', t: 'Application web mobile-first' },
    ],
  },
]

const TYPE_COLORS = {
  '✨ Nouveau': { bg: '#E8EFFC', c: '#1A2BFF' },
  '⚡ Amélioré': { bg: '#FFFFFF', c: '#8B6020' },
  '🐛 Corrigé': { bg: '#DCFCE7', c: '#1F5D3A' },
  '🚀 Lancement': { bg: '#FDF2F8', c: '#9D174D' },
}

export default function Changelog() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <span className="eyebrow">Journal des mises à jour</span>
          <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9, maxWidth: 800 }}>
            Ce qu'on<br />
            <span style={{ color: '#1A2BFF' }}>améliore</span><br />
            chaque semaine.
          </h1>
          <p style={{ fontSize: 20, marginTop: 32, maxWidth: 600, lineHeight: 1.5 }}>
            Votre retour façonne Society. Chaque version est là pour vous simplifier la vie — pas pour vous impressionner.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 0, bottom: 0, width: 2, background: '#E5E5E5' }} />
              <div style={{ display: 'grid', gap: 56 }}>
                {RELEASES.map((r, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 28 }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', background: r.tagBg, display: 'grid', placeItems: 'center', border: '3px solid white', boxShadow: '0 0 0 2px ' + r.tagColor + '30', flexShrink: 0, zIndex: 1 }}>
                        <Icon name="refresh" size={20} color={r.tagColor} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
                          <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.02em' }}>{r.v}</span>
                          <span style={{ padding: '3px 10px', background: r.tagBg, color: r.tagColor, borderRadius: 999, fontSize: 11, fontWeight: 800 }}>{r.tag}</span>
                          <span style={{ fontSize: 13, color: '#6B6B6B' }}>{r.date}</span>
                        </div>
                        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, color: '#14110D' }}>{r.titre}</h2>
                        <div style={{ display: 'grid', gap: 10 }}>
                          {r.items.map((item, j) => {
                            const tc = TYPE_COLORS[item.type] || { bg: '#F2F2F2', c: '#6B6B6B' }
                            return (
                              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                <span style={{ padding: '3px 10px', background: tc.bg, color: tc.c, borderRadius: 6, fontSize: 11, fontWeight: 700, flexShrink: 0, whiteSpace: 'nowrap' }}>{item.type}</span>
                                <span style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.5, marginTop: 2 }}>{item.t}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '64px 64px 100px', background: '#1A2BFF' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 16, letterSpacing: '0.06em' }}>RESTEZ INFORMÉ</div>
          <h2 style={{ fontSize: 40, color: 'white', fontWeight: 800, marginBottom: 24 }}>
            Recevez les mises à jour par email.
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
            <input type="email" placeholder="votre@email.com" style={{ flex: 1, minWidth: 240, padding: '16px 20px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 15, outline: 'none' }} />
            <NavLink to="/newsletter" className="btn btn-gold">Je m'abonne</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
