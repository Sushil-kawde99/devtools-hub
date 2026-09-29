import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration for React application
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
