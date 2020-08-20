const Discord = require("discord.js")
moment.locale('pt-BR');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(
          "\<:barreira:745286341755011173> | Você não tem permissão!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("\<:barreira:745286341755011173> | Sem permissões.");
      }
    
      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          "\<:exclamacao:745286346641375283> | Mencione quem você deseja mutar"
        );
      }
   
      if(user.id === message.author.id) {
        return message.channel.send("\<:fechar:745286345361981482> | Eu não tenho permissão para mutar usuários superiores a mim.");
      }

      let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("\<:exclamacao:745286346641375283> | Razão não especificada")
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
    
    
      if(!muterole) {
      return message.channel.send("\<:exclamacao:745286346641375283> | Este servidor não tem o cargo `Silenciado`")
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("\<:exclamacao:745286346641375283> | Usuário já está mutado.")
      }

    user.roles.add(muterole)

    let embed = new Discord.MessageEmbed()
        .setTitle("\<:notificacao:745286344615395428> G-Force Community", message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("\<:notificacao:745286344615395428> Usuário Mutado:", message.mentions.members.first(), false)
        .addField("\<:diploma:745286344980561981> Motivo:", reason, true)
        .addField('\<:livro:745286345634742382> Data do banimento:', message.createdAt.toLocaleString())

        client.channels.cache.get('697952134167003237').send(embed)
    
    user.send(`\<:aviso1:745286341339906049> | Você está mutado em **${message.guild.name}** Pela razão \`${reason}\``)
}

exports.help = {
    name: 'mute',
    aliases: ['mute', 'mutar']
  }