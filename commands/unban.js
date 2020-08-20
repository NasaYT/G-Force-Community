const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    
    let reason = args.slice(1).join(' ');
    let user = args[0];
    if (!reason) return message.reply('\<:exclamacao:745286346641375283> | Você precisa dar um motivo para este usuário seja eesbanido.')
    if (!user) return message.reply('\<:exclamacao:745286346641375283> | Você precisa me dar um ID ou Mencionar um membro para desbanir.').catch(console.error);
    message.guild.members.unban(user)

    let embed = new Discord.MessageEmbed()
    .setTitle("\<:notificacao:745286344615395428> G-Force Community", message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField("\<:notificacao:745286344615395428> Usuário Desbanido:", message.mentions.members.first(), false)
    .addField("\<:diploma:745286344980561981> Motivo:", reason, true)
    .addField('\<:livro:745286345634742382> Data do desbanimento:', message.createdAt.toLocaleString())

    message.channel.send(embed)
}
exports.help = {
    name: 'unban',
    aliases: ['unban', 'desbanir']
}
