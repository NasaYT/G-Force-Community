const request = require('snekfetch');

exports.run = (client, message, args) => {

    const tnai = require('tnai'),
    gif = client.sfw.hug()
    
    console.log(gif)
}


exports.help = {
    name: 'nsfw',
    aliases: [""]
  }