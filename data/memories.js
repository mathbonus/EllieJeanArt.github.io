// Original local pin artwork can be replaced with personal photos at any time.
module.exports = {
  board: {
    name: 'my memory closet',
    owner: 'elliexjeann',
    url: 'https://ca.pinterest.com/elliexjeann/my-memory-closet/',
  },
  moods: ['all', 'cozy', 'bright', 'faded', 'bittersweet'],
  memories: [
    // ---- on the rail (hangers) ----
    { id: 'yellow-cardigan', kind: 'hanger', title: 'the yellow cardigan', year: '2016', mood: 'cozy', ratio: '3/4', img: '/img/pins/yellow-cardigan.svg',
      note: 'Too big in the sleeves, smells like rain and someone else\'s kitchen. Worn every Sunday that autumn.', tags: ['knit', 'autumn'] },
    { id: 'lake-day-dress', kind: 'hanger', title: 'lake-day dress', year: '2014', mood: 'bright', ratio: '4/5', img: '/img/pins/lake-day-dress.svg',
      note: 'Sun-bleached, a little crumpled, one grass stain that never left. Pin a photo of that exact blue.', tags: ['summer', 'water'] },
    { id: 'prom-corsage', kind: 'hanger', title: 'dried corsage', year: '2019', mood: 'bittersweet', ratio: '1/1', img: '/img/pins/prom-corsage.svg',
      note: 'Pressed between pages and promptly forgotten, then found again.', tags: ['flowers', 'night'] },
    { id: 'grandmas-apron', kind: 'hanger', title: 'grandma\'s apron', year: '2008', mood: 'cozy', ratio: '3/4', img: '/img/pins/grandmas-apron.svg',
      note: 'Flour in the seams. Pins for recipes, handwriting, and the good mixing bowl.', tags: ['kitchen', 'family'] },
    { id: 'denim-jacket', kind: 'hanger', title: 'thrifted denim jacket', year: '2021', mood: 'faded', ratio: '4/5', img: '/img/pins/denim-jacket.svg',
      note: 'Patches added over three years. Each one is a small story.', tags: ['thrift', 'patches'] },
    { id: 'concert-tee', kind: 'hanger', title: 'first concert tee', year: '2017', mood: 'bright', ratio: '1/1', img: '/img/pins/concert-tee.svg',
      note: 'Ears ringing for two days. Wrist still has the stamp ghost.', tags: ['music', 'crowd'] },
    { id: 'long-walk-coat', kind: 'hanger', title: 'the long-walk coat', year: '2020', mood: 'faded', ratio: '3/5', img: '/img/pins/long-walk-coat.svg',
      note: 'Streetlights, breath fog, nowhere to be.', tags: ['winter', 'night'] },

    // ---- shoeboxes on the shelf ----
    { id: 'ticket-stubs', kind: 'box', title: 'shoebox: ticket stubs', year: '2012–now', mood: 'bright', ratio: '4/3', img: '/img/pins/ticket-stubs.svg',
      note: 'Cinema, trains, one very bad play. Sort by smell, not date.', tags: ['paper', 'collection'] },
    { id: 'unsent-letters', kind: 'box', title: 'hatbox: unsent letters', year: 'various', mood: 'bittersweet', ratio: '4/3', img: '/img/pins/unsent-letters.svg',
      note: 'Handwriting-only pins. Quiet corner, low light.', tags: ['letters', 'words'] },
    { id: 'friendship-bracelets', kind: 'box', title: 'tin: friendship bracelets', year: '2010', mood: 'cozy', ratio: '4/3', img: '/img/pins/friendship-bracelets.svg',
      note: 'Embroidery floss colours, camp-adjacent, knots that held.', tags: ['craft', 'colour'] },

    // ---- dresser drawers ----
    { id: 'drawer-polaroids', kind: 'drawer', title: 'top drawer: polaroids', year: '2015–2019', mood: 'faded', ratio: '1/1', img: '/img/pins/drawer-polaroids.svg',
      note: 'Light leaks, thumbs in frame, white borders gone yellow.', tags: ['photo', 'film'] },
    { id: 'drawer-mixtapes', kind: 'drawer', title: 'middle drawer: mixtapes', year: '2013–2018', mood: 'cozy', ratio: '3/2', img: '/img/pins/drawer-mixtapes.svg',
      note: 'Tracklists as poetry. Pin the handwriting, not the music.', tags: ['music', 'lists'] },
    { id: 'drawer-pressed-flowers', kind: 'drawer', title: 'bottom drawer: pressed flowers', year: 'always', mood: 'bittersweet', ratio: '3/4', img: '/img/pins/drawer-pressed-flowers.svg',
      note: 'Fragile, translucent, a little sad, a little lovely.', tags: ['botanical', 'dried'] },
  ],
};
