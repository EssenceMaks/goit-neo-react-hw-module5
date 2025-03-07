import { defineConfig } from 'vite';
import reactSWC from '@vitejs/plugin-react-swc'; // Заменено с plugin-react на plugin-react-swc

export default defineConfig({
  plugins: [reactSWC()], // Используем установленный плагин
  base: '/',
});
