const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setColor([28, 255, 103])
    .setAuthor("Informação do Bot") // message.author.avatarURL - Pegar do usuário que digitou o cmd
    .setDescription("\<:seta:745286344850276363> **Meu criador:** \n uGabriel#2193")
    .addField(":desktop: Servidores", + client.guilds.cache.size, true)
    .addField(":joystick: Usuários", + client.users.cache.size, true)
    .addField(":page_facing_up: Canais", + client.channels.cache.size, true)
    .addField(":wrench: Versão do bot", "2.0.2", true)
    .addField(":flag_br: País", "Brasil", true)
    .addField(":books: Tipo", "discord.js", true)
    .setFooter(client.user.username, client.user.displayAvatarURL()) // para pegar o bot name: client.user.username
    // sendo message.author | client.user / pega o id do author e o id do bot
    .setTimestamp();
    
    message.channel.send(embed);
}

exports.help = {
  name: 'botinfo',
  aliases: ['botinfo', 'bot']
}