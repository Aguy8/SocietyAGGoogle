// Page Confirmation — bienvenue à bord
const PageConfirmation = () => {
  return (
    <div className="page" data-screen-label="07 Confirmation">
      <SoNav active="" />

      <section style={{padding: '120px 64px', background: 'linear-gradient(180deg, #F4F7FE 0%, white 100%)', minHeight: 900}}>
        <div className="container">
          <div style={{maxWidth: 980, margin: '0 auto', textAlign: 'center'}}>
            {/* check */}
            <div style={{width: 96, height: 96, borderRadius: '50%', background: '#0E47AB', margin: '0 auto', display: 'grid', placeItems: 'center', position: 'relative'}}>
              <SoIcon name="check" size={48} color="white"/>
              <div style={{position: 'absolute', inset: -16, borderRadius: '50%', border: '2px solid #0E47AB', opacity: 0.3}}></div>
              <div style={{position: 'absolute', inset: -32, borderRadius: '50%', border: '2px solid #0E47AB', opacity: 0.15}}></div>
            </div>
            <h1 style={{fontSize: 96, marginTop: 48, lineHeight: 0.95}}>
              Cansein Fondation<br/>
              est <span style={{color: '#0E47AB'}}>sur Society</span>.
            </h1>
            <p style={{fontSize: 22, marginTop: 32, maxWidth: 700, margin: '32px auto 0', lineHeight: 1.5}}>
              Bienvenue, Awa. Votre espace est prêt. Voici les 3 prochaines étapes pour démarrer en force.
            </p>
            <div style={{marginTop: 24, padding: '8px 16px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 13}}>
              <span style={{padding: '2px 10px', background: '#0F8B4F', color: 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em'}}>● ACTIVÉ</span>
              <span>Plan Communauté · Essai 30 jours</span>
              <span style={{color: '#6B6B6B'}}>Expire le 12 mai 2026</span>
            </div>
          </div>

          {/* Next steps */}
          <div style={{maxWidth: 1100, margin: '80px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
            {[
              {n: '01', t: 'Importez vos membres', d: 'Téléversez votre fichier Excel ou ajoutez-les un par un. On s\'occupe du reste.', cta: 'Importer mes membres', icon: 'users', color: '#0E47AB'},
              {n: '02', t: 'Créez votre 1ʳᵉ cagnotte', d: 'En 3 clics. Lien partageable. Mobile Money intégré dès le départ.', cta: 'Lancer une cagnotte', icon: 'money', color: '#D4A75B'},
              {n: '03', t: 'Personnalisez votre page', d: 'Photos, présentation, projets en cours — votre vitrine publique.', cta: 'Personnaliser', icon: 'spark', color: '#0a0a0a'},
            ].map((s, i) => (
              <div key={i} style={{padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24}}>
                  <span style={{fontSize: 14, fontWeight: 700, color: s.color, letterSpacing: '0.05em'}}>{s.n}</span>
                  <div style={{width: 40, height: 40, borderRadius: 12, background: s.color, color: 'white', display: 'grid', placeItems: 'center'}}>
                    <SoIcon name={s.icon} size={20} color="white"/>
                  </div>
                </div>
                <h3 style={{fontSize: 24, lineHeight: 1.1}}>{s.t}</h3>
                <p style={{fontSize: 14, marginTop: 12, lineHeight: 1.5}}>{s.d}</p>
                <button style={{marginTop: 28, width: '100%', padding: 14, background: s.color, color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer'}}>{s.cta} →</button>
              </div>
            ))}
          </div>

          {/* App download */}
          <div style={{maxWidth: 1100, margin: '40px auto 0', padding: 48, background: '#0a0a0a', color: 'white', borderRadius: 28, display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center'}}>
            <div>
              <div style={{fontSize: 13, fontWeight: 700, color: '#D4A75B', letterSpacing: '0.05em'}}>● BONUS</div>
              <h3 style={{fontSize: 36, marginTop: 12, color: 'white'}}>Téléchargez l'app mobile.</h3>
              <p style={{fontSize: 16, marginTop: 12, color: 'rgba(255,255,255,0.75)', maxWidth: 480}}>Vos membres gardent le contact, votent dans les sondages, suivent les cagnottes — depuis leur poche.</p>
              <div style={{marginTop: 24, display: 'flex', gap: 12}}>
                <button style={{padding: '14px 22px', background: 'white', color: '#0a0a0a', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{fontSize: 20}}></span>
                  <span><div style={{fontSize: 10, opacity: 0.7}}>Télécharger sur</div><div>App Store</div></span>
                </button>
                <button style={{padding: '14px 22px', background: 'white', color: '#0a0a0a', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{fontSize: 20}}>▶</span>
                  <span><div style={{fontSize: 10, opacity: 0.7}}>Disponible sur</div><div>Google Play</div></span>
                </button>
              </div>
            </div>
            <div style={{width: 120, height: 120, background: 'white', borderRadius: 16, padding: 12}}>
              <div style={{width: '100%', height: '100%', background: 'repeating-conic-gradient(#0a0a0a 0% 25%, white 0% 50%) 0/8px 8px'}}></div>
            </div>
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageConfirmation = PageConfirmation;
