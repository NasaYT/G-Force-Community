const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`${bot.user.username} está online`);
});

bot.login("NzQ0MDE0NTg2MDU4ODk5NDk3.XzdDlA.cWrCFe0ut8THjPj2oLY7nYxcPkg");