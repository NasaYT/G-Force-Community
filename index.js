const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`${bot.user.username} está online`);
});

bot.login(process.enc.token);