const Database = require('better-sqlite3')
const bcrypt = require('bcryptjs')
const path = require('path')

const dbPath = process.env.DB_PATH || path.join(__dirname, '../../society.db')
const db = new Database(dbPath)

db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    nom TEXT,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS communities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    pays TEXT DEFAULT 'Côte d''Ivoire',
    ville TEXT,
    membres_count TEXT,
    couleur TEXT DEFAULT '#0E47AB',
    statut TEXT DEFAULT 'actif',
    plan TEXT DEFAULT 'Starter',
    modules TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS fondateurs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT,
    email TEXT NOT NULL,
    telephone TEXT,
    role TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS membres (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    community_id INTEGER NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT,
    email TEXT,
    telephone TEXT,
    pays TEXT,
    ville TEXT,
    role TEXT DEFAULT 'Membre',
    statut TEXT DEFAULT 'actif',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (community_id) REFERENCES communities(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS newsletter_abonnes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    nom TEXT,
    prenom TEXT,
    source TEXT DEFAULT 'site',
    statut TEXT DEFAULT 'actif',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL,
    sujet TEXT,
    message TEXT NOT NULL,
    statut TEXT DEFAULT 'nouveau',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

// Seed admin par défaut si aucun n'existe
const adminCount = db.prepare('SELECT COUNT(*) as n FROM admins').get().n
if (adminCount === 0) {
  const hash = bcrypt.hashSync('Society2026!', 10)
  db.prepare('INSERT INTO admins (email, password_hash, nom, role) VALUES (?, ?, ?, ?)').run(
    'admin@society.ci', hash, 'Ange-Samuel KEKE', 'superadmin'
  )
  console.log('\n🔐 Compte admin créé par défaut :')
  console.log('   Email    : admin@society.ci')
  console.log('   Mot de passe : Society2026!')
  console.log('   → Changez ce mot de passe dès la première connexion.\n')
}

module.exports = db
