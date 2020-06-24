const db = require('../models');
const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
  db.Tweet.create({
    author: 'Diarmuid Murphy',
    content: 'This is a big ol tweet.',
    published: Date.now(),
    retweets: 45345,
    likes: 234234
  }).then(() => {
		res.send('All done.');
	});
});

module.exports = router;