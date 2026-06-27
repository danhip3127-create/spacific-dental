import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const srcDir = path.join(process.cwd(), 'src', 'assets', 'images');
const destDir = path.join(process.cwd(), 'public', 'assets', 'images');

try {
  if (fs.existsSync(srcDir)) {
    console.log(`Copying images from ${srcDir} to ${destDir}...`);
    fs.mkdirSync(destDir, { recursive: true });
    fs.cpSync(srcDir, destDir, { recursive: true });
    console.log('Images copied successfully!');
  } else {
    console.error(`Source directory ${srcDir} does not exist!`);
  }
} catch (err) {
  console.error('Error during copying images:', err);
} finally {
  try {
    fs.unlinkSync(__filename);
    console.log('Cleanup: temporary script deleted.');
  } catch (e) {
    // Ignore cleanup error
  }
}
