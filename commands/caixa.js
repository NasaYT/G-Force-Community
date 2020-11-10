const Discord = require('discord.js');

exports.run = (client, message, args) => { 

    let resp = ["\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Par de Chifres*", "\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Uma namorada**", "\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Nada**", "\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **1 dia de sorte**"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'abrircaixa',
    aliases: []
  }