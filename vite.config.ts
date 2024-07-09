import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from "path";
import Legacy from '@vitejs/plugin-legacy';

console.log('aa:L', __dirname);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Legacy({
      targets: ['ie >= 11'],  // 或其他需要支持的浏览器
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  base: '/',
  server: {
    port: 3000,
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@common': path.resolve(__dirname, 'src/common'),
    },
  },
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  // 构建输出配置
  build: {
    outDir: './dist',
    target: ['es2015', 'chrome63'], // 指定构建目标
    assetsDir: './src/assets',
    assetsInlineLimit: 360000,
  },
})
