const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	// submittedTweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;