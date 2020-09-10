const Discord = require('discord.js'); // Puxando a livraria Discord.js
const c = require('../config.json') // Puxando o conteúdo do arquivo config.json

exports.run = (client, message, args) => {

// Embed para explicar o uso do comando
    let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`anuncio\` - Anuncie algo no servidor`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}anuncio <anúncio>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}anuncio Jogar minecraft\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046')
  
  var sugestao = args.slice(0).join(' '); // Uma variável, contendo tudo o que o usuário escrever
  if (!sugestao) { // Caso o usuário não escreva nada, iremos avisar que ele necessita
    return message.reply(`\<:exclamacao:745286346641375283> | Você precisa digitar alguma coisa!`)
  } else { // Caso ele escreva, iremos enviar a sugestão para o canal
      let embed = new Discord.MessageEmbed()
        .setTitle(`ANÚNCIO`)
        .setDescription(`\:y_sininhobalansa: Autor: ${message.author}\n\n${sugestao}\n`)
        .setColor('RANDOM')
        .setThumbnail('https://images-ext-2.discordapp.net/external/tL5BVyen0UWHbm-_2prjaEpjBfWHWFz3qJG8TCsX6ig/https/i.imgur.com/wpn00zx.gif?width=645&height=645')
       
        message.channel.bulkDelete(1)
        .then(messages => console.log(`${messages.size} mensagems foram apagadas`))
        .catch(console.error)
 }
}
exports.help = {
 name: 'anuncio',
    aliases: ['anunciar']
}