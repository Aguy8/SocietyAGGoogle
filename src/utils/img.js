/**
 * Retourne une URL d'image utilisable dans <img src={...}>
 *
 * Supporte :
 *   - Fichiers locaux dans public/img/  → img('mon-image.jpg')
 *   - URL complètes (Unsplash, Drive…)  → img('https://...')
 *   - Google Drive (FILE_ID seul)       → img('1aBcDeFgHiJkLmN...', 'drive')
 */
export function img(src, type = 'auto') {
  if (!src) return ''

  // URL complète — retournée telle quelle
  if (src.startsWith('http://') || src.startsWith('https://')) {
    // Conversion automatique d'un lien de partage Drive en lien direct
    const driveShare = src.match(/drive\.google\.com\/file\/d\/([^/]+)/)
    if (driveShare) {
      return `https://drive.google.com/uc?export=view&id=${driveShare[1]}`
    }
    return src
  }

  // Google Drive FILE_ID seul
  if (type === 'drive') {
    return `https://drive.google.com/uc?export=view&id=${src}`
  }

  // Fichier local dans public/img/
  return `/img/${src}`
}
