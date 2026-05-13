import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy dependencies into separate chunks for parallel loading
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Inline small assets to reduce HTTP requests
    assetsInlineLimit: 4096,
  },
})
