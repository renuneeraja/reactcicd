import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
import svgr from 'vite-plugin-svgr';
plugins: [
  react(),
  svgr(), // enables React SVG imports
]

