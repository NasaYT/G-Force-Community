const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, você precisa colocar algo para sua sugestão.`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "759444808455684117");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Sugestão", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} sua sugestão foi enviada com sucesso!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
module.exports.help = {
  name: 'sugerir'
}
