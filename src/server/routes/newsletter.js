const express = require('express')
const router = express.Router()
const db = require('../db')

// POST subscribe
router.post('/', (req, res) => {
  const { email, nom, prenom, source } = req.body
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide' })
  }
  const existing = db.prepare('SELECT id, statut FROM newsletter_abonnes WHERE email = ?').get(email)
  if (existing) {
    if (existing.statut === 'actif') {
      return res.status(409).json({ error: 'Cet email est déjà abonné' })
    }
    db.prepare("UPDATE newsletter_abonnes SET statut = 'actif' WHERE email = ?").run(email)
    return res.json({ message: 'Abonnement réactivé' })
  }
  db.prepare(
    'INSERT INTO newsletter_abonnes (email, nom, prenom, source) VALUES (?, ?, ?, ?)'
  ).run(email, nom || '', prenom || '', source || 'site')
  res.status(201).json({ message: 'Abonnement confirmé' })
})

// POST unsubscribe
router.post('/desabonner', (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email requis' })
  db.prepare("UPDATE newsletter_abonnes SET statut = 'inactif' WHERE email = ?").run(email)
  res.json({ message: 'Désabonnement effectué' })
})

// GET list (admin)
router.get('/', (req, res) => {
  const abonnes = db.prepare(
    "SELECT * FROM newsletter_abonnes WHERE statut = 'actif' ORDER BY created_at DESC"
  ).all()
  res.json({ total: abonnes.length, abonnes })
})

module.exports = router
