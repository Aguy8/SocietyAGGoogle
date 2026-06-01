import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const Section = ({ num, title, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1A2BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 14, color: 'white' }}>
        {num}
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: '#14110D', lineHeight: 1.2, paddingTop: 8 }}>{title}</h2>
    </div>
    <div style={{ fontSize: 15, color: '#4A4438', lineHeight: 1.85, paddingLeft: 60 }}>{children}</div>
  </div>
)

const P = ({ children }) => <p style={{ marginBottom: 14 }}>{children}</p>
const Ul = ({ items }) => (
  <ul style={{ paddingLeft: 24, display: 'grid', gap: 8, marginBottom: 14 }}>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default function CGU() {
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
            Conditions d'utilisation<br />
            <span style={{ color: '#1A2BFF' }}>en cours de finalisation.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginTop: 28, maxWidth: 520, lineHeight: 1.65 }}>
            Nos CGU sont en cours de validation juridique. Pour toute question, contactez directement notre équipe.
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
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF', display: 'block', marginBottom: 20 }}>CONDITIONS GENERALES D'UTILISATION</span>
          <h1 style={{ fontSize: 72, lineHeight: 0.92, color: 'white', fontWeight: 900, maxWidth: 800 }}>
            Conditions generales<br />
            <span style={{ color: '#1A2BFF' }}>d'utilisation.</span>
          </h1>
          <p style={{ fontSize: 17, marginTop: 28, color: 'rgba(255,255,255,0.7)', maxWidth: 620, lineHeight: 1.65 }}>
            Les presentes Conditions Generales d'Utilisation (CGU) regissent l'acces et l'utilisation de la plateforme Society et de ses services. En utilisant Society, vous acceptez ces conditions dans leur integralite.
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Entree en vigueur : </span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>1er janvier 2026</span>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Version : </span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>1.4.0</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 32 }}>
              <div style={{ padding: '28px', background: '#F8F8F8', borderRadius: 20, border: '1px solid #EBEBEB' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: '#6B6B6B', marginBottom: 16 }}>SECTIONS</div>
                <div style={{ display: 'grid', gap: 4 }}>
                  {[
                    'Art. 1 — Objet',
                    'Art. 2 — Acces aux services',
                    'Art. 3 — Comptes utilisateurs',
                    'Art. 4 — Utilisation acceptable',
                    'Art. 5 — Propriete intellectuelle',
                    'Art. 6 — Paiements et facturation',
                    'Art. 7 — Resiliation',
                    'Art. 8 — Limitation de responsabilite',
                    'Art. 9 — Modification des CGU',
                    'Art. 10 — Droit applicable',
                  ].map((item, i) => (
                    <button key={i} style={{ padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 12, color: '#4A4438', borderRadius: 8, lineHeight: 1.4 }}>
                      {item}
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #EBEBEB' }}>
                  <NavLink to="/confidentialite" style={{ fontSize: 13, color: '#1A2BFF', fontWeight: 600, textDecoration: 'none', display: 'block', marginBottom: 8 }}>
                    Politique de confidentialite →
                  </NavLink>
                  <NavLink to="/mentions-legales" style={{ fontSize: 13, color: '#1A2BFF', fontWeight: 600, textDecoration: 'none' }}>
                    Mentions legales →
                  </NavLink>
                </div>
              </div>
            </div>

            <div style={{ maxWidth: 680 }}>
              <Section num="1" title="Objet">
                <P>Les presentes Conditions Generales d'Utilisation ont pour objet de definir les modalites et conditions dans lesquelles Difero Fundry SARL (ci-apres « Society ») met a la disposition de ses utilisateurs la plateforme Society accessible a l'adresse <strong>aguy8.github.io/Society.ci</strong> et via les applications mobiles iOS et Android.</P>
                <P>Society est une plateforme de gestion communautaire destinee aux associations, ONG, mutuelles, reseaux alumni, groupements de leaders et toute structure communautaire souhaitant structurer, engager et monetiser sa communaute.</P>
                <P>Toute utilisation de la plateforme implique l'acceptation pleine et entiere des presentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.</P>
              </Section>

              <Section num="2" title="Acces aux services">
                <P>L'acces a la plateforme Society est ouvert a toute personne physique majeure (18 ans et plus) ou personne morale regulierement constituee, ayant acces a Internet et disposant d'un moyen de paiement valide pour les plans payants.</P>
                <P><strong>Plan Starter (gratuit) :</strong> Accessible sans carte bancaire. Certaines fonctionnalites sont limitees selon les conditions du plan.</P>
                <P><strong>Plans payants :</strong> L'acces aux plans Communaute, Pro et Institution est conditionne au paiement de l'abonnement correspondant, par Mobile Money ou carte bancaire.</P>
                <P>Society se reserve le droit de suspendre ou restreindre l'acces a la plateforme pour maintenance, mise a jour, ou en cas de violation des presentes CGU, sans preavis dans les cas urgents.</P>
              </Section>

              <Section num="3" title="Comptes utilisateurs">
                <P><strong>Creation du compte :</strong> L'utilisation de Society necessite la creation d'un compte avec une adresse e-mail valide et un mot de passe securise. Vous etes responsable de l'exactitude des informations fournies lors de l'inscription.</P>
                <P><strong>Confidentialite des identifiants :</strong> Vous etes seul responsable de la confidentialite de vos identifiants de connexion. Society ne sera pas tenu responsable des dommages resultant d'un acces non autorise a votre compte du fait de la divulgation de vos identifiants.</P>
                <P><strong>Un compte par utilisateur :</strong> La creation de plusieurs comptes pour le meme utilisateur est interdite sauf autorisation expresse de Society.</P>
                <P><strong>Verifications :</strong> Society se reserve le droit de verifier l'identite des administrateurs de communautes et de demander des justificatifs supplementaires pour les organisations beneficiant de fonctionnalites avancees.</P>
              </Section>

              <Section num="4" title="Utilisation acceptable">
                <P>En utilisant Society, vous vous engagez a :</P>
                <Ul items={[
                  'Respecter les lois ivoiriennes, les lois du pays depuis lequel vous utilisez le service, et les droits des tiers',
                  'N\'utiliser la plateforme qu\'a des fins licites et conformes a son objet',
                  'Ne pas tenter de compromettre la securite ou l\'integrite de la plateforme',
                  'Traiter les membres de votre communaute avec respect et sans discrimination',
                  'Ne pas diffuser de contenus illegaux, diffamatoires, violents, obscenes ou portant atteinte a la dignite humaine',
                  'Ne pas utiliser Society pour des activites frauduleuses, des escroqueries ou du blanchiment d\'argent',
                  'Respecter les droits de propriete intellectuelle des tiers',
                ]} />
                <P>Le non-respect de ces obligations peut entrainer la suspension immediate de votre compte sans preavis et sans remboursement des sommes versees.</P>
              </Section>

              <Section num="5" title="Propriete intellectuelle">
                <P><strong>Droits de Society :</strong> La marque Society, les logiciels, interfaces, bases de donnees, textes, images et tout autre element constituant la plateforme sont la propriete exclusive de Difero Fundry SARL. Toute reproduction est interdite sans autorisation.</P>
                <P><strong>Vos contenus :</strong> Vous conservez la pleine propriete du contenu que vous publiez sur Society (textes, photos, documents, donnees de membres). Vous accordez a Society une licence limitee, non exclusive et gratuite pour heberger, stocker et afficher ce contenu dans le cadre de la fourniture des services.</P>
                <P><strong>Donnees des membres :</strong> Les donnees personnelles des membres de votre communaute vous sont confiees en qualite de responsable de traitement. Vous vous engagez a les traiter conformement a la legislation applicable sur la protection des donnees personnelles.</P>
              </Section>

              <Section num="6" title="Paiements et facturation">
                <P><strong>Prix :</strong> Les tarifs des plans payants sont affiches en FCFA sur la page Tarifs. Les prix sont susceptibles d'etre modifies avec un preavis de 30 jours.</P>
                <P><strong>Modalites de paiement :</strong> Society accepte Orange Money, Wave, MTN MoMo, Moov Money et les cartes bancaires Visa/Mastercard. Pour les plans payants a l'annee, le paiement est exigible en integralite a la souscription.</P>
                <P><strong>Facturation :</strong> Une facture est emise pour chaque paiement et disponible dans votre espace de gestion.</P>
                <P><strong>Politique de remboursement :</strong> En cas de resiliation dans les 14 jours suivant la souscription initiale d'un plan payant, un remboursement integral est effectue. Au-dela de ce delai, aucun remboursement au prorata n'est accorde pour les mois en cours.</P>
                <P><strong>Impaye :</strong> En cas d'echec de paiement, votre compte est passe en mode Starter apres un delai de grace de 7 jours. Vos donnees sont preservees pendant 30 jours supplementaires.</P>
              </Section>

              <Section num="7" title="Resiliation">
                <P><strong>Resiliation par l'utilisateur :</strong> Vous pouvez resilier votre abonnement a tout moment depuis les Parametres de votre compte. La resiliation prend effet a la fin de la periode de facturation en cours.</P>
                <P><strong>Resiliation par Society :</strong> Society peut resilier votre acces sans preavis en cas de violation grave des presentes CGU, notamment en cas d'utilisation frauduleuse ou de contenu illegal.</P>
                <P><strong>Export des donnees :</strong> Avant toute resiliation, vous pouvez exporter l'integralite de vos donnees depuis les Parametres. Society conserve vos donnees pendant 30 jours apres la resiliation effective, period pendant laquelle vous pouvez les recuperer.</P>
              </Section>

              <Section num="8" title="Limitation de responsabilite">
                <P>Society est fourni tel quel, dans la limite des possibilites techniques. Difero Fundry SARL s'engage a mettre en oeuvre tous les moyens raisonnables pour assurer la disponibilite et la securite de la plateforme, sans toutefois garantir une disponibilite ininterrompue.</P>
                <P>En tout etat de cause, la responsabilite de Difero Fundry SARL ne saurait exceder le montant des sommes effectivement versees par l'utilisateur au titre des 12 derniers mois d'abonnement.</P>
                <P>Difero Fundry SARL ne saurait etre tenu responsable des dommages indirects, pertes de donnees ou manques a gagner resultant de l'utilisation ou de l'incapacite d'utiliser Society.</P>
              </Section>

              <Section num="9" title="Modification des CGU">
                <P>Society se reserve le droit de modifier les presentes CGU a tout moment. En cas de modifications substantielles, les utilisateurs sont informes par e-mail au moins 30 jours avant l'entree en vigueur des nouvelles conditions.</P>
                <P>La poursuite de l'utilisation de la plateforme apres notification des modifications vaut acceptation des nouvelles CGU. Si vous refusez les nouvelles conditions, vous pouvez resilier votre abonnement avant leur entree en vigueur et obtenir le remboursement au prorata de la periode non consommee.</P>
              </Section>

              <Section num="10" title="Droit applicable et juridiction">
                <P>Les presentes CGU sont soumises au droit ivoirien, notamment :</P>
                <Ul items={[
                  'La loi ivoirienne n° 2013-450 du 19 juin 2013 relative a la protection des donnees personnelles',
                  'La loi ivoirienne n° 2013-451 du 19 juin 2013 relative a la lutte contre la cybercriminalite',
                  'Le code de commerce ivoirien',
                  'Les reglements de l\'UEMOA et de la BCEAO applicables aux services de paiement',
                ]} />
                <P>En cas de litige relatif a l'interpretation ou a l'execution des presentes CGU, les parties s'engagent a rechercher une solution amiable. A defaut d'accord dans un delai de 30 jours, le litige sera soumis aux tribunaux competents d'Abidjan (Cote d'Ivoire).</P>
                <div style={{ marginTop: 24, padding: '20px 24px', background: '#F8F8F8', borderRadius: 16 }}>
                  <div style={{ fontSize: 13, color: '#6B6B6B', marginBottom: 8 }}>Pour toute question relative aux presentes CGU :</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#14110D' }}>legal@society.ci</div>
                  <div style={{ fontSize: 13, color: '#9B9B9B', marginTop: 4 }}>Difero Fundry SARL — Plateau, Abidjan, Cote d'Ivoire</div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end hidden */}

      <Footer />
    </div>
  )
}
