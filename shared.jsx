// Society - Composants partagés
// Note: nommage UNIQUE pour éviter collisions
const SoNav = ({ active = "Accueil", variant = "light" }) => {
  const links = ["Accueil", "Fonctionnalités", "Pour qui ?", "Tarifs", "À propos"];
  const linkHrefs = {
    "Accueil": "#accueil",
    "Fonctionnalités": "#fonctionnalites",
    "Pour qui ?": "#pour-qui",
    "Tarifs": "#tarifs",
    "À propos": "#a-propos",
  };
  return (
    <nav className={`nav ${variant === "dark" ? "dark" : variant === "blue" ? "blue" : ""}`}>
      <a href="#accueil" className="nav-logo">
        Society<span style={{color: variant === "blue" ? "#D4A75B" : "#0E47AB"}}>.</span>
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l} href={linkHrefs[l]} className={`nav-link ${active === l ? "active" : ""}`}>{l}</a>
        ))}
      </div>
      <div className="nav-cta">
        <a href="#" className="btn btn-ghost" style={{color: variant === "blue" || variant === "dark" ? "#fff" : undefined}}>Se connecter</a>
        <a href="#inscription" className={variant === "blue" ? "btn btn-white" : "btn btn-dark"}>
          Inscrire ma communauté
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </nav>
  );
};

const SoFooter = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <div className="footer-brand">Society<span style={{color: '#D4A75B'}}>.</span></div>
        <p className="footer-tagline">Structurez. Engagez. Monétisez.<br/>L'infrastructure numérique des communautés africaines.</p>
        <div style={{display: 'flex', gap: 12, marginTop: 24}}>
          {['IG', 'X', 'LK', 'FB'].map(s => (
            <div key={s} style={{width: 40, height: 40, borderRadius: '50%', border: '1px solid #2a2a2a', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 600, color: '#fff'}}>{s}</div>
          ))}
        </div>
      </div>
      <div className="footer-col">
        <h5>Produit</h5>
        <ul>
          <li><a href="#fonctionnalites">Fonctionnalités</a></li>
          <li><a href="#tarifs">Tarifs</a></li>
          <li><a href="#">Modules</a></li>
          <li><a href="#">Mobile App</a></li>
          <li><a href="#">Sécurité</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Pour qui ?</h5>
        <ul>
          <li><a href="#pour-qui">ONG & Associations</a></li>
          <li><a href="#pour-qui">Mutuelles</a></li>
          <li><a href="#pour-qui">Alumni</a></li>
          <li><a href="#pour-qui">Influenceurs</a></li>
          <li><a href="#pour-qui">Groupes religieux</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Société</h5>
        <ul>
          <li><a href="#a-propos">À propos</a></li>
          <li><a href="#">Difero Fundry</a></li>
          <li><a href="#">Carrières</a></li>
          <li><a href="#">Presse</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Ressources</h5>
        <ul>
          <li><a href="#">Centre d'aide</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Études de cas</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Statut</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div>© 2026 Society — Une création Difero Fundry · Abidjan, Côte d'Ivoire</div>
      <div style={{display: 'flex', gap: 24}}>
        <a href="#" style={{color: '#6B6B6B', textDecoration: 'none'}}>Mentions légales</a>
        <a href="#" style={{color: '#6B6B6B', textDecoration: 'none'}}>Confidentialité</a>
        <a href="#" style={{color: '#6B6B6B', textDecoration: 'none'}}>CGU</a>
      </div>
    </div>
  </footer>
);

// Marquee bandeau de communautés
const SoMarquee = () => {
  const items = ["+150 000 communautés en CI", "•", "85 % des Ivoiriens membres d'un groupe", "•", "\n", "\n", "Conçue à Abidjan, pour l'Afrique", "•", "Plateforme sociale à intéraction communautaire"];
  return (
    <div style={{background: '#0E47AB', color: 'white', padding: '14px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
      <div style={{display: 'flex', gap: 40, whiteSpace: 'nowrap', animation: 'marquee 40s linear infinite'}}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{fontSize: 14, fontWeight: 500, letterSpacing: '0.02em', opacity: it === "•" ? 0.4 : 0.95}}>{it}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.3%); } }`}</style>
    </div>
  );
};

// Icônes simples (inline SVG)
const SoIcon = ({ name, size = 24, color = "currentColor" }) => {
  const paths = {
    users: <><circle cx="9" cy="8" r="4"/><path d="M3 21v-2a6 6 0 0 1 12 0v2"/><circle cx="17" cy="6" r="3"/><path d="M21 21v-1a4 4 0 0 0-3-3.87"/></>,
    money: <><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></>,
    chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></>,
    spark: <><path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    chat: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    star: <><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></>,
    shield: <><path d="M12 2l9 4v6c0 5-3.5 9.7-9 10-5.5-.3-9-5-9-10V6z"/></>,
    bolt: <><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
    play: <><path d="M5 3l14 9-14 9z"/></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    layers: <><path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    qr: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h2v2h-2zM18 14h3M14 18h2M18 18h3v3h-3z"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

Object.assign(window, { SoNav, SoFooter, SoMarquee, SoIcon });
