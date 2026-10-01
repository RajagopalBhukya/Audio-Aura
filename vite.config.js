import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves this repo from a sub-path (/Audio-Aura/); Vercel (and any
// custom domain / local dev) serves from the domain root (/).
// `vite build --mode ghpages` -> sub-path build.   Everything else -> root build.
const GH_PAGES_BASE = '/Audio-Aura/'

// GitHub Pages has no SPA rewrites. Serving index.html as 404.html makes deep
// links (e.g. /Audio-Aura/cart) and page refreshes load the app instead of a 404.
const ghPagesSpaFallback = () => ({
  name: 'gh-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
  },
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGhPages = mode === 'ghpages'
  return {
    plugins: [react(), ...(isGhPages ? [ghPagesSpaFallback()] : [])],
    base: isGhPages ? GH_PAGES_BASE : '/',
  }
})
