const Discord = require('discord.js') // Puxando a livraria Discord.js
const fs = require('fs');
const ms = require('ms');
const c = require('../config.json')
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`warn\` - Dê Aviso a um usuário`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}warn @nomedousuario motivo\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}warn @ lindao\``)
  .addField(`:bookmark: **Permissão**`, `\`MANAGE_MESSAGES\``)
  .setColor('#8c0046') 

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`apenas administradores podem utilizar esse comando!`)
    // Puxando o usuário que iremos dar o Warn
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]); // puxando do argumento zero (0)
     // if (membro === message.member) return message.reply(`mencione alguém que não seja você mesmo!`) // caso ele mencione a si memso

    if(!membro)
      return message.reply(erro);

    var motivo = args.join(' ').slice(22); // Puxando o motivo do warn
    if (!motivo) return message.reply(`escreva alguma coisa para esse warn`); // Caso ele não escreva o motivo

    if(!warns[membro.id]) warns[membro.id] = {
      warns: 0
    };

    warns[membro.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err);
    });

    //
    // Embed do Warn, enviado no canal 
    let embedi = new Discord.MessageEmbed()

    .setTitle(`:hammer: Warn`)
    .addField("Usuário Avisado:", `<@${membro.id}>`)
    .addField("Avisado em:", message.channel)
    .addField("Quantia de Avisos:", warns[membro.id].warns)
    .addField("Motivo do Aviso:", motivo)
    .setColor("#8B0000")
    .setDescription(`**${membro.user.username}** foi avisado por **${message.author.username}**!\n\n`)
    // Enviando no privado do usuário
    let embed = new Discord.MessageEmbed()

    .setTitle(`\<:aviso1:745286341339906049> | Você foi alertado!`)
    .setDescription(`\<:seta1:745286347723374672> ${motivo}`)
    .setFooter(`Autor: ${message.author.username}`)

    //
    membro.send(embed); // Enviando pro usuário
    message.channel.send(`\<:coranteverde:745286344669921340> | Warn enviado com sucesso!`)
    message.delete();

    if(warns[membro.id].warns == 1) {
      let reset = "3d";
      membro.roles.add("717449610196680765")

      setTimeout(function() {
        membro.roles.remove("717449610196680765")
        warns[membro.id].warns--;
      }, ms(reset));
    }

    if(warns[membro.id].warns == 2) {
      let mutetime = "5m";
      let reset = "3d";
      membro.roles.add("717195788530221059")
      membro.roles.add("717449886668423192")
      membro.roles.remove("717449610196680765")
      canal.send(`<@${membro.id}> Foi mutado temporariamente`);

      setTimeout(function() {
        membro.roles.remove("717195788530221059")
        message.channel.reply(`\<:tick:745286349128597645> | <@${membro.id}> Foi desmutado.`)
      }, ms(mutetime))

      setTimeout(function() {
        membro.roles.remove("717449886668423192")
        membro.roles.remove("717195788530221059")
        warns[membro.id].warns--;
        warns[membro.id].warns--;
      }, ms(reset));
    }
    
    if(warns[membro.id].warns == 3) {
      let embedi = new Discord.MessageEmbed()

        .setTitle(`:warning: RedeHeasty`)
        .setFooter(`\<:seta1:745286347723374672> | Você foi banido da RedeHeasty por ${message.author.username}`)
      
      await membro.send(embed)
      message.guild.member(membro).ban(motivo);
      membro.send('Você foi banido da RedeHeasty')
      canal.send(`<@${membro.id}> foi banido.`)

      message.channel.bulkDelete(1)
      .then(messages => console.log(`${messages.size} mensagems foram apagadas`))
      .catch(console.error)
    }
}

exports.help = {
    name: 'warn',
      aliases: ['warn', 'alertar']
}
