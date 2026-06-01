const BASE = import.meta.env.VITE_API_URL || '/api'

function getToken() {
  return localStorage.getItem('society_token')
}

async function req(method, path, body, auth = false) {
  const headers = {}
  if (body) headers['Content-Type'] = 'application/json'
  if (auth) {
    const token = getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === 401) {
    localStorage.removeItem('society_token')
    localStorage.removeItem('society_admin')
    window.location.href = '/#/login'
    throw new Error('Session expirée')
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Erreur serveur' }))
    throw new Error(err.error || 'Erreur serveur')
  }
  return res.json()
}

export const api = {
  auth: {
    login:          (data) => req('POST', '/auth/login', data),
    me:             ()     => req('GET', '/auth/me', null, true),
    changePassword: (data) => req('POST', '/auth/change-password', data, true),
  },
  communities: {
    list:   (params = {}) => { const qs = new URLSearchParams(params).toString(); return req('GET', `/communities${qs ? '?' + qs : ''}`, null, true) },
    get:    (id)          => req('GET', `/communities/${id}`, null, true),
    create: (data)        => req('POST', '/communities', data),          // public
    update: (id, data)    => req('PUT', `/communities/${id}`, data, true),
    delete: (id)          => req('DELETE', `/communities/${id}`, null, true),
    stats:  ()            => req('GET', '/communities/_stats/global', null, true),
  },
  members: {
    list:   (cid)        => req('GET', `/communities/${cid}/members`, null, true),
    add:    (cid, data)  => req('POST', `/communities/${cid}/members`, data, true),
    update: (cid, mid, data) => req('PUT', `/communities/${cid}/members/${mid}`, data, true),
    delete: (cid, mid)   => req('DELETE', `/communities/${cid}/members/${mid}`, null, true),
  },
  newsletter: {
    subscribe:   (data)  => req('POST', '/newsletter', data),            // public
    unsubscribe: (email) => req('POST', '/newsletter/desabonner', { email }),
    list:        ()      => req('GET', '/newsletter', null, true),
  },
  contact: {
    send:   (data) => req('POST', '/contact', data),                     // public
    list:   ()     => req('GET', '/contact', null, true),
    markLu: (id)   => req('PATCH', `/contact/${id}/lu`, null, true),
  },
  health: () => req('GET', '/health'),
}
