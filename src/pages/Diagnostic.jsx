import { useParams, NavLink } from 'react-router-dom'
import { SEGMENT_BY_SLUG } from '../data/segments.js'

const labelStyle = { fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6, display: 'block' }

function Field({ label, wide, tall }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={labelStyle}>{label}</span>
      <div style={{ borderBottom: '1.5px solid #C9C9C9', height: tall ? 72 : 28, width: '100%' }} />
    </div>
  )
}

function CheckItem({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{ width: 16, height: 16, border: '1.5px solid #9B9B9B', borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{label}</span>
    </div>
  )
}

function NpsScale() {
  return (
    <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
        <div key={n} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ width: '100%', aspectRatio: '1/1', border: '1.5px solid #C9C9C9', borderRadius: 8 }} />
          <span style={{ fontSize: 11, color: '#9B9B9B' }}>{n}</span>
        </div>
      ))}
    </div>
  )
}

function Section({ num, color, label, children }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 26, height: 26, background: color || 'var(--cobalt)', borderRadius: 7, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <span style={{ color: color === 'var(--hibiscus)' ? 'var(--encre)' : 'white', fontWeight: 800, fontSize: 12 }}>{num}</span>
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 800, margin: 0, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</h2>
      </div>
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: '#E5E5E5', margin: '4px 0 40px' }} />
}

