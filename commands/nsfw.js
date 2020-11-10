const akaneko = require('akaneko');
 
async function yourFunctionName() {
 
  console.log("SFW Neko: " + await akaneko.neko());
 
  console.log("Lewd Neko:" + await akaneko.lewdNeko());
 
  console.log("Lewd Bomb: " + await akaneko.lewdBomb(5));
 
  console.log("BDSM: " + await akaneko.nsfw.bdsm());
  console.log("Maid: " + await akaneko.nsfw.maid());
  console.log("Hentai: " + await akaneko.nsfw.hentai());
}
 
yourFunctionName();

exports.help = {
    name: 'nsfw',
    aliases: [""]
}