import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '902780f7-97c5-472c-abff-a8ce04c4626f-00-2c6xv0yi8uyku.sisko.replit.dev',
      'localhost',
      '.replit.dev'
    ]
  }
})
