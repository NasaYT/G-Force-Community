const akaneko = require('akaneko');
 
exports.run = (client, message, args) => { 
 
  console.log("SFW Neko: " + await akaneko.neko());
 
  console.log("Lewd Neko:" + await akaneko.lewdNeko());
 
  console.log("Lewd Bomb: " + await akaneko.lewdBomb(5));
 
  console.log("BDSM: " + await akaneko.nsfw.bdsm());
  console.log("Maid: " + await akaneko.nsfw.maid());
  console.log("Hentai: " + await akaneko.nsfw.hentai());
}

exports.help = {
    name: 'nsfw',
    aliases: []
}