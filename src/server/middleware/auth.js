const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET || 'society-secret-change-in-production'

function requireAuth(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentification requise' })
  }
  const token = header.slice(7)
  try {
    req.admin = jwt.verify(token, SECRET)
    next()
  } catch {
    return res.status(401).json({ error: 'Session expirée — reconnectez-vous' })
  }
}

module.exports = { requireAuth, SECRET }
