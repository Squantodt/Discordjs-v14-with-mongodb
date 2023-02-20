const { model, Schema } = require('mongoose');

const testSchema = new Schema({
	GuildID: String,
	UserID: String,
});

module.exports = model('testSchema', testSchema);