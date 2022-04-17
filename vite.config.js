import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// ant design vue 按需加载
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log('env', env);
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            // 样式覆盖
            importStyle: 'less',
          }),
        ],
      }),
    ],
    build: {
      // 去除console
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        _comp: path.resolve(__dirname, 'src/components'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'text-color': '#333E48',
            'primary-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  };
});
