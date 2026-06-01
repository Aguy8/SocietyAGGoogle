const express = require('express')
const router = express.Router()
const db = require('../db')

// GET all communities
router.get('/', (req, res) => {
  const { type, pays, search } = req.query
  let q = 'SELECT c.*, COUNT(m.id) as total_membres FROM communities c LEFT JOIN membres m ON m.community_id = c.id'
  const conds = [], params = []
  if (type)   { conds.push('c.type = ?');   params.push(type) }
  if (pays)   { conds.push('c.pays = ?');   params.push(pays) }
  if (search) { conds.push('c.nom LIKE ?'); params.push(`%${search}%`) }
  if (conds.length) q += ' WHERE ' + conds.join(' AND ')
  q += ' GROUP BY c.id ORDER BY c.created_at DESC'
  res.json(db.prepare(q).all(...params))
})

// GET one community with members + fondateur
router.get('/:id', (req, res) => {
  const community = db.prepare('SELECT * FROM communities WHERE id = ?').get(req.params.id)
  if (!community) return res.status(404).json({ error: 'Communauté non trouvée' })
  const membres = db.prepare('SELECT * FROM membres WHERE community_id = ? ORDER BY created_at DESC').all(req.params.id)
  const fondateur = db.prepare('SELECT * FROM fondateurs WHERE community_id = ?').get(req.params.id)
  res.json({ ...community, membres, fondateur: fondateur || null })
})

// POST create community + fondateur
router.post('/', (req, res) => {
  const {
    nom, type, description, pays, ville, membres_count, couleur, plan, modules,
    fondateur_nom, fondateur_prenom, fondateur_email, fondateur_telephone, fondateur_role,
  } = req.body

  if (!nom || !nom.trim()) return res.status(400).json({ error: 'Le nom de la communauté est requis' })
  if (!type)              return res.status(400).json({ error: 'Le type est requis' })

  const insertCommunity = db.transaction(() => {
    const r = db.prepare(
      'INSERT INTO communities (nom, type, description, pays, ville, membres_count, couleur, plan, modules) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    ).run(
      nom.trim(), type, description || '', pays || "Côte d'Ivoire",
      ville || '', membres_count || '', couleur || '#0E47AB',
      plan || 'Starter', modules ? JSON.stringify(modules) : null
    )
    const communityId = r.lastInsertRowid

    if (fondateur_nom && fondateur_email) {
      db.prepare(
        'INSERT INTO fondateurs (community_id, nom, prenom, email, telephone, role) VALUES (?, ?, ?, ?, ?, ?)'
      ).run(communityId, fondateur_nom, fondateur_prenom || '', fondateur_email, fondateur_telephone || '', fondateur_role || '')
    }

    return communityId
  })

  const id = insertCommunity()
  res.status(201).json({ id, message: 'Communauté créée avec succès' })
})

// PUT update community
router.put('/:id', (req, res) => {
  const { nom, type, description, pays, ville, membres_count, couleur, statut, plan } = req.body
  const result = db.prepare(
    'UPDATE communities SET nom=?, type=?, description=?, pays=?, ville=?, membres_count=?, couleur=?, statut=?, plan=? WHERE id=?'
  ).run(nom, type, description, pays, ville, membres_count, couleur, statut, plan, req.params.id)
  if (result.changes === 0) return res.status(404).json({ error: 'Communauté non trouvée' })
  res.json({ message: 'Communauté mise à jour' })
})

// DELETE community
router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM communities WHERE id = ?').run(req.params.id)
  if (result.changes === 0) return res.status(404).json({ error: 'Communauté non trouvée' })
  res.json({ message: 'Communauté supprimée' })
})

// GET global stats
router.get('/_stats/global', (req, res) => {
  const total_communities = db.prepare('SELECT COUNT(*) as n FROM communities').get().n
  const total_membres     = db.prepare('SELECT COUNT(*) as n FROM membres').get().n
  const total_newsletter  = db.prepare("SELECT COUNT(*) as n FROM newsletter_abonnes WHERE statut='actif'").get().n
  const total_messages    = db.prepare("SELECT COUNT(*) as n FROM contact_messages WHERE statut='nouveau'").get().n
  const by_type = db.prepare('SELECT type, COUNT(*) as n FROM communities GROUP BY type ORDER BY n DESC').all()
  const by_pays = db.prepare('SELECT pays, COUNT(*) as n FROM communities GROUP BY pays ORDER BY n DESC LIMIT 10').all()
  const recent  = db.prepare('SELECT id, nom, type, pays, created_at FROM communities ORDER BY created_at DESC LIMIT 5').all()
  res.json({ total_communities, total_membres, total_newsletter, total_messages, by_type, by_pays, recent })
})

module.exports = router
