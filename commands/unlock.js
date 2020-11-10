const Discord = require('discord.js');
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => {

  let everyone = message.guild.roles.cache.find(x => x.name === "Membro");
  message.channel.updateOverwrite(everyone, {
                SEND_MESSAGES: true
              })

              message.channel.send(` \<:coranteverde:745286344669921340> | O envio de mensagem deste canal foi habilitado.`);
}

exports.help = {
    name: "unlock",
    aliases: []
}
