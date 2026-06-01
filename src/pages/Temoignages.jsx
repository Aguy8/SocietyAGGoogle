import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

const TEMOIGNAGES = [
  { img: 'https://images.unsplash.com/photo-1531123897727-8f11ebb3a745?auto=format&fit=crop&w=400&q=80', n: 'Aminata K.', r: 'Directrice — ONG Hope Life CI', segment: 'ONG', segColor: '#1A2BFF', segBg: '#E8EFFC', texte: 'Society nous a permis de professionnaliser notre collecte de fonds. Notre rapport annuel s\'écrit maintenant en 10 minutes. Nos donateurs reçoivent les chiffres en temps réel et on a reçu 3 nouveaux financements grâce à notre page d\'impact.', gain: '+108 % de conversions dons' },
  { img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80', n: 'Awa K.', r: 'Présidente — Mutuelle des Femmes d\'Abobo', segment: 'Mutuelle', segColor: '#B22842', segBg: '#FFFFFF', texte: 'Avant Society, je passais mes week-ends à relancer 200 cotisantes sur WhatsApp. Aujourd\'hui, je suis le suivi en temps réel — et j\'ai du temps pour vraiment animer notre mutuelle et faire grandir notre réseau.', gain: '28 % → 4 % d\'impayés' },
  { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', n: 'Kofi A.', r: 'Président — INPHB Alumni Network', segment: 'Alumni', segColor: '#1F5D3A', segBg: '#DCFCE7', texte: 'Notre réseau alumni de l\'INPHB comptait 12 000 diplômés mais personne ne se connaissait. Avec Society, on a reconstitué le réseau en 3 mois et lancé notre premier programme de mentorat.', gain: 'Gala 4x plus fréquenté' },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', n: 'Aïssatou D.', r: 'Coach & créatrice de contenu', segment: 'Leader', segColor: '#9D174D', segBg: '#FDF2F8', texte: 'J\'avais 80 000 abonnés Instagram et je gagnais 0 FCFA de ma communauté. Sur Society, en 2 mois j\'ai 1 400 fans abonnés à 5 000 FCFA/mois. C\'est ma liberté financière.', gain: '1,8 M FCFA/mois' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', n: 'Jean-Marc O.', r: 'Fondateur — Club des Entrepreneurs d\'Abidjan', segment: 'Réseau Pro', segColor: '#1A2BFF', segBg: '#E8EFFC', texte: 'J\'ai lancé mon club business sur Society et en 6 semaines, j\'avais 340 membres payants. Ma communauté LinkedIn avait 3 000 followers mais aucun revenu. La différence est totale.', gain: '340 membres payants en 6 semaines' },
  { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', n: 'Pasteur Samuel D.', r: 'Responsable — Vases d\'Honneur Abidjan', segment: 'Religieux', segColor: '#B22842', segBg: '#FFFFFF', texte: 'Notre paroisse de 2 000 fidèles était impossible à coordonner. Avec Society, tous les sous-groupes communiquent, les offrandes sont tracées et notre pasteur voit tout en temps réel.', gain: '3x plus d\'engagement fidèles' },
  { img: 'https://images.unsplash.com/photo-1489424731084-a3d5bc15a39b?auto=format&fit=crop&w=400&q=80', n: 'Fatou M.', r: 'Fondatrice — Collectif Femmes Entrepreneurs', segment: 'Communauté', segColor: '#1A2BFF', segBg: '#F3F0FF', texte: 'Je ne savais pas si mon groupe était une ONG ou un réseau pro. Society m\'a aidé à structurer, et 4 mois après, j\'ai officiellement créé mon association. Society était là dès le début.', gain: 'Structure créée en 4 mois' },
  { img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80', n: 'Salimata B.', r: 'Trésorière — MUGEF-CI', segment: 'Mutuelle', segColor: '#B22842', segBg: '#FFFFFF', texte: 'On avait des conflits tous les mois sur les cotisations. Maintenant toutes nos membres voient leur solde en temps réel depuis leur téléphone. La confiance a été rétablie en quelques semaines.', gain: '0 conflit depuis 8 mois' },
]

export default function Temoignages() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px', minHeight: '70vh', display: 'flex', alignItems: 'center', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: '#1A2BFF', opacity: 0.08, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: '#1A2BFF', opacity: 0.12, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(212,167,91,0.12)', border: '1px solid rgba(212,167,91,0.3)', borderRadius: 999, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A2BFF' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Bientôt disponible</span>
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 0.92, color: 'white', maxWidth: 800 }}>
            Témoignages<br />
            <span style={{ color: '#1A2BFF' }}>en construction.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginTop: 28, maxWidth: 520, lineHeight: 1.65 }}>
            Nos leaders communautaires préparent leurs témoignages. Repassez bientôt pour découvrir leurs histoires.
          </p>
          <div style={{ marginTop: 48 }}>
            <NavLink to="/inscription" className="btn btn-gold btn-xl">
              Inscrire ma communauté →
            </NavLink>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
      <section data-nav-theme="dark" style={{ padding: '120px 64px 80px', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#1A2BFF', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow dark">Témoignages</span>
          <h1 style={{ fontSize: 'clamp(56px, 7vw, 100px)', marginTop: 28, lineHeight: 0.9, maxWidth: 900, color: 'white' }}>
            Ils ont<br />
            <span style={{ color: '#1A2BFF' }}>transformé</span><br />
            leur communauté.
          </h1>
          <p style={{ fontSize: 20, marginTop: 32, maxWidth: 600, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
            Des leaders réels. Des résultats mesurables. Des témoignages authentiques.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 64px 120px' }}>
        <div className="container">
          <div style={{ columns: 2, columnGap: 24 }}>
            {TEMOIGNAGES.map((t, i) => (
              <Reveal key={i} delay={i * 60} style={{ breakInside: 'avoid', marginBottom: 24, display: 'block' }}>
                <div className="hover-lift" style={{ padding: 32, background: 'white', borderRadius: 24, border: '1px solid #E5E5E5' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <img src={t.img} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} alt={t.n} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15 }}>{t.n}</div>
                      <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>{t.r}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', padding: '4px 10px', background: t.segBg, color: t.segColor, borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{t.segment}</div>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4A4438', margin: '0 0 20px' }}>« {t.texte} »</p>
                  <div style={{ padding: '10px 16px', background: '#F8F8F8', borderRadius: 10, fontSize: 13, fontWeight: 700, color: '#0F8B4F' }}>
                    📈 {t.gain}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" style={{ padding: '80px 64px 120px', background: '#1A2BFF' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 56, color: 'white', fontWeight: 800 }}>Votre histoire sera ici.</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 16, maxWidth: 480, margin: '16px auto 0', lineHeight: 1.6 }}>
            Rejoignez les communautés africaines qui transforment leur gestion avec Society.
          </p>
          <NavLink to="/inscription" className="btn btn-gold btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Commencer gratuitement
          </NavLink>
        </div>
      </section>

      </div>{/* end hidden */}

      <Footer />
    </div>
  )
}
