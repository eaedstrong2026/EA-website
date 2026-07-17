import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function copyImages() {
  const srcDir = path.join(__dirname, 'images');
  const destDir = path.join(__dirname, 'dist', 'images');
  
  try {
    // Check if source images folder exists
    try {
      await fs.access(srcDir);
    } catch {
      console.log('⚠ No images folder found at', srcDir);
      console.log('  Images will not be copied. Skipping...');
      return; // Exit gracefully without error
    }
    
    await fs.mkdir(destDir, { recursive: true });
    const files = await fs.readdir(srcDir);
    let copied = 0;
    
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      const stat = await fs.stat(srcFile);
      
      if (stat.isFile()) {
        await fs.copyFile(srcFile, destFile);
        copied++;
      }
    }
    
    console.log(`✓ Copied ${copied} images to dist/images/`);
  } catch (err) {
    console.error('Failed to copy images:', err.message);
    // Don't exit with error - just warn
  }
}

copyImages();
