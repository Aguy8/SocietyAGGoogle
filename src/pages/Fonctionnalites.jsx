import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const MODULES = [
  'Gestion communautaire',
  'Monétisation',
  'Mise en relation',
  'Visibilité & Impact',
  'Espace Leader',
]

export default function Fonctionnalites() {
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef()]

  function scrollTo(i) {
    refs[i].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="eyebrow">Fonctionnalités</span>
            <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9 }}>
              5 modules.<br />
              <span style={{ color: '#1A2BFF' }}>1 plateforme</span>.<br />
              Zéro friction.
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 700, lineHeight: 1.5 }}>
              Chaque module est pensé pour les réalités africaines : mobile-first, paiements locaux, usage hors-ligne partiel.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 56, flexWrap: 'wrap' }}>
            {MODULES.map((m, i) => (
              <button key={i} onClick={() => scrollTo(i)}
                style={{ padding: '12px 20px', background: 'white', color: '#14110D', borderRadius: 999, fontSize: 14, fontWeight: 600, border: '1px solid #E5E5E5', cursor: 'pointer', fontFamily: 'inherit' }}>
                <span style={{ color: '#1A2BFF', marginRight: 8 }}>{`0${i + 1}`}</span>{m}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 1 */}
      <section ref={refs[0]} style={{ padding: '120px 64px', scrollMarginTop: 80 }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#1A2BFF', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 01</div>
                <div style={{ height: 1, flex: 1, background: '#E5E5E5' }} />
              </div>
              <h2 style={{ fontSize: 72 }}>Gestion communautaire.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>
                Vos membres, vos sous-groupes, vos rôles. Tout au même endroit. Aucune compétence technique requise.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {[
                  ['Base de données vivante', 'Profils complets, segmentation, historique des cotisations, niveau d\'implication.'],
                  ['Communication ciblée & automatisée', 'Canaux par sous-groupes, comités, thématiques, Animation communautaire.'],
                  ['Gestion des événements', 'Création, invitations, suivi des présences, bilans post-événement.'],
                  ['Pilotage de projets', 'Planification, suivi des tâches, archivage, valorisation des initiatives.'],
                  ['Tableau de bord d\'impact', 'Membres actifs, taux de participation, projets réalisés, fonds collectés.'],
                  ['Rôles et permissions', 'Administrateur, modérateur, trésorier, bénévole, membre — granulaires.'],
                ].map((f, i) => (
                  <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}>
                      <Icon name="check" size={18} color="#1A2BFF" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{f[0]}</div>
                      <div style={{ color: '#6B6B6B', fontSize: 14, marginTop: 4 }}>{f[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#F2F2F2', borderRadius: 32, padding: 32, position: 'relative', minHeight: 600, overflow: 'hidden' }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600, textTransform: 'uppercase' }}>Tableau de bord</div>
                    <div style={{ fontSize: 20, fontWeight: 800, marginTop: 2 }}>Cansein Fondation</div>
                  </div>
                  <div style={{ padding: '6px 12px', background: '#E8EFFC', color: '#1A2BFF', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>● Démo</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
                  {[['Membres', '1 248', '+18'], ['Cotisations', '94 %', '+5 %'], ['Projets', '12', '4 actifs']].map((s, i) => (
                    <div key={i} style={{ padding: 14, background: '#F8F8F8', borderRadius: 12 }}>
                      <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>{s[0]}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, letterSpacing: '-0.02em' }}>{s[1]}</div>
                      <div style={{ fontSize: 11, color: '#1A2BFF', marginTop: 2 }}>{s[2]}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 16, background: '#F8F8F8', borderRadius: 12, marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>Activité — 30 jours</div>
                    <div style={{ fontSize: 11, color: '#6B6B6B' }}>+24 %</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 60 }}>
                    {[40, 55, 35, 70, 60, 82, 75, 90, 65, 80, 95, 88, 72, 85].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? '#1A2BFF' : '#D5DCEA', borderRadius: 3 }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    { n: 'Grâce K.', r: 'Trésorière', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370786/t%C3%A9l%C3%A9chargement_6_-_Copie_aqpd1k.jpg' },
                    { n: 'Mohamed D.', r: 'Bénévole', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372904/_Handsome_Young_Man__by_Stocksy_Contributor__Studio_Firma__eowmhy.jpg' },
                    { n: 'Ange B.', r: 'Membre active', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372905/AI_Executive_Headshot__Burgundy_Blazer_Virtual_Model_zssnqb.jpg' },
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, background: '#F8F8F8', borderRadius: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundImage: `url(${m.img})`, backgroundSize: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700 }}>{m.n}</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>{m.r}</div>
                      </div>
                      <div style={{ padding: '4px 10px', background: '#E8EFFC', color: '#1A2BFF', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>À jour</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 2 */}
      <section ref={refs[1]} data-nav-theme="dark" style={{ padding: '120px 64px', background: '#14110D', color: 'white', scrollMarginTop: 80 }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#1A2BFF', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 02</div>
                <div style={{ height: 1, flex: 1, background: '#2a2a2a' }} />
              </div>
              <h2 style={{ fontSize: 72, color: 'white' }}>Monétisation & financement.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520, color: 'rgba(255,255,255,0.7)' }}>
                Vos membres collectent par Orange Money, Wave ou MTN MoMo. Vos finances sont tracées. Aucune carte bancaire requise.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  ['Cagnottes en 3 clics', 'Lancez une collecte en moins de 2 minutes. Lien partageable, suivi en temps réel.'],
                  ['Cotisations automatiques', 'Relances, rappels, historique — plus aucun conflit de trésorerie.'],
                  ['Crowdfunding participatif', 'Projets à financer avec objectif, durée, paliers de récompenses.'],
                  ['Billetterie + QR codes', 'Événements physiques ou virtuels, vente de billets, vérification à l\'entrée.'],
                  ['Abonnements premium', 'Contenus exclusifs, accès VIP, espaces membres payants.'],
                  ['Reporting financier', 'Exports comptables, reçus automatiques, transparence totale pour les donateurs.'],
                ].map(([titre, desc], i) => (
                  <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{titre}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 6, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Compatible :</span>
                {['Orange Money', 'Wave', 'MTN MoMo', 'Flooz', 'Visa/MC'].map(p => (
                  <span key={p} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{p}</span>
                ))}
              </div>
            </div>

            <div style={{ order: 1, position: 'relative', minHeight: 560 }}>
              <div style={{ position: 'absolute', inset: 0, background: '#1A2BFF', borderRadius: 40, transform: 'rotate(2deg)' }} />
              <div style={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, background: 'white', borderRadius: 28, padding: 28, color: '#14110D' }}>
                <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>CAGNOTTE EN COURS</div>
                <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>Reconstruire l'école Anono</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 20 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#1A2BFF' }}>7 245</span>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#1A2BFF' }}>K</span>
                  <span style={{ fontSize: 16, color: '#6B6B6B', fontWeight: 600 }}>FCFA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>
                  <span>collectés sur 10 000 K</span>
                  <span style={{ fontWeight: 700, color: '#1A2BFF' }}>72 %</span>
                </div>
                <div style={{ height: 8, background: '#F2F2F2', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #1A2BFF, #084CC2)' }} />
                </div>
                <div style={{ marginTop: 20, display: 'grid', gap: 8 }}>
                  {[
                    { n: 'Blessing A.', m: '25 000 FCFA', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372902/Handsome_man_using_modern_smartphone_outdoors___Free_Photo_wqnnb7.jpg' },
                    { n: 'Diane S.', m: '50 000 FCFA', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372902/azer_yrtjwn.jpg' },
                    { n: 'Franck D.', m: '10 000 FCFA', img: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372902/Haitian_black_ptra3f.jpg' },
                  ].map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: '1px solid #F2F2F2' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundImage: `url(${d.img})`, backgroundSize: 'cover', flexShrink: 0 }} />
                      <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{d.n}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF' }}>{d.m}</div>
                    </div>
                  ))}
                </div>
                <NavLink to="/inscription" style={{ marginTop: 16, display: 'block', width: '100%', padding: 14, background: '#1A2BFF', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>Faire un don</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 3 */}
      <section ref={refs[2]} style={{ padding: '120px 64px', scrollMarginTop: 80 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#1A2BFF', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 03</div>
                <div style={{ height: 1, flex: 1, background: '#E5E5E5' }} />
              </div>
              <h2 style={{ fontSize: 72 }}>Mise en relation intelligente.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>
                Publiez un besoin. Society trouve les profils dans tout le réseau — bénévoles, partenaires, donateurs, compétences RSE.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {[
                  ['Matching besoins/ressources', 'Publiez un besoin — l\'algorithme trouve des donateur ou les meilleurs profils dans tout le réseau Society.'],
                  ['Annuaire des compétences', 'Chaque membre expose ses expertises. Retrouvez le bon profil en secondes.'],
                  ['Co-projets inter-communautés', 'Collaborez avec d\'autres organisations sur des projets communs.'],
                  ['Connexions RSE', 'Mettez en relation entreprises cherchant à investir en RSE et communautés à impact.'],
                  ['Programme de mentorat', 'Alumni, seniors, experts — connectez les générations de façon structurée.'],
                ].map(([titre, desc], i) => (
                  <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}>
                      <Icon name="check" size={18} color="#1A2BFF" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{titre}</div>
                      <div style={{ color: '#6B6B6B', fontSize: 14, marginTop: 4 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#F8F8F8', borderRadius: 32, padding: 40 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 20 }}>Mise en relation en cours</div>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.06)', marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: '#1A2BFF', fontWeight: 700, textTransform: 'uppercase' }}>Besoin</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Développeur web bénévole</div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 2 }}>ONG Hope Life CI · Abidjan</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                  {['React', 'Node.js', 'Bénévole', 'Urgent'].map(t => (
                    <span key={t} style={{ padding: '4px 10px', background: '#F2F2F2', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                <div style={{ padding: '10px 24px', background: '#1A2BFF', color: 'white', borderRadius: 999, fontSize: 14, fontWeight: 700 }}>
                  ⚡ 96 % de compatibilité
                </div>
              </div>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 11, color: '#1A2BFF', fontWeight: 700, textTransform: 'uppercase' }}>Profil trouvé</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundImage: 'url(https://res.cloudinary.com/dyqeot2wi/image/upload/v1778372904/FashionMen_FashionStyle_FashionLifeStyle_s2il3b.jpg)', backgroundSize: 'cover', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>Boadi T.</div>
                    <div style={{ fontSize: 13, color: '#6B6B6B' }}>JCI Abidjan · React / Node.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 4 */}
      <section ref={refs[3]} data-nav-theme="dark" style={{ padding: '120px 64px', background: '#1A2BFF', color: 'white', scrollMarginTop: 80 }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 04</div>
                <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <h2 style={{ fontSize: 72, color: 'white' }}>Visibilité & Impact.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520, color: 'rgba(255,255,255,0.8)' }}>
                Vos actions méritent d'être vues. Pages publiques, rapports donateurs en PDF, indicateurs RSE — vos financeurs obtiennent les preuves qu'ils cherchent.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {[
                  ['Page d\'impact publique', 'Votre communauté visible sur le web, avec chiffres, projets, membres et témoignages.'],
                  ['Rapports donateurs automatisés', 'Générez un rapport PDF professionnel en 10 minutes plutôt qu\'en 3 semaines.'],
                  ['Tableau de bord RSE', 'Indicateurs SDG, ODD, impact social mesurable — exactement ce qu\'exigent les financeurs.'],
                  ['Médias & galerie de projets', 'Photos, vidéos, articles — archivez et mettez en valeur chaque réalisation.'],
                  ['Certification Society Impact', 'Badge de confiance pour les communautés qui prouvent leur impact réel.'],
                ].map(([titre, desc], i) => (
                  <div key={i} style={{ padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center' }}>
                      <Icon name="check" size={18} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{titre}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginTop: 4 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 40, background: 'rgba(255,255,255,0.08)', borderRadius: 32, backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>RAPPORT D'IMPACT — Q3 2026</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>Cansein Fondation</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28 }}>
                {[['14 290', 'bénéficiaires touchés'], ['8', 'projets réalisés'], ['62 M', 'FCFA collectés'], ['1 248', 'membres actifs']].map(([v, l], i) => (
                  <div key={i} style={{ padding: 20, background: 'rgba(255,255,255,0.08)', borderRadius: 16 }}>
                    <div style={{ fontSize: 36, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em' }}>{v}</div>
                    <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: 20, background: 'rgba(255,255,255,0.08)', borderRadius: 16 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Alignement ODD</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['ODD 1 — Pas de pauvreté', 'ODD 4 — Éducation', 'ODD 8 — Emploi', 'ODD 17 — Partenariats'].map(odd => (
                    <span key={odd} style={{ padding: '6px 12px', background: 'transparent', border: '1px solid white', borderRadius: 999, fontSize: 11, fontWeight: 600, color: '#FFFFFF' }}>{odd}</span>
                  ))}
                </div>
              </div>
              <button style={{ marginTop: 20, width: '100%', padding: 14, background: '#E8EFFC', color: '#1A2BFF', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Télécharger le rapport PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 5 */}
      <section ref={refs[4]} style={{ padding: '120px 64px', scrollMarginTop: 80 }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#E8EFFC', color: '#1A2BFF', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 05</div>
                <div style={{ height: 1, flex: 1, background: '#E5E5E5' }} />
              </div>
              <h2 style={{ fontSize: 72 }}>Espace Leader<br />& Influenceur.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>
                Votre audience vous appartient. Pas à Instagram. Pas à TikTok. Monétisez vos contenus directement — abonnements, lives, masterclasses.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {[
                  ['Communauté propriétaire', 'Votre espace à vous — pas loué à Facebook ou TikTok. Aucune déplatformisation possible.'],
                  ['Abonnements & contenus premium', 'Lives privés, articles exclusifs, accès VIP — monétisez votre expertise directement.'],
                  ['Q&A & sessions live', 'Interactions directes avec vos fans, sessions dédiées, séances de coaching.'],
                  ['Boutique de contenus', 'Vendez des formations, e-books, masterclasses depuis votre espace.'],
                  ['Analytics audience avancés', 'Qui vous suit vraiment ? Taux d\'engagement, fidélité, profils démographiques.'],
                  ['Independence algorithmique', 'Votre reach n\'est plus soumis aux caprices de Meta ou ByteDance.'],
                ].map(([titre, desc], i) => (
                  <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}>
                      <Icon name="award" size={18} color="#1A2BFF" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{titre}</div>
                      <div style={{ color: '#6B6B6B', fontSize: 14, marginTop: 4 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ order: 1, background: '#E8EFFC', borderRadius: 32, padding: 40, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ background: 'white', borderRadius: 20, padding: 24, marginBottom: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src="https://res.cloudinary.com/dyqeot2wi/image/upload/v1778431381/Warm_tones_soft_glam_and_an_effortless_glow___jhudysavage______theofficialfolarin__Two_piece__thesenoralifestyle_avpuj7.jpg" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} alt="" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16 }}> Essis D.</div>
                      <div style={{ fontSize: 13, color: '#6B6B6B' }}>Créatrice de contenu & Coach bien-être · Abidjan</div>
                    </div>
                    <div style={{ padding: '6px 12px', background: '#14110D', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>VIP</div>
                  </div>
                  <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {[['4 200', 'Fans'], ['1 400', 'Abonnés'], ['82 %', 'Rétention']].map(([v, l], i) => (
                      <div key={i} style={{ padding: 12, background: '#F8F8F8', borderRadius: 12, textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>{v}</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B', marginTop: 2 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: 20, padding: 24, marginBottom: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>REVENUS DU MOIS</div>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 4 }}>1 240 000 <span style={{ fontSize: 14, color: '#6B6B6B' }}>FCFA</span></div>
                  <div style={{ fontSize: 13, color: '#1A2BFF', fontWeight: 600, marginTop: 4 }}>↑ 32 % vs mois dernier</div>
                  <div style={{ marginTop: 12, display: 'flex', alignItems: 'flex-end', gap: 3, height: 40 }}>
                    {[30, 45, 38, 60, 55, 72, 65, 80, 75, 90].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 9 ? '#1A2BFF' : '#DDE0FF', borderRadius: 3 }} />
                    ))}
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: 20, padding: 20, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Contenu premium récent</div>
                  {[
                    { t: 'Masterclass bien-être — 3h', prix: '15 000 FCFA', v: '312 ventes' },
                    { t: 'Q&A live mensuel', prix: 'Inclus VIP', v: '824 présents' },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: i ? '1px solid #F2F2F2' : 'none' }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{c.t}</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>{c.v}</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF' }}>{c.prix}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section style={{ padding: '120px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Vs. la concurrence</span>
            <h2 style={{ marginTop: 24, fontSize: 64 }}>Society fait ce qu'aucun autre<br />ne fait — pour l'Afrique.</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
          <div style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', minWidth: 560 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ background: '#F2F2F2' }}>
                  <th style={{ padding: '20px 24px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Fonctionnalité</th>
                  {['WhatsApp', 'Facebook', 'Circle.so', 'Society'].map((h, i) => (
                    <th key={h} style={{ padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 3 ? 'white' : '#6B6B6B', background: i === 3 ? '#1A2BFF' : 'transparent' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gestion des membres & rôles', 0, 1, 2, 2],
                  ['Cotisations automatisées', 0, 0, 1, 2],
                  ['Mobile Money (OM, Wave, MoMo)', 0, 0, 0, 2],
                  ['Cagnottes & crowdfunding', 0, 0, 1, 2],
                  ['Billetterie + QR codes', 0, 1, 1, 2],
                  ["Rapports d'impact RSE", 0, 0, 0, 2],
                  ['Matching besoins/ressources', 0, 0, 0, 2],
                  ['Espace Leader monétisé', 0, 1, 2, 2],
                  ['Prix adapté Afrique', 2, 2, 0, 2],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #E5E5E5' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>{row[0]}</td>
                    {[1, 2, 3, 4].map(c => (
                      <td key={c} style={{ padding: 18, textAlign: 'center', background: c === 4 ? '#F4F7FE' : 'transparent' }}>
                        {row[c] === 2 && <span style={{ display: 'inline-grid', placeItems: 'center', width: 26, height: 26, borderRadius: '50%', background: '#1A2BFF', color: 'white', fontSize: 13 }}>✓</span>}
                        {row[c] === 1 && <span style={{ color: 'white', fontSize: 18 }}>~</span>}
                        {row[c] === 0 && <span style={{ color: '#C9C9C9', fontSize: 20 }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 64px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 72, maxWidth: 800, margin: '0 auto' }}>Tout ça,<br />en <span style={{ color: '#1A2BFF' }}>5 minutes</span>.</h2>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Inscrire ma communauté <Icon name="arrow" size={16} color="white" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
