import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 导入 node 的 path 模块

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0", // 这个用于启动，允许外部访问
    port: 8092, // 指定启动端口，注意这里应该是数字而非字符串
    open: true, // 启动后是否自动打开浏览器
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 使用绝对路径
    }
  }
});