const request = require('snekfetch');

exports.run = (client, message, args) => {

    request.get('http://tnai.ml/sfw/hug').then(response => { 
    console.log(response.body.url)
});

}
exports.help = {
    name: 'nsfw',
    aliases: []
}