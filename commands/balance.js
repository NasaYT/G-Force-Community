
exports.run = async(client, message, args, color, prefix) => {
  let user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  if(user.bot) return message.reply(`O bot não tem dinheiro!`);
  
  const {balance} = await client.eco.FetchBalance(user.id);
  
if (balance == 0) {
  message.channel.send(`**${user.username}** não possuí dinheiro.`);
} else if(user.id === message.author.id) {
  message.channel.send(`Você possuí ${client.config.coin_icon}${balance} ${client.config.coin}`)
} else {
  message.channel.send(`**${user.username}** possúi ${client.config.coin_icon}${balance} ${client.config.coin}`) 
}
} 

exports.conf = {
  aliases: ['money', 'dinheiro'], 
  cooldown: '2'
} 
exports.help = {
  name: 'money', 
  description: 'check your balance or another user balance', 
  usage: 'balance [@SomeOne | id]', 
  example: ['balance @SomeOne', 'balance 123456789'] 
} 