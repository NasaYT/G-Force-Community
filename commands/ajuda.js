const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
  
    message.channel.send('\<:notificacao:745286344615395428> | Verifique a sua DM.')


     const embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('\<:livro:745286345634742382> | Veja os comandos da G-Force Community por categorias, só basta clicar em um emoji! \n\n\n🤖 `Bot` \n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🤖').then(r => { // bot
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🔙').then(r => { // inicio
            })
        })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const BotFilter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Bots = msg.createReactionCollector(BotFilter);
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);

        Bots.on('collect', r2 => {
         const embed = new Discord.MessageEmbed()
          .setTitle('🤖 BOT')
          .addField(`\`/botinfo\``, `Saiba mais sobre mim`)
          .addField(`\`/setprefix\``, `Troque o prefixo do bot`)
          
          msg.edit(embed)
        }) 

        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            const embed = new Discord.MessageEmbed()
                .setTitle("🔧 ÚTEIS")
                .addField(`\`/userinfo\``, `Use para ver algumas informações do usuário mencionado`)
                .addField(`\`/serverinfo\``, `Use para saber informações do servidor`)
                .addField(`\`/lembrete\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`\`/ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`/ticket\``, `Crie um chat direto com os staffs`)

                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("👮 MODERAÇÃO")
                .addField(`\`/clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`/anuncio\``, `Use para anunciar algo com o bot`)
                .addField(`\`/unlock\``, `Desbloqueie um chat`)
                .addField(`\`/lock\``, `Bloqueie o chat`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("❤ ENTRETENIMENTO")
                .addField(`\`/falar\``, `Fale pelo bot`)
                .addField(`\`/roleta\``, `Jogue Roleta Russa`)
                .addField(`\`/ppt\``, `Jogue Pedra Papel e Tesoura`)
                .addField(`\`/laranjo\``, `Faça seu meme do Laranjo`)
                .addField(`\`/dado\``, `Jogue um dado 1d10`)
                .addField(`\`/avatar\``, `Baixe o avatar de alguém`)
                .addField(`\`/pergunta\``, `Me faça uma pergunta`)
                .addField(`\`/tapa\``, `De um tapa em alguém`)
                .addField(`\`/abraçar\``, `Abraçe alguém`)
                .addField(`\`/cocega\``, `Faça cócegas em alguém`)
                .addField(`\`/beijo\``, `De um beijo em alguém`)
                .addField(`\`/cafuné\``, `De um cafuné em alguém`)
                .addField(`\`/comida\``, `De comida para alguém`)
                .addField(`\`/catucar\``, `De uma catucada em alguém`)
                .addField(`\`/reverter\``, `Rerverter a frase`)
                .addField(`\`/mchead\``, `Para pegar uma cabeça de minecraft`)
                .addField(`\`/firstword\``, `Fazer um meme de primeiras palavras`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('\<:livro:745286345634742382> | Veja os comandos da G-Force Community por categorias, só basta clicar em um emoji! \n\n\n🤖 `Bot` \n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
            
           msg.edit(embed);  
        });
    });
}

exports.help = {
    name: 'ajuda',
    aliases: ['ajuda', 'help', 'comandos']
}
