// Page Tarifs
const PageTarifs = () => {
  const plans = [
    {n: 'Starter', p: 'Gratuit', sub: 'Pour toujours.', d: 'Pour démarrer et tester sur une petite communauté.', c: 'Jusqu\'à 50 membres', f: ['Gestion des membres & rôles', 'Communication par canaux', '1 cagnotte active', 'Page communautaire publique', 'Support communautaire'], cta: 'Démarrer gratuitement', color: '#F8F8F8', text: '#0a0a0a'},
    {n: 'Communauté', p: '14 900', currency: 'FCFA', sub: '/mois', d: 'Pour les associations actives qui veulent professionnaliser leur gestion.', c: 'Jusqu\'à 500 membres', f: ['Tout Starter, plus :', 'Cotisations automatisées', 'Cagnottes & crowdfunding illimités', 'Billetterie + QR codes', 'Rapports d\'impact', 'Mobile Money intégré', 'Support prioritaire'], cta: 'Choisir Communauté', color: '#0E47AB', text: 'white', popular: true},
    {n: 'Pro', p: '39 900', currency: 'FCFA', sub: '/mois', d: 'Pour les ONG, mutuelles, fédérations et grandes communautés.', c: 'Membres illimités', f: ['Tout Communauté, plus :', 'Sous-groupes illimités', 'API & intégrations sur mesure', 'Page RSE pour partenaires', 'Matching avancé', 'Account manager dédié', 'Formation équipe (4h)'], cta: 'Choisir Pro', color: '#0a0a0a', text: 'white'},
    {n: 'Institution', p: 'Sur mesure', sub: 'Selon volume.', d: 'Pour fédérations nationales, institutions et entreprises RSE.', c: 'À partir de 5 000 membres', f: ['Tout Pro, plus :', 'Déploiement sur mesure', 'SSO & sécurité avancée', 'Dashboard RSE multi-communautés', 'SLA 99.9 %', 'Conformité réglementaire UMOA', 'Onboarding sur site'], cta: 'Nous contacter', color: '#D4A75B', text: '#0a0a0a'},
  ];

  return (
    <div className="page" data-screen-label="04 Tarifs">
      <SoNav active="Tarifs" />

      <section style={{padding: '120px 64px 64px'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <span className="eyebrow">Tarifs</span>
          <h1 style={{fontSize: 120, marginTop: 28, lineHeight: 0.9, maxWidth: 1000, margin: '28px auto 0'}}>
            Un prix juste,<br/>
            <span style={{color: '#0E47AB'}}>conçu pour l'Afrique</span>.
          </h1>
          <p style={{fontSize: 20, marginTop: 32, maxWidth: 700, margin: '32px auto 0', lineHeight: 1.5}}>
            Plan gratuit pour démarrer. Plans payants en FCFA, payables par Mobile Money. Pas de carte bancaire requise.
          </p>

          {/* toggle */}
          <div style={{display: 'inline-flex', marginTop: 48, padding: 6, background: '#F2F2F2', borderRadius: 999}}>
            <button style={{padding: '10px 20px', background: 'white', borderRadius: 999, border: 'none', fontSize: 14, fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>Mensuel</button>
            <button style={{padding: '10px 20px', background: 'transparent', borderRadius: 999, border: 'none', fontSize: 14, fontWeight: 500, color: '#6B6B6B'}}>
              Annuel <span style={{padding: '2px 8px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 700, marginLeft: 6}}>−20 %</span>
            </button>
          </div>
        </div>
      </section>

      <section style={{padding: '40px 64px 120px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
            {plans.map((p, i) => (
              <div key={i} style={{padding: 32, background: p.color, color: p.text, borderRadius: 28, position: 'relative', display: 'flex', flexDirection: 'column'}}>
                {p.popular && <div style={{position: 'absolute', top: -12, left: 24, padding: '6px 12px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em'}}>RECOMMANDÉ</div>}
                <div style={{fontSize: 13, fontWeight: 700, opacity: 0.8, letterSpacing: '0.04em', textTransform: 'uppercase'}}>{p.n}</div>
                <div style={{display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 16, flexWrap: 'wrap'}}>
                  <span style={{fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1}}>{p.p}</span>
                  {p.currency && <span style={{fontSize: 14, fontWeight: 700, opacity: 0.85}}>{p.currency}</span>}
                </div>
                <div style={{fontSize: 13, marginTop: 4, opacity: 0.75}}>{p.sub}</div>
                <p style={{fontSize: 14, marginTop: 16, opacity: 0.85, color: p.text === 'white' ? 'rgba(255,255,255,0.85)' : '#3A3A3A'}}>{p.d}</p>
                <div style={{padding: '10px 14px', marginTop: 20, background: p.text === 'white' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)', borderRadius: 10, fontSize: 12, fontWeight: 600}}>{p.c}</div>
                <div style={{margin: '24px 0', borderTop: `1px solid ${p.text === 'white' ? 'rgba(255,255,255,0.15)' : '#E5E5E5'}`}}></div>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, flex: 1}}>
                  {p.f.map((f, j) => (
                    <li key={j} style={{display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.4}}>
                      <span style={{flexShrink: 0, marginTop: 2}}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#inscription" style={{marginTop: 24, padding: '14px 20px', textAlign: 'center', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none', background: p.text === 'white' ? 'white' : '#0a0a0a', color: p.text === 'white' ? p.color : 'white'}}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION */}
      <section style={{padding: '80px 64px', background: '#F8F8F8'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center'}}>
            <div>
              <span className="eyebrow">Commissions</span>
              <h2 style={{fontSize: 56, marginTop: 24}}>2,5 % seulement<br/>sur les flux collectés.</h2>
              <p style={{fontSize: 17, marginTop: 20, maxWidth: 460}}>Sur les cagnottes, cotisations, billets et dons. Pas de frais cachés. Frais Mobile Money inclus.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              {[
                {l: 'Cagnottes', v: '2,5 %', d: 'sur les fonds collectés'},
                {l: 'Cotisations', v: '1,5 %', d: 'sur les paiements récurrents'},
                {l: 'Billetterie', v: '3 %', d: '+ 100 FCFA / billet'},
                {l: 'Dons', v: '0 %', d: 'pour ONG certifiées'},
              ].map((c, i) => (
                <div key={i} style={{padding: 28, background: 'white', borderRadius: 20}}>
                  <div style={{fontSize: 14, color: '#6B6B6B', fontWeight: 600}}>{c.l}</div>
                  <div style={{fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', color: '#0E47AB', marginTop: 4}}>{c.v}</div>
                  <div style={{fontSize: 13, color: '#6B6B6B'}}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80}}>
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 style={{fontSize: 56, marginTop: 24}}>Questions<br/>fréquentes.</h2>
              <p style={{fontSize: 16, marginTop: 20, maxWidth: 360}}>Une autre question ? <a href="#" style={{color: '#0E47AB', fontWeight: 600}}>Écrivez-nous →</a></p>
            </div>
            <div>
              {[
                ['Puis-je tester gratuitement avant de payer ?', 'Oui. Le plan Starter est gratuit pour toujours, jusqu\'à 50 membres. Vous pouvez aussi essayer gratuitement Communauté et Pro pendant 30 jours, sans carte bancaire.'],
                ['Comment fonctionne le paiement ?', 'Vous payez en FCFA via Orange Money, Wave, MTN MoMo ou carte bancaire. Mensuel ou annuel (−20 %).'],
                ['Que se passe-t-il si je dépasse le nombre de membres ?', 'Aucune coupure brutale. Nous vous proposons de passer au plan supérieur, ou de payer un complément au prorata.'],
                ['Mes données sont-elles sécurisées ?', 'Oui. Hébergement souverain en Afrique de l\'Ouest, chiffrement AES-256, conformité RGPD et UEMOA. Vos données vous appartiennent.'],
                ['Puis-je exporter mes données ?', 'Oui, à tout moment. Tous vos membres, cotisations, événements peuvent être exportés en CSV ou Excel.'],
              ].map((q, i) => (
                <details key={i} style={{padding: '24px 0', borderBottom: '1px solid #E5E5E5'}}>
                  <summary style={{cursor: 'pointer', fontSize: 19, fontWeight: 700, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {q[0]} <span style={{color: '#0E47AB', fontSize: 24, fontWeight: 400}}>+</span>
                  </summary>
                  <p style={{marginTop: 12, fontSize: 15, color: '#3A3A3A'}}>{q[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageTarifs = PageTarifs;
