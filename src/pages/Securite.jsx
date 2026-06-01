import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const pilliers = [
  {
    icon: 'lock',
    title: 'Chiffrement de bout en bout',
    subtitle: 'AES-256 · TLS 1.3',
    description: 'Toutes les données transmises entre vos membres et nos serveurs sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Les données financières et les informations personnelles des membres bénéficient d\'un chiffrement applicatif supplémentaire.',
    details: [
      'Chiffrement AES-256 pour les données stockées',
      'TLS 1.3 obligatoire sur toutes les connexions',
      'Clés de chiffrement gérées par compartiment',
      'Rotation automatique des clés tous les 90 jours',
      'Zéro accès en clair aux données de paiement',
    ],
    color: '#E8F0FD',
    iconColor: '#1A2BFF',
    accent: '#1A2BFF',
  },
  {
    icon: 'shield',
    title: 'Conformité RGPD & RPDP',
    subtitle: 'Règlement africain · Loi ivoirienne',
    description: 'Society est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi ivoirienne n° 2013-450 relative à la protection des données personnelles. Un Délégué à la Protection des Données (DPD) est nommé.',
    details: [
      'DPD (Délégué à la Protection des Données) désigné',
      'Registre des traitements à jour',
      'Droit d\'accès, de rectification et d\'effacement',
      'Portabilité des données sur demande',
      'Signalement des violations sous 72 heures',
    ],
    color: '#F8F8F8',
    iconColor: '#14110D',
    accent: '#1A2BFF',
  },
  {
    icon: 'search',
    title: 'Audits de sécurité réguliers',
    subtitle: 'Tests d\'intrusion · Bug bounty',
    description: 'Society fait appel à des cabinets spécialisés pour des tests d\'intrusion semestriels. Un programme de bug bounty est actif en permanence pour les chercheurs en sécurité. Nos équipes internes effectuent des revues de code systématiques.',
    details: [
      'Pentest semestriel par cabinet indépendant',
      'Programme bug bounty public (HackerOne)',
      'SAST/DAST automatisé dans la CI/CD',
      'Revue de code sécurité pour chaque release',
      'Scan de dépendances hebdomadaire',
    ],
    color: '#F8F8F8',
    iconColor: '#1A2BFF',
    accent: '#1A2BFF',
  },
  {
    icon: 'layers',
    title: 'Infrastructure sécurisée',
    subtitle: 'SOC 2 · Uptime 99,9 %',
    description: 'Notre infrastructure est hébergée dans des datacenters certifiés ISO 27001, avec une architecture multi-zones pour garantir la disponibilité. Les accès sont contrôlés par authentification forte et journalisés en permanence.',
    details: [
      'Datacenters ISO 27001 certifiés',
      'Architecture multi-zones (haute disponibilité)',
      'Accès VPN + MFA pour l\'équipe interne',
      'Journalisation de tous les accès admin',
      'DDoS protection active 24/7',
    ],
    color: '#E8EFFC',
    iconColor: '#3730A3',
    accent: '#3730A3',
  },
]

