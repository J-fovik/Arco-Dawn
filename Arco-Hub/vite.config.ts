import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import Components from 'unplugin-vue-components/vite'; // 全部注册组件
import AutoImport from 'unplugin-auto-import/vite'; // 自动引入
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueSetupExtend(),
		AutoImport({
			// 自动导入vue相关函数，如: ref、reactive、toRef等
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-import.d.ts',
		}),
		Components({
			// 指定组件位置，默认是 src/components 自动导入自定义组件
			dirs: ['src/components'],
			extensions: ['vue', 'tsx'],
			// 配置文件生成位置
			dts: 'src/components.d.ts',
		}),
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
	server: {
		port: 8080, // 自定义端口号
		open: true, // 运行 npm run dev 时自动打开浏览器
		strictPort: false, // 如果端口已被占用，则直接退出
	},
});
