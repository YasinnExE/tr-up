const Discord = require('discord.js');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const data = require('quick.db');
const moment = require('moment');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const kontrol = require('node-fetch');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const checker = require('site-checker');
moment.locale('tr');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

exports.run = async (client, message, args) => {
let argümanlar = ['ekle', 'sil', 'liste'];
if(!args[0]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Bir argüman belirtmelisin: \`ekle, sil, liste\`** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬● **`))
if(!argümanlar.includes(args[0].toLowerCase())) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Bir argüman belirtmelisin: \`ekle, sil, liste\`** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬● **`))

if(args[0].toLowerCase() === 'ekle') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('Komutu kullanabilmek için [sunucumda](https://discord.gg/V6QEh6mPks) bulunman gerekiyor!'));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Bir link belirtmelisin.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1].startsWith('https://')) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● \`${args[1]}\`, geçersiz bir link.** \n **● \`HTTPS\` ile başlamasına özen göster.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
const linkler = await data.fetch('chimped');
if(linkler) {
if(linkler.find(a => a.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● \`${linkler.length}\` link arasında senin yazdığın \`${args[1]}\` linkide var. Aynı linki tekrar ekleyemem.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
}
data.push('chimped', { site: args[1], sahipID: message.author.id, sahipTag: message.author.tag, sahipName: message.author.username, eklenmeTarihi: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`●▬▬▬▬▬▬▬【 Başarılı!】▬▬▬▬▬▬▬● \n\n **● \`${args[1]}\` linki için \`Uptime\` başladı. Hizmetimizi kullandığınız için teşekkürler!** \n\n ●▬▬▬▬▬▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬● `));


}

if(args[0].toLowerCase() === 'sil') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('Komutu kullanabilmek için [sunucumda](https://discord.gg/V6QEh6mPks) bulunman gerekiyor!'));
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Daha önce hiç link eklenmemiş.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Bir link belirtmelisin.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1].startsWith('https://')) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● \`${args[1]}\`, geçersiz bir link.** \n **● \`HTTPS\` ile başlamasına özen göster.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
if(!linkler.filter(a => a.sahipID === message.author.id).find(c => c.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **Veri tabanımızda sana ait olan \`${linkler.filter(c => c.sahipID === message.author.id).length}\` link arasında \`${args[1]}\` linkini bulamadık.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
if(!linkler.find(a => a.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **Görünüşe göre veritabanımızda \`${linkler.length}\` link içerisinde \`${args[1]}\` linkide bulunmuyor.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));

if(linkler.length == 1) {
data.delete('chimped');
return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬▬▬▬▬▬▬【 Başarılı!】▬▬▬▬▬▬▬** \n\n **● \`${args[1]}\` linki \`${linkler.length}\` link arasından bulundu ve silindi.** \n\n **●▬ ▬▬ ▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬ **`))
} else {
let ex = [];
linkler.forEach(db => {
if(db.site === args[1]) return;
ex.push(db)//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
data.set('chimped', ex)
})
message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬ ▬▬【 Başarılı!】▬▬▬▬▬▬▬** \n\n **● \`${args[1]}\` linki \`${linkler.length}\` link arasından bulundu ve silindi. Şu anda senin: \`${linkler.filter(c => c.sahipID === message.author.id).length-1}\` linkin aktif durumda.** \n\n **●▬ ▬▬ ▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬ **`))
}

}

if(args[0].toLowerCase() === 'liste') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('Komutu kullanabilmek için [sunucumda](https://discord.gg/V6QEh6mPks) bulunman gerekiyor!'));
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Daha önce hiç link eklenmemiş.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
  if(!linkler.filter(a => a.sahipID === message.author.id)) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Hata! 】▬▬▬▬▬ ▬● ** \n\n **● Daha önce hiç link Eklememişsin.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(args[1]) {
if(args[1].toLowerCase() === 'hepsi') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('Komutu kullanabilmek için [sunucumda](https://discord.gg/V6QEh6mPks) bulunman gerekiyor!'));
    if(message.author.id == "627543270985170958" || message.author.id == "627543270985170958" | message.author.id == "627543270985170958" ) {
let a = [];//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
linkler.forEach(s => a.push(`${s.site} ~ Ekleyen: ${s.sahipTag} ~ Eklenme tarihi: ${s.eklenmeTarihi}`));
message.channel.send('```'+a.join('\n')+'```')
}}
} else {
  //! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const embed = new Discord.MessageEmbed().setColor('#5dffd8').setAuthor(message.author.username, message.author.avatarURL());
linkler.filter(a => a.sahipID === message.author.id).forEach(s => {
embed.addField(s.site, `**\`• Eklenme tarihi: ${s.eklenmeTarihi}\`**`);
})//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
message.channel.send(embed.setDescription(`**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
• Toplamda \`${linkler.length}\` link bulundu.
• Bunlardan \`${linkler.filter(a => a.sahipID === message.author.id).length}\` tanesi senin.**
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`));
}
}

//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};
exports.conf = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  enabled: true,
  guildOnly: false,//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  aliases: [],
  permLevel: 0//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}

exports.help = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  name: 'link'
};

//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]