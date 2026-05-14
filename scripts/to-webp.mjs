import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = new URL('../public/images', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else if (/\.(jpg|jpeg|png)$/i.test(e.name)) files.push(full);
  }
  return files;
}

const files = await walk(INPUT_DIR);
for (const file of files) {
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const before = (await stat(file)).size;
  await sharp(file).webp({ quality: 82 }).toFile(out);
  const after = (await stat(out)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`${basename(file)} → ${basename(out)}  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${saved}%)`);
}
console.log('\nDone. Originals kept alongside .webp files.');
