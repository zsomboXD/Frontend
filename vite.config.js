import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    global: true,
    environment:'jsdom',
    setupFiles:'./src/tests/setup.js',
    css:true,
    reporters:[
      'default',
      ['json',{outputFile:'results.json'}]
    ]
  },
});