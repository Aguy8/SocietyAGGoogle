import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

const TEAM = [
  { n: 'Ange-Samuel KEKE', r: 'Co-fondateur · CEO', initials: 'AK', bg: 'var(--cobalt)' },
  { n: 'Hugues Amon.', r: 'Head of Product', initials: 'HA', bg: 'var(--encre)' },
  { n: 'Équipe.', r: 'Lead Engineering', initials: 'LE', bg: 'var(--terre)' },
  { n: 'Équipe.', r: 'Community & Growth', initials: 'CG', bg: 'var(--acacia)' },
]

export default function APropos() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '100px 64px 64px' }}>
        <div className="container">
          <span className="eyebrow">À propos</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginTop: 24, lineHeight: 1.02, maxWidth: 820, letterSpacing: '-0.035em' }}>
            Nous bâtissons <span style={{ color: 'var(--cobalt)' }}>l'infrastructure</span> de l'économie communautaire africaine.
          </h1>
          <p style={{ fontSize: 19, marginTop: 28, maxWidth: 620, lineHeight: 1.6, color: '#4A4438' }}>
            Studio basé à Abidjan. Nous concevons les outils qui manquaient aux leaders communautaires africains depuis toujours.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section style={{ padding: '64px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ padding: 48, background: 'white', borderRadius: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--cobalt)' }}>● MISSION</div>
              <h2 style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', marginTop: 16, lineHeight: 1.15 }}>Donner aux communautés africaines les vrais outils du métier.</h2>
              <p style={{ fontSize: 16, marginTop: 20 }}>Structurer les membres. Animer les évènements. Lever les fonds. Faire vivre une économie autour du projet commun.</p>
            </div>
            <div style={{ padding: 48, background: 'var(--encre)', color: 'white', borderRadius: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--cobalt)' }}>● VISION</div>
              <h2 style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', marginTop: 16, lineHeight: 1.15, color: 'white' }}>Devenir le Hub Africain des connectivités sociales & communautaires.</h2>
              <p style={{ fontSize: 16, marginTop: 20, color: 'rgba(255,255,255,0.85)' }}>Mobile Money, culture de la solidarité. L'infrastructure numérique de l'économie communautaire africaine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE — Brand Story */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow">Notre histoire</span>
              <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', marginTop: 24, lineHeight: 1.05 }}>
                Né dans les <span style={{ color: 'var(--cobalt)' }}>rues d'Abidjan.</span>
              </h2>
              <p style={{ fontSize: 17, marginTop: 24, color: '#847B6C', lineHeight: 1.6 }}>
                Pas dans un garage de la Silicon Valley.
              </p>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <div style={{ display: 'grid', gap: 24 }}>
                <p style={{
                  fontSize: 20, lineHeight: 1.7, color: 'var(--encre)',
                  borderLeft: '4px solid var(--cobalt)', paddingLeft: 24, fontWeight: 500,
                }}>
                  Society est né en regardant des leaders, porteurs de vision pour l'Afrique soucieux de prouver leur impact.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4A4438' }}>
                  Des présidentes de clubs et assciations passer le clair de leur temps à gérer manuellement une communauté de 500 membres sur WhatsApp. Des coordinateurs et organisateurs patauger entre plusieurs outils pour enjayer des foules.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4A4438' }}>
                  On a interrogé des leaders communautaires. Le constat était unanime. Le vide, le besoin, immense.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--encre)', fontWeight: 700 }}>
                  On ne vient pas sauver les communautés africaines. On vient outiller ceux qui la font vivre depuis toujours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ÉQUIPE */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">Équipe</span>
              <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', marginTop: 20, lineHeight: 1.05 }}>Difero Fundry.</h2>
              <p style={{ fontSize: 17, marginTop: 12, maxWidth: 560 }}>Studio basé à Abidjan. On construit des outils pour les communautés africaines.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <div style={{
                    aspectRatio: '4/5',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: m.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontSize: 52,
                      fontWeight: 800,
                      color: 'white',
                      letterSpacing: '-0.04em',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {m.initials}
                    </span>
                  </div>
                  <div style={{ marginTop: 16, fontWeight: 700, fontSize: 17 }}>{m.n}</div>
                  <div style={{ fontSize: 14, color: '#6B6B6B' }}>{m.r}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS — 3 MVB */}
      <section style={{ padding: '120px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Nos valeurs fondatrices</span>
            <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', marginTop: 24, maxWidth: 700, lineHeight: 1.05 }}>
              Ce qui guide <span style={{ color: 'var(--cobalt)' }}>chaque décision.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
            {[
              {
                n: '01',
                t: "L'Intégration Radicale",
                d: "Mobile Money avant carte bancaire. Interface Abidjan avant UX San Francisco. Tontine avant subscription. Society s'ancre d'abord dans les réalités africaines — et s'adapte, toujours.",
                accent: 'var(--encre)',
              },
              {
                n: '02',
                t: "La Donnée au Service de l'Impact",
                d: "Chaque membre inscrit, chaque cotisation collectée, chaque événement organisé mérite d'être documenté. Non pour surveiller — pour prouver. Society génère les preuves d'impact sans effort.",
                accent: 'var(--encre)',
              },
              {
                n: '03',
                t: "La Co-construction Permanente",
                d: "Les premiers partenaires ne sont pas des clients — elles sont co-créatrices. Chaque retour terrain devient une décision produit. On construit avec, pas pour.",
                accent: 'var(--encre)',
              },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  padding: '48px 40px',
                  background: 'white',
                  borderRadius: 24,
                  height: '100%',
                  borderTop: `4px solid ${v.accent}`,
                }}>
                  <div style={{ fontSize: 72, fontWeight: 800, color: 'var(--encre)', letterSpacing: '-0.04em', lineHeight: 1 }}>{v.n}</div>
                  <h3 style={{ fontSize: 22, marginTop: 16, fontWeight: 800 }}>{v.t}</h3>
                  <p style={{ fontSize: 15, marginTop: 16, lineHeight: 1.7, color: '#4A4438' }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
