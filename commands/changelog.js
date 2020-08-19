const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

    const ChangeLog = new Discord.MessageEmbed()
    .setTitle('\<:coroa1:745286345496199228> | G-Force Community')
    .setDescription('<:seta:745286344850276363> Veja aqui as atualizações e correções que foram feitas no meu sistema.\n\n \<:seta:745286344850276363> 2.0.2 - 19/08/2020\nCorrigido alguns erros\nMelhorias feitas nos comandos\nAdicionado novos comandos:\n   - /ngif\n   - /neko\n   - /pediravatar\n   - /foxgirl\n   - /changelog\n\n \<:seta:745286344850276363> 2.0.1 - 18/08/2020\nCorrigido alguns bugs\nMelhorias feitas nos comandos\n\n \<:seta:745286344850276363> 2.0.0 - 17/08/2020\nAdicionado novos comandos:\n   - /unlock\n   - /reverter')

    message.channel.send(ChangeLog);
}

exports.help = {
    name: 'changelog',
    aliases: ['changelog', 'cl']
}