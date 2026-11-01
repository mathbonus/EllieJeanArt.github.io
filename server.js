const express = require('express');
const path = require('path');
const data = require('./data/sections');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// available in every template
app.locals.board = data.board;
app.locals.base = '/';
app.locals.sections = data.sections;
app.locals.totalPins = data.sections.reduce((total, section) => total + section.count, 0);

app.get('/', (req, res) => {
  res.render('index', { title: 'the closet' });
});

app.get('/api/sections', (req, res) => res.json(data.sections));

app.use((req, res) => res.status(404).render('404', { title: 'empty hanger' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`memory closet open at http://localhost:${PORT}`));
