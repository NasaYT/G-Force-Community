const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    const say = new Discord.MessageEmbed()
    
    .setAuthor("\<:fechar:745286345361981482> | Sintaxe Incorreta")
    .setDescription(`\<:seta1:745286347723374672> Use: /say [mensagem]`)
    .setThumbnail(bot.user.avatarURL)
    .setColor("BLACK")

    if(!args[0]) return message.channel.send(say)
    
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);

}

exports.help = {
    name: "falar",
    aliases: ["say"]
}