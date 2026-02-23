import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/

  export default defineConfig({
  
      base: '/lab-5-Signin-Signup/',
      plugins: [react()],
  
  })
