const request = require('snekfetch');

exports.run = (client, message, args) => {

    const tnai = require('tnai'),
    cli = new client(),
    gif = cli.sfw.hug()
    
    console.log(gif)
}


exports.help = {
    name: 'nsfw',
    aliases: [""]
  }