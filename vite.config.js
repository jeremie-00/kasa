import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://jeremie-00.github.io/kasa/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages/')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components/')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/layouts')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets/')
      },
      {
        find: '@roots',
        replacement: path.resolve(__dirname, 'src/roots/')
      }
    ]
  }
})
