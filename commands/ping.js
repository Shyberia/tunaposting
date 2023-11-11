const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("i wouldnt do this"),
    async execute(interaction) {
        await interaction.reply("if you talk to me one more time im going to say bad words never bother me again");
    },
};
