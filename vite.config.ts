import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
	base: '/helldiver_random_lodout/',
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'serve-assets-plugin',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && req.url.startsWith('/assets/')) {
              const relativePath = req.url.slice(8); // remove '/assets/'
              const decodedPath = decodeURIComponent(relativePath.split('?')[0]);
              const filePath = path.join(process.cwd(), 'assets', decodedPath);
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase();
                let contentType = 'application/octet-stream';
                if (ext === '.png') contentType = 'image/png';
                else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
                else if (ext === '.svg') contentType = 'image/svg+xml';
                else if (ext === '.gif') contentType = 'image/gif';
                else if (ext === '.webp') contentType = 'image/webp';
                
                res.writeHead(200, { 'Content-Type': contentType });
                fs.createReadStream(filePath).pipe(res);
                return;
              }
            }
            next();
          });
        },
        closeBundle() {
          const src = path.join(process.cwd(), 'assets');
          const dest = path.join(process.cwd(), 'dist', 'assets');
          
          function copyDir(srcDir: string, destDir: string) {
            if (!fs.existsSync(srcDir)) return;
            fs.mkdirSync(destDir, { recursive: true });
            const entries = fs.readdirSync(srcDir, { withFileTypes: true });
            for (const entry of entries) {
              const srcPath = path.join(srcDir, entry.name);
              const destPath = path.join(destDir, entry.name);
              if (entry.name === '.aistudio') continue; // Skip .aistudio internal config folder
              if (entry.isDirectory()) {
                copyDir(srcPath, destPath);
              } else {
                fs.copyFileSync(srcPath, destPath);
              }
            }
          }
          
          copyDir(src, dest);
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
