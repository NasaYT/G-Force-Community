const Discord = require("discord.js");

exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`você precisa da permissão \`MANAGE_MESSAGES\`.`) 
             
               message.reply(`digite o título desse anúncio.`).then(msg2 => { 
                 let cj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                 .on('collect', c => {
                   let titulo = c.content

               message.reply(`digite a mensagem que vai ser enviada.`).then(msg3 => {
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