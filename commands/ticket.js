const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#cd3")
    .setAuthor(" TICKET")
    .setDescription("\<:notificacao:745286344615395428> | Confirme a criação do seu ticket clicando na reação abaixo.")
    .setFooter("G-Force Community - Ticket")

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎟️")
    })
}

exports.help = {
    name: "ticket",
    aliases: []
}