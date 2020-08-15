const Discord = require('discord.js'); // Puxando a livraria Discord.js
const c = require('../config.json') // Puxando o conteúdo do arquivo config.json

exports.run = (client, message, args) => {

// Embed para explicar o uso do comando
    let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sugestao\` - Deixe uma sugestão para o servidor`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sugestao <sugestão>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sugestao Jogar minecraft\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046')   
 
  var ff = ('[Descrição das reações](https://prnt.sc/sugxfd)') // Uma print, explicando as reações
  var canal = client.channels.cache.get('721124152022532117') // ID do canal aonde iremos enviar a sugestão do usuário
  
  var sugestao = args.slice(0).join(' '); // Uma variável, contendo tudo o que o usuário escrever
  if (!sugestao) { // Caso o usuário não escreva nada, iremos avisar que ele necessita
    return message.reply(`você precisa escrever a sua sugestão!`)
  } else { // Caso ele escreva, iremos enviar a sugestão para o canal
      let embed = new Discord.MessageEmbed()
        .setTitle(`✍️ SUGESTÃO ✍️`)
        .setDescription(`:bust_in_silhouette: Autor: ${message.author}\n\n${sugestao}\n\n${ff}`)
        .setColor('RANDOM')
        .setThumbnail('https://images-ext-2.discordapp.net/external/tL5BVyen0UWHbm-_2prjaEpjBfWHWFz3qJG8TCsX6ig/https/i.imgur.com/wpn00zx.gif?width=645&height=645')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
       
        message.guild.channels.cache.get("697954263342514286").send(embed)
        message.channel.bulkDelete(1)
        .then(messages => console.log(`${messages.size} mensagems foram apagadas`))
        .catch(console.error)
        

        .then(function (msg) { // Abrindo a função 'then' (Famosa aqui haha)
            msg.react("👎"); // Reagindo com os emojis, um legalzin e outro deslike
            msg.react("👍"); 
              message.reply(`:mailbox_with_no_mail: | Sua sugestão foi enviada no canal **${Discord.Channel}**!`)
   })  
 }
}
exports.help = {
 name: 'sugestão',
    aliases: ['sugestão', 'sugestao']
}