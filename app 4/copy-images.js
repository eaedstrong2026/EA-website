import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function copyImages() {
  const srcDir = path.join(__dirname, 'images');
  const destDir = path.join(__dirname, 'dist', 'images');
  
  try {
    await fs.mkdir(destDir, { recursive: true });
    const files = await fs.readdir(srcDir);
    
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      const stat = await fs.stat(srcFile);
      
      if (stat.isFile()) {
        await fs.copyFile(srcFile, destFile);
        console.log(`  ✓ ${file}`);
      }
    }
    
    console.log(`✓ Copied ${files.length} images to dist/images/`);
  } catch (err) {
    console.error('Failed to copy images:', err.message);
    process.exit(1);
  }
}

copyImages();
