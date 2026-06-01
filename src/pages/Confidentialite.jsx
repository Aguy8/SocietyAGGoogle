import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const Section = ({ num, title, children }) => (
  <div style={{ marginBottom: 56 }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: '#E8F0FD', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 14, color: '#1A2BFF' }}>
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

export default function Confidentialite() {
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
            Politique de confidentialité<br />
            <span style={{ color: '#1A2BFF' }}>en cours de finalisation.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginTop: 28, maxWidth: 520, lineHeight: 1.65 }}>
            Notre politique de confidentialité est en cours de validation. Pour toute question sur vos données, contactez-nous directement.
          </p>
          <div style={{ marginTop: 48 }}>
            <NavLink to="/contact" className="btn btn-primary btn-xl">
              Contacter l'équipe →
            </NavLink>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
      <section data-nav-theme="dark" style={{ padding: '120px 64px 64px', background: '#14110D' }}>
        <div className="container">
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: '#1A2BFF', display: 'block', marginBottom: 20 }}>POLITIQUE DE CONFIDENTIALITE</span>
          <h1 style={{ fontSize: 72, lineHeight: 0.92, color: 'white', fontWeight: 900, maxWidth: 800 }}>
            Vos donnees vous<br />
            <span style={{ color: '#1A2BFF' }}>appartiennent.</span>
          </h1>
          <p style={{ fontSize: 17, marginTop: 28, color: 'rgba(255,255,255,0.7)', maxWidth: 620, lineHeight: 1.65 }}>
            Chez Society, la protection de vos donnees personnelles n'est pas une obligation reglementaire — c'est une valeur fondamentale. Cette politique explique clairement quelles donnees nous collectons, pourquoi, comment nous les utilisons et comment vous les controlez.
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Entree en vigueur : </span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>1er janvier 2026</span>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Version : </span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>2.1.0</span>
            </div>
            <div style={{ padding: '12px 20px', background: 'rgba(212,167,91,0.15)', border: '1px solid rgba(212,167,91,0.2)', borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: '#1A2BFF', fontWeight: 600 }}>Conforme RGPD · Loi CI n° 2013-450</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 64px 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 32 }}>
              <div style={{ padding: '28px', background: '#F8F8F8', borderRadius: 20, border: '1px solid #EBEBEB' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: '#6B6B6B', marginBottom: 16 }}>SOMMAIRE</div>
                <div style={{ display: 'grid', gap: 4 }}>
                  {[
                    '1. Responsable du traitement',
                    '2. Donnees collectees',
                    '3. Finalites du traitement',
                    '4. Bases legales',
                    '5. Durees de conservation',
                    '6. Destinataires',
                    '7. Transferts hors Afrique',
                    '8. Vos droits',
                    '9. Cookies',
                    '10. Contact DPD',
                  ].map((item, i) => (
                    <button key={i} style={{ padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 13, color: '#4A4438', borderRadius: 8, lineHeight: 1.4 }}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ maxWidth: 680 }}>
              <Section num="1" title="Responsable du traitement">
                <P>Le responsable du traitement de vos donnees personnelles est :</P>
                <div style={{ padding: '20px 24px', background: '#F8F8F8', borderRadius: 16, marginBottom: 16 }}>
                  <strong>Difero Fundry SARL</strong><br />
                  Immeuble CCIA, Avenue Marchand, Plateau, Abidjan — Cote d'Ivoire<br />
                  RCCM : CI-ABJ-2025-B-12847<br />
                  E-mail : legal@society.ci
                </div>
                <P>Notre Delegue a la Protection des Donnees (DPD) est contactable a : <strong>dpo@society.ci</strong></P>
              </Section>

              <Section num="2" title="Donnees collectees">
                <P>Nous collectons les categories de donnees suivantes :</P>
                <div style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
                  {[
                    { cat: 'Donnees d\'identite', exemples: 'Nom, prenom, photo de profil, date de naissance' },
                    { cat: 'Donnees de contact', exemples: 'Adresse e-mail, numero de telephone, pays de residence' },
                    { cat: 'Donnees de compte', exemples: 'Identifiant, mot de passe (hache), preferences, roles au sein des communautes' },
                    { cat: 'Donnees de paiement', exemples: 'Numero de telephone Mobile Money (jamais les codes secrets), historique des transactions' },
                    { cat: 'Donnees d\'utilisation', exemples: 'Pages visitees, fonctionnalites utilisees, duree des sessions, actions dans l\'application' },
                    { cat: 'Donnees techniques', exemples: 'Adresse IP, type de navigateur, systeme d\'exploitation, identifiant de l\'appareil' },
                    { cat: 'Donnees de communication', exemples: 'Messages envoyes dans les canaux de votre communaute, fichiers partages' },
                  ].map((d, i) => (
                    <div key={i} style={{ padding: '16px 20px', background: '#F8F8F8', borderRadius: 12, display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#14110D' }}>{d.cat}</div>
                      <div style={{ fontSize: 13, color: '#6B6B6B' }}>{d.exemples}</div>
                    </div>
                  ))}
                </div>
                <P><strong>Ce que nous ne collectons pas :</strong> nous ne collectons jamais vos codes secrets, mots de passe bancaires, donnees biometriques, ni aucune donnee de sante.</P>
              </Section>

              <Section num="3" title="Finalites du traitement">
                <P>Vos donnees sont traitees pour les finalites suivantes :</P>
                <Ul items={[
                  'Creation et gestion de votre compte utilisateur Society',
                  'Fourniture des services de la plateforme (gestion communautaire, cotisations, evenements)',
                  'Traitement des paiements et des collectes de fonds',
                  'Envoi de notifications, rappels et communications lies a votre activite',
                  "Amelioration de la plateforme et personnalisation de l'experience utilisateur",
                  'Support technique et reponse a vos demandes',
                  'Respect de nos obligations legales et reglementaires',
                  'Prevention de la fraude et securite de la plateforme',
                  'Etablissement de statistiques agregees et anonymisees sur l\'utilisation',
                ]} />
              </Section>

              <Section num="4" title="Bases legales du traitement">
                <div style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
                  {[
                    { base: 'Execution du contrat', desc: 'Pour fournir les services souscrits (compte, paiements, gestion de communaute)' },
                    { base: 'Obligation legale', desc: 'Conformite fiscale, lutte contre la fraude, obligations ARTCI et BCEAO' },
                    { base: 'Interet legitime', desc: 'Securite de la plateforme, prevention des abus, amelioration des services' },
                    { base: 'Consentement', desc: 'Communications marketing, cookies analytiques, partage avec partenaires tiers' },
                  ].map((b, i) => (
                    <div key={i} style={{ padding: '16px 20px', border: '1px solid #EBEBEB', borderRadius: 12, display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF' }}>{b.base}</div>
                      <div style={{ fontSize: 13, color: '#4A4438' }}>{b.desc}</div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section num="5" title="Durees de conservation">
                <Ul items={[
                  'Donnees de compte actif : duree de la relation contractuelle',
                  'Donnees de compte supprime : 30 jours (permettant la reactivation), puis suppression definitive',
                  'Donnees de paiement : 5 ans (obligation legale comptable)',
                  'Journaux techniques (logs) : 12 mois glissants',
                  "Donnees de support : 2 ans apres resolution du ticket",
                  'Donnees de cookies : 13 mois maximum',
                ]} />
              </Section>

              <Section num="6" title="Destinataires de vos donnees">
                <P>Vos donnees peuvent etre communiquees aux categories de destinataires suivants, dans le cadre strict de nos missions :</P>
                <Ul items={[
                  'Prestataires de paiement (Orange Money, Wave, MTN) pour le traitement des transactions',
                  'Hebergeur AfricaCloud Infrastructure Ltd pour le stockage securise',
                  "Prestataires d'envoi de SMS et e-mail pour les notifications",
                  'Autorites competentes en cas d\'obligation legale (ARTCI, justice)',
                  "Les autres membres de votre communaute, uniquement les informations que vous choisissez de partager",
                ]} />
                <P>Nous ne vendons jamais vos donnees a des tiers a des fins publicitaires.</P>
              </Section>

              <Section num="7" title="Transferts hors du continent africain">
                <P>Par defaut, toutes vos donnees sont traitees et stockees en Afrique (Cote d'Ivoire et Nigeria). Aucune donnee n'est transferee en dehors du continent africain sans votre accord prealable.</P>
                <P>En cas de transfert exceptionnel (ex : recours a un service technique base en Europe), nous appliquons les clauses contractuelles types reconnues par la loi ivoirienne et le RGPD, et vous en informons via notre politique de confidentialite.</P>
              </Section>

              <Section num="8" title="Vos droits">
                <P>Conformement a la loi ivoirienne n° 2013-450 et au RGPD, vous disposez des droits suivants :</P>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                  {[
                    ['Droit d\'acces', 'Obtenir une copie de toutes vos donnees'],
                    ['Droit de rectification', 'Corriger des donnees inexactes ou incompletes'],
                    ['Droit a l\'effacement', 'Supprimer votre compte et toutes vos donnees'],
                    ['Droit a la portabilite', 'Exporter vos donnees dans un format standard'],
                    ['Droit d\'opposition', 'Vous opposer a certains traitements'],
                    ['Droit de retrait', 'Retirer votre consentement a tout moment'],
                  ].map(([r, d], i) => (
                    <div key={i} style={{ padding: '16px', background: '#F8F8F8', borderRadius: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A2BFF', marginBottom: 6 }}>{r}</div>
                      <div style={{ fontSize: 13, color: '#6B6B6B' }}>{d}</div>
                    </div>
                  ))}
                </div>
                <P>Pour exercer ces droits, rendez-vous dans <strong>Parametres → Confidentialite</strong> depuis votre compte, ou contactez notre DPD.</P>
              </Section>

              <Section num="9" title="Cookies et traceurs">
                <P>Notre site utilise trois categories de cookies :</P>
                <Ul items={[
                  'Cookies strictement necessaires : essentiels au fonctionnement (authentification, panier). Ne peuvent etre refuses.',
                  'Cookies analytiques : mesurent l\'audience anonymement (Posthog, heberge sur nos serveurs). Consentement requis.',
                  'Cookies de preference : memorisent vos choix d\'interface. Consentement requis.',
                ]} />
                <P>Vous pouvez gerer vos preferences a tout moment via notre centre de gestion des cookies accessible en bas de chaque page.</P>
              </Section>

              <Section num="10" title="Contact — Delegue a la Protection des Donnees">
                <P>Pour toute question, reclamation ou exercice de vos droits, contactez notre DPD :</P>
                <div style={{ padding: '28px', background: '#1A2BFF', borderRadius: 20, color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>E-mail</div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>dpo@society.ci</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Courrier</div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>DPD — Difero Fundry SARL<br />Plateau, Abidjan, CI</div>
                  </div>
                  <div style={{ gridColumn: '1 / -1', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                    Delai de reponse : 30 jours calendaires maximum a compter de la reception de votre demande.
                  </div>
                </div>
                <P style={{ marginTop: 16 }}>Si vous estimez que vos droits ne sont pas respectes, vous avez le droit de deposer une plainte aupres de l'Autorite de Regulation des Telecommunications de Cote d'Ivoire (ARTCI).</P>
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
