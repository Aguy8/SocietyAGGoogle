import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const etudes = [
  {
    id: 1,
    type: 'ONG',
    nom: 'Samaritain',
    segment: 'Organisation humanitaire',
    photo: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778377222/dfdfdf_bry_itlyw4.jpg',
    personne: 'Eunice Coulibaly',
    role: 'Directrice exécutive',
    lieu: 'Adjamé, Abidjan',
    challenge: 'Samaritain gérait 340 bénévoles et donateurs sur WhatsApp et Excel. Relances à la main. Aucun rapport. 30 % des promesses de don ne se concrétisaient pas.',
    solution: 'Society activée avec cagnottes récurrentes, tableau de bord des dons en temps réel et rapports d\'impact automatiques pour les bailleurs institutionnels.',
    avant: [
      { label: 'Taux de conversion dons', val: '34 %' },
      { label: 'Temps rapport mensuel', val: '12 h' },
      { label: 'Membres actifs', val: '120' },
    ],
    apres: [
      { label: 'Taux de conversion dons', val: '71 %' },
      { label: 'Temps rapport mensuel', val: '45 min' },
      { label: 'Membres actifs', val: '340' },
    ],
    quote: 'Society nous a permis de structurer notre collecte de fonds et de décrocher un bailleur européen pour financer notre programme. Concret.',
    typeColor: 'var(--cobalt)',
    typeBg: '#E8F0FD',
  },
  {
    id: 2,
    type: 'Mutuelle',
    nom: 'Toutes pour Une',
    segment: 'Mutuelle de solidarité féminine',
    photo: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778370061/bbb_tw6lgb.jpg',
    personne: 'Roseline Gnagne',
    role: 'Présidente de la mutuelle',
    lieu: 'Treichville, Abidjan',
    challenge: 'La mutuelle regroupait 180 commerçantes cotisant 5 000 FCFA par mois. 28 % d\'impayés chaque mois. Disputes fréquentes autour des enregistrements à la main.',
    solution: 'Cotisations automatiques par Orange Money. Rappels SMS 5 jours avant l\'échéance. Tableau de bord transparent, accessible à toutes les membres.',
    avant: [
      { label: 'Taux d\'impayés', val: '28 %' },
      { label: 'Conflits mensuels', val: '8-12' },
      { label: 'Temps comptabilité', val: '6 h/sem' },
    ],
    apres: [
      { label: 'Taux d\'impayés', val: '4 %' },
      { label: 'Conflits mensuels', val: '0-1' },
      { label: 'Temps comptabilité', val: '30 min/sem' },
    ],
    quote: 'Maintenant toutes les femmes voient leur solde en temps réel. La confiance a augmenté et on a même pu accueillir 40 nouvelles membres.',
    typeColor: 'var(--cobalt)',
    typeBg: '#E8EFFC',
  },
  {
    id: 3,
    type: 'Alumni',
    nom: 'Alumni Network',
    segment: 'Réseau d\'anciens élèves',
    photo: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778379934/eertert_tainjb.jpg',
    personne: 'Brice Mensah',
    role: 'Président du réseau alumni',
    lieu: 'Yamoussoukro & Abidjan',
    challenge: "Le réseau des anciens comptait 2 400 membres dispersés en Côte d'Ivoire et dans la diaspora. Les événements annuels étaient sous-fréquentés par manque de communication centralisée. La cotisation annuelle de 10 000 FCFA était collectée à seulement 18 %.",
    solution: 'Création d\'un espace communautaire privé avec annuaire des membres, billetterie pour le gala annuel, et système de cotisation par Mobile Money ou carte bancaire (diaspora).',
    avant: [
      { label: 'Taux de cotisation', val: '18 %' },
      { label: 'Participants gala', val: '120' },
      { label: 'Membres actifs/an', val: '200' },
    ],
    apres: [
      { label: 'Taux de cotisation', val: '52 %' },
      { label: 'Participants gala', val: '480' },
      { label: 'Membres actifs/an', val: '1 100' },
    ],
    quote: 'Notre gala 2026 a réuni 4 fois plus de personnes que l\'édition précédente. Society nous a redonné une vraie vie associative.',
    typeColor: 'var(--cobalt)',
    typeBg: '#E8EFFC',
  },
  {
    id: 4,
    type: 'Leader',
    nom: 'Olivier L',
    segment: 'Leader',
    photo: 'https://res.cloudinary.com/dyqeot2wi/image/upload/v1778378095/men_s_pose_np7y4w.jpg',
    personne: 'Aissatou Diallo',
    role: 'Influenceur & créateur de contenu',
    lieu: 'Cocody, Abidjan',
    challenge: 'Olivier animait une communauté de 10000 followers via plusieurs réseaux sociaux. Aucune monétisation directe possible, pas de moyen de filtrer les membres sérieux des curieux, et une dispersion totale du contenu.',
    solution: 'Migration vers Society avec accès par abonnement mensuel de 3 500 FCFA, bibliothèque de ressources, sessions live et programme de mentorat peer-to-peer entre membres.',
    avant: [
      { label: 'Revenus communauté', val: '0 FCFA' },
      { label: 'Taux d\'engagement', val: '12 %' },
      { label: 'Membres premium', val: '0' },
    ],
    apres: [
      { label: 'Revenus communauté', val: '1,8 M FCFA/mois' },
      { label: 'Taux d\'engagement', val: '68 %' },
      { label: 'Membres premium', val: '520' },
    ],
    quote: 'J\'ai transformé ma passion en business viable en 4 mois. Society m\'a donné les outils que j\'attendais depuis des années.',
    typeColor: 'var(--encre)',
    typeBg: '#F8F8F8',
  },
]

