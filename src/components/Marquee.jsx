const items = [
  '+150 000 communautés en CI', '•', '85 % des Ivoiriens membres d\'un groupe', '•',
  'Conçue à Abidjan, pour l\'Afrique', '•', 'Plateforme sociale à interaction communautaire',
]

export default function Marquee() {
  return (
    <div style={{ background: 'var(--cobalt)', color: 'white', padding: '14px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="marquee-track">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.02em', opacity: it === '•' ? 0.4 : 0.95, whiteSpace: 'nowrap' }}>{it}</span>
        ))}
      </div>
    </div>
  )
}
