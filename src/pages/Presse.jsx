import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const communiques = [
  {
    date: '15 avril 2026',
    tag: 'Levée de fonds',
    title: 'Society annonce une levée pre-seed de 150 millions FCFA pour accélérer son déploiement en Afrique de l\'Ouest',
    excerpt: 'Le financement sera utilisé pour compléter l\'équipe produit, ouvrir les premières communautés partenaires et établir des partenariats stratégiques avec des institutions ivoiriennes.',
  },
  {
    date: '3 mars 2026',
    tag: 'Lancement',
    title: 'Lancement officiel de la liste d\'attente bêta : Society ouvre ses inscriptions aux premiers leaders communautaires',
    excerpt: 'Les premières communautés pourront accéder à la plateforme en avant-première et façonner son développement avec l\'équipe fondatrice.',
  },
  {
    date: '10 janvier 2026',
    tag: 'Partenariat',
    title: 'Society et Orange CI s\'associent pour faciliter les paiements Mobile Money pour les associations',
    excerpt: 'Un accord cadre permet désormais à toute communauté Society de collecter des cotisations et des dons via Orange Money sans frais supplémentaires.',
  },
  {
    date: '5 novembre 2025',
    tag: 'Fondation',
    title: 'Difero Fundry officialise la création de Society, la première plateforme africaine de gestion communautaire',
    excerpt: 'Basée à Abidjan, Society ambitionne d\'être l\'infrastructure numérique de l\'économie communautaire sur tout le continent africain.',
  },
]

const stats = [
  { value: '150 000+', label: 'Communautés cibles en CI' },
  { value: '14', label: 'Pays représentés en Afrique' },
  { value: '8', label: 'Membres dans l\'équipe fondatrice' },
  { value: '65 000+', label: 'Associations formelles en Côte d\'Ivoire' },
]

export default function Presse() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px', minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #FFFBF2 0%, #F0F6FF 50%, #F4F1FF 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#1A2BFF', opacity: 0.08, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -80, width: 400, height: 400, borderRadius: '50%', background: '#B22842', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: '#FFFFFF', border: '1px solid #F0DBA6', borderRadius: 999, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A2BFF' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Bientôt disponible</span>
          </div>
          <h1 style={{ fontSize: 80, lineHeight: 0.92, color: '#14110D', maxWidth: 800 }}>
            Espace Presse<br />
            <span style={{ color: '#1A2BFF' }}>en construction.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#4A4438', marginTop: 28, maxWidth: 500, lineHeight: 1.65 }}>
            Notre espace presse est en cours de préparation. Pour toute demande médiatique, contactez directement notre équipe.
          </p>
          <div style={{ marginTop: 48 }}>
            <NavLink to="/contact" className="btn btn-primary btn-xl" style={{ background: 'linear-gradient(135deg, #1A2BFF, #1A2BFF)', boxShadow: '0 8px 24px rgba(14,71,171,0.3)' }}>
              Contacter l'équipe
              <Icon name="arrow" size={16} color="white" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CONTENU PRESSE MASQUÉ — sera dévoilé au lancement */}
      <div style={{ display: 'none' }}>

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: 999, background: '#1A2BFF', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: -60, left: 200, width: 300, height: 300, borderRadius: 999, background: '#B22842', opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow white">Espace Presse</span>
          <h1 style={{ fontSize: 90, marginTop: 24, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Society dans<br />
            <span style={{ color: '#1A2BFF' }}>les médias.</span>
          </h1>
          <p style={{ fontSize: 19, marginTop: 32, maxWidth: 600, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)' }}>
            Ressources officielles pour les journalistes, blogueurs et créateurs de contenu qui couvrent Society et l'écosystème tech africain.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ fontSize: 16 }}>
              <Icon name="layers" size={16} color="#14110D" />
              Télécharger le kit presse
            </button>
            <button style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="chat" size={15} color="white" />
              Contacter l'attaché de presse
            </button>
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px', background: '#1A2BFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '40px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <div style={{ fontSize: 52, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 10, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <span className="eyebrow">Communiqués de presse</span>
          <h2 style={{ fontSize: 48, marginTop: 20, fontWeight: 800 }}>Dernières annonces.</h2>
          <div style={{ display: 'grid', gap: 20, marginTop: 48 }}>
            {communiques.map((c, i) => (
              <div key={i} style={{ padding: '36px 40px', border: '1px solid #EBEBEB', borderRadius: 20, display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: 32, alignItems: 'center', background: 'white' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#6B6B6B', marginBottom: 8 }}>{c.date}</div>
                  <span style={{ display: 'inline-block', padding: '5px 12px', background: '#E8F0FD', color: '#1A2BFF', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>
                    {c.tag}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.25 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B6B6B', marginTop: 10, lineHeight: 1.5 }}>{c.excerpt}</p>
                </div>
                <button style={{ whiteSpace: 'nowrap', padding: '12px 24px', background: '#F2F2F2', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Lire <Icon name="arrow" size={13} color="#14110D" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Ressources visuelles</span>
              <h2 style={{ fontSize: 40, marginTop: 20, fontWeight: 800 }}>Logos & identité visuelle.</h2>
              <p style={{ fontSize: 16, color: '#4A4438', marginTop: 16, lineHeight: 1.6 }}>
                Téléchargez les logos officiels de Society en haute résolution. Veuillez respecter les directives de notre charte graphique. Toute modification est interdite sans autorisation écrite.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <button className="btn btn-dark">Logo SVG (fond blanc)</button>
                <button className="btn btn-outline">Logo SVG (fond sombre)</button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E5E5E5', minHeight: 160 }}>
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: '-0.03em', color: '#14110D' }}>Society<span style={{ color: '#1A2BFF' }}>.</span></div>
              </div>
              <div style={{ background: '#14110D', borderRadius: 20, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: '-0.03em', color: 'white' }}>Society<span style={{ color: '#1A2BFF' }}>.</span></div>
              </div>
              <div style={{ background: '#1A2BFF', borderRadius: 20, padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100, gridColumn: '1 / -1' }}>
                <div style={{ color: 'white', fontWeight: 900, fontSize: 28, letterSpacing: '-0.02em' }}>Society</div>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: '#1A2BFF', marginLeft: 6, marginBottom: 18 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ background: '#14110D', borderRadius: 32, padding: '64px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF' }}>● CONTACT PRESSE</span>
              <h2 style={{ fontSize: 40, color: 'white', marginTop: 16, fontWeight: 800 }}>Une question pour notre équipe ?</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginTop: 16, lineHeight: 1.6 }}>
                Notre attachée de presse répond sous 24 heures ouvrées à toute demande d'interview, de citation ou de vérification d'information.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.07)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Attachée de presse</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'white' }}>Adja Ndiaye</div>
                <div style={{ fontSize: 14, color: '#1A2BFF', marginTop: 4 }}>presse@society.ci</div>
              </div>
              <div style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.07)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Disponibilité</div>
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>Lun – Ven · 8h – 18h (GMT+0)</div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>Basée à Abidjan, Plateau</div>
              </div>
              <button className="btn btn-primary" style={{ fontSize: 15 }}>
                Envoyer une demande presse
                <Icon name="arrow" size={15} color="#14110D" />
              </button>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end hidden */}

      <Footer />
    </div>
  )
}
