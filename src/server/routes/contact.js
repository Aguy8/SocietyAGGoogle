const express = require('express')
const router = express.Router()
const db = require('../db')

// POST new message
router.post('/', (req, res) => {
  const { nom, email, sujet, message } = req.body
  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis' })
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide' })
  }
  const result = db.prepare(
    'INSERT INTO contact_messages (nom, email, sujet, message) VALUES (?, ?, ?, ?)'
  ).run(nom, email, sujet || '', message)
  res.status(201).json({ id: result.lastInsertRowid, message: 'Message reçu' })
})

// GET all messages (admin)
router.get('/', (req, res) => {
  const messages = db.prepare(
    'SELECT * FROM contact_messages ORDER BY created_at DESC'
  ).all()
  res.json({ total: messages.length, messages })
})

// PATCH mark as read
router.patch('/:id/lu', (req, res) => {
  db.prepare("UPDATE contact_messages SET statut = 'lu' WHERE id = ?").run(req.params.id)
  res.json({ message: 'Message marqué comme lu' })
})

module.exports = router
