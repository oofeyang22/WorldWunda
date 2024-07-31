/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';*/


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // Load environment variables based on development mode and working directory
  const env = loadEnv(mode, process.cwd(), '');

  // ... (Optional) Access environment variables in defineConfig for server-side usage

  return {
    plugins: [react()],
    // ... other Vite configuration options
  };
});

