import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this if you have any issues with the CSS not loading properly
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "node_modules/@nextui-org/react";`,
      },
    },
  },
});
