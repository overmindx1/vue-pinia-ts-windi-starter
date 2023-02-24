import { defineConfig } from 'vite';
import path from "path";
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      '@': path.resolve(__dirname, './src'),
      "~/": `${path.resolve(__dirname, "src")}/`,
      
    },
  },
});
