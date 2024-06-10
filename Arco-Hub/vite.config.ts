import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// https://vitejs.dev/config/
export default defineConfig({
  esbuild:{//打包时去除console和debugger代码
    drop:["console","debugger"]
  },
  plugins: [
    vue(),
    vueSetupExtend(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
