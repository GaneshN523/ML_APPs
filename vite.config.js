import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ML_APPs/', // Replace with your repo name; note the trailing slash
})
