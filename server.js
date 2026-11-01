const express = require('express');
const path = require('path');
const data = require('./data/memories');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// available in every template
app.locals.board = data.board;
app.locals.base = '/';

const byKind = (kind) => data.memories.filter((m) => m.kind === kind);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'the closet',
    moods: data.moods,
    memories: data.memories,
    hangers: byKind('hanger'),
    boxes: byKind('box'),
    drawers: byKind('drawer'),
  });
});

app.get('/memory/:id', (req, res, next) => {
  const i = data.memories.findIndex((m) => m.id === req.params.id);
  if (i === -1) return next();
  const total = data.memories.length;
  res.render('memory', {
    title: data.memories[i].title,
    m: data.memories[i],
    prev: data.memories[(i - 1 + total) % total],
    next: data.memories[(i + 1) % total],
    related: data.memories.filter((x) => x.mood === data.memories[i].mood && x.id !== req.params.id).slice(0, 3),
  });
});

// handy later if you wire up the Pinterest API
app.get('/api/memories', (req, res) => res.json(data.memories));

app.use((req, res) => res.status(404).render('404', { title: 'empty hanger' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`memory closet open at http://localhost:${PORT}`));
