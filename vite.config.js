import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { resolve } from 'path';
import fs from 'fs';
import cssPurge from 'vite-plugin-purgecss';

function generateHtmlInputs() {
  const srcDir = resolve(__dirname, 'src');
  const entries = {};

  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = resolve(dir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        traverseDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const name = file.replace('.html', '');
        entries[name] = resolve(__dirname, filePath);
      }
    });
  }

  traverseDirectory(srcDir);
  return entries;
}

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@js': resolve(__dirname, 'src/js'),
      '@scss': resolve(__dirname, 'src/scss'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@components': resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    cssPurge(),
    ViteEjsPlugin()
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  base: './',
  root: 'src',
  publicDir: '../public',
  build: {
    minify: false,
    // sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: generateHtmlInputs(),
      output: {
        manualChunks: false,
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        chunkFileNames: `[name].js`
      }
    }
  }
});
