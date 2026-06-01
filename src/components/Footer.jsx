import { NavLink } from 'react-router-dom'

const SOCIAL = [
  { label: 'IG', url: 'https://www.instagram.com/society_by_difero' },
  { label: 'FB', url: 'https://www.facebook.com/share/1Br9pMKWmo/' },
  { label: 'LK', url: 'https://www.linkedin.com/company/society-so/' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Society<span style={{ color: 'white' }}>.</span></div>
          <p className="footer-tagline">
            Structurez. Engagez. Monétisez.<br />
            L'infrastructure numérique des communautés africaines.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: 'white', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h5>Produit</h5>
          <ul>
            <li><NavLink to="/fonctionnalites">Fonctionnalités</NavLink></li>
            <li><NavLink to="/tarifs">Tarifs</NavLink></li>
            <li><NavLink to="/integrations">Intégrations</NavLink></li>
            <li><NavLink to="/mobile-app">Mobile App</NavLink></li>
            <li><NavLink to="/evenements">Événements</NavLink></li>
            <li><NavLink to="/securite">Sécurité</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Pour qui ?</h5>
          <ul>
            <li><NavLink to="/pour-qui/ong-associations">ONG &amp; Associations</NavLink></li>
            <li><NavLink to="/pour-qui/mutuelles-tontines">Mutuelles</NavLink></li>
            <li><NavLink to="/pour-qui/alumni-jeunesse">Alumni</NavLink></li>
            <li><NavLink to="/pour-qui/leaders-influenceurs">Influenceurs</NavLink></li>
            <li><NavLink to="/pour-qui/groupes-religieux">Groupes religieux</NavLink></li>
            <li><NavLink to="/pour-qui/communaute">Communauté</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Société</h5>
          <ul>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
            <li><NavLink to="/manifeste">Manifeste</NavLink></li>
            <li><span style={{ color: 'var(--so-grey-500)' }}>Difero Fundry</span></li>
            <li><NavLink to="/carrieres">Carrières</NavLink></li>
            <li><NavLink to="/presse">Presse</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Ressources</h5>
          <ul>
            <li><NavLink to="/centre-aide">Centre d'aide</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/etudes-de-cas">Études de cas</NavLink></li>
            <li><NavLink to="/documentation">Documentation</NavLink></li>
            <li><NavLink to="/statut">Statut</NavLink></li>
            <li><NavLink to="/benevolat">Bénévolat</NavLink></li>
            <li><NavLink to="/mise-en-relation">Mise en relation</NavLink></li>
            <li><NavLink to="/impact">Impact collectif</NavLink></li>
            <li><NavLink to="/presentation">Présentation PDF</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Society — Une création Difero Fundry · Abidjan, Côte d'Ivoire</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <NavLink to="/mentions-legales" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Mentions légales</NavLink>
          <NavLink to="/confidentialite" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Confidentialité</NavLink>
          <NavLink to="/cgu" style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>CGU</NavLink>
        </div>
      </div>
    </footer>
  )
}