export default function Securite() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#1A2BFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: 999, background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: -40, left: 100, width: 250, height: 250, borderRadius: 999, background: 'rgba(212,167,91,0.15)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="shield" size={24} color="white" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Sécurité & Confidentialité</span>
          </div>
          <h1 style={{ fontSize: 80, lineHeight: 0.92, color: 'white', maxWidth: 880 }}>
            Vos données<br />
            <span style={{ color: '#1A2BFF' }}>méritent</span><br />
            la meilleure protection.
          </h1>
          <p style={{ fontSize: 19, marginTop: 32, maxWidth: 620, lineHeight: 1.55, color: 'rgba(255,255,255,0.8)' }}>
            La confiance est au cœur de Society. On applique les standards de sécurité les plus exigeants. Pour chaque membre, chaque transaction, chaque donnée.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 64, paddingTop: 64, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            {[
              { label: 'Uptime garanti', value: '99,9 %' },
              { label: 'Incidents de sécurité', value: '0' },
              { label: 'Données chiffrées', value: '100 %' },
              { label: 'Hébergement Afrique', value: '✓' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 40, fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <span className="eyebrow">Nos piliers de sécurité</span>
          <h2 style={{ fontSize: 48, marginTop: 20, fontWeight: 800, maxWidth: 600 }}>Quatre couches. Zéro compromis.</h2>
          <div style={{ display: 'grid', gap: 28, marginTop: 56 }}>
            {pilliers.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #EBEBEB', borderRadius: 28, overflow: 'hidden' }}>
                <div style={{ padding: '56px 56px', background: p.color }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                      <Icon name={p.icon} size={26} color={p.iconColor} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: p.iconColor, opacity: 0.7 }}>{p.subtitle}</div>
                    </div>
                  </div>
                  <h3 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15 }}>{p.title}</h3>
                  <p style={{ fontSize: 16, marginTop: 20, lineHeight: 1.65, color: '#4A4438' }}>{p.description}</p>
                </div>
                <div style={{ padding: '56px 56px', background: 'white', borderLeft: '1px solid #EBEBEB' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#6B6B6B', marginBottom: 24, textTransform: 'uppercase' }}>Ce que cela signifie concrètement</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
                    {p.details.map((d, j) => (
                      <li key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{ width: 22, height: 22, borderRadius: 999, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <Icon name="check" size={12} color={p.iconColor} />
                        </div>
                        <span style={{ fontSize: 15, lineHeight: 1.5, color: '#14110D' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ padding: '48px', background: 'linear-gradient(135deg, #1A2BFF 0%, #1A2BFF 100%)', borderRadius: 28, color: 'white', boxShadow: '0 12px 40px rgba(14,71,171,0.25)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF' }}>● DONNÉES EN AFRIQUE</div>
              <h2 style={{ fontSize: 36, color: 'white', marginTop: 16, fontWeight: 800, lineHeight: 1.2 }}>Vos données restent sur le continent.</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginTop: 20, lineHeight: 1.65 }}>
                Par défaut, vos données sont hébergées dans des datacenters d'Afrique de l'Ouest. Aucun transfert hors continent sans votre accord explicite.
              </p>
              <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
                {['Datacenter principal : Abidjan, CI', 'Réplication : Lagos, NG (backup)', 'Aucun transfert Europe / USA sans consentement', 'Conformité CEDEAO et loi ivoirienne n° 2013-450'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: '#1A2BFF', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '48px', background: 'white', borderRadius: 28, border: '1px solid #EBEBEB' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF' }}>● DIVULGATION RESPONSABLE</div>
              <h2 style={{ fontSize: 36, marginTop: 16, fontWeight: 800, lineHeight: 1.2 }}>Vous avez trouvé une faille ?</h2>
              <p style={{ fontSize: 16, color: '#4A4438', marginTop: 20, lineHeight: 1.65 }}>
                On accueille les signalements à bras ouverts. Notre programme de divulgation responsable récompense les chercheurs de 50 000 à 500 000 FCFA, selon la gravité.
              </p>
              <div style={{ padding: '20px 24px', background: '#F8F8F8', borderRadius: 16, marginTop: 28, fontFamily: 'monospace', fontSize: 14, color: '#14110D' }}>
                security@society.ci
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <button className="btn btn-primary">Signaler une vulnérabilité</button>
                <button className="btn btn-outline">Voir notre politique</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Icon name="shield" size={48} color="#1A2BFF" />
          <h2 style={{ fontSize: 48, marginTop: 24, fontWeight: 800 }}>Des questions sur notre sécurité ?</h2>
          <p style={{ fontSize: 17, color: '#6B6B6B', marginTop: 16, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.6 }}>
            Notre équipe sécurité répond aux entreprises, institutions et grandes communautés.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <NavLink to="/contact" className="btn btn-primary btn-xl">Contacter l'équipe sécurité</NavLink>
            <a href="/docs/security" className="btn btn-outline btn-xl">Lire le rapport de sécurité</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
