import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { basename, join } from "node:path";

const sourceDir = "public/players";
const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".jpg"));

await Promise.all(
  files.map(async (file) => {
    const source = join(sourceDir, file);
    const output = join(sourceDir, `${basename(file, ".jpg")}.webp`);
    await sharp(source)
      .rotate()
      .resize({ width: 1440, height: 1800, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, effort: 5, smartSubsample: true })
      .toFile(output);
  }),
);

console.log(`Optimized ${files.length} player images.`);
