const { SlashCommandBuilder } = require('discord.js');
const { generateCard } = require('./../index.js');
const { Cards } = require('../db/memory/Cards')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('cards')
        .setDescription('See your cards'),
    async execute(interaction) {
        let userCards = Cards.filter(x => x.UserId === interaction.user.id)
        let message = ''
        userCards.forEach(c => {
            message = message + c.Template
        })
        await interaction.reply(`You have ${Cards.length} cards added. You added ${message} to your list`);
    },
};