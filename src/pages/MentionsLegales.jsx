import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#14110D', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid #F0F0F0' }}>{title}</h2>
    <div style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.8 }}>{children}</div>
  </div>
)

const P = ({ children }) => <p style={{ marginBottom: 12 }}>{children}</p>

export default function MentionsLegales() {
  return (
    <div className="page">
      <Nav />

      <section data-nav-theme="dark" style={{ padding: '120px 64px', minHeight: '70vh', display: 'flex', alignItems: 'center', background: '#14110D', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: '#1A2BFF', opacity: 0.12, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 20px', background: 'rgba(212,167,91,0.12)', border: '1px solid rgba(212,167,91,0.3)', borderRadius: 999, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A2BFF' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Bientôt disponible</span>
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 0.92, color: 'white', maxWidth: 800 }}>
            Mentions légales<br />
            <span style={{ color: '#1A2BFF' }}>en cours de finalisation.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginTop: 28, maxWidth: 520, lineHeight: 1.65 }}>
            Nos mentions légales sont en cours de rédaction. Pour toute question, contactez directement notre équipe.
          </p>
          <div style={{ marginTop: 48 }}>
            <NavLink to="/contact" className="btn btn-gold btn-xl">
              Contacter l'équipe →
            </NavLink>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
      <section data-nav-theme="dark" style={{ padding: '120px 64px 64px', background: '#14110D' }}>
        <div className="container">
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF', display: 'block', marginBottom: 20 }}>MENTIONS LEGALES</span>
          <h1 style={{ fontSize: 72, lineHeight: 0.92, color: 'white', fontWeight: 900, maxWidth: 800 }}>
            Mentions legales<br />
            <span style={{ color: '#1A2BFF' }}>et informations</span><br />
            reglementaires.
          </h1>
          <p style={{ fontSize: 16, marginTop: 28, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.6 }}>
            Conformement aux dispositions legales en vigueur en Republique de Cote d'Ivoire, les informations suivantes sont mises a la disposition des utilisateurs du site web et de la plateforme Society.
          </p>
          <div style={{ marginTop: 32, padding: '16px 24px', background: 'rgba(255,255,255,0.06)', borderRadius: 12, display: 'inline-block', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Derniere mise a jour : </span>
            <span style={{ fontSize: 13, color: 'white', fontWeight: 600 }}>1er janvier 2026</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 120px' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>

            <Section title="1. Editeur du site">
              <P>Le site web <strong>aguy8.github.io/Society.ci</strong> et la plateforme Society sont edites par :</P>
              <div style={{ padding: '24px', background: '#F8F8F8', borderRadius: 16, marginBottom: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '10px 24px' }}>
                  {[
                    ['Denomination sociale', 'XXX'],
                    ['Forme juridique', 'XXX'],
                    ['Siege social', 'XXX'],
                    ['RCCM', 'XXX'],
                    ['Capital social', 'XXX'],
                    ['NCC', 'XXX'],
                    ['Directeur de la publication', 'XXX'],
                    ['E-mail', 'legal@society.ci'],
                    ['Telephone', 'XXX'],
                  ].map(([k, v]) => (
                    <Fragment key={k}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#6B6B6B' }}>{k}</div>
                      <div style={{ fontSize: 14, color: '#14110D' }}>{v}</div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </Section>

            <Section title="2. Hebergement">
              <P>Le site et la plateforme Society sont heberges par :</P>
              <div style={{ padding: '24px', background: '#F8F8F8', borderRadius: 16, marginBottom: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '10px 24px' }}>
                  {[
                    ['Hebergeur', 'XXX'],
                    ['Adresse', 'XXX'],
                    ['Site web', 'XXX'],
                    ['Telephone', 'XXX'],
                  ].map(([k, v]) => (
                    <Fragment key={k}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#6B6B6B' }}>{k}</div>
                      <div style={{ fontSize: 14, color: '#14110D' }}>{v}</div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <P>Les serveurs principaux sont localises en Cote d'Ivoire. Les serveurs de sauvegarde sont localises au Nigeria. Aucune donnee n'est transferee en dehors du continent africain sans consentement explicite de l'utilisateur.</P>
            </Section>

            <Section title="3. Propriete intellectuelle">
              <P>L'ensemble du contenu present sur le site aguy8.github.io/Society.ci et la plateforme Society — notamment les textes, graphismes, photographies, images, icones, logos, logiciels, codes sources, bases de donnees et tout autre element — est la propriete exclusive de Difero Fundry SARL ou fait l'objet d'une autorisation d'utilisation concedee a Difero Fundry SARL.</P>
              <P>Toute reproduction, representation, modification, publication, transmission ou denaturation, totale ou partielle, du contenu de ce site, par quelque moyen que ce soit et sur quelque support que ce soit, est interdite sans l'autorisation prealable ecrite de Difero Fundry SARL, sauf dispositions legales contraires.</P>
              <P>La marque <strong>Society</strong> et le logo associe sont des marques deposees aupres de l'Organisation Africaine de la Propriete Intellectuelle (OAPI). Toute utilisation non autorisee constitue une contrefacon punissable par les lois ivoiriennes et les conventions internationales applicables.</P>
            </Section>

            <Section title="4. Responsabilite">
              <P>Difero Fundry SARL met tout en oeuvre pour assurer l'exactitude et la mise a jour des informations diffusees sur le site aguy8.github.io/Society.ci. Toutefois, Difero Fundry SARL ne peut garantir l'exactitude, la precision ou l'exhaustivite des informations mises a la disposition sur ce site.</P>
              <P>Difero Fundry SARL ne saurait etre tenue responsable :</P>
              <ul style={{ paddingLeft: 24, display: 'grid', gap: 8 }}>
                <li>Des erreurs ou omissions dans les informations diffusees ;</li>
                <li>Des dommages directs ou indirects resultant de l'acces ou de l'utilisation du site ;</li>
                <li>De l'indisponibilite du site due a des maintenances planifiees ou des incidents techniques imprevus ;</li>
                <li>Du contenu publie par les utilisateurs sur la plateforme Society, chaque utilisateur etant responsable du contenu qu'il publie.</li>
              </ul>
            </Section>

            <Section title="5. Donnees personnelles">
              <P>Difero Fundry SARL traite les donnees personnelles des utilisateurs conformement a la loi ivoirienne n° 2013-450 du 19 juin 2013 relative a la protection des donnees a caractere personnel et au Reglement General sur la Protection des Donnees (RGPD).</P>
              <P>Pour toute information relative au traitement de vos donnees personnelles, veuillez consulter notre <strong>Politique de Confidentialite</strong> disponible sur le site.</P>
              <P>Vous disposez d'un droit d'acces, de rectification, d'effacement, de portabilite et d'opposition au traitement de vos donnees. Pour exercer ces droits, contactez notre Delegue a la Protection des Donnees (DPD) a l'adresse : <strong>dpo@society.ci</strong></P>
            </Section>

            <Section title="6. Cookies">
              <P>Le site aguy8.github.io/Society.ci utilise des cookies pour ameliorer l'experience utilisateur, mesurer l'audience et proposer des fonctionnalites adaptees. Conformement a la reglementation applicable, vous pouvez gerer vos preferences relatives aux cookies via le bandeau de consentement affiche lors de votre premiere visite.</P>
              <P>Les cookies strictement necessaires au fonctionnement du site sont deposes sans votre consentement prealable. Les cookies analytiques et de personnalisation necessitent votre accord.</P>
            </Section>

            <Section title="7. Droit applicable et juridiction">
              <P>Les presentes mentions legales sont regies par le droit ivoirien. En cas de litige relatif a l'interpretation ou a l'execution des presentes, les tribunaux competents d'Abidjan (Cote d'Ivoire) seront seuls competents, sauf disposition contraire d'ordre public.</P>
            </Section>

            <Section title="8. Contact">
              <P>Pour toute question relative aux presentes mentions legales, vous pouvez nous contacter :</P>
              <div style={{ padding: '20px 24px', background: '#1A2BFF', borderRadius: 16, color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><div style={{ fontSize: 12, opacity: 0.7 }}>E-mail legal</div><div style={{ fontWeight: 700 }}>legal@society.ci</div></div>
                <div><div style={{ fontSize: 12, opacity: 0.7 }}>Courrier</div><div style={{ fontWeight: 700 }}>Difero Fundry SARL, Plateau, Abidjan</div></div>
              </div>
            </Section>

          </div>
        </div>
      </section>

      </div>{/* end hidden */}

      <Footer />
    </div>
  )
}
