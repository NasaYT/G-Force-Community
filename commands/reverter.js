const Discord = require('discord.js')
const c = require ('../config.json')

exports.run = async (client,message, args) => {
    if (!args[0]) return message.reply('você precisa inserir o texto para reverter!')

    const str = args.join(' ');
    let msg = await message.channel.send(str.split('').reverse().join(''));
    message.delete()
}

exports.help = {
    name: "reverter",
    aliases: []
}