const Discord = require('discord.js');
const c = require('../config.json')

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`ban\` - Dê Ban em um usuário`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}ban @nomedousuario motivo\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}ban @zKinG#6890 lindao\``)
  .addField(`:bookmark: **Permissão**`, `\`BAN_MEMBERS\``)
  .setColor('#8c0046')   

    //adicione o nome do cargo que vc quer que use esse comando!
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Você não tem permissão para usar este comando!");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member)
      return message.reply(erro);
    if(!member.bannable) 
      return message.reply("\<:fechar:745286345361981482> | Não tenho permissão para banir alguém superior a mim!");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "\<:exclamacao:745286346641375283> | Razão não fornecida";
  
  let embedi = new Discord.MessageEmbed()

        .setTitle(`:warning: G-Force Community`)
        .setFooter(`\<:seta1:745286347723374672> | Você foi banido da G-Force Community por ${message.author.username}`)
      
    await member.send(embedi)
    await member.ban(reason)
      .catch(error => message.reply(`\<:notificacao:745286344615395428> | Não consegui banir o usuário mencionado: ${error}`));
  
      let embed = new Discord.MessageEmbed()
        .setTitle("🚫 Império Banimentos 🚫", message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("📋Staff Tag", message.author, true)
        .addField("🚨Membro Tag", member, false)
        .addField("📝Motivo:", reason, true)
        .setColor("RANDOM").setTimestamp()
      
      client.channels.cache.get('712451499564728380').send(embed)
  }

  exports.help = {
    name: 'ban',
    aliases: ['ban' ,'banir']
}