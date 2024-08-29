// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Asegúrate de que el contenido está bien configurado
  server: {
    port: 5173,
  },
});