const Discord = require("discord.js");
const fs = require("fs");
const c = require('../config.json')
 
exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle('\<:seta:745286344850276363> PREFIXO')
  .setDescription('\<:fechar:745286345361981482> | Você precisa setar um prefixo válido!')
  .setColor("#FF4040")

  if (!message.member.permissions.has('ADMINISTRATOR') && message.member.id !== '487965837404274689')
  return message.reply("\<:aviso1:745286341339906049> | Você não possui permissão para alterar o prefixo");
  if (!args[0] || args[0 == "help"]) return message.channel.send(erro)

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.MessageEmbed()
  .setTitle('\<:seta:745286344850276363> PREFIXO')
  .setDescription('\<:tick:745286349128597645> | O Prefixo foi alterado com sucesso!')
  .setColor("#00FF00")

  message.channel.send(embed)
}

exports.help = {
  name: "setprefix",
  aliases: ["setarprefixo","setprefix","prefix"]
}