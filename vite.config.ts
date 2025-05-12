import path from "path"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/icons": path.resolve(__dirname, "./src/assets/icons"),
      "@/images": path.resolve(__dirname, "./src/assets/images"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/locales": path.resolve(__dirname, "./src/common/locales"),
      "@/utils": path.resolve(__dirname, "./src/common/utils"),
      "@/layout": path.resolve(__dirname, "./src/layouts"),
      "@/components": path.resolve(__dirname, "./src/layouts/components"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/styles": path.resolve(__dirname, "./src/styles"),

      // tambahan alias untuk shadcn
      "components": path.resolve(__dirname, "./src/common/componentShadcn"),
      "ui": path.resolve(__dirname, "./src/common/componentShadcn/ui"),
      "hooks": path.resolve(__dirname, "./src/common/componentShadcn/hooks"),
      "lib": path.resolve(__dirname, "./src/common/lib"),
    }
  }
})