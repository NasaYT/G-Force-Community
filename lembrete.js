const Discord = require('discord.js'); // puxando a livraria Discord.js
const ms = require('ms'); // puxando o NPM ms *Instale utilizando: npm i ms

exports.run = async (client, message, args) => {

  let Timer = args[0]; // os argumentos, no caso, o tempo (s, m ou h)

  if (!args[0]){ // caso ele não escreva, daremos o erro
    return message.reply(`\<:exclamacao:745286346641375283> | Você precisa colocar um tempo válido!`);
  }

  if (args[0] <= 0){ // caso seja menor que zero
    return message.channel.send(`\<:exclamacao:745286346641375283> | Você precisa colocar um tempo maior que zero!`);
  }

  message.channel.send("\<:notificacao:745286344615395428> | Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){ // caso termine o tempo, avisaremos o usuário
    message.channel.send(`\<:notificacao:745286344615395428> | BIP BIP BIP! ${message.author}`)

  }, ms(Timer));
}

exports.help = { 
    name: 'lembrete',
    aliases: []
}