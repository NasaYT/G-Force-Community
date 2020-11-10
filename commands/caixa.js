const Discord = require('discord.js');

exports.run = (client, message, args) => { 

    let resp = [":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Par de Chifres**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Um(a) namorado(a)**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Nada**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **1 dia de sorte**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Comida no iFood**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **um beijo**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **um toddyn**"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'abrircaixa',
    aliases: ["caixamisteriosa", "caixaabrir"]
  }