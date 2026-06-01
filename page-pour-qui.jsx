// Page Pour qui — Segments
const PagePourQui = () => {
  const segments = [
    {n: 'ONG & Associations', img: 'assets/p_seg_ong.jpg', color: '#0E47AB', ex: 'Children of Africa, Hope Life CI, GirlUp CI', pb: 'Coordination artisanale, invisibilité des actions, manque de traçabilité financière.', sol: ['Gestion centralisée', 'Page d\'impact publique', 'Reporting bailleurs automatisé', 'Connexion RSE']},
    {n: 'Mutuelles & Tontines', img: 'assets/p_seg_mut.jpg', color: '#D4A75B', ex: 'MUGEF-CI, MUGASCI, MUSCOP-CI', pb: 'Suivi manuel des cotisations, conflits sur les montants, perte de données.', sol: ['Cotisations automatisées', 'Historique sécurisé', 'Alertes & relances', 'Mobile Money']},
    {n: 'Alumni & Jeunesse', img: 'assets/p_seg_alum.jpg', color: '#0a0a0a', ex: 'INPHB Alumni, BDE, JCI', pb: 'Diaspora déconnectée, événements non coordonnés, absence d\'annuaire.', sol: ['Annuaire alumni', 'Programme mentorat', 'Événements + billetterie', 'Réseau global']},
    {n: 'Réseaux Professionnels', img: 'assets/p_seg_pro.jpg', color: '#0E47AB', ex: 'Jacobleu, SangCoolheur', pb: 'Engagement dispersé, monétisation inexistante, valeur diluée.', sol: ['Espaces collaboratifs', 'Contenus premium', 'Matching expertise', 'Analytics']},
    {n: 'Groupes Religieux', img: 'assets/p_seg_rel.jpg', color: '#D4A75B', ex: 'Vases d\'Honneur, AEBECI, Diocèse', pb: 'Coordination multi-paroisses, collectes informelles, fidèles éparpillés.', sol: ['Communication ciblée', 'Cagnottes traçables', 'Gestion des fidèles', 'Événements lives']},
    {n: 'Leaders & Influenceurs', img: 'assets/p_seg_lead.jpg', color: '#0a0a0a', ex: 'Artistes, personnalités, pasteurs', pb: 'Audience volatile, dépendance aux algorithmes, pas de revenus directs.', sol: ['Communauté propriétaire', 'Monétisation directe', 'Indépendance algo', 'Q&A + lives privés']},
  ];

  return (
    <div className="page" data-screen-label="03 Pour qui">
      <SoNav active="Pour qui ?" />

      <section style={{padding: '120px 64px 80px'}}>
        <div className="container">
          <div style={{maxWidth: 1000}}>
            <span className="eyebrow">Pour qui ?</span>
            <h1 style={{fontSize: 120, marginTop: 28, lineHeight: 0.9}}>
              Six segments.<br/>
              <span style={{color: '#0E47AB'}}>Une promesse</span>.
            </h1>
            <p style={{fontSize: 22, marginTop: 32, maxWidth: 700, lineHeight: 1.5}}>
              Society s'adresse à toutes les communautés qui veulent passer du WhatsApp informel à une vraie infrastructure numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Segments — alternating */}
      {segments.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={i} style={{padding: '80px 64px', background: i % 2 === 0 ? 'white' : '#F8F8F8'}}>
            <div className="container">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
                <div style={{order: reverse ? 2 : 1, borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', background: s.color}}>
                  <img src={s.img} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                  <div style={{position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 50%, ${s.color}cc 100%)`}}></div>
                  <div style={{position: 'absolute', top: 28, left: 28, padding: '8px 16px', background: 'rgba(255,255,255,0.95)', borderRadius: 999, fontSize: 13, fontWeight: 700}}>
                    Segment {String(i+1).padStart(2,'0')}
                  </div>
                  <div style={{position: 'absolute', bottom: 28, left: 28, right: 28, color: 'white'}}>
                    <div style={{fontSize: 13, opacity: 0.85, fontWeight: 500}}>Exemples : {s.ex}</div>
                  </div>
                </div>
                <div style={{order: reverse ? 1 : 2}}>
                  <h2 style={{fontSize: 64}}>{s.n}.</h2>
                  <div style={{marginTop: 32, padding: 24, background: '#FFE9E9', borderRadius: 16, borderLeft: `4px solid #C23B5A`}}>
                    <div style={{fontSize: 12, fontWeight: 700, color: '#C23B5A', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Le problème</div>
                    <p style={{marginTop: 8, fontSize: 17, color: '#0a0a0a', fontWeight: 500}}>{s.pb}</p>
                  </div>
                  <div style={{marginTop: 24}}>
                    <div style={{fontSize: 12, fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16}}>Ce que Society apporte</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                      {s.sol.map((sol, j) => (
                        <div key={j} style={{padding: '14px 18px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10}}>
                          <div style={{width: 22, height: 22, borderRadius: '50%', background: s.color, color: 'white', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0}}>✓</div>
                          <span style={{fontSize: 14, fontWeight: 600}}>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="#inscription" className="btn btn-dark" style={{marginTop: 32}}>Inscrire ma {s.n.split(' ')[0].toLowerCase()} <SoIcon name="arrow" size={14} color="white"/></a>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{padding: '120px 64px', background: '#0E47AB', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: 80, color: 'white'}}>Vous ne vous reconnaissez<br/>dans aucun segment ?</h2>
          <p style={{fontSize: 20, marginTop: 24, color: 'rgba(255,255,255,0.85)'}}>Society s'adapte à toute communauté de 10+ membres. Parlons-en.</p>
          <div style={{display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40}}>
            <a href="#inscription" className="btn btn-gold btn-xl">Inscrire ma communauté</a>
            <a href="#" className="btn btn-outline-white btn-xl">Prendre un appel découverte</a>
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PagePourQui = PagePourQui;
