import { NavLink } from 'react-router-dom'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'
import Icon from '../../components/Icon.jsx'
import Reveal from '../../components/Reveal.jsx'

export default function FeatureFinances() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#14110D' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <NavLink to="/fonctionnalites" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>← Fonctionnalités</NavLink>
          </div>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#D4A75B22', border: '1px solid #D4A75B44', borderRadius: 999, marginBottom: 24 }}>
            <Icon name="money" size={18} color="#B22842" />
            <span style={{ color: '#1A2BFF', fontWeight: 700, fontSize: 13, marginLeft: 8 }}>MODULE 02</span>
          </div>
          <h1 style={{ fontSize: 88, lineHeight: 0.9, color: 'white', maxWidth: 900 }}>
            Monétisation<br /><span style={{ color: '#1A2BFF' }}>& Finances.</span>
          </h1>
          <p style={{ fontSize: 20, marginTop: 28, maxWidth: 580, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            Transformez l'énergie communautaire en flux financiers structurés, traçables et sécurisés. Aucune carte bancaire requise pour vos membres.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: 'money', color: '#B22842', bg: '#FFFFFF', t: 'Cagnottes en 3 clics', d: 'Lancez une collecte en moins de 2 minutes. Lien partageable, suivi en temps réel, notifications automatiques.' },
              { icon: 'calendar', color: '#1A2BFF', bg: '#E8EFFC', t: 'Cotisations automatisées', d: 'Relances SMS, rappels par email, historique — plus aucun conflit de trésorerie.' },
              { icon: 'award', color: '#166634', bg: '#DCFCE7', t: 'Abonnements premium', d: 'Contenus exclusifs, accès VIP, espaces membres payants — monétisez votre expertise.' },
              { icon: 'ticket', color: '#9D174D', bg: '#FDF2F8', t: 'Billetterie + QR codes', d: 'Événements physiques ou virtuels, vente de billets, vérification à l\'entrée.' },
              { icon: 'chart', color: '#1A2BFF', bg: '#F3F0FF', t: 'Crowdfunding participatif', d: 'Projets à financer avec objectif, durée, paliers de récompenses pour les donateurs.' },
              { icon: 'shield', color: '#14110D', bg: '#F2F2F2', t: 'Reporting financier', d: 'Exports comptables, reçus automatiques, transparence totale pour les donateurs.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80} direction="scale">
                <div className="hover-lift" style={{ padding: 32, background: '#F8F8F8', borderRadius: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: f.bg, display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                    <Icon name={f.icon} size={24} color={f.color} />
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 10 }}>{f.t}</h3>
                  <p style={{ fontSize: 14, color: '#4A4438', lineHeight: 1.65 }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px', background: '#B22842' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 48, color: '#14110D', fontWeight: 800 }}>Compatible avec tous vos paiements.</h2>
          </Reveal>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Orange Money', 'Wave', 'MTN MoMo', 'Flooz', 'Visa / Mastercard', 'Virement bancaire'].map((p, i) => (
              <div key={i} style={{ padding: '14px 24px', background: 'rgba(0,0,0,0.1)', borderRadius: 14, fontSize: 15, fontWeight: 700, color: '#14110D' }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal direction="left">
              <span className="eyebrow">Projection d'impact</span>
              <h2 style={{ fontSize: 56, marginTop: 20 }}>Ce que Society<br />rendra possible.</h2>
              <div style={{ display: 'grid', gap: 16, marginTop: 40 }}>
                {[
                  { n: '28 → 4 %', l: 'Taux d\'impayés estimé avec Society (vs. gestion manuelle)', color: '#1A2BFF' },
                  { n: '6h → 30min', l: 'Gain de temps estimé sur la comptabilité hebdomadaire', color: '#B22842' },
                  { n: '0', l: 'Conflit financier possible grâce à la traçabilité intégrale', color: '#1F5D3A' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 24, background: '#F8F8F8', borderRadius: 16 }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: s.color, letterSpacing: '-0.03em', minWidth: 120 }}>{s.n}</div>
                    <div style={{ fontSize: 15, color: '#4A4438' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right">
              <div style={{ background: 'white', borderRadius: 28, padding: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid #E5E5E5' }}>
                <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>CAGNOTTE EN COURS</div>
                <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>Reconstruire l'école Anono</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 20 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#1A2BFF' }}>7 245</span>
                  <span style={{ fontSize: 16, color: '#6B6B6B' }}>K FCFA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>
                  <span>sur 10 000 K objectif</span>
                  <span style={{ fontWeight: 700, color: '#1A2BFF' }}>72 %</span>
                </div>
                <div style={{ height: 8, background: '#F2F2F2', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #1A2BFF, #3B7FFF)' }} />
                </div>
                <div style={{ marginTop: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#6B6B6B' }}>Via :</span>
                  {['Orange Money', 'Wave', 'Carte'].map((m, i) => (
                    <span key={i} style={{ padding: '4px 10px', background: '#F8F8F8', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{m}</span>
                  ))}
                </div>
                <button className="btn btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
                  Faire un don
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
