import { defineConfig } from 'vite';
import UnoCSS  from 'unocss/vite'
import path from "path";
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), UnoCSS(),
        AutoImport({
            imports: ["vue", "pinia", "vue-router"],
            dirs: ['/src/stores'],
            dts: 'src/types/auto-imports.d.ts',
        }),
        Components({
            // 指定自定义组件位置(默认:src/components)
            dirs: ["src/components"],
            // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
            dts: 'src/types/components.d.ts',
            // dts: "src/types/components.d.ts",
            directoryAsNamespace: false
        }),
    ],
    resolve: {
        alias: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            '@': path.resolve(__dirname, './src'),
            "~/": `${path.resolve(__dirname, "src")}/`,

        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // or "modern"
            }
        }
    }
    
});
