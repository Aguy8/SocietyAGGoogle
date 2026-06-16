import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const plans = [
  {
    n: 'Communauté',
    badge: 'Gratuit · Pour toujours',
    d: 'Démarrer et structurer sa communauté, sans dépenser un franc.',
    c: "Jusqu'à 1 500 membres",
    f: [
      'Gestion des membres & rôles',
      'Communication par canaux',
      '3 cagnottes actives max',
      'Page communautaire publique',
      'Cotisations de base',
      'Mobile Money intégré',
      'Support communautaire',
    ],
    cta: 'Démarrer gratuitement',
    color: '#F8F8F8',
    text: 'var(--encre)',
    extra: "Possibilité d'étendre les limites au prorata",
  },
  {
    n: 'Corporate',
    badge: 'Aller plus loin',
    d: 'Pour les associations actives et les réseaux professionnels qui passent à la vitesse supérieure.',
    c: 'Membres illimités',
    f: [
      'Tout Communauté, plus :',
      'Cotisations automatisées & relances',
      'Cagnottes & crowdfunding illimités',
      'Billetterie + QR codes',
      "Rapports d'impact PDF",
      'Sous-groupes avancés',
      'Gestion des bénévoles',
      'Analytics & tableaux de bord',
      'Support prioritaire',
    ],
    cta: 'Choisir Corporate',
    color: 'var(--cobalt)',
    text: 'white',
    popular: true,
    extra: "Possibilité d'étendre les limites au prorata",
  },
  {
    n: 'Institution',
    badge: 'Sur mesure',
    d: 'ONG, mutuelles, fédérations nationales, grandes communautés à fort impact.',
    c: 'À partir de 5 000 membres',
    f: [
      'Tout Corporate, plus :',
      'Données démographiques & sociales',
      'Indices de développement communautaire',
      "Analyse de l'impact socio-économique",
      'Cartographie géographique des membres',
      'Rapports donateurs sur mesure (ODD)',
      'SSO & sécurité avancée',
      'SLA 99,9 %',
      'Conformité réglementaire UMOA',
      'Démarrage sur site & formation équipe',
      'Référent dédié',
    ],
    cta: 'Nous contacter',
    color: 'var(--encre)',
    text: 'white',
    extra: 'Déploiement personnalisé & intégrations sur mesure',
  },
]

export default function Tarifs() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 48px' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Tarifs</span>
            <h1 style={{ fontSize: 100, lineHeight: 0.9, maxWidth: 900, marginTop: 28 }}>
              Un prix juste,<br />
              <span style={{ color: 'var(--cobalt)' }}>conçu pour l'Afrique</span>.
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 680, lineHeight: 1.5 }}>
              Un plan gratuit pour démarrer. Les plans payants en FCFA, par Mobile Money. Aucune carte demandée.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '40px 64px 80px' }}>
        <div className="container">
          <div className="plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
            {plans.map((p, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div style={{ padding: '36px 32px', background: p.color, color: p.text, borderRadius: 24, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', boxShadow: p.popular ? '0 24px 64px rgba(26,43,255,0.3)' : '0 4px 20px rgba(0,0,0,0.06)' }}>
                  {p.popular && (
                    <div style={{ position: 'absolute', top: -12, left: 24, padding: '5px 14px', background: '#F4ECD8', color: 'var(--encre)', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '0.06em' }}>RECOMMANDÉ</div>
                  )}
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: p.text === 'white' ? 'rgba(255,255,255,0.55)' : '#847B6C' }}>{p.n}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', marginTop: 14, padding: '5px 14px', background: p.text === 'white' ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.06)', borderRadius: 999, fontSize: 12, fontWeight: 700, alignSelf: 'flex-start' }}>{p.badge}</div>
                  <p style={{ fontSize: 14, marginTop: 16, color: p.text === 'white' ? 'rgba(255,255,255,0.75)' : '#4A4438', lineHeight: 1.55 }}>{p.d}</p>
                  <div style={{ padding: '8px 14px', marginTop: 16, background: p.text === 'white' ? 'rgba(255,255,255,0.12)' : '#F8F8F8', borderRadius: 10, fontSize: 12, fontWeight: 700, border: p.text === 'white' ? 'none' : '1px solid #E5E5E5' }}>{p.c}</div>
                  <div style={{ margin: '20px 0', borderTop: `1px solid ${p.text === 'white' ? 'rgba(255,255,255,0.15)' : '#E5E5E5'}` }} />
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, flex: 1 }}>
                    {p.f.map((f, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.4 }}>
                        <span style={{ flexShrink: 0, marginTop: 1, color: p.text === 'white' ? '#F4ECD8' : 'var(--cobalt)', fontWeight: 700 }}>✓</span>
                        <span style={{ fontWeight: j === 0 && f.includes('plus') ? 700 : 400 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {p.extra && (
                    <div style={{ marginTop: 12, padding: '8px 10px', background: p.text === 'white' ? 'rgba(255,255,255,0.08)' : 'rgba(26,43,255,0.06)', borderRadius: 8, fontSize: 11, color: p.text === 'white' ? 'rgba(255,255,255,0.55)' : 'var(--cobalt)' }}>
                      ↗ {p.extra}
                    </div>
                  )}
                  <NavLink to="/inscription" style={{ marginTop: 16, padding: '11px 16px', textAlign: 'center', borderRadius: 999, fontSize: 13, fontWeight: 700, textDecoration: 'none', background: p.text === 'white' ? 'white' : 'var(--cobalt)', color: p.text === 'white' ? (p.color === 'var(--cobalt)' ? 'var(--cobalt)' : p.color) : 'white', display: 'block' }}>{p.cta}</NavLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTION SHOWCASE */}
      <section data-nav-theme="dark" style={{ background: 'var(--encre)', padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow white">Plan Institution</span>
              <h2 style={{ color: 'white', marginTop: 16, fontSize: 52, maxWidth: 600 }}>Pour les organisations<br />qui pèsent.</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 560, lineHeight: 1.6 }}>
                ONG, mutuelles nationales, fédérations, grandes paroisses. Society Institution combine gestion communautaire et analyse socio-économique à l'échelle africaine.
              </p>
            </div>
            <NavLink to="/contact" className="btn btn-gold btn-lg">Demander un devis →</NavLink>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { n: '01', title: 'Données socio-démographiques', desc: "Indices de développement communautaire, cartographie géographique des membres, analyse d'impact socio-économique et ODD." },
              { n: '02', title: 'Sécurité & conformité avancée', desc: "SSO, SLA 99,9 %, conformité UMOA, hébergement souverain en Afrique de l'Ouest. Pour les organisations à responsabilité élevée." },
              { n: '03', title: 'Démarrage & formation sur site', desc: "Déploiement chez vous, formation de votre équipe, référent dédié pour un suivi continu." },
              { n: '04', title: 'Intégrations & API sur mesure', desc: "Branchement à vos systèmes (ERP, CRM, comptabilité). Intégrations sur mesure selon vos processus." },
              { n: '05', title: 'À partir de 5 000 membres', desc: 'Tarification sur volume, calculée selon vos besoins réels. Contrat sur mesure avec SLA garanti et support dédié 6j/7.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 28, background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.09)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ color: 'white', fontSize: 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '24px 32px', background: 'rgba(212,167,91,0.12)', borderRadius: 16, border: '1px solid rgba(212,167,91,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Tarification sur mesure</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 4 }}>Devis sous 48h · Appel découverte · Sans engagement initial</div>
            </div>
            <NavLink to="/contact" style={{ padding: '12px 24px', background: '#F4ECD8', color: 'var(--encre)', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Contacter l'équipe →</NavLink>
          </div>
        </div>
      </section>

      {/* MONÉTISATION */}
      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow">Monétisation</span>
              <h2 style={{ fontSize: 52, marginTop: 24 }}>Votre communauté<br />finance elle-même son projet.</h2>
              <p style={{ fontSize: 17, marginTop: 20, maxWidth: 460, lineHeight: 1.6 }}>
                Cotisations, évènements, collectes, mécénat. Tous les leviers pour qu'elle vive de ses propres ressources.
              </p>
            </Reveal>
            <Reveal direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: 'credit-card', l: 'Cotisations membres', v: 'Récurrentes', d: 'Prélevées par Mobile Money. Zéro relance à la main.' },
                  { icon: 'ticket', l: 'Billetterie évènements', v: 'Directes', d: 'AG, galas, conférences. Les fonds arrivent direct.' },
                  { icon: 'money', l: 'Cagnottes & collectes', v: 'En 30 s', d: 'Mobiliser les membres pour un projet, une urgence, un investissement.' },
                  { icon: 'users', l: 'Dons & mécénat', v: '0 % ONG', d: 'Dons externes. Reçus automatiques pour donateurs et bailleurs.' },
                ].map((c, i) => (
                  <div key={i} style={{ padding: 24, background: 'white', borderRadius: 20, border: '1px solid #EDE8DD' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#DDE0FF', display: 'grid', placeItems: 'center', marginBottom: 12 }}><Icon name={c.icon} size={18} color='var(--cobalt)' /></div>
                    <div style={{ fontSize: 14, color: '#6B6B6B', fontWeight: 600 }}>{c.l}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--cobalt)', marginTop: 4 }}>{c.v}</div>
                    <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 4, lineHeight: 1.45 }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid" style={{ gap: 80 }}>
            <Reveal direction="left">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ fontSize: 52, marginTop: 24 }}>Questions<br />fréquentes.</h2>
              <p style={{ fontSize: 16, marginTop: 20, maxWidth: 360 }}>Une autre question ? <NavLink to="/contact" style={{ color: 'var(--cobalt)', fontWeight: 600 }}>Écrivez-nous →</NavLink></p>
            </Reveal>
            <div>
              {[
                ["Je peux tester gratuitement avant de payer ?", "Oui. Le plan Communauté est gratuit pour toujours, jusqu'à 1 500 membres et 3 cagnottes. Corporate s'essaie 30 jours, sans carte."],
                ["Comment fonctionne le paiement ?", "En FCFA. Orange Money, Wave, MTN MoMo ou carte bancaire. Plusieurs formules selon votre budget."],
                ["Et si je dépasse les limites ?", "Aucune coupure. Vous étendez vos limites avec un complément calculé au prorata de votre usage."],
                ["Mes données sont en sécurité ?", "Oui. Hébergement souverain en Afrique de l'Ouest. Chiffrement AES-256. Conformité RGPD et UEMOA. Vos données vous appartiennent."],
                ["Je peux exporter mes données ?", "À tout moment. Membres, cotisations, évènements — en CSV ou Excel."],
                ["Qu'apporte le plan Institution ?", "Données démographiques et sociales avancées, indices de développement, cartographie géographique des membres, analyses d'impact socio-économique. Pour les rapports bailleurs exigeants."],
              ].map((q, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-summary">
                    {q[0]} <span className="faq-icon">+</span>
                  </summary>
                  <p style={{ marginTop: 12, fontSize: 15, color: '#4A4438', lineHeight: 1.6 }}>{q[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
