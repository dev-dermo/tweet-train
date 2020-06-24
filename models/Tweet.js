const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
	author: String,
	content: String,
	published: Date,
	retweets: Number,
	likes: Number
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;