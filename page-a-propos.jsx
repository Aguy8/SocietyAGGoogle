// Page À propos
const PageAPropos = () => {
  return (
    <div className="page" data-screen-label="05 A propos">
      <SoNav active="À propos" />

      {/* HERO */}
      <section style={{padding: '120px 64px 80px'}}>
        <div className="container">
          <span className="eyebrow">À propos</span>
          <h1 style={{fontSize: 120, marginTop: 28, lineHeight: 0.9, maxWidth: 1100}}>
            Nous bâtissons<br/>
            <span style={{color: '#0E47AB'}}>l'infrastructure</span><br/>
            de l'économie<br/>communautaire africaine.
          </h1>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section style={{padding: '80px 64px', background: '#F8F8F8'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48}}>
            <div style={{padding: 56, background: 'white', borderRadius: 32}}>
              <div style={{fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#0E47AB'}}>● MISSION</div>
              <h2 style={{fontSize: 44, marginTop: 16, lineHeight: 1.05}}>Donner aux communautés africaines les outils d'une plateforme professionnelle.</h2>
              <p style={{fontSize: 17, marginTop: 24}}>Pour gérer leurs membres, organiser des événements, lever des fonds et créer une économie autour de leur projet commun.</p>
            </div>
            <div style={{padding: 56, background: '#0a0a0a', color: 'white', borderRadius: 32}}>
              <div style={{fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#D4A75B'}}>● VISION</div>
              <h2 style={{fontSize: 44, marginTop: 16, lineHeight: 1.05, color: 'white'}}>Devenir le « Circle » africain — ancré dans nos réalités locales.</h2>
              <p style={{fontSize: 17, marginTop: 24, color: 'rgba(255,255,255,0.85)'}}>Mobile Money, langues locales, culture de la solidarité. Bâtir l'infrastructure numérique de l'économie communautaire africaine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80}}>
            <div>
              <span className="eyebrow">Notre histoire</span>
              <h2 style={{fontSize: 64, marginTop: 24}}>D'un constat<br/>à une plateforme.</h2>
            </div>
            <div style={{display: 'grid', gap: 32}}>
              <p style={{fontSize: 19, lineHeight: 1.5, color: '#0a0a0a'}}>Society est née d'une frustration que partagent des dizaines de milliers de leaders communautaires africains : <b>il n'existe aucun outil digne de ce nom pour gérer une communauté.</b></p>
              <p style={{fontSize: 17, lineHeight: 1.6}}>WhatsApp pour communiquer. Excel pour les cotisations. Google Forms pour les inscriptions. Facebook pour la visibilité. Et toujours rien à montrer aux bailleurs au moment du rapport annuel.</p>
              <p style={{fontSize: 17, lineHeight: 1.6}}>En 2025, l'équipe Difero Fundry, basée à Abidjan, a démarré une enquête de validation auprès de 25 leaders : présidents de mutuelles, directeurs d'ONG, influenceurs, responsables alumni. Le constat était unanime — et le vide à combler, immense.</p>
              <p style={{fontSize: 17, lineHeight: 1.6}}>Society est notre réponse : <b>une plateforme conçue en Afrique, pour l'Afrique</b> — qui parle nos langues, accepte nos paiements, comprend nos rythmes communautaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{padding: '80px 64px', background: '#0E47AB', color: 'white'}}>
        <div className="container">
          <span className="eyebrow white">Roadmap</span>
          <h2 style={{fontSize: 64, marginTop: 24, color: 'white'}}>De la validation au lancement.</h2>
          <div style={{marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative'}}>
            <div style={{position: 'absolute', top: 24, left: 24, right: 24, height: 2, background: 'rgba(255,255,255,0.2)'}}></div>
            {[
              {p: 'Q2 2026', t: 'Validation', d: 'Enquête de 25 leaders communautaires. Construction de l\'équipe.'},
              {p: 'Q3 2026', t: 'MVP', d: 'Développement des modules clés. Premiers partenariats.'},
              {p: 'Q4 2026', t: 'Beta', d: 'Communautés pilotes. Tests terrain. Intégration paiements.'},
              {p: 'Q1 2027', t: 'Lancement', d: 'Lancement officiel web + mobile. Cérémonie d\'ouverture.'},
            ].map((m, i) => (
              <div key={i} style={{position: 'relative'}}>
                <div style={{width: 48, height: 48, borderRadius: '50%', background: i === 0 ? '#D4A75B' : 'rgba(255,255,255,0.15)', display: 'grid', placeItems: 'center', fontSize: 14, fontWeight: 800, color: i === 0 ? '#0a0a0a' : 'white', position: 'relative', zIndex: 2}}>{i + 1}</div>
                <div style={{fontSize: 13, fontWeight: 700, color: '#D4A75B', marginTop: 24, letterSpacing: '0.04em'}}>{m.p}</div>
                <div style={{fontSize: 28, fontWeight: 800, marginTop: 6, letterSpacing: '-0.02em', color: 'white'}}>{m.t}</div>
                <p style={{fontSize: 14, marginTop: 8, color: 'rgba(255,255,255,0.75)'}}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64}}>
            <div>
              <span className="eyebrow">Équipe</span>
              <h2 style={{fontSize: 64, marginTop: 24}}>Difero Fundry.</h2>
              <p style={{fontSize: 18, marginTop: 16, maxWidth: 600}}>Un studio basé à Abidjan, qui conçoit des outils digitaux pour les communautés africaines.</p>
            </div>
            <a href="#" className="btn btn-outline">Toutes nos équipes <SoIcon name="arrow" size={14}/></a>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24}}>
            {[
              {n: 'Ange-Samuel KEKE', r: 'Co-fondateur · CEO', img: 'assets/p_aw_hom_4.jpg'},
              {n: 'Aïssatou D.', r: 'Head of Product', img: 'assets/p_aw_fem_5.jpg'},
              {n: 'Mamadou T.', r: 'Lead Engineering', img: 'assets/p_aw_hom_5.jpg'},
              {n: 'Salimata B.', r: 'Community & Growth', img: 'assets/p_aw_fem_6.jpg'},
            ].map((m, i) => (
              <div key={i}>
                <div style={{aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden', backgroundImage: `url(${m.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div style={{marginTop: 16, fontWeight: 700, fontSize: 18}}>{m.n}</div>
                <div style={{fontSize: 14, color: '#6B6B6B'}}>{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{padding: '120px 64px', background: '#F8F8F8'}}>
        <div className="container">
          <span className="eyebrow">Nos valeurs</span>
          <h2 style={{fontSize: 64, marginTop: 24, maxWidth: 800}}>Trois principes<br/>qui guident chaque ligne de code.</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 64}}>
            {[
              {n: '01', t: 'Souveraineté communautaire', d: 'Vos données vous appartiennent. Aucun algorithme n\'altère vos relations. Vous êtes propriétaire de votre communauté.'},
              {n: '02', t: 'Adaptation locale', d: 'Pensé pour le mobile, pour le Mobile Money, pour les langues locales, pour les usages réels — pas pour Silicon Valley.'},
              {n: '03', t: 'Impact mesurable', d: 'Chaque action de votre communauté laisse une trace. Bénéficiaires, fonds, projets — tout est documenté, automatiquement.'},
            ].map((v, i) => (
              <div key={i} style={{padding: 40, background: 'white', borderRadius: 24, position: 'relative'}}>
                <div style={{fontSize: 80, fontWeight: 800, color: '#E8EFFC', letterSpacing: '-0.04em', lineHeight: 1}}>{v.n}</div>
                <h3 style={{fontSize: 24, marginTop: 12}}>{v.t}</h3>
                <p style={{fontSize: 15, marginTop: 12, lineHeight: 1.5}}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageAPropos = PageAPropos;
