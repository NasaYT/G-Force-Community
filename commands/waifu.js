const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/waifu`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`❤ Waifu ❤`)
    .setDescription(`Auuuu! ${message.author} olha como é a sua waifu! rsrs`)
    .setImage(body.url)
    .setFooter("Waifu", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);

}

exports.help = {
  name: "waifu",
  aliases: [""]
}