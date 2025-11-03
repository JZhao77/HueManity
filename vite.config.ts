import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,    // The port your dev server runs on
    open: false,     // Automatically open browser when starting
  },
  build: {
    outDir: 'dist',  // Where your production build goes
    sourcemap: true  // Generate sourcemaps for debugging
  }
})