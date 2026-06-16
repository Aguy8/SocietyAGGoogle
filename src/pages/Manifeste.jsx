import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

const PRINCIPES = [
  {
    n: '01',
    t: 'Votre communauté est à vous.',
    d: 'Les membres, le contenu, les données — tout vous appartient. Aucun algorithme ne décide qui voit quoi. Aucune plateforme ne peut vous couper de vos membres. Society est l\'outil. Vous restez le propriétaire.',
  },
  {
    n: '02',
    t: 'L\'Afrique mérite sa propre infrastructure.',
    d: 'Circle est américain. Facebook parle au monde entier — donc à personne en particulier. Une mutuelle n\'est pas un groupe Facebook. Une tontine ne se tient pas dans Excel. La diaspora ne paye pas avec Venmo. Society est bâti pour nos réalités : Mobile Money, langues locales, mobile d\'abord, réseau qui flanche.',
  },
  {
    n: '03',
    t: 'La communauté est un moteur économique.',
    d: 'Partout en Afrique, entraide, solidarité et investissement collectif font tourner l\'économie informelle. Ces flux existent depuis des générations. Society leur donne une infrastructure numérique digne, sans les formaliser à l\'excès, sans les trahir.',
  },
  {
    n: '04',
    t: 'L\'impact se mesure, ou il ne compte pas.',
    d: 'Les communautés africaines changent des vies chaque jour. Sans mesure, sans preuve, sans visibilité, ces actions restent invisibles pour les bailleurs, les partenaires, le monde. Society documente, sans effort.',
  },
  {
    n: '05',
    t: 'Simple devant. Puissant derrière.',
    d: 'La trésorière d\'une mutuelle de 50 femmes à Abobo n\'a pas trois jours à perdre en formation. Society doit être aussi simple que WhatsApp, avec la puissance d\'un outil professionnel derrière. On ne sacrifie ni l\'un, ni l\'autre.',
  },
  {
    n: '06',
    t: 'Bâti en Afrique. Pour le monde.',
    d: 'Abidjan est notre maison. Mais les communautés africaines couvrent la planète — Paris, Montréal, New York, le Golfe. Society est pensé pour la communauté transnationale, celle qui cotise depuis Paris et se réunit à Bouaké.',
  },
]

export default function Manifeste() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '140px 64px 100px', background: 'var(--encre)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://res.cloudinary.com/dyqeot2wi/image/upload/v1778357840/CAN___la_C%C3%B4te_d_Ivoire_en_liesse_apr%C3%A8s_la_victoire_ey1mx6.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <span className="eyebrow dark">Notre manifeste</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 24, lineHeight: 1.05, color: 'white', maxWidth: 820, letterSpacing: '-0.035em' }}>
              Nous croyons que les communautés <span style={{ color: 'var(--cobalt)' }}>africaines méritent</span> mieux.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 18, marginTop: 28, maxWidth: 600, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)' }}>
              Pourquoi Society existe, ce en quoi nous croyons, et les principes qui guident chaque décision — même quand c'est dur.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '100px 64px 120px' }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <Reveal>
              <p style={{ fontSize: 20, lineHeight: 1.8, color: '#4A4438', marginBottom: 64 }}>
                Tout leader communautaire africain le sait : <strong style={{ color: 'var(--encre)' }}>animer une communauté, c'est un travail à plein temps.</strong> Et pourtant, les outils ne sont pas faits pour eux. WhatsApp pour communiquer. Excel pour les cotisations. Facebook pour la visibilité. Donorbox pour les dons. Et cinq autres par-dessus.
              </p>
              <p style={{ fontSize: 20, lineHeight: 1.8, color: '#4A4438', marginBottom: 80 }}>
                Society est notre réponse. Ce manifeste explique ce que nous croyons.
              </p>
            </Reveal>

            {/* LE YET — tension créatrice */}
            <Reveal style={{ marginBottom: 80 }}>
              <div style={{
                padding: '56px 64px',
                background: '#F8F8F8',
                borderRadius: 28,
                borderLeft: '4px solid var(--cobalt)',
              }}>
                <span className="eyebrow">Le YET</span>
                <h2 style={{ fontSize: 40, marginTop: 24, lineHeight: 1.1 }}>
                  Pas l'un ou l'autre.<br />
                  <span style={{ color: 'var(--cobalt)' }}>Les deux à la fois.</span>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 48 }}>
                  {[
                    { a: 'Technologie numérique', b: 'Chaleur humaine africaine' },
                    { a: 'Outil SaaS', b: 'Infrastructure communautaire' },
                    { a: 'Innovation Silicon Valley', b: "Réalités de la rue d'Abidjan" },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '32px 24px', background: 'white', borderRadius: 20 }}>
                      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--encre)', marginBottom: 12 }}>{item.a}</div>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 14px',
                        background: 'var(--cobalt)',
                        borderRadius: 100,
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        marginBottom: 12,
                      }}>YET</div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--encre)' }}>{item.b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* BRAIN STORY — origine narrative Abidjan */}
            <Reveal style={{ marginBottom: 80 }}>
              <div style={{
                padding: '56px 64px',
                background: 'var(--encre)',
                borderRadius: 28,
                color: 'white',
              }}>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Notre origine</span>
                <p style={{ fontSize: 26, lineHeight: 1.6, marginTop: 32, maxWidth: 700, fontWeight: 600, color: 'white' }}>
                  Society n'est pas né dans un garage de la Silicon Valley.
                </p>
                <p style={{ fontSize: 19, lineHeight: 1.75, marginTop: 24, color: 'rgba(255,255,255,0.78)', maxWidth: 700 }}>
                  Il est né dans les rues d'Abidjan, en regardant des présidentes de tontines passer leurs dimanches à relancer 200 membres sur WhatsApp. Des coordinateurs alumni gérer des cotisations sur Excel en perdant 30 % par an. Des leaders associatifs épuisés de rendre des comptes sans outil pour le faire dignement.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.75, marginTop: 24, color: 'rgba(255,255,255,0.78)', maxWidth: 700 }}>
                  Ange-Samuel KEKE et l'équipe Difero Fundry ne viennent pas sauver les communautés africaines. Ils viennent outiller ceux qui les font vivre depuis toujours.
                </p>
              </div>
            </Reveal>

            <div style={{ display: 'grid', gap: 64 }}>
              {PRINCIPES.map((p, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32 }}>
                    <div style={{ fontSize: 72, fontWeight: 900, color: '#E8EFFC', lineHeight: 1 }}>{p.n}</div>
                    <div>
                      <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.2, color: 'var(--encre)', marginBottom: 16 }}>{p.t}</h2>
                      <p style={{ fontSize: 17, lineHeight: 1.75, color: '#4A4438' }}>{p.d}</p>
                    </div>
                  </div>
                  {i < PRINCIPES.length - 1 && <div style={{ height: 1, background: '#E5E5E5', marginTop: 64 }} />}
                </Reveal>
              ))}
            </div>

            {/* PHILOSOPHIE PRODUIT — Mobile Money avant carte bancaire */}
            <Reveal style={{ marginTop: 80, marginBottom: 80 }}>
              <div style={{
                padding: '56px 64px',
                background: 'var(--cobalt)',
                borderRadius: 28,
                color: 'white',
              }}>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                  Notre philosophie produit
                </span>
                <h2 style={{ fontSize: 48, marginTop: 24, lineHeight: 1.05, color: 'white' }}>
                  Mobile Money<br />
                  avant carte bancaire.
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 48 }}>
                  {[
                    { before: 'Mobile Money', after: 'Carte bancaire', desc: "Wave et Orange Money d'abord. Stripe ensuite." },
                    { before: 'Interface Abidjan', after: 'UX San Francisco', desc: 'Conçu pour des réseaux lents, des écrans variés, des mains habituées à WhatsApp.' },
                    { before: 'Tontine', after: 'Subscription', desc: 'La collecte par tour, le crédit rotatif, la solidarité organisée — avant le paiement mensuel.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '28px 24px',
                      background: 'rgba(255,255,255,0.12)',
                      borderRadius: 20,
                      borderTop: '2px solid rgba(255,255,255,0.25)',
                    }}>
                      <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{item.before}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 16, fontWeight: 600 }}>
                        avant {item.after}
                      </div>
                      <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal style={{ marginTop: 80, padding: '48px 56px', background: 'var(--cobalt)', borderRadius: 28, color: 'white', textAlign: 'center' }}>
              <blockquote style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                « L'infrastructure numérique des communautés africaines, c'est le prochain grand chantier. On le construit. »
              </blockquote>
              <div style={{ marginTop: 24, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>— L'équipe Difero Fundry, Abidjan</div>
              <NavLink to="/inscription" className="btn btn-gold btn-lg" style={{ marginTop: 32, display: 'inline-flex' }}>
                Rejoindre Society
              </NavLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