export default function Diagnostic() {
  const { slug } = useParams()
  const s = slug ? SEGMENT_BY_SLUG[slug] : null
  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
  const accentColor = s?.color || 'var(--cobalt)'

  const challenges = s ? s.pbDetail : [
    'Suivi manuel des membres et cotisations',
    'Communications éparpillées sur plusieurs canaux',
    'Aucun rapport d\'impact pour les bailleurs',
    'Coordination difficile des évènements',
  ]

  return (
    <>
      {/* Barre d'action — masquée à l'impression */}
      <div className="no-print" style={{ background: 'var(--encre)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <NavLink to={s ? `/pour-qui/${slug}` : '/pour-qui'} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
          ← Retour {s ? `— ${s.nom}` : ''}
        </NavLink>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Appuyez sur Ctrl+P pour sauvegarder en PDF</span>
          <button
            onClick={() => window.print()}
            style={{ padding: '10px 22px', background: 'var(--hibiscus)', color: 'var(--encre)', border: 'none', borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger PDF
          </button>
        </div>
      </div>

      {/* Formulaire — imprimable */}
      <div style={{ maxWidth: 800, margin: '40px auto 80px', padding: '0 32px', fontFamily: 'Inter, system-ui, sans-serif', color: 'var(--encre)', fontSize: 14 }}>

        {/* En-tête */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, paddingBottom: 28, borderBottom: `2.5px solid ${accentColor}` }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--cobalt)' }}>
              Society<span style={{ color: 'var(--cobalt)' }}>.</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6B', marginTop: 3 }}>by Difero Fundry</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Formulaire de Diagnostic</div>
            <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 4 }}>{today}</div>
            {s && (
              <div style={{ marginTop: 8, padding: '3px 12px', background: accentColor, color: accentColor === 'var(--hibiscus)' ? 'var(--encre)' : 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, display: 'inline-block' }}>
                {s.nom}
              </div>
            )}
          </div>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1 }}>Diagnostic Communautaire</h1>
        <p style={{ color: '#6B6B6B', fontSize: 14, marginBottom: 44, lineHeight: 1.65, maxWidth: 560 }}>
          Ce formulaire nous aide à cerner vos besoins, vos contraintes, vos ambitions. À votre rythme — 15 minutes suffisent. Renvoyez-le par email ou lors de l'entretien.
        </p>

        {/* PARTIE 1 */}
        <Section num="1" color={accentColor} label="Votre organisation">
          <div style={{ display: 'grid', gap: 18 }}>
            <Field label="Nom de l'organisation" wide />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <Field label="Responsable (nom & prénom)" />
              <Field label="Poste / Fonction" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <Field label="Email" />
              <Field label="Téléphone" />
            </div>
            <div>
              <span style={labelStyle}>Type d'organisation</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', marginTop: 4 }}>
                {['ONG / Association', 'Mutuelle / Tontine', 'Alumni / Jeunesse', 'Réseau Professionnel', 'Groupe Religieux', 'Leader / Créateur', 'Autre : _____________'].map(t => (
                  <CheckItem key={t} label={t} />
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              <Field label="Nombre de membres actifs" />
              <Field label="Ancienneté (années)" />
              <Field label="Localisation principale" />
            </div>
          </div>
        </Section>

        <Divider />

        {/* PARTIE 2 */}
        <Section num="2" color="#C23B5A" label="Vos défis actuels">
          <p style={{ fontSize: 13, color: '#6B6B6B', marginBottom: 14 }}>Cochez tout ce qui correspond à votre situation actuelle</p>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              ...challenges,
              'Difficulté à retenir et engager les membres sur le long terme',
              'Aucune visibilité sur l\'activité réelle de vos membres',
              'Autre : ___________________________________________________',
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: i % 2 === 0 ? '#FFF8F8' : '#F8F8F8', borderRadius: 10 }}>
                <div style={{ width: 16, height: 16, border: '1.5px solid #9B9B9B', borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, lineHeight: 1.45 }}>{c}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* PARTIE 3 */}
        <Section num="3" color='var(--hibiscus)' label="Outils utilisés actuellement">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 32px' }}>
            {['WhatsApp / Telegram', 'Excel / Google Sheets', 'Facebook / Instagram', 'Email / Mailchimp', 'Orange Money / Wave', 'Registres papier / carnets', 'Aucun outil structuré', 'Autre : ___________________'].map(t => (
              <CheckItem key={t} label={t} />
            ))}
          </div>
        </Section>

        <Divider />

        {/* PARTIE 4 */}
        <Section num="4" color="#5C2E91" label="Vos priorités">
          <p style={{ fontSize: 13, color: '#6B6B6B', marginBottom: 14 }}>Classez de 1 (priorité absolue) à 5 — inscrivez le chiffre dans la case</p>
          <div style={{ display: 'grid', gap: 8 }}>
            {[
              'Automatiser les finances et le suivi des cotisations',
              'Améliorer la communication interne avec les membres',
              'Produire des rapports d\'impact pour les donateurs / partenaires',
              'Organiser des événements et activités de manière professionnelle',
              'Monétiser la communauté et générer des revenus propres',
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', background: '#F8F8F8', borderRadius: 10, border: '1px solid #E5E5E5' }}>
                <div style={{ width: 40, height: 28, border: '1.5px solid #C9C9C9', borderRadius: 6, flexShrink: 0 }} />
                <span style={{ fontSize: 14 }}>{p}</span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* PARTIE 5 — NPS */}
        <Section num="5" color='var(--acacia)' label="Évaluation & intérêt pour Society">
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
              Sur une échelle de 1 à 10, dans quelle mesure pensez-vous que Society peut résoudre vos problèmes ?
            </p>
            <p style={{ fontSize: 12, color: '#6B6B6B', marginBottom: 8 }}>1 = pas du tout / 10 = absolument</p>
            <NpsScale />
          </div>

          <div style={{ marginBottom: 24 }}>
            <span style={labelStyle}>Budget mensuel envisageable pour un outil de gestion communautaire</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', marginTop: 8 }}>
              {['0 FCFA (plan gratuit uniquement)', '5 000 – 15 000 FCFA / mois', '15 000 – 30 000 FCFA / mois', '+ 30 000 FCFA / mois (plan Institution)'].map(b => (
                <CheckItem key={b} label={b} />
              ))}
            </div>
          </div>

          <div style={{ padding: 24, background: '#F0F4FF', borderRadius: 16, border: '1.5px solid rgba(26,43,255,0.15)' }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--cobalt)', marginBottom: 4 }}>
              Score NPS — Si Society répondait pleinement à vos attentes…
            </p>
            <p style={{ fontSize: 13, color: '#4A4438', marginBottom: 0 }}>
              Sur 10, quelle est la probabilité que vous recommandiez Society à une autre communauté ?
            </p>
            <NpsScale />
          </div>
        </Section>

        <Divider />

        {/* PARTIE 6 */}
        <Section num="6" color='var(--encre)' label="Prochaines étapes">
          <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
            {[
              'Je suis intéressé(e) par un appel découverte avec l\'équipe Society (30 min)',
              'Je souhaite un entretien en présentiel à Abidjan',
              'Je préfère d\'abord tester en autonomie (plan gratuit — inscription sur aguy8.github.io/Society.ci)',
              'Je souhaite être recontacté(e) pour un devis plan Institution',
              'Je souhaitez partager ce formulaire avec d\'autres membres de mon équipe',
            ].map((opt, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 16px', background: '#F8F8F8', borderRadius: 10 }}>
                <div style={{ width: 18, height: 18, border: '1.5px solid #9B9B9B', borderRadius: '50%', flexShrink: 0 }} />
                <span style={{ fontSize: 14 }}>{opt}</span>
              </div>
            ))}
          </div>

          <Field label="Créneau préféré pour l'appel ou l'entretien" wide />
          <div style={{ marginTop: 16 }} />
          <Field label="Commentaires libres — besoins spécifiques, questions, contexte supplémentaire" wide tall />

          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <div style={{ height: 1, background: 'var(--encre)', marginBottom: 8 }} />
              <span style={{ fontSize: 11, color: '#6B6B6B' }}>Signature</span>
            </div>
            <div>
              <div style={{ height: 1, background: 'var(--encre)', marginBottom: 8 }} />
              <span style={{ fontSize: 11, color: '#6B6B6B' }}>Date</span>
            </div>
          </div>
        </Section>

        {/* Pied de page */}
        <div style={{ borderTop: '1.5px solid #E5E5E5', paddingTop: 24, marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cobalt)' }}>Society<span style={{ color: 'var(--cobalt)' }}>.</span></div>
            <div style={{ fontSize: 11, color: '#6B6B6B', marginTop: 2 }}>by Difero Fundry · Abidjan, Côte d'Ivoire</div>
          </div>
          <div style={{ fontSize: 12, color: '#6B6B6B', textAlign: 'right', lineHeight: 1.7 }}>
            <div>Retournez ce formulaire à : <strong>angesamuelkeke@gmail.com</strong></div>
            <div>Ou inscrivez-vous directement sur <strong>aguy8.github.io/Society.ci</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}
