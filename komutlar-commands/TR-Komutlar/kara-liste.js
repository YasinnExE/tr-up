const Discord = require('discord.js');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const database = require('quick.db');
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
exports.run = async (client, message, chimp) => {
if(message.author.id !== '627543270985170958') return;
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
if(!chimp[0]) return message.reply("Bir kullanıcı id'si girmelisin.");

const user = await client.users.fetch(chimp[0]).catch(err => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
return message.reply('Bu idye sahip bir kullanıcı bulamadım.')});

if(user) {
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  if(database.fetch(user.id)) {
  database.delete(user.id);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı zaten karalistedeydi, karalisteden çıkarıldı.\nArtık botun komutlarını kullanabilecek.`);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  }
  database.set(user.id, true);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı başarıyla karalisteye alındı.\n\`${user.username}\`'nin taç sahibi olduğu tüm sunucularda benim komutlarımı kimse kullanamayacak.\nTaç sahibi değil ise, \`${user.username}\` yine komutları kullanamayacak.`);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}; 
exports.conf = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  enabled: true,
  guildOnly: false,
  aliases: [],//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  permLevel: 0
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
 
exports.help = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  name: 'karaliste'
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]