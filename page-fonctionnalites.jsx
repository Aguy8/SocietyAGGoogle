// Page Fonctionnalités — détail des modules
const PageFonctionnalites = () => {
  return (
    <div className="page" data-screen-label="02 Fonctionnalites">
      <SoNav active="Fonctionnalités" />

      {/* HERO */}
      <section style={{padding: '120px 64px 80px', background: '#F8F8F8'}}>
        <div className="container">
          <div style={{maxWidth: 900}}>
            <span className="eyebrow">Fonctionnalités</span>
            <h1 style={{fontSize: 120, marginTop: 28, lineHeight: 0.9}}>
              5 modules.<br/>
              <span style={{color: '#0E47AB'}}>1 plateforme</span>.<br/>
              Zéro friction.
            </h1>
            <p style={{fontSize: 22, marginTop: 32, maxWidth: 700, lineHeight: 1.5}}>
              Chaque module est pensé pour les réalités africaines : mobile-first, paiements locaux, multilinguisme, usage hors-ligne partiel.
            </p>
          </div>

          {/* navigation */}
          <div style={{display: 'flex', gap: 8, marginTop: 64, flexWrap: 'wrap'}}>
            {['Gestion communautaire', 'Monétisation', 'Mise en relation', 'Visibilité & Impact', 'Espace Leader'].map((m, i) => (
              <a key={i} href={`#m${i+1}`} style={{padding: '14px 22px', background: i === 0 ? '#0a0a0a' : 'white', color: i === 0 ? 'white' : '#0a0a0a', borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #E5E5E5'}}>
                <span style={{color: i === 0 ? '#D4A75B' : '#0E47AB', marginRight: 8}}>{`0${i+1}`}</span>
                {m}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 1 */}
      <section id="m1" style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
                <div style={{padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em'}}>MODULE 01</div>
                <div style={{height: 1, flex: 1, background: '#E5E5E5'}}></div>
              </div>
              <h2 style={{fontSize: 80}}>Gestion communautaire.</h2>
              <p style={{fontSize: 19, marginTop: 24, maxWidth: 520}}>
                Tout ce qu'il faut pour gérer une communauté sans Excel ni WhatsApp. Un cœur opérationnel solide, pensé pour les non-techniciens.
              </p>
              <div style={{marginTop: 40, display: 'grid', gap: 4}}>
                {[
                  ['Base de données vivante', 'Profils complets, segmentation, historique des cotisations, niveau d\'implication.'],
                  ['Communication ciblée', 'Canaux par sous-groupes, comités, thématiques — sans pollution de groupe.'],
                  ['Gestion des événements', 'Création, invitations, suivi des présences, bilans post-événement.'],
                  ['Pilotage de projets', 'Planification, suivi, archivage, mise en valeur des initiatives.'],
                  ['Tableau de bord d\'impact', 'Membres actifs, taux de participation, projets réalisés, fonds collectés.'],
                  ['Rôles et permissions', 'Administrateur, modérateur, membre, bénévole — granulaire.'],
                ].map((f, i) => (
                  <div key={i} style={{padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 20, alignItems: 'flex-start'}}>
                    <div style={{width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center'}}>
                      <SoIcon name="check" size={18} color="#0E47AB"/>
                    </div>
                    <div>
                      <div style={{fontWeight: 700, fontSize: 17}}>{f[0]}</div>
                      <div style={{color: '#6B6B6B', fontSize: 14, marginTop: 4}}>{f[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual mockup */}
            <div style={{background: '#F2F2F2', borderRadius: 32, padding: 48, position: 'relative', minHeight: 720, overflow: 'hidden'}}>
              <div style={{position: 'absolute', inset: 24, background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.08)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
                  <div>
                    <div style={{fontSize: 12, color: '#6B6B6B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em'}}>Tableau de bord</div>
                    <div style={{fontSize: 24, fontWeight: 800, marginTop: 4, letterSpacing: '-0.02em'}}>Cansein Fondation</div>
                  </div>
                  <div style={{padding: '6px 12px', background: '#E8FBF1', color: '#0F8B4F', borderRadius: 999, fontSize: 12, fontWeight: 600}}>● Live</div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24}}>
                  {[['Membres', '1 248', '+18'], ['Cotisations', '94 %', '+5 %'], ['Projets', '12', '4 actifs']].map((s, i) => (
                    <div key={i} style={{padding: 16, background: '#F8F8F8', borderRadius: 14}}>
                      <div style={{fontSize: 11, color: '#6B6B6B', fontWeight: 600}}>{s[0]}</div>
                      <div style={{fontSize: 24, fontWeight: 800, marginTop: 6, letterSpacing: '-0.02em'}}>{s[1]}</div>
                      <div style={{fontSize: 11, color: '#0E47AB', marginTop: 2}}>{s[2]}</div>
                    </div>
                  ))}
                </div>
                <div style={{padding: 20, background: '#F8F8F8', borderRadius: 14, marginBottom: 16}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                    <div style={{fontSize: 13, fontWeight: 700}}>Activité — 30 derniers jours</div>
                    <div style={{fontSize: 11, color: '#6B6B6B'}}>+24 % vs mois dernier</div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'flex-end', gap: 4, height: 80}}>
                    {[40, 55, 35, 70, 60, 82, 75, 90, 65, 80, 95, 88, 72, 85].map((h, i) => (
                      <div key={i} style={{flex: 1, height: `${h}%`, background: i === 11 ? '#0E47AB' : '#D5DCEA', borderRadius: 3}}></div>
                    ))}
                  </div>
                </div>
                <div style={{display: 'grid', gap: 8}}>
                  {[
                    {n: 'Awa K.', r: 'Trésorière', img: 'assets/p_aw_fem_1.jpg'},
                    {n: 'Mamadou D.', r: 'Bénévole', img: 'assets/p_aw_hom_1.jpg'},
                    {n: 'Salimata B.', r: 'Membre actif', img: 'assets/p_aw_fem_6.jpg'},
                  ].map((m, i) => (
                    <div key={i} style={{display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: '#F8F8F8', borderRadius: 12}}>
                      <div style={{width: 36, height: 36, borderRadius: '50%', backgroundImage: `url(${m.img})`, backgroundSize: 'cover'}}></div>
                      <div style={{flex: 1}}>
                        <div style={{fontSize: 13, fontWeight: 700}}>{m.n}</div>
                        <div style={{fontSize: 11, color: '#6B6B6B'}}>{m.r}</div>
                      </div>
                      <div style={{padding: '4px 10px', background: '#E8EFFC', color: '#0E47AB', borderRadius: 999, fontSize: 11, fontWeight: 600}}>À jour</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 2 - GOLD */}
      <section id="m2" style={{padding: '120px 64px', background: '#0a0a0a', color: 'white'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            <div style={{order: 2}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
                <div style={{padding: '6px 14px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 13, fontWeight: 700, letterSpacing: '0.05em'}}>MODULE 02</div>
                <div style={{height: 1, flex: 1, background: '#2a2a2a'}}></div>
              </div>
              <h2 style={{fontSize: 80, color: 'white'}}>Monétisation & financement.</h2>
              <p style={{fontSize: 19, marginTop: 24, maxWidth: 520, color: 'rgba(255,255,255,0.7)'}}>
                Transformer l'énergie communautaire en flux financiers structurés, traçables et sécurisés. Avec les paiements mobiles que tout le monde utilise déjà.
              </p>
              <div style={{marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
                {[
                  'Cagnottes en 3 clics',
                  'Cotisations automatiques',
                  'Crowdfunding participatif',
                  'Billetterie + QR codes',
                  'Abonnements premium',
                  'Reporting financier',
                ].map((f, i) => (
                  <div key={i} style={{padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, fontSize: 15, fontWeight: 600}}>{f}</div>
                ))}
              </div>
              <div style={{marginTop: 32, display: 'flex', gap: 12, alignItems: 'center'}}>
                <span style={{fontSize: 13, color: 'rgba(255,255,255,0.6)'}}>Compatible avec :</span>
                {['Orange Money', 'Wave', 'MTN MoMo', 'Flooz', 'Visa'].map(p => (
                  <span key={p} style={{padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 12, fontWeight: 600}}>{p}</span>
                ))}
              </div>
            </div>

            <div style={{order: 1, position: 'relative', minHeight: 700}}>
              <div style={{position: 'absolute', inset: 0, background: '#D4A75B', borderRadius: 40, transform: 'rotate(2deg)'}}></div>
              {/* mockup phone */}
              <div style={{position: 'absolute', top: 40, left: 40, right: 40, bottom: 40, background: 'white', borderRadius: 32, padding: 32, color: '#0a0a0a'}}>
                <div style={{fontSize: 12, color: '#6B6B6B', fontWeight: 600}}>CAGNOTTE EN COURS</div>
                <div style={{fontSize: 24, fontWeight: 800, marginTop: 4, letterSpacing: '-0.02em'}}>Reconstruire l'école Anono</div>
                <div style={{display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 28}}>
                  <span style={{fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', color: '#0E47AB'}}>7 245</span>
                  <span style={{fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em', color: '#0E47AB'}}>K</span>
                  <span style={{fontSize: 18, color: '#6B6B6B', fontWeight: 600}}>FCFA</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6B6B6B', marginTop: 4}}>
                  <span>collectés sur 10 000 K</span>
                  <span style={{fontWeight: 700, color: '#0E47AB'}}>72 %</span>
                </div>
                <div style={{height: 8, background: '#F2F2F2', borderRadius: 999, marginTop: 8, overflow: 'hidden'}}>
                  <div style={{width: '72%', height: '100%', background: 'linear-gradient(90deg, #0E47AB, #084CC2)'}}></div>
                </div>
                <div style={{marginTop: 24, padding: 20, background: '#F8F8F8', borderRadius: 16}}>
                  <div style={{fontSize: 12, color: '#6B6B6B', marginBottom: 12, fontWeight: 600}}>DERNIERS DONS</div>
                  {[
                    {n: 'Aïssatou D.', m: '50 000', t: 'il y a 2 min', img: 'assets/p_aw_fem_5.jpg'},
                    {n: 'Réseau JCI Abidjan', m: '250 000', t: 'il y a 14 min', img: 'assets/p_eu_2.jpg'},
                    {n: 'Anonyme', m: '15 000', t: 'il y a 32 min', img: null},
                  ].map((d, i) => (
                    <div key={i} style={{display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i < 2 ? '1px solid #E5E5E5' : 'none'}}>
                      <div style={{width: 32, height: 32, borderRadius: '50%', background: d.img ? `url(${d.img}) center/cover` : '#E5E5E5'}}></div>
                      <div style={{flex: 1}}>
                        <div style={{fontSize: 13, fontWeight: 700}}>{d.n}</div>
                        <div style={{fontSize: 11, color: '#6B6B6B'}}>{d.t}</div>
                      </div>
                      <div style={{fontSize: 14, fontWeight: 800, color: '#0E47AB'}}>{d.m} <span style={{fontSize: 10, color: '#6B6B6B'}}>FCFA</span></div>
                    </div>
                  ))}
                </div>
                <button style={{marginTop: 20, width: '100%', padding: 16, background: '#0E47AB', color: 'white', border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 700}}>Faire un don</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES 3, 4, 5 — grid compact */}
      <section style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'grid', gap: 24}}>
            {/* M3 */}
            <div id="m3" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, padding: 56, background: '#F8F8F8', borderRadius: 32, alignItems: 'center'}}>
              <div>
                <div style={{padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block'}}>MODULE 03</div>
                <h3 style={{fontSize: 56, marginTop: 16}}>Mise en relation intelligente.</h3>
                <p style={{fontSize: 17, marginTop: 16, maxWidth: 480}}>L'algorithme qui connecte besoins et ressources : compétences recherchées, profils disponibles, partenariats RSE.</p>
                <div style={{marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                  {['Matching besoins/ressources', 'Annuaire interactif', 'Co-projets entre communautés', 'Connexion RSE'].map(t => (
                    <span key={t} style={{padding: '8px 14px', background: 'white', borderRadius: 999, fontSize: 13, fontWeight: 500}}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{position: 'relative', height: 320}}>
                {/* matching diagram */}
                <div style={{position: 'absolute', top: 30, left: 0, padding: 16, background: 'white', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', width: 220}}>
                  <div style={{fontSize: 11, color: '#6B6B6B', fontWeight: 600}}>BESOIN</div>
                  <div style={{fontSize: 14, fontWeight: 700, marginTop: 4}}>Développeur web bénévole</div>
                  <div style={{fontSize: 12, color: '#0E47AB', marginTop: 4}}>ONG Hope Life CI</div>
                </div>
                <div style={{position: 'absolute', top: 50, right: 0, padding: 16, background: 'white', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', width: 220}}>
                  <div style={{fontSize: 11, color: '#6B6B6B', fontWeight: 600}}>RESSOURCE</div>
                  <div style={{fontSize: 14, fontWeight: 700, marginTop: 4}}>Mamadou T.</div>
                  <div style={{fontSize: 12, color: '#0E47AB', marginTop: 4}}>JCI Abidjan • React/Node</div>
                </div>
                <svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} viewBox="0 0 400 320">
                  <path d="M 220 60 Q 200 160 200 200 T 200 260" stroke="#0E47AB" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                </svg>
                <div style={{position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', padding: '12px 24px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8}}>
                  <SoIcon name="spark" size={16} color="#D4A75B"/> 96 % de match
                </div>
              </div>
            </div>

            {/* M4 + M5 */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
              <div id="m4" style={{padding: 48, background: '#0E47AB', color: 'white', borderRadius: 32, minHeight: 480}}>
                <div style={{padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block'}}>MODULE 04</div>
                <h3 style={{fontSize: 48, marginTop: 16, color: 'white'}}>Visibilité & Impact.</h3>
                <p style={{fontSize: 16, marginTop: 12, color: 'rgba(255,255,255,0.85)'}}>Rendre visible ce qui était invisible. Pages publiques, rapports automatisés, valorisation RSE.</p>
                <div style={{marginTop: 32, padding: 24, background: 'rgba(255,255,255,0.1)', borderRadius: 20}}>
                  <div style={{fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600}}>RAPPORT D'IMPACT — Q3 2026</div>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16}}>
                    <div><div style={{fontSize: 32, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.03em'}}>14 290</div><div style={{fontSize: 12, opacity: 0.8}}>bénéficiaires touchés</div></div>
                    <div><div style={{fontSize: 32, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.03em'}}>8</div><div style={{fontSize: 12, opacity: 0.8}}>projets réalisés</div></div>
                    <div><div style={{fontSize: 32, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.03em'}}>62 M</div><div style={{fontSize: 12, opacity: 0.8}}>FCFA collectés</div></div>
                    <div><div style={{fontSize: 32, fontWeight: 800, color: '#D4A75B', letterSpacing: '-0.03em'}}>1 248</div><div style={{fontSize: 12, opacity: 0.8}}>membres actifs</div></div>
                  </div>
                </div>
              </div>

              <div id="m5" style={{padding: 48, background: 'linear-gradient(135deg, #FFD9DE, #E0D6FF)', borderRadius: 32, minHeight: 480, position: 'relative', overflow: 'hidden'}}>
                <div style={{padding: '6px 14px', background: 'rgba(255,255,255,0.6)', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block'}}>MODULE 05</div>
                <h3 style={{fontSize: 48, marginTop: 16}}>Espace Leader & Influenceur.</h3>
                <p style={{fontSize: 16, marginTop: 12, maxWidth: 380}}>Transformer une audience en communauté structurée, engagée et monétisable.</p>
                <div style={{marginTop: 32, padding: 20, background: 'white', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 16}}>
                  <img src="assets/p_aw_fem_5.jpg" style={{width: 60, height: 60, borderRadius: '50%', objectFit: 'cover'}}/>
                  <div style={{flex: 1}}>
                    <div style={{fontWeight: 800, fontSize: 17}}>Aïssatou D.</div>
                    <div style={{fontSize: 13, color: '#6B6B6B'}}>Espace privé · 4 200 fans</div>
                  </div>
                  <div style={{padding: '8px 14px', background: '#0a0a0a', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700}}>VIP</div>
                </div>
                <div style={{marginTop: 12, padding: 20, background: 'white', borderRadius: 20}}>
                  <div style={{fontSize: 11, color: '#6B6B6B', fontWeight: 600}}>REVENUS DU MOIS</div>
                  <div style={{fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 4}}>1 240 000 <span style={{fontSize: 14, color: '#6B6B6B'}}>FCFA</span></div>
                  <div style={{fontSize: 12, color: '#0F8B4F', fontWeight: 600}}>↑ 32 % vs mois dernier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section style={{padding: '120px 64px', background: '#F8F8F8'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: 64}}>
            <span className="eyebrow">Vs. la concurrence</span>
            <h2 style={{marginTop: 24, fontSize: 72}}>Society fait ce qu'aucun autre<br/>ne fait — en Afrique.</h2>
          </div>
          <div style={{background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 15}}>
              <thead>
                <tr style={{background: '#F2F2F2'}}>
                  <th style={{padding: 20, textAlign: 'left', fontSize: 13, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em'}}>Fonctionnalité</th>
                  <th style={{padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#6B6B6B'}}>WhatsApp</th>
                  <th style={{padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#6B6B6B'}}>Facebook</th>
                  <th style={{padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#6B6B6B'}}>Circle.so</th>
                  <th style={{padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, background: '#0E47AB', color: 'white'}}>Society</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gestion des membres & rôles', 0, 1, 2, 2],
                  ['Cotisations automatisées', 0, 0, 1, 2],
                  ['Mobile Money (OM, Wave, MoMo)', 0, 0, 0, 2],
                  ['Cagnottes & crowdfunding', 0, 0, 1, 2],
                  ['Billetterie + QR codes', 0, 1, 1, 2],
                  ['Rapports d\'impact RSE', 0, 0, 0, 2],
                  ['Matching besoins/ressources', 0, 0, 0, 2],
                  ['Prix adapté Afrique', 2, 2, 0, 2],
                  ['Multilinguisme local', 2, 1, 0, 2],
                ].map((row, i) => (
                  <tr key={i} style={{borderTop: '1px solid #E5E5E5'}}>
                    <td style={{padding: 20, fontWeight: 600}}>{row[0]}</td>
                    {[1, 2, 3, 4].map(c => (
                      <td key={c} style={{padding: 20, textAlign: 'center', background: c === 4 ? '#F4F7FE' : 'transparent'}}>
                        {row[c] === 2 && <span style={{display: 'inline-grid', placeItems: 'center', width: 28, height: 28, borderRadius: '50%', background: c === 4 ? '#0E47AB' : '#0F8B4F', color: 'white'}}>✓</span>}
                        {row[c] === 1 && <span style={{color: '#D4A75B', fontSize: 18}}>~</span>}
                        {row[c] === 0 && <span style={{color: '#C9C9C9', fontSize: 22}}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: '120px 64px'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: 80, maxWidth: 900, margin: '0 auto'}}>Tout ça,<br/>en <span style={{color: '#0E47AB'}}>5 minutes</span> chrono.</h2>
          <a href="#inscription" className="btn btn-primary btn-xl" style={{marginTop: 40}}>Inscrire ma communauté <SoIcon name="arrow" size={16} color="white"/></a>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageFonctionnalites = PageFonctionnalites;
