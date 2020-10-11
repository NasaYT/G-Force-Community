/* */
/* Comando feito por Pewd */
/* Discord: Byel@0002 */
/* */

const Discord = require('discord.js')
const axios = require('axios');

exports.run = async(bot, message, args) => {
  
    var ip = "rededest.com.br" 
    var url = 'https://api.mcsrvstat.us/2/' + ip

    axios.get(url).then(function (response) { 
        let players = response.data.players.online
        let playersmax = response.data.players.max
        let versao = response.data.version
        let icone = response.data.icon
        let versao1 = response.data.software

        const embed2 = new Discord.MessageEmbed()
        .setDescription(`Servidor desligado`)
        .setColor("#2F3136")

        if(!response.data.online) return message.channel.send(embed2)
  
        const embed1 = new Discord.MessageEmbed()
    	.setTitle("Servidor de Minecraft")
        .setColor("#2F3136")
        .setThumbnail("https://cdn.discordapp.com/emojis/759627248600088636.png?v=1")
        .addField("IP", `${ip}`, true)
        .addField("Status", `Ligado`, true)
        .addField("Jogadores", response.data.players.online + "/" + response.data.players.max, true)
        .addField("Versões", `${versao1} ${versao}`)
        .setFooter("Sugerimos que você faça o login aqui, caso você peca a sua conta é possível recupera-la!")
        .setTimestamp()
        message.channel.send(embed1)
    })
}

exports.help = {
    name: "ip",
    aliases: ["server"]
}