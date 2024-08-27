// vite.config.ts
import { defineConfig } from "file:///C:/Users/%E4%BA%8C%E8%B7%83/Desktop/yue/Arco-Dawn/Arco-Hub/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///C:/Users/%E4%BA%8C%E8%B7%83/Desktop/yue/Arco-Dawn/Arco-Hub/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueSetupExtend from "file:///C:/Users/%E4%BA%8C%E8%B7%83/Desktop/yue/Arco-Dawn/Arco-Hub/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import Components from "file:///C:/Users/%E4%BA%8C%E8%B7%83/Desktop/yue/Arco-Dawn/Arco-Hub/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///C:/Users/%E4%BA%8C%E8%B7%83/Desktop/yue/Arco-Dawn/Arco-Hub/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_dirname = "C:\\Users\\\u4E8C\u8DC3\\Desktop\\yue\\Arco-Dawn\\Arco-Hub";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      // 自动导入vue相关函数，如: ref、reactive、toRef等
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts"
    }),
    Components({
      // 指定组件位置，默认是 src/components 自动导入自定义组件
      dirs: ["src/components"],
      extensions: ["vue", "tsx"],
      // 配置文件生成位置
      dts: "src/components.d.ts"
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__vite_injected_original_dirname, "src") }]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8080,
    // 自定义端口号
    open: true,
    // 运行 npm run dev 时自动打开浏览器
    strictPort: false
    // 如果端口已被占用，则直接退出
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTRFOENcdThEQzNcXFxcRGVza3RvcFxcXFx5dWVcXFxcQXJjby1EYXduXFxcXEFyY28tSHViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTRFOENcdThEQzNcXFxcRGVza3RvcFxcXFx5dWVcXFxcQXJjby1EYXduXFxcXEFyY28tSHViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8lRTQlQkElOEMlRTglQjclODMvRGVza3RvcC95dWUvQXJjby1EYXduL0FyY28tSHViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJzsgLy8gXHU1MTY4XHU5MEU4XHU2Q0U4XHU1MThDXHU3RUM0XHU0RUY2XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJzsgLy8gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdHZ1ZVNldHVwRXh0ZW5kKCksXG5cdFx0QXV0b0ltcG9ydCh7XG5cdFx0XHQvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjV2dWVcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODI6IHJlZlx1MzAwMXJlYWN0aXZlXHUzMDAxdG9SZWZcdTdCNDlcblx0XHRcdGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcblx0XHRcdGR0czogJ3NyYy9hdXRvLWltcG9ydC5kLnRzJyxcblx0XHR9KSxcblx0XHRDb21wb25lbnRzKHtcblx0XHRcdC8vIFx1NjMwN1x1NUI5QVx1N0VDNFx1NEVGNlx1NEY0RFx1N0Y2RVx1RkYwQ1x1OUVEOFx1OEJBNFx1NjYyRiBzcmMvY29tcG9uZW50cyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcblx0XHRcdGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcblx0XHRcdGV4dGVuc2lvbnM6IFsndnVlJywgJ3RzeCddLFxuXHRcdFx0Ly8gXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3NTFGXHU2MjEwXHU0RjREXHU3RjZFXG5cdFx0XHRkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcblx0XHR9KSxcblx0XSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dLFxuXHR9LFxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRsZXNzOiB7XG5cdFx0XHRcdGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA4MDgwLCAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTdBRUZcdTUzRTNcdTUzRjdcblx0XHRvcGVuOiB0cnVlLCAvLyBcdThGRDBcdTg4NEMgbnBtIHJ1biBkZXYgXHU2NUY2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG5cdFx0c3RyaWN0UG9ydDogZmFsc2UsIC8vIFx1NTk4Mlx1Njc5Q1x1N0FFRlx1NTNFM1x1NURGMlx1ODhBQlx1NTM2MFx1NzUyOFx1RkYwQ1x1NTIxOVx1NzZGNFx1NjNBNVx1OTAwMFx1NTFGQVxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLFNBQVMsb0JBQW9CO0FBQzNXLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFMdkIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osZUFBZTtBQUFBLElBQ2YsV0FBVztBQUFBO0FBQUEsTUFFVixTQUFTLENBQUMsT0FBTyxZQUFZO0FBQUEsTUFDN0IsS0FBSztBQUFBLElBQ04sQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBO0FBQUEsTUFFVixNQUFNLENBQUMsZ0JBQWdCO0FBQUEsTUFDdkIsWUFBWSxDQUFDLE9BQU8sS0FBSztBQUFBO0FBQUEsTUFFekIsS0FBSztBQUFBLElBQ04sQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU8sQ0FBQyxFQUFFLE1BQU0sS0FBSyxhQUFhLFFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUM5RDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0oscUJBQXFCO0FBQUEsTUFDcEIsTUFBTTtBQUFBLFFBQ0wsbUJBQW1CO0FBQUEsTUFDcEI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLFlBQVk7QUFBQTtBQUFBLEVBQ2I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
