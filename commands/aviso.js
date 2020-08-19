const Discord = require("discord.js");

exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`\<:fechar:745286345361981482> | Você precisa da permissão \`MANAGE_MESSAGES\`.`) 
             
               message.reply(`Digite um título do aviso.`).then(msg2 => { 
                 let cj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                 .on('collect', c => {
                   let titulo = c.content

               message.reply(`\<:exclamacao:745286346641375283> | Digite oque você deseja enviar.`).then(msg3 => {
                   let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1}) 
                   .on('collect', c => {
                       let mensagem = c.content

                       message.channel.bulkDelete(5)
                       .then(messages => console.log(`${messages.size} mensagems foram apagadas`))
                       .catch(console.error);

                            let embed = new Discord.MessageEmbed()

                            .setTitle(titulo)
                            .setDescription(mensagem)
                            .setFooter(`Autor: ${message.author.username}`, message.author.avatarURL())
                            .setColor('RANDOM')

                            message.channel.send(embed)
                            message.channel.send(`||@everyone||`);
                 })
              })
                 })
           })
}

exports.help = {
    name: 'aviso',
    aliases: ['avisar']
}