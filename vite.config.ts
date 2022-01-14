import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  build: {
    outDir: 'build'
  },

  publicDir: 'public',

  plugins: [reactRefresh(), vanillaExtractPlugin()]
})
