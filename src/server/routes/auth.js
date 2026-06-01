const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const db = require('../db')
const { requireAuth, SECRET } = require('../middleware/auth')

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email et mot de passe requis' })

  const admin = db.prepare('SELECT * FROM admins WHERE email = ?').get(email.toLowerCase().trim())
  if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
    return res.status(401).json({ error: 'Identifiants incorrects' })
  }

  const token = jwt.sign(
    { id: admin.id, email: admin.email, nom: admin.nom, role: admin.role },
    SECRET,
    { expiresIn: '7d' }
  )

  res.json({
    token,
    admin: { id: admin.id, email: admin.email, nom: admin.nom, role: admin.role },
  })
})

// GET /api/auth/me — valide le token et retourne l'admin connecté
router.get('/me', requireAuth, (req, res) => {
  const admin = db.prepare('SELECT id, email, nom, role, created_at FROM admins WHERE id = ?').get(req.admin.id)
  if (!admin) return res.status(404).json({ error: 'Compte introuvable' })
  res.json(admin)
})

// POST /api/auth/change-password
router.post('/change-password', requireAuth, (req, res) => {
  const { current_password, new_password } = req.body
  if (!current_password || !new_password) return res.status(400).json({ error: 'Champs requis' })
  if (new_password.length < 8) return res.status(400).json({ error: 'Le mot de passe doit faire au moins 8 caractères' })

  const admin = db.prepare('SELECT * FROM admins WHERE id = ?').get(req.admin.id)
  if (!bcrypt.compareSync(current_password, admin.password_hash)) {
    return res.status(401).json({ error: 'Mot de passe actuel incorrect' })
  }

  const hash = bcrypt.hashSync(new_password, 10)
  db.prepare('UPDATE admins SET password_hash = ? WHERE id = ?').run(hash, req.admin.id)
  res.json({ message: 'Mot de passe mis à jour' })
})

module.exports = router
