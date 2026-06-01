const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const path = require('path')

const authRouter        = require('./routes/auth')
const communitiesRouter = require('./routes/communities')
const membersRouter     = require('./routes/members')
const newsletterRouter  = require('./routes/newsletter')
const contactRouter     = require('./routes/contact')
const { requireAuth }   = require('./middleware/auth')

const app  = express()
const PORT = process.env.PORT || 3001

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  'https://aguy8.github.io',
  'https://society-so.onrender.com',
  'https://society-w3wh.onrender.com',
]

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)
    const extra = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : []
    const all = [...allowedOrigins, ...extra]
    if (all.some(o => origin.startsWith(o))) return cb(null, true)
    cb(new Error('CORS non autorisé'))
  },
}))

app.use(express.json({ limit: '50kb' }))

// Rate limiting global (100 req / 15 min)
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false }))

// Rate limiting formulaires publics (10 req / heure)
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: 'Trop de soumissions. Réessayez dans une heure.' },
})

// Rate limiting login (5 tentatives / 15 min)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Trop de tentatives de connexion. Réessayez dans 15 minutes.' },
})

// ── Routes publiques ──────────────────────────────────────────
app.use('/api/auth', loginLimiter, authRouter)
app.post('/api/communities', communitiesRouter)        // inscription communauté (publique)
app.post('/api/newsletter', formLimiter, newsletterRouter)
app.post('/api/newsletter/desabonner', newsletterRouter)
app.post('/api/contact', formLimiter, contactRouter)

// ── Routes protégées (admin seulement) ───────────────────────
app.use('/api/communities', requireAuth, communitiesRouter)
app.use('/api/communities/:communityId/members', requireAuth, membersRouter)
app.use('/api/newsletter', requireAuth, newsletterRouter)
app.use('/api/contact', requireAuth, contactRouter)

// Health check (public)
app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date(), version: '2.0' }))

// 404 API
app.use('/api', (_, res) => res.status(404).json({ error: 'Endpoint non trouvé' }))

// Serve React frontend
const distDir = path.join(__dirname, '../../dist')
app.use(express.static(distDir))
app.get('/{*path}', (_, res) => res.sendFile(path.join(distDir, 'index.html')))

// Error handler global
app.use((err, req, res, _next) => {
  console.error('[Society API Error]', err.message)
  res.status(500).json({ error: 'Erreur interne du serveur' })
})

app.listen(PORT, () => {
  console.log(`\n🚀 Society API v2 → http://localhost:${PORT}`)
  console.log(`   POST /api/auth/login          — Connexion admin`)
  console.log(`   GET  /api/auth/me             — Admin connecté`)
  console.log(`   POST /api/communities         — Inscription (public)`)
  console.log(`   GET  /api/communities         — Liste admin (protégé)`)
  console.log(`   GET  /api/newsletter          — Abonnés (protégé)`)
  console.log(`   GET  /api/contact             — Messages (protégé)`)
  console.log(`   GET  /api/health              — Statut\n`)
})
