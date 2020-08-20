const Discord = require('discord.js')
locale('pt-BR')

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
                .setTitle("\<:notificacao:745286344615395428> G-Force Community", message.author.avatarURL)
                .setThumbnail(message.author.avatarURL)
                .addField("\<:notificacao:745286344615395428> Usuário Desmutado:", message.mentions.members.first(), false)
                .addField('\<:livro:745286345634742382> Data do desmutamento:', message.createdAt.toLocaleString())
                
                message.channel.send(embed);
        }

exports.help = {
    name: 'unmute',
    aliases: ['unmute', 'desmutar']
  }