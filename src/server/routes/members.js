const express = require('express')
const router = express.Router({ mergeParams: true })
const db = require('../db')

// GET members of a community
router.get('/', (req, res) => {
  const membres = db.prepare(
    'SELECT * FROM membres WHERE community_id = ? ORDER BY created_at DESC'
  ).all(req.params.communityId)
  res.json(membres)
})

// POST add member
router.post('/', (req, res) => {
  const { nom, prenom, email, telephone, pays, ville, role } = req.body
  const cid = req.params.communityId
  if (!nom) return res.status(400).json({ error: 'Le nom est requis' })
  const community = db.prepare('SELECT id FROM communities WHERE id = ?').get(cid)
  if (!community) return res.status(404).json({ error: 'Communauté non trouvée' })
  const result = db.prepare(
    'INSERT INTO membres (community_id, nom, prenom, email, telephone, pays, ville, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  ).run(cid, nom, prenom || '', email || '', telephone || '', pays || '', ville || '', role || 'Membre')
  res.status(201).json({ id: result.lastInsertRowid, message: 'Membre ajouté' })
})

// PUT update member
router.put('/:memberId', (req, res) => {
  const { nom, prenom, email, telephone, pays, ville, role, statut } = req.body
  db.prepare(
    'UPDATE membres SET nom=?, prenom=?, email=?, telephone=?, pays=?, ville=?, role=?, statut=? WHERE id=? AND community_id=?'
  ).run(nom, prenom, email, telephone, pays, ville, role, statut, req.params.memberId, req.params.communityId)
  res.json({ message: 'Membre mis à jour' })
})

// DELETE member
router.delete('/:memberId', (req, res) => {
  db.prepare('DELETE FROM membres WHERE id = ? AND community_id = ?')
    .run(req.params.memberId, req.params.communityId)
  res.json({ message: 'Membre supprimé' })
})

module.exports = router