export default function EtudesDeCas() {
  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '20px 64px', background: '#F8F8F8', borderBottom: '2px solid #E5E5E5' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--encre)', display: 'grid', placeItems: 'center', flexShrink: 0, fontSize: 16, fontWeight: 800 }}>⚠</div>
          <p style={{ fontSize: 14, color: '#4A4438', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
            <strong>Données de simulation :</strong> Les études de cas présentées sur cette page sont des simulations illustratives. Les noms, chiffres et résultats sont fictifs et servent uniquement à illustrer le potentiel de la plateforme Society. Ils ne constituent pas des témoignages réels.
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 64px 80px', background: 'linear-gradient(160deg, #F4F7FE 0%, #F0F5FF 50%, #F8F8F8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: 100, width: 400, height: 400, borderRadius: 999, background: 'var(--cobalt)', opacity: 0.12 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -40, width: 300, height: 300, borderRadius: 999, background: 'var(--cobalt)', opacity: 0.06 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">Etudes de cas</span>
          <h1 style={{ fontSize: 88, marginTop: 24, lineHeight: 0.92, color: 'var(--encre)', maxWidth: 900 }}>
            Ce que Society peut<br />
            <span style={{ color: 'var(--cobalt)' }}>changer pour vous.</span>
          </h1>
          <p style={{ fontSize: 19, marginTop: 32, maxWidth: 620, lineHeight: 1.55, color: '#4A4438' }}>
            Quatre communautés types. Quatre scénarios concrets. Pour visualiser ce que Society pourrait changer dans votre quotidien.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 48, borderTop: '1px solid rgba(26,43,255,0.15)', flexWrap: 'wrap' }}>
            {[['4', 'Communautes etudiees'], ['+180 %', 'Engagement moyen'], ['28→4 %', 'Reduction des impayes'], ['4 mois', 'Temps moyen de transformation']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--cobalt)', letterSpacing: '-0.02em' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'var(--so-grey-500)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 80 }}>
            {etudes.map((e, i) => (
              <div key={e.id} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 0, border: '1px solid #EBEBEB', borderRadius: 32, overflow: 'hidden', background: 'white' }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative' }}>
                  <img src={e.photo} alt={e.personne} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 480, display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
                    <div style={{ display: 'inline-block', padding: '6px 14px', background: e.typeBg, color: e.typeColor, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', marginBottom: 16 }}>
                      {e.type.toUpperCase()}
                    </div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: 18 }}>{e.personne}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4 }}>{e.role} · {e.lieu}</div>
                  </div>
                </div>

                <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: i % 2 === 0 ? '1px solid #EBEBEB' : 'none', borderRight: i % 2 !== 0 ? '1px solid #EBEBEB' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: e.typeColor, marginBottom: 12 }}>● {e.nom} · {e.segment}</div>
                    <h2 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>Le defi</h2>
                    <p style={{ fontSize: 15, color: '#4A4438', marginTop: 12, lineHeight: 1.65 }}>{e.challenge}</p>
                    <h2 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginTop: 32 }}>La solution</h2>
                    <p style={{ fontSize: 15, color: '#4A4438', marginTop: 12, lineHeight: 1.65 }}>{e.solution}</p>
                  </div>

                  <div style={{ marginTop: 40 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
                      <div style={{ padding: '20px', background: '#F8F8F8', borderRadius: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: '#9B9B9B', marginBottom: 12 }}>AVANT SOCIETY</div>
                        {e.avant.map((m, j) => (
                          <div key={j} style={{ marginBottom: 8 }}>
                            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--encre)' }}>{m.val}</div>
                            <div style={{ fontSize: 11, color: '#9B9B9B' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '20px', background: e.typeBg, borderRadius: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: e.typeColor, marginBottom: 12 }}>APRES SOCIETY</div>
                        {e.apres.map((m, j) => (
                          <div key={j} style={{ marginBottom: 8 }}>
                            <div style={{ fontSize: 18, fontWeight: 800, color: e.typeColor }}>{m.val}</div>
                            <div style={{ fontSize: 11, color: e.typeColor, opacity: 0.7 }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote style={{ padding: '20px 24px', background: 'var(--encre)', borderRadius: 16, borderLeft: `4px solid ${e.typeColor}`, margin: 0 }}>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>{e.quote}</p>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>— {e.personne}, {e.role}</div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px 120px', background: 'var(--cobalt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800, maxWidth: 700, margin: '0 auto' }}>
            Votre communaute sera la prochaine etude de cas.
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 20, maxWidth: 500, margin: '20px auto 0', lineHeight: 1.6 }}>
            Rejoignez les centaines de leaders qui transforment leur communaute avec Society.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
            <NavLink to="/inscription" className="btn btn-primary btn-xl">
              Rejoindre la liste d'attente
              <Icon name="arrow" size={16} color='var(--encre)' />
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline btn-xl" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Parler a un expert
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
