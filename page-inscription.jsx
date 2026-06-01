// Page Inscription — formulaire onboarding multi-étapes
const PageInscription = () => {
  return (
    <div className="page" data-screen-label="06 Inscription">
      <SoNav active="" />

      <section style={{padding: '60px 64px 120px', background: '#F8F8F8', minHeight: 1400}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '0.9fr 1.4fr', gap: 80, alignItems: 'flex-start'}}>
            {/* Sidebar — progress */}
            <div style={{position: 'sticky', top: 100}}>
              <span className="eyebrow">Inscription</span>
              <h1 style={{fontSize: 64, marginTop: 24, lineHeight: 0.95}}>Inscrivez<br/>votre<br/>communauté.</h1>
              <p style={{fontSize: 17, marginTop: 24, maxWidth: 380, lineHeight: 1.5}}>5 minutes pour créer votre espace. Aucune carte bancaire. Vous pourrez modifier toutes ces informations plus tard.</p>

              <div style={{marginTop: 48, display: 'grid', gap: 16}}>
                {[
                  {n: '01', t: 'Votre communauté', s: 'En cours', active: true, done: false},
                  {n: '02', t: 'Vos besoins', s: '', active: false, done: false},
                  {n: '03', t: 'Vous, fondateur', s: '', active: false, done: false},
                  {n: '04', t: 'Validation', s: '', active: false, done: false},
                ].map((s, i) => (
                  <div key={i} style={{display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: s.active ? 'white' : 'transparent', borderRadius: 14, border: s.active ? '1px solid #0E47AB' : '1px solid transparent'}}>
                    <div style={{width: 36, height: 36, borderRadius: '50%', background: s.active ? '#0E47AB' : '#E5E5E5', color: s.active ? 'white' : '#6B6B6B', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13}}>{s.n}</div>
                    <div style={{flex: 1}}>
                      <div style={{fontSize: 15, fontWeight: 700, color: s.active ? '#0a0a0a' : '#6B6B6B'}}>{s.t}</div>
                      {s.s && <div style={{fontSize: 12, color: '#0E47AB', fontWeight: 600}}>{s.s}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{marginTop: 48, padding: 24, background: '#FFF8E5', borderRadius: 16, borderLeft: '4px solid #D4A75B'}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <div style={{width: 32, height: 32, borderRadius: '50%', background: '#D4A75B', display: 'grid', placeItems: 'center', flexShrink: 0}}>
                    <SoIcon name="spark" size={16} color="#0a0a0a"/>
                  </div>
                  <div>
                    <div style={{fontSize: 14, fontWeight: 700}}>Vous êtes une ONG ?</div>
                    <div style={{fontSize: 13, marginTop: 4, color: '#6B5418'}}>Bénéficiez de notre programme : 50 % de réduction et accompagnement dédié.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{background: 'white', borderRadius: 32, padding: 56, boxShadow: '0 20px 60px rgba(0,0,0,0.04)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <span style={{fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em'}}>ÉTAPE 01 / 04</span>
                <span style={{fontSize: 13, color: '#6B6B6B'}}>~ 1 minute</span>
              </div>
              <h2 style={{fontSize: 48, lineHeight: 1.05}}>Parlez-nous de votre communauté.</h2>
              <p style={{fontSize: 16, marginTop: 12, color: '#6B6B6B'}}>Ces informations apparaîtront sur la page publique de votre communauté.</p>

              <div style={{marginTop: 40, display: 'grid', gap: 24}}>
                {/* Nom */}
                <div>
                  <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Nom de votre communauté <span style={{color: '#C23B5A'}}>*</span></label>
                  <input type="text" placeholder="Mutuelle des Femmes d'Abobo" defaultValue="Cansein Fondation" style={{width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #0E47AB', borderRadius: 14, fontSize: 16, fontFamily: 'inherit', background: '#F4F7FE'}}/>
                </div>

                {/* Type */}
                <div>
                  <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Type de communauté <span style={{color: '#C23B5A'}}>*</span></label>
                  <div style={{marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8}}>
                    {[
                      {n: 'ONG / Asso', sel: false, ico: 'heart'},
                      {n: 'Mutuelle', sel: true, ico: 'shield'},
                      {n: 'Alumni', sel: false, ico: 'users'},
                      {n: 'Réseau Pro', sel: false, ico: 'grid'},
                      {n: 'Religieux', sel: false, ico: 'globe'},
                      {n: 'Influenceur', sel: false, ico: 'star'},
                    ].map((t, i) => (
                      <div key={i} style={{padding: 16, border: t.sel ? '1.5px solid #0E47AB' : '1.5px solid #E5E5E5', borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', background: t.sel ? '#F4F7FE' : 'white'}}>
                        <div style={{width: 32, height: 32, borderRadius: 8, background: t.sel ? '#0E47AB' : '#F2F2F2', display: 'grid', placeItems: 'center'}}>
                          <SoIcon name={t.ico} size={16} color={t.sel ? 'white' : '#6B6B6B'}/>
                        </div>
                        <span style={{fontSize: 13, fontWeight: 600}}>{t.n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Description courte</label>
                  <div style={{fontSize: 12, color: '#6B6B6B', marginTop: 2}}>En une ou deux phrases. Ce qui vous rassemble.</div>
                  <textarea defaultValue="Une mutuelle de soutien aux femmes commerçantes du marché d'Abobo. Cotisations mensuelles, prêts solidaires, formations." style={{width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', minHeight: 100, resize: 'vertical', lineHeight: 1.5}}></textarea>
                </div>

                {/* Localisation + Membres */}
                <div style={{display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16}}>
                  <div>
                    <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Ville principale <span style={{color: '#C23B5A'}}>*</span></label>
                    <select defaultValue="Abidjan" style={{width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white'}}>
                      <option>Abidjan</option>
                      <option>Yamoussoukro</option>
                      <option>Bouaké</option>
                      <option>Daloa</option>
                      <option>Autre — précisez</option>
                    </select>
                  </div>
                  <div>
                    <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Nb. membres <span style={{color: '#C23B5A'}}>*</span></label>
                    <select defaultValue="50-200" style={{width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white'}}>
                      <option>1 - 50</option>
                      <option>50-200</option>
                      <option>200 - 500</option>
                      <option>500 - 2 000</option>
                      <option>+ 2 000</option>
                    </select>
                  </div>
                </div>

                {/* Logo upload */}
                <div>
                  <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Logo de votre communauté</label>
                  <div style={{marginTop: 8, padding: 24, border: '2px dashed #C9C9C9', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 20}}>
                    <div style={{width: 64, height: 64, borderRadius: 14, background: '#0E47AB', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 24, letterSpacing: '-0.04em'}}>CF</div>
                    <div style={{flex: 1}}>
                      <div style={{fontSize: 14, fontWeight: 600}}>cansein-logo.png</div>
                      <div style={{fontSize: 12, color: '#6B6B6B'}}>Téléversé · 84 KB</div>
                    </div>
                    <button style={{padding: '10px 16px', background: '#F2F2F2', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer'}}>Remplacer</button>
                  </div>
                </div>

                {/* Couleur */}
                <div>
                  <label style={{fontSize: 14, fontWeight: 600, color: '#0a0a0a'}}>Couleur principale</label>
                  <div style={{fontSize: 12, color: '#6B6B6B', marginTop: 2}}>Sera utilisée sur la page publique de votre communauté.</div>
                  <div style={{marginTop: 12, display: 'flex', gap: 12}}>
                    {['#0E47AB', '#D4A75B', '#0a0a0a', '#C23B5A', '#0F8B4F', '#5C2E91'].map((c, i) => (
                      <div key={i} style={{width: 44, height: 44, borderRadius: '50%', background: c, border: i === 0 ? '3px solid #0a0a0a' : '3px solid transparent', cursor: 'pointer', boxShadow: i === 0 ? '0 0 0 2px white inset' : 'none'}}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{marginTop: 48, paddingTop: 32, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button style={{padding: '14px 22px', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer'}}>Sauvegarder & quitter</button>
                <a href="#confirmation" className="btn btn-primary btn-lg">Continuer — Étape 02 <SoIcon name="arrow" size={14} color="white"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageInscription = PageInscription;
