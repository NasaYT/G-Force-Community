const Discord = require('discord.js');
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => {

  let everyone = message.guild.roles.cache.find(x => x.name === "@everyone");
  message.channel.updateOverwrite(everyone, {
                SEND_MESSAGES: false
              })

              message.channel.send(`:lock: | O envio de mensagem desde canal foi desabilitado novamente.`);
}

exports.help = {
    name: "lock",
    aliases: []
}