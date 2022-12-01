const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { generateCard } = require('./../index.js');
const { Cards } = require('../db/memory/Cards')
const http = require("http");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll for a New Card'),
    async execute(interaction) {
        let card = generateCard(interaction.user.id)
        Cards.push(card)
        let generateOptions = ['dress', 'suit', 'dark', 'angry', 'blue', 'hat']
        let item = generateOptions[Math.floor(Math.random()*generateOptions.length)];
        console.log(item)

        let options = {
            host: "localhost",
            port: 5000,
            path: '/generate/' + item,
            method: 'GET'
        };

        await http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                const exampleEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle(card.Profile.name)
                    .setDescription(card.Template)
                    .setImage('https://gardgamepublic.s3.sa-east-1.amazonaws.com/'+chunk+'.png')
                    .setTimestamp()
                interaction.channel.send({ embeds: [exampleEmbed]})
            });
        }).end();

        await interaction.reply("Generating...",);
    },
};