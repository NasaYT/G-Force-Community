const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => { 
  let erro = new MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sorteio\` - Faça sorteios com o bot`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sorteio tempo(m/h/d) #NomeDaSala Prêmio\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sorteio 1m #NomeDaSala Nitro Grátis\``)
  .setColor('#8c0046')   

    if (!args[0]) return message.channel.send(erro);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `\<:exclamacao:745286346641375283> | O tempo definido tem que ser maior que 1 minuto!\ns = segundo(s)\nm = minuto(s)\nh = hora(s\nd = dia(s)`
      );
    if (isNaN(args[0][0])) return message.channel.send(erro);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `\<:fechar:745286345361981482> | O canal mencionado não foi encontrado!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`\<:exclamacao:745286346641375283> | Prêmio não especificado!`);
    message.channel.send(`*Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo Sorteio!`)
      .setDescription(
        `\<:esmeralda:745286344900870395> | Reaja com :tada: para entrar!\n\nSorteio iniciado por ${message.author}\nPrêmio: **${prize}**\nTempo restante: ${args[0]}`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        return message.channel.send(
          `\<:fechar:745286345361981482> | O sorteio foi cancelado pois não havia pessoas suficiente!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `\<:seta1:745286347723374672> | O Ganhador do sorteio **${prize}** foi **${winner}**`
      );
    }, ms(args[0]));
  }

exports.help = {
  name: "sorteio",
  aliases: ['sorteio', 'giveaway', 'sortear']
}