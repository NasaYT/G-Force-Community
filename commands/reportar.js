const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  message.delete(1000).catch(O_o=>{}); //delete previous message (input command)

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  const baka = new Discord.RichEmbed()   
    let avatar1 = message.client.user.displayAvatarURL     
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription("Dê uma sugestão para oque a nossa equipe pode fazer para lhe satisfazer.")
    baka.addField(`📗 Exemplo`, "`/sugestao Adicionar o canal bla bla bla`")
    baka.setFooter(`G-Force Community - /sugestao`, avatar1)
   if(!rUser)  return message.reply(baka)

  .catch(O_o=>{});
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  reportEmbed.setDescription("\<a:boost:756877863613104202> | SUGESTÃO")
    reportEmbed.setColor("#E5DA2A")
    reportEmbed.addField("Sugestão de:", `${message.author} ID: ${message.author.id}`)
    reportEmbed.addField("Sugestão:", reason);
    reportEmbed.setFooter('G-Force Community - /sugestão')
    reportEmbed.setTimestamp()


    let reportschannel = message.guild.channels.find(`name`, "🔥・sugestões");
    if(!reportschannel) return message.channel.send(":x: | Não consegui achar o chat `🔥・sugestões`.");
  
  
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name : "sugestao", "sugerir"
}
