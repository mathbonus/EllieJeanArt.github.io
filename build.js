// Renders the EJS views to static HTML in ./dist for GitHub Pages.
//   BASE=/repo-name/ node build.js     (project site: you.github.io/repo-name/)
//   node build.js                      (user site or custom domain: base "/")
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const data = require('./data/memories');

let base = process.env.BASE || '/';
if (!base.startsWith('/')) base = '/' + base;
if (!base.endsWith('/')) base += '/';

const out = path.join(__dirname, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const render = (view, locals) =>
  ejs.renderFile(path.join(__dirname, 'views', view + '.ejs'), { board: data.board, base, ...locals });

const write = (file, html) => {
  const full = path.join(out, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
};

(async () => {
  const by = (k) => data.memories.filter((m) => m.kind === k);

  write('index.html', await render('index', {
    title: 'the closet', moods: data.moods,
    hangers: by('hanger'), boxes: by('box'), drawers: by('drawer'),
  }));

  const total = data.memories.length;
  for (let i = 0; i < total; i++) {
    const m = data.memories[i];
    write(`memory/${m.id}/index.html`, await render('memory', {
      title: m.title, m,
      prev: data.memories[(i - 1 + total) % total],
      next: data.memories[(i + 1) % total],
      related: data.memories.filter((x) => x.mood === m.mood && x.id !== m.id).slice(0, 3),
    }));
  }

  write('404.html', await render('404', { title: 'empty hanger' }));
  write('memories.json', JSON.stringify(data.memories, null, 2));
  write('.nojekyll', '');
  fs.cpSync(path.join(__dirname, 'public'), out, { recursive: true });

  console.log(`built ${total + 2} pages -> dist/ (base "${base}")`);
})();
