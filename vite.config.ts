import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      // external: ['axios'], // 需要排除打包进去的包
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
  plugins: [
    dts({
      copyDtsFiles: true, // 复制源码中的 .d.ts 文件到输出目录
    }),
  ],
})
