import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cursos-fuseaccess/', // Cambia esto por el nombre de tu repositorio
})