const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode usar esse comando.")
        message.delete(200).catch()

        let splitarg = args.join(" ").split(0)
        let anuncio = splitarg[0]

        const baka = new Discord.RichEmbed()   
        let avatar1 = message.client.user.displayAvatarURL
        
    baka.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
    baka.setTimestamp()
    baka.setColor(`RANDOM`)
    baka.setDescription("<:super_keelta:636768010417340427> ``/anunciar`` \n\n**Fazer um anúncio no servidor.**\n\n<a:Think3D:637057613460406282> **Jeito de usar**: /anunciar `<texto>`")
    baka.addField(`📗 Exemplos`, "`/anunciar Olá :)`")
    baka.setFooter(`Ações`, avatar1)

            if(!anuncio)  return message.reply(baka)

        let anuncioembed = new Discord.RichEmbed()
        anuncioembed.setColor("RANDOM")
        anuncioembed.setDescription(`Ao usar **/anunciar**, você estará prestes a mencionar várias pessoas. Tem certeza?`)
        anuncioembed.setFooter('Você tem 13s para concordar, ou exclua essa mensagem.')
        anuncioembed.setTimestamp();

        return message.channel.send(anuncioembed).then(async msg => {

             msg.react("✅")

            let anuncioembed = new Discord.RichEmbed()  

            .setAuthor(`${message.guild.name}`,`${message.author.avatarURL}`)
            .setColor("RANDOM")
            .setDescription(`${anuncio}`)
            .setColor('#fe1862')
            .setFooter(`Anunciado por ${message.author.tag}`, `${message.author.avatarURL}`)
            .setTimestamp();

            const a1 = (reaction, user) => reaction.emoji.name ==='✅' && user.id === message.author.id
            const b1 = msg.createReactionCollector(a1, { time: 13000 });
           
            b1.on("collect", c1 => {
            msg.edit(anuncioembed)
            msg.edit('@everyone')
            c1.remove(message.author.id)

       })

    })
}}
