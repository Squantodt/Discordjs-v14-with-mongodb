const { Events } = require('discord.js');
const mongoose = require('mongoose');
const mongodbURL = process.env.mongodbURL;

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		await mongoose.connect(mongodbURL || '', {
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		if (mongoose.connect) {
			console.log('The database is up and running');
		}
	},
};