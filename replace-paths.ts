import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const filesToUpdate = [
  path.join(process.cwd(), 'src', 'pages', 'About.tsx'),
  path.join(process.cwd(), 'src', 'data', 'blogsData.ts'),
  path.join(process.cwd(), 'src', 'data', 'servicesData.ts'),
];

try {
  for (const file of filesToUpdate) {
    if (fs.existsSync(file)) {
      console.log(`Updating paths in ${file}...`);
      const content = fs.readFileSync(file, 'utf8');
      const updatedContent = content.replaceAll('/src/assets/images/', '/assets/images/');
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Successfully updated ${file}`);
    } else {
      console.error(`File ${file} does not exist.`);
    }
  }
} catch (err) {
  console.error('Error during path replacement:', err);
} finally {
  try {
    fs.unlinkSync(__filename);
    console.log('Cleanup: temporary replacement script deleted.');
  } catch (e) {
    // Ignore cleanup error
  }
}
