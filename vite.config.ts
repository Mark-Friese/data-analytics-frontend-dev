import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Keep this for lucide-react optimization
    include: ['d3']
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts', 'd3'],
          utils: ['lodash', 'date-fns'],
        },
      },
    },
  },
  preview: {
    port: 8080,
    host: true,
  },
  base: '/',
  appType: 'spa',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Add this if you're having any issues with lucide-react in production
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase',
    },
  },
  define: {
    'process.env': process.env,
  },
});