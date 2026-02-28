import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ✅ OTIMIZAÇÃO: Code splitting — separa bibliotecas em chunks próprios
    // Resultado: o navegador faz cache do React separadamente (muda pouco)
    // e baixa apenas o código da aplicação quando faz um novo deploy
    rollupOptions: {
      output: {
        manualChunks: {
          // React e ReactDOM vão para um chunk "vendor" separado
          vendor: ["react", "react-dom"],
          // React Router vai para outro chunk
          router: ["react-router-dom"],
        },
      },
    },
  },
});
