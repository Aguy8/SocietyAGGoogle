// Page Accueil — Society
const PageAccueil = () => {
  return (
    <div className="page" data-screen-label="01 Accueil">
      <SoNav active="Accueil" />

      {/* HERO */}
      <section style={{padding: '100px 64px 80px', position: 'relative', overflow: 'hidden'}}>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center'}}>
            <div>
              <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px 6px 6px', background: '#F2F2F2', borderRadius: 999, marginBottom: 32}}>
                <span style={{background: '#0E47AB', color: 'white', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em'}}>NEW</span>
                <span style={{fontSize: 13, fontWeight: 500}}>Lancement officiel — Q3 2026</span>
              </div>
              <h1 style={{fontSize: 112, lineHeight: 0.92}}>
                Donnez<br/>
                <span style={{color: '#0E47AB'}}>une vraie vie</span><br/>
                à votre communauté.
              </h1>
              <p style={{fontSize: 20, marginTop: 32, maxWidth: 540, lineHeight: 1.5, color: '#3A3A3A'}}>
                Society est la plateforme tout-en-un qui aide les associations, ONG, mutuelles, alumni et leaders africains à <b style={{color: '#0a0a0a'}}>structurer, engager et monétiser</b> leur communauté — depuis un seul espace.
              </p>
              <div style={{display: 'flex', gap: 12, marginTop: 40}}>
                <a href="#inscription" className="btn btn-primary btn-xl">
                  Inscrire ma communauté
                  <SoIcon name="arrow" size={16} color="white" />
                </a>
                <a href="#" className="btn btn-outline btn-xl">
                  <SoIcon name="play" size={14} />
                  Voir la démo (2 min)
                </a>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 56}}>
                <div className="avatars">
                  <div style={{backgroundImage: 'url(assets/p_aw_fem_1.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_aw_hom_1.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_aw_fem_2.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_eu_1.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_aw_hom_2.jpg)'}}></div>
                </div>
                <div>
                  <div style={{fontWeight: 700, fontSize: 16}}>+ 1 200 leaders communautaires</div>
                  <div style={{fontSize: 13, color: '#6B6B6B'}}>déjà sur la liste d'attente bêta.</div>
                </div>
              </div>
            </div>

            {/* Visual — phone + cards floating */}
            <div style={{position: 'relative', height: 720}}>
              {/* Big colored bg blob */}
              <div style={{position: 'absolute', inset: 0, background: '#0E47AB', borderRadius: 40, transform: 'rotate(-3deg)'}}></div>
              <div style={{position: 'absolute', top: 30, right: 40, width: 200, height: 200, background: '#D4A75B', borderRadius: 999}}></div>

              {/* Phone */}
              <div style={{position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', width: 320, aspectRatio: '9 / 19.5', borderRadius: 42, border: '10px solid #0a0a0a', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.3)', background: '#0a0a0a'}}>
                <img src="assets/screen_app1.png" alt="Society app" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}}/>
              </div>

              {/* Floating cards */}
              <div style={{position: 'absolute', top: 120, left: -20, background: 'white', padding: 16, borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.15)', width: 220}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                  <div style={{width: 36, height: 36, borderRadius: 10, background: '#FFD9DE', display: 'grid', placeItems: 'center'}}>
                    <SoIcon name="heart" size={18} color="#C23B5A"/>
                  </div>
                  <div>
                    <div style={{fontSize: 12, color: '#6B6B6B'}}>Cagnotte active</div>
                    <div style={{fontSize: 13, fontWeight: 700}}>Cansein Fondation</div>
                  </div>
                </div>
                <div style={{fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em'}}>3 240 000 <span style={{fontSize: 12, color: '#6B6B6B'}}>FCFA</span></div>
                <div style={{height: 6, background: '#F2F2F2', borderRadius: 999, overflow: 'hidden', marginTop: 8}}>
                  <div style={{width: '64%', height: '100%', background: '#0E47AB'}}></div>
                </div>
              </div>

              <div style={{position: 'absolute', bottom: 80, right: -10, background: 'white', padding: 18, borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.15)', width: 240}}>
                <div style={{fontSize: 12, color: '#6B6B6B', marginBottom: 6}}>Cotisations du mois</div>
                <div style={{display: 'flex', alignItems: 'baseline', gap: 6}}>
                  <span style={{fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em'}}>184</span>
                  <span style={{fontSize: 13, color: '#0E47AB', fontWeight: 600}}>/200 membres</span>
                </div>
                <div style={{display: 'flex', gap: 4, marginTop: 12}}>
                  {Array.from({length: 30}).map((_, i) => (
                    <div key={i} style={{flex: 1, height: 28, borderRadius: 3, background: i < 27 ? '#0E47AB' : '#E5E5E5'}}></div>
                  ))}
                </div>
              </div>

              <div style={{position: 'absolute', bottom: 30, left: 20, background: '#0a0a0a', color: 'white', padding: '14px 18px', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 10}}>
                <div style={{width: 8, height: 8, borderRadius: 4, background: '#3DDC84'}}></div>
                <span style={{fontSize: 13, fontWeight: 500}}>12 nouveaux membres</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <SoMarquee />

      {/* PROBLÈME / SOLUTION */}
      <section style={{padding: '120px 64px', background: '#F8F8F8'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            <div>
              <span className="eyebrow">Le problème</span>
              <h2 style={{marginTop: 24}}>10 outils pour gérer une communauté.<br/><span style={{color: '#6B6B6B'}}>Aucun ne fait le travail.</span></h2>
              <p style={{fontSize: 18, marginTop: 28, maxWidth: 480}}>
                WhatsApp pour communiquer. Excel pour les cotisations. Google Forms pour les inscriptions. Facebook pour la visibilité. Mobile money pour collecter. Et toujours rien à montrer aux bailleurs.
              </p>
              <p style={{fontSize: 18, marginTop: 16, maxWidth: 480, color: '#0a0a0a', fontWeight: 600}}>
                Les leaders communautaires africains perdent en moyenne 5 à 10h par semaine en gestion manuelle.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 14}}>
              {[
                {n: 'WhatsApp', d: 'Communication', x: true},
                {n: 'Excel', d: 'Cotisations', x: true},
                {n: 'Forms', d: 'Inscriptions', x: true},
                {n: 'Facebook', d: 'Visibilité', x: true},
                {n: 'Donorbox', d: 'Dons', x: true},
                {n: 'Mailchimp', d: 'Emails', x: true},
                {n: 'Eventbrite', d: 'Billets', x: true},
                {n: 'Google Drive', d: 'Documents', x: true},
              ].map((t, i) => (
                <div key={i} style={{padding: 20, background: 'white', borderRadius: 16, position: 'relative'}}>
                  <div style={{fontWeight: 700, fontSize: 15}}>{t.n}</div>
                  <div style={{color: '#6B6B6B', fontSize: 13}}>{t.d}</div>
                  <div style={{position: 'absolute', top: 14, right: 14, width: 22, height: 22, borderRadius: '50%', background: '#FEE', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700}}>×</div>
                </div>
              ))}
              <div style={{gridColumn: 'span 2', padding: 24, background: '#0E47AB', borderRadius: 16, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                  <div style={{fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em'}}>Society</div>
                  <div style={{opacity: 0.85, fontSize: 13}}>Un seul espace. Tout intégré.</div>
                </div>
                <div style={{width: 32, height: 32, borderRadius: '50%', background: '#D4A75B', color: '#0a0a0a', display: 'grid', placeItems: 'center', fontWeight: 700}}>✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{padding: '140px 64px'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80}}>
            <div>
              <span className="eyebrow">5 Modules</span>
              <h2 style={{marginTop: 24, maxWidth: 800}}>Tout ce qu'il faut, là où il faut.</h2>
            </div>
            <a href="#fonctionnalites" className="btn btn-outline">Explorer en détail <SoIcon name="arrow" size={14}/></a>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20}}>
            {/* Module 1 - large */}
            <div style={{gridColumn: 'span 7', background: '#0E47AB', color: 'white', padding: 48, borderRadius: 32, minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden'}}>
              <div>
                <div style={{display: 'inline-flex', padding: '6px 12px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 24}}>01 — Gestion communautaire</div>
                <h3 style={{fontSize: 56, lineHeight: 0.95, color: 'white', maxWidth: 480}}>Vos membres,<br/>parfaitement organisés.</h3>
                <p style={{marginTop: 20, color: 'rgba(255,255,255,0.85)', fontSize: 16, maxWidth: 440}}>Profils, segmentation, rôles, communication ciblée par sous-groupes. Fini les listes WhatsApp en pagaille.</p>
              </div>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                {['Base de données', 'Sous-groupes', 'Rôles & permissions', 'Tableau de bord', 'Automatisations'].map(t => (
                  <span key={t} style={{padding: '8px 14px', background: 'rgba(255,255,255,0.12)', borderRadius: 999, fontSize: 13, fontWeight: 500}}>{t}</span>
                ))}
              </div>
              {/* deco */}
              <div style={{position: 'absolute', top: -50, right: -50, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)'}}></div>
              <div style={{position: 'absolute', top: 30, right: 30, width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)'}}></div>
            </div>

            {/* Module 2 */}
            <div style={{gridColumn: 'span 5', background: '#D4A75B', padding: 40, borderRadius: 32, minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden'}}>
              <div>
                <div style={{display: 'inline-flex', padding: '6px 12px', background: 'rgba(0,0,0,0.1)', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 24, color: '#3a2a0c'}}>02 — Monétisation</div>
                <h3 style={{fontSize: 44, lineHeight: 0.95, color: '#0a0a0a'}}>Transformez l'énergie en flux.</h3>
                <p style={{marginTop: 20, color: '#3a2a0c', fontSize: 15}}>Cagnottes, cotisations, billetterie, abonnements — paiement Mobile Money intégré.</p>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 32}}>
                {['Orange Money', 'Wave', 'MTN MoMo', 'Banques', 'Cartes prépayées', 'Flooz'].map(p => (
                  <div key={p} style={{background: 'white', padding: '12px 8px', borderRadius: 12, fontSize: 12, fontWeight: 600, textAlign: 'center'}}>{p}</div>
                ))}
              </div>
            </div>

            {/* Module 3 */}
            <div style={{gridColumn: 'span 4', background: '#F2F2F2', padding: 36, borderRadius: 32, minHeight: 360}}>
              <div style={{display: 'inline-flex', padding: '6px 12px', background: 'white', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 24}}>03 — Mise en relation</div>
              <h3 style={{fontSize: 32}}>L'algorithme qui connecte.</h3>
              <p style={{marginTop: 16, fontSize: 15}}>Besoins ↔ ressources. Bénévoles, expertises, partenaires RSE.</p>
              <div style={{display: 'flex', alignItems: 'center', gap: -8, marginTop: 32}}>
                <div className="avatars">
                  <div style={{backgroundImage: 'url(assets/p_aw_fem_3.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_aw_hom_3.jpg)'}}></div>
                  <div style={{backgroundImage: 'url(assets/p_aw_fem_4.jpg)'}}></div>
                </div>
                <div style={{marginLeft: 16, padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 600}}>+ 12 matchs</div>
              </div>
            </div>

            {/* Module 4 */}
            <div style={{gridColumn: 'span 4', background: '#0a0a0a', color: 'white', padding: 36, borderRadius: 32, minHeight: 360, position: 'relative', overflow: 'hidden'}}>
              <div style={{display: 'inline-flex', padding: '6px 12px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 24}}>04 — Visibilité & Impact</div>
              <h3 style={{fontSize: 32, color: 'white'}}>Rapports d'impact, automatiquement.</h3>
              <p style={{marginTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.7)'}}>Page publique, métriques, témoignages — pour bailleurs et RSE.</p>
              <div style={{marginTop: 28, padding: 16, background: 'rgba(255,255,255,0.08)', borderRadius: 12}}>
                <div style={{fontSize: 12, color: 'rgba(255,255,255,0.6)'}}>Bénéficiaires touchés</div>
                <div style={{fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em'}}>14 290</div>
                <div style={{fontSize: 12, color: '#3DDC84'}}>↑ 28 % ce trimestre</div>
              </div>
            </div>

            {/* Module 5 */}
            <div style={{gridColumn: 'span 4', background: 'linear-gradient(135deg, #FFD9DE 0%, #E0D6FF 100%)', padding: 36, borderRadius: 32, minHeight: 360}}>
              <div style={{display: 'inline-flex', padding: '6px 12px', background: 'rgba(255,255,255,0.6)', borderRadius: 999, fontSize: 12, fontWeight: 600, marginBottom: 24}}>05 — Espace Leader</div>
              <h3 style={{fontSize: 32}}>Votre audience.<br/>Votre algorithme.</h3>
              <p style={{marginTop: 16, fontSize: 15}}>Q&A, lives, contenus premium — sans dépendre d'Instagram ou TikTok.</p>
              <div style={{marginTop: 24, display: 'flex', alignItems: 'center', gap: 12}}>
                <img src="assets/p_aw_fem_5.jpg" style={{width: 50, height: 50, borderRadius: '50%', objectFit: 'cover'}}/>
                <div>
                  <div style={{fontWeight: 700, fontSize: 14}}>Aïssatou D.</div>
                  <div style={{fontSize: 12, color: '#6B6B6B'}}>+ 4 200 fans abonnés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTS / POUR QUI */}
      <section id="pour-qui" style={{padding: '140px 64px', background: '#0a0a0a', color: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: 900, margin: '0 auto 80px'}}>
            <span className="eyebrow dark">Pour qui ?</span>
            <h2 style={{marginTop: 24, color: 'white', fontSize: 84}}>Society s'adapte<br/>à votre <span style={{color: '#D4A75B'}}>réalité</span>.</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
            {[
              {n: 'ONG & Associations', img: 'assets/p_seg_ong.jpg', d: 'Coordonnez vos actions, prouvez votre impact, sécurisez vos bailleurs.', count: '20 000+'},
              {n: 'Mutuelles & Tontines', img: 'assets/p_seg_mut.jpg', d: 'Automatisez les cotisations, sécurisez les flux, fini les conflits.', count: '15 000+'},
              {n: 'Alumni & Jeunesse', img: 'assets/p_seg_alum.jpg', d: 'Reconnectez la diaspora, organisez événements et mentorat.', count: '8 000+'},
              {n: 'Réseaux Pro', img: 'assets/p_seg_pro.jpg', d: 'Espaces collaboratifs, contenus premium, mise en relation.', count: '6 000+'},
              {n: 'Groupes religieux', img: 'assets/p_seg_rel.jpg', d: 'Communication multi-paroisses, collectes traçables, fidèles engagés.', count: '12 000+'},
              {n: 'Leaders & Influenceurs', img: 'assets/p_seg_lead.jpg', d: 'Communauté propriétaire, monétisation directe, indépendance.', count: '4 000+'},
            ].map((s, i) => (
              <div key={i} style={{borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '4/5', backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)'}}></div>
                <div style={{position: 'absolute', top: 20, right: 20, padding: '6px 12px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: 999, fontSize: 12, fontWeight: 600}}>{s.count} en CI</div>
                <div style={{position: 'absolute', bottom: 28, left: 28, right: 28}}>
                  <h3 style={{color: 'white', fontSize: 32, lineHeight: 1}}>{s.n}</h3>
                  <p style={{color: 'rgba(255,255,255,0.85)', marginTop: 12, fontSize: 14}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{padding: '120px 64px', background: '#0E47AB', color: 'white'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'center'}}>
            <div>
              <span className="eyebrow white">Marché</span>
              <h2 style={{marginTop: 24, color: 'white', fontSize: 80}}>Une opportunité de <span style={{color: '#D4A75B'}}>30 M€</span>.</h2>
              <p style={{fontSize: 18, marginTop: 24, color: 'rgba(255,255,255,0.85)', maxWidth: 480}}>
                85 % des Ivoiriens sont membres d'au moins un groupe communautaire. Seulement 10 % disposent d'un outil numérique adapté. Nous sommes la première solution complète conçue pour l'Afrique francophone.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
              {[
                {n: '85 %', l: 'des Ivoiriens membres d\'un groupe'},
                {n: '+150 K', l: 'communautés en Côte d\'Ivoire'},
                {n: '10 %', l: 'seulement disposent d\'un outil numérique'},
                {n: '+25 %', l: 'croissance annuelle du marché'},
              ].map((s, i) => (
                <div key={i} style={{padding: 32, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.15)'}}>
                  <div style={{fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#D4A75B'}}>{s.n}</div>
                  <div style={{marginTop: 12, color: 'rgba(255,255,255,0.85)', fontSize: 14}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section style={{padding: '120px 64px'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center'}}>
            <div style={{borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5'}}>
              <img src="assets/p_temoin.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="témoin"/>
            </div>
            <div>
              <span className="eyebrow">Ils nous font confiance</span>
              <blockquote style={{margin: '32px 0 0', fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em'}}>
                « Avant Society, je passais mes week-ends à relancer 200 cotisantes sur WhatsApp. Aujourd'hui, je suis le suivi en temps réel — et j'ai du temps pour <span style={{color: '#0E47AB'}}>vraiment animer</span> notre mutuelle. »
              </blockquote>
              <div style={{marginTop: 40, display: 'flex', alignItems: 'center', gap: 20}}>
                <div>
                  <div style={{fontWeight: 700, fontSize: 18}}>Awa K.</div>
                  <div style={{color: '#6B6B6B', fontSize: 15}}>Présidente — Mutuelle des Femmes d'Abobo</div>
                </div>
                <div style={{flex: 1, height: 1, background: '#E5E5E5'}}></div>
                <div style={{fontSize: 13, color: '#6B6B6B'}}>Bêta-testeuse depuis Mars 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{padding: '120px 64px 140px'}}>
        <div className="container">
          <div style={{background: '#0a0a0a', borderRadius: 40, padding: '100px 80px', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#0E47AB', opacity: 0.6, filter: 'blur(80px)'}}></div>
            <div style={{position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center'}}>
              <div>
                <h2 style={{color: 'white', fontSize: 80}}>Prêt à donner une<br/><span style={{color: '#D4A75B'}}>vraie voix</span> à votre<br/>communauté ?</h2>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: 18, marginTop: 24, maxWidth: 480}}>
                  Inscrivez votre communauté en moins de 5 minutes. Accès gratuit pendant la phase bêta — sans carte bancaire.
                </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <a href="#inscription" className="btn btn-gold btn-xl" style={{justifyContent: 'space-between', padding: '24px 32px'}}>
                  <span>Inscrire ma communauté</span>
                  <SoIcon name="arrow" size={18} color="#0a0a0a"/>
                </a>
                <a href="#tarifs" className="btn btn-outline-white btn-xl" style={{justifyContent: 'space-between', padding: '24px 32px'}}>
                  <span>Voir les tarifs</span>
                  <SoIcon name="arrow" size={18} color="white"/>
                </a>
                <div style={{marginTop: 16, color: 'rgba(255,255,255,0.6)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8}}>
                  <SoIcon name="check" size={14} color="#3DDC84"/> 5 minutes pour démarrer
                  <span style={{margin: '0 8px'}}>·</span>
                  <SoIcon name="check" size={14} color="#3DDC84"/> Aucune carte bancaire
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SoFooter />
    </div>
  );
};

window.PageAccueil = PageAccueil;
