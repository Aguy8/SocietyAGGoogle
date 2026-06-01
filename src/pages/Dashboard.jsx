import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'
import { api } from '../api/client.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function Dashboard() {
  const { admin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  const [communities, setCommunities] = useState([])
  const [stats, setStats] = useState(null)
  const [selected, setSelected] = useState(null)
  const [members, setMembers] = useState([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [showAddMember, setShowAddMember] = useState(false)
  const [memberForm, setMemberForm] = useState({ nom: '', prenom: '', email: '', telephone: '', role: 'Membre' })
  const [memberError, setMemberError] = useState('')

  useEffect(() => {
    loadData()
  }, [search, typeFilter])

  async function loadData() {
    setLoading(true)
    try {
      const params = {}
      if (search) params.search = search
      if (typeFilter) params.type = typeFilter
      const [comms, s] = await Promise.all([api.communities.list(params), api.communities.stats()])
      setCommunities(comms)
      setStats(s)
    } catch {
      // backend may be offline
    }
    setLoading(false)
  }

  async function selectCommunity(c) {
    setSelected(c)
    setShowAddMember(false)
    try {
      const m = await api.members.list(c.id)
      setMembers(m)
    } catch {
      setMembers([])
    }
  }

  async function deleteCommunity(id) {
    if (!confirm('Supprimer cette communauté ? Cette action est irréversible.')) return
    await api.communities.delete(id)
    if (selected?.id === id) { setSelected(null); setMembers([]) }
    loadData()
  }

  async function addMember(e) {
    e.preventDefault()
    if (!memberForm.nom.trim()) { setMemberError('Le nom est requis'); return }
    setMemberError('')
    try {
      await api.members.add(selected.id, memberForm)
      setMemberForm({ nom: '', prenom: '', email: '', telephone: '', role: 'Membre' })
      setShowAddMember(false)
      const m = await api.members.list(selected.id)
      setMembers(m)
    } catch (err) {
      setMemberError(err.message)
    }
  }

  async function deleteMember(memberId) {
    if (!confirm('Supprimer ce membre ?')) return
    await api.members.delete(selected.id, memberId)
    const m = await api.members.list(selected.id)
    setMembers(m)
  }

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '60px 64px 120px' }}>
        <div className="container">
          {/* Admin bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, padding: '12px 20px', background: '#14110D', borderRadius: 14, flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: '#1A2BFF', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800, color: 'white' }}>
                {admin?.nom?.charAt(0) || 'A'}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{admin?.nom || 'Admin'}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{admin?.email} · {admin?.role}</div>
              </div>
            </div>
            <button onClick={handleLogout} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              Déconnexion
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">Administration</span>
              <h1 style={{ fontSize: 64, marginTop: 16, lineHeight: 0.95 }}>Dashboard</h1>
            </div>
            <NavLink to="/inscription" className="btn btn-primary">
              + Nouvelle communauté <Icon name="arrow" size={14} color="white" />
            </NavLink>
          </div>

          {/* Stats globales */}
          {stats && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 48 }}>
              {[
                { v: stats.total_communities, l: 'Communautés', color: '#1A2BFF' },
                { v: stats.total_membres, l: 'Membres au total', color: '#1A2BFF' },
                { v: stats.by_type?.length || 0, l: 'Types actifs', color: '#14110D' },
                { v: stats.by_pays?.[0]?.pays || '—', l: 'Pays principal', color: '#1A2BFF' },
              ].map((s, i) => (
                <div key={i} style={{ padding: 28, background: 'white', borderRadius: 20, border: '1px solid #E5E5E5', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', color: s.color }}>{s.v}</div>
                  <div style={{ fontSize: 14, color: '#6B6B6B', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: 32 }}>
            {/* Liste communautés */}
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                <input type="search" placeholder="Rechercher une communauté..." value={search} onChange={e => setSearch(e.target.value)}
                  style={{ flex: 1, padding: '12px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 14, fontFamily: 'inherit', outline: 'none', minWidth: 200 }} />
                <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}
                  style={{ padding: '12px 18px', border: '1.5px solid #E5E5E5', borderRadius: 12, fontSize: 14, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                  <option value="">Tous les types</option>
                  {['ONG & Associations', 'Mutuelles & Tontines', 'Alumni & Jeunesse', 'Réseaux Professionnels', 'Groupes Religieux', 'Leaders & Influenceurs', 'Communauté'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {loading ? (
                <div style={{ padding: 40, textAlign: 'center', color: '#6B6B6B' }}>Chargement...</div>
              ) : communities.length === 0 ? (
                <div style={{ padding: 60, textAlign: 'center', background: '#F8F8F8', borderRadius: 20 }}>
                  <div style={{ marginBottom: 16 }}><Icon name="globe" size={40} color="#6B6B6B" /></div>
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Aucune communauté</div>
                  <div style={{ color: '#6B6B6B', marginBottom: 24 }}>Inscrivez votre première communauté pour commencer.</div>
                  <NavLink to="/inscription" className="btn btn-primary">Inscrire une communauté</NavLink>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {communities.map(c => (
                    <div key={c.id} onClick={() => selectCommunity(c)}
                      style={{ padding: 20, background: selected?.id === c.id ? '#F4F7FE' : 'white', border: `1.5px solid ${selected?.id === c.id ? '#1A2BFF' : '#E5E5E5'}`, borderRadius: 16, cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: c.couleur || '#1A2BFF', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.nom}</div>
                        <div style={{ fontSize: 13, color: '#6B6B6B' }}>{c.type} · {c.ville}, {c.pays}</div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                          <span style={{ padding: '2px 8px', background: '#E8EFFC', color: '#1A2BFF', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>Plan {c.plan}</span>
                          <span style={{ padding: '2px 8px', background: '#F2F2F2', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{c.total_membres} membres</span>
                        </div>
                      </div>
                      <button onClick={ev => { ev.stopPropagation(); deleteCommunity(c.id) }}
                        style={{ padding: '6px 12px', background: '#FFF5F5', color: '#1A2BFF', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                        Suppr.
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Détail membres */}
            {selected && (
              <div>
                <div style={{ padding: 24, background: 'white', borderRadius: 20, border: '1px solid #E5E5E5', marginBottom: 20 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: selected.couleur || '#1A2BFF', flexShrink: 0 }} />
                    <div>
                      <h2 style={{ fontSize: 24, margin: 0 }}>{selected.nom}</h2>
                      <div style={{ fontSize: 14, color: '#6B6B6B' }}>{selected.type} · {selected.ville}, {selected.pays}</div>
                    </div>
                    <button onClick={() => setSelected(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#6B6B6B' }}>×</button>
                  </div>
                  {selected.description && (
                    <p style={{ fontSize: 14, color: '#4A4438', marginTop: 16, lineHeight: 1.5, marginBottom: 0 }}>{selected.description}</p>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ margin: 0, fontSize: 18 }}>Membres ({members.length})</h3>
                  <button onClick={() => setShowAddMember(!showAddMember)} className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>
                    + Ajouter
                  </button>
                </div>

                {showAddMember && (
                  <form onSubmit={addMember} style={{ padding: 24, background: '#F8F8F8', borderRadius: 16, marginBottom: 16, display: 'grid', gap: 14 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Nouveau membre</div>
                    {memberError && <div style={{ fontSize: 13, color: '#1A2BFF' }}>{memberError}</div>}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <input type="text" placeholder="Nom *" value={memberForm.nom} onChange={e => setMemberForm(f => ({ ...f, nom: e.target.value }))}
                        style={{ padding: '12px 16px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
                      <input type="text" placeholder="Prénom" value={memberForm.prenom} onChange={e => setMemberForm(f => ({ ...f, prenom: e.target.value }))}
                        style={{ padding: '12px 16px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
                    </div>
                    <input type="email" placeholder="Email" value={memberForm.email} onChange={e => setMemberForm(f => ({ ...f, email: e.target.value }))}
                      style={{ padding: '12px 16px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <input type="tel" placeholder="Téléphone" value={memberForm.telephone} onChange={e => setMemberForm(f => ({ ...f, telephone: e.target.value }))}
                        style={{ padding: '12px 16px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none' }} />
                      <select value={memberForm.role} onChange={e => setMemberForm(f => ({ ...f, role: e.target.value }))}
                        style={{ padding: '12px 16px', border: '1.5px solid #E5E5E5', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                        {['Membre', 'Administrateur', 'Modérateur', 'Trésorier', 'Bénévole', 'Fondateur'].map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                      <button type="button" onClick={() => setShowAddMember(false)} style={{ padding: '10px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#6B6B6B' }}>Annuler</button>
                      <button type="submit" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>Ajouter le membre</button>
                    </div>
                  </form>
                )}

                {members.length === 0 ? (
                  <div style={{ padding: 32, textAlign: 'center', background: '#F8F8F8', borderRadius: 16, color: '#6B6B6B' }}>
                    Aucun membre pour l'instant. Ajoutez le premier membre.
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: 10 }}>
                    {members.map(m => (
                      <div key={m.id} style={{ padding: '16px 20px', background: 'white', border: '1px solid #E5E5E5', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E8EFFC', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14, color: '#1A2BFF', flexShrink: 0 }}>
                          {m.nom?.[0]?.toUpperCase()}{m.prenom?.[0]?.toUpperCase() || ''}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 15 }}>{m.prenom} {m.nom}</div>
                          <div style={{ fontSize: 12, color: '#6B6B6B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.email || m.telephone || '—'}</div>
                        </div>
                        <span style={{ padding: '4px 12px', background: '#F2F2F2', borderRadius: 999, fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{m.role}</span>
                        <button onClick={() => deleteMember(m.id)}
                          style={{ padding: '4px 10px', background: '#FFF5F5', color: '#1A2BFF', border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
