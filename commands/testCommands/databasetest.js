const { SlashCommandBuilder } = require('@discordjs/builders');
const testSchema = require('../../schemas/test');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dbtest')
		.setDescription('Test the database connection'),
	async execute(interaction) {
		testSchema.findOne({ GuildID: interaction.guild.id, UserID: interaction.user.id }, async (err, data) => {
			if (err) throw err;
			if (!data) {
				testSchema.create({
					GuildID: interaction.guild.id,
					UserID: interaction.user.id,
				});
			}

			if (data) {
				console.log(data);
			}
		});
	},
};