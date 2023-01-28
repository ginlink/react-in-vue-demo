import { defineConfig } from "vite";
import veauryVitePlugins from "veaury/vite/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 关闭 vue 和 vuejsx 插件
    // vue(),
    // vueJsx(),
    // type设为vue时, 所有名为react_app目录中的文件的jsx将被react jsx编译，其他文件里的jsx将以vue jsx编译
    veauryVitePlugins({
      type: "vue",
    }),
  ],
});
