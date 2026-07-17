import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import fs from "fs/promises"

// Plugin to copy images folder to dist during build
function copyImagesPlugin() {
  return {
    name: 'copy-images',
    async writeBundle() {
      const srcDir = path.resolve(__dirname, 'images')
      const destDir = path.resolve(__dirname, 'dist', 'images')
      try {
        await fs.mkdir(destDir, { recursive: true })
        const files = await fs.readdir(srcDir)
        for (const file of files) {
          await fs.copyFile(path.join(srcDir, file), path.join(destDir, file))
        }
        console.log('✓ Copied images to dist/images/')
      } catch (err) {
        console.error('Failed to copy images:', err)
      }
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), copyImagesPlugin()],
  server: { port: 3000 },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
