const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "\<:fechar:745286345361981482> | Você precisa da permissão MANAGE_ROLES para usar este comando."
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("\<:fechar:745286345361981482> | Você precisa da permissão MANAGE_ROLES para usar este comando.");
      }
      const user = message.mentions.members.first();

        if (!user) {
        return message.channel.send(
            "\<:exclamacao:745286346641375283> | Você precisa mencionar um usuário para ser desmutado."
        );
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "SILENCIADO")
    
    
    if(user.roles.cache.has(muterole)) {
        return message.channel.send("\<:fechar:745286345361981482> | Este usuário não está mutado")
        }

        user.roles.remove(muterole)

                let embed = new Discord.MessageEmbed()
                .setTitle("🚫 RD - Desmutar 🚫", message.author.avatarURL)
                .setThumbnail(message.author.avatarURL)
                .addField("📋Staff Tag", message.author.tag, true)
                .addField("Staff ID", message.author.id, false)
                .addField("📋Membro Tag", message.mentions.members.first(), false)
                .addField("Membro ID", message.mentions.members.first().id, false)
                .setColor("RANDOM").setTimestamp()
                
                client.channels.cache.get('712451499564728380').send(embed)
    
                user.send(`\<:tick:745286349128597645> | Você foi desmutado do **${message.guild.name}**`)
        }

exports.help = {
    name: 'unmute',
    aliases: ['unmute', 'desmutar']
  }