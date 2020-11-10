const Discord = require('discord.js');

exports.run = (client, message, args) => { 

    let resp = ["https://nekos.life/api/v2/img/nsfw_neko_gif", "https://nekos.life/api/v2/img/Random_hentai_gif", "https://nekos.life/api/v2/img/lewd", "https://nekos.life/api/v2/img/boobs"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'nsfw',
    aliases: []
  }