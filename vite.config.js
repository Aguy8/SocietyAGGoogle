import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel: base = '/' (défaut). GitHub Pages: set VITE_BASE_PATH=/Society.ci/ via env.
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
