import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'portfolio' with your exact GitHub repository name!
export default defineConfig({
  base: '/portfolio/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})