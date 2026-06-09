import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { cpSync, existsSync, mkdirSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localFrames = path.resolve(__dirname, 'all_frames');
const fallbackFrames = path.resolve(__dirname, '../newwebsite/all_frames');
const framesRoot = existsSync(localFrames) ? localFrames : fallbackFrames;

function serveFrameDir(dir) {
  return (req, res, next) => {
    const rel = decodeURIComponent((req.url || '/').replace(/^\//, ''));
    const filePath = path.resolve(dir, rel);
    if (!filePath.startsWith(dir + path.sep) && filePath !== dir) {
      res.statusCode = 403;
      res.end();
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        next();
        return;
      }
      if (filePath.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.end(data);
    });
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-frames',
      configureServer(server) {
        if (existsSync(framesRoot)) {
          server.middlewares.use('/all_frames', serveFrameDir(framesRoot));
        }
      },
      closeBundle() {
        if (existsSync(framesRoot)) {
          mkdirSync(path.resolve(__dirname, 'dist'), { recursive: true });
          cpSync(framesRoot, path.resolve(__dirname, 'dist/all_frames'), { recursive: true });
        }
      },
    },
  ],
});
