import { NavLink } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Icon from '../../components/Icon.jsx'
import Reveal from '../../components/Reveal.jsx'
import Counter from '../../components/Counter.jsx'

export default function FeatureImpact() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: 'var(--cobalt)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <NavLink to="/fonctionnalites" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>← Fonctionnalités</NavLink>
          </div>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(255,255,255,0.12)', borderRadius: 999, marginBottom: 24 }}>
            <Icon name="chart" size={18} color='var(--hibiscus)' />
            <span style={{ color: 'var(--cobalt)', fontWeight: 700, fontSize: 13, marginLeft: 8 }}>VISIBILITÉ & IMPACT</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Prouvez votre<br /><span style={{ color: 'var(--cobalt)' }}>impact.</span><br />
            Automatiquement.
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 600, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            Transformez chaque action de votre communauté en preuve mesurable. Pages publiques, rapports PDF, indicateurs ODD — pour convaincre les donateurs et attirer les partenaires.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 80 }}>
            {[
              { n: 14290, suffix: '', prefix: '', label: 'Bénéficiaires touchés en moyenne', color: 'var(--cobalt)' },
              { n: 62, suffix: ' M', prefix: '', label: 'FCFA collectés en moyenne/an', color: 'var(--hibiscus)' },
              { n: 10, suffix: ' min', prefix: '', label: 'Pour générer un rapport PDF complet', color: 'var(--acacia)' },
              { n: 100, suffix: ' %', prefix: '', label: 'Des rapports acceptés du premier coup', color: '#9D174D' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div style={{ padding: 32, background: '#F8F8F8', borderRadius: 24, textAlign: 'center' }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: s.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {s.prefix}<Counter to={s.n} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 14, color: '#4A4438', marginTop: 8, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80 }}>
            <Reveal direction="left">
              <span className="eyebrow">Page publique</span>
              <h2 style={{ fontSize: 48, marginTop: 20 }}>Votre vitrine<br />d'impact en ligne.</h2>
              <p style={{ fontSize: 17, marginTop: 20, lineHeight: 1.6, color: '#4A4438' }}>
                Chaque communauté dispose d'une page publique professionnelle sur le réseau Society — avec vos statistiques, projets, témoignages et bilan financier.
              </p>
              <div style={{ marginTop: 32, display: 'grid', gap: 12 }}>
                {['URL personnalisée aguy8.github.io/Society.ci/votre-communaute', 'Chiffres mis à jour en temps réel', 'Témoignages des bénéficiaires', 'Galerie de photos et vidéos'].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--encre)' }}>
                    <span style={{ color: 'var(--cobalt)', fontWeight: 800 }}>✓</span> {c}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right">
              <div style={{ padding: 40, background: 'var(--cobalt)', borderRadius: 28, color: 'white' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>PAGE D'IMPACT — aguy8.github.io/Society.ci/cansein</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>Cansein Fondation</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24 }}>
                  {[['14 290', 'bénéficiaires'], ['8', 'projets'], ['62 M', 'FCFA'], ['1 248', 'membres']].map(([v, l], i) => (
                    <div key={i} style={{ padding: 16, background: 'rgba(255,255,255,0.08)', borderRadius: 12, textAlign: 'center' }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--cobalt)' }}>{v}</div>
                      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, padding: 16, background: 'rgba(255,255,255,0.06)', borderRadius: 12 }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Alignement ODD</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['ODD 1', 'ODD 4', 'ODD 8', 'ODD 17'].map(odd => (
                      <span key={odd} style={{ padding: '4px 10px', background: 'rgba(212,167,91,0.2)', borderRadius: 999, fontSize: 11, fontWeight: 700, color: 'var(--cobalt)' }}>{odd}</span>
                    ))}
                  </div>
                </div>
                <button style={{ marginTop: 16, width: '100%', padding: 14, background: 'var(--hibiscus)', color: 'var(--encre)', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  Télécharger le rapport PDF
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div style={{ background: '#F8F8F8', borderRadius: 28, padding: '56px 64px' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <span className="eyebrow">Rapports donateurs</span>
                <h2 style={{ fontSize: 48, marginTop: 20 }}>En 10 minutes, pas en 3 semaines.</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {[
                  { n: '01', t: 'Choisissez la période', d: 'Sélectionnez le trimestre ou l\'année que vous souhaitez rapporter.' },
                  { n: '02', t: 'Society collecte tout', d: 'Membres, fonds, projets, événements, bénéficiaires — agrégés automatiquement.' },
                  { n: '03', t: 'Téléchargez le PDF', d: 'Un rapport professionnel, prêt à envoyer à vos donateurs et partenaires.' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: 28, background: 'white', borderRadius: 20, border: '1px solid #E5E5E5' }}>
                    <div style={{ fontSize: 48, fontWeight: 900, color: '#E8EFFC', lineHeight: 1 }}>{s.n}</div>
                    <h3 style={{ fontSize: 18, marginTop: 8 }}>{s.t}</h3>
                    <p style={{ fontSize: 14, color: '#4A4438', marginTop: 8, lineHeight: 1.6 }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px 120px', background: 'var(--encre)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Votre impact mérite<br />d'être <span style={{ color: 'var(--cobalt)' }}>visible</span>.
          </h2>
          <NavLink to="/inscription" className="btn btn-gold btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Créer ma page d'impact <Icon name="arrow" size={16} color='var(--encre)' />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
