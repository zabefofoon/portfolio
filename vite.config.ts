import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['echarts/core', 'echarts/charts', 'echarts/components', 'echarts/renderers'],
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
})
