import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
// import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 需要同步配置 tsconfig.json 中的 path 才能生效
    // 根目录设置到 ./src 
    alias: {
      "~": resolve(__dirname, "src"),
      "#": resolve(__dirname, "src/pages"),
      "$": resolve(__dirname, "src/components"),
      "%": resolve(__dirname, "src/layouts"),
      "^": resolve(__dirname, "src/styles"),
    }
  },
  // server: {
  //   host: "0.0.0.0",
  // },
})
