import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsToRead = [
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'Python', file: 'python.svg' },
  { name: 'NodeJS', file: 'nodedotjs.svg' },
  { name: 'React', file: 'react.svg' },
  { name: 'Vue', file: 'vuedotjs.svg' },
  { name: 'HTML5', file: 'html5.svg' },
  { name: 'CSS3', file: 'css.svg' },
  { name: 'Git', file: 'git.svg' },
  { name: 'Docker', file: 'docker.svg' },
  { name: 'Kubernetes', file: 'kubernetes.svg' },
  { name: 'Sass', file: 'sass.svg' },
];

let out = `export const techIcons = {\n`;

for (const icon of iconsToRead) {
  const p = path.join(__dirname, 'node_modules', 'simple-icons', 'icons', icon.file);
  let svg = '';
  try {
    svg = fs.readFileSync(p, 'utf8');
    // Replace hardcoded role/width etc or just inject our viewBox to be safe,
    // but simple-icons svgs are usually exactly: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>...</title><path d="..."/></svg>
    // Let's modify them to use 'currentColor' and remove 'title'
    svg = svg.replace(/<title>.*?<\/title>/g, '')
             .replace(/<svg /, '<svg fill="currentColor" ')
             .trim();
  } catch(e) { console.error('Error reading', p, e); }
  out += `  ${icon.name}: \`${svg}\`,\n`;
}

// Keep the generic SQL
out += `  SQL: \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>\`,\n`;

out += `};\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'techIcons.js'), out);
console.log('Success generating techIcons.js');
