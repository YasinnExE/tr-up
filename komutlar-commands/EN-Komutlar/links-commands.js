const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
const kontrol = require('node-fetch');
const checker = require('site-checker');
moment.locale('tr');

exports.run = async (client, message, args) => {
let komutlar = ['add', 'delete', 'list'];
if(!args[0]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● You must specify a command: \`add, delete, list\`** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬● **`))
if(!komutlar.includes(args[0].toLowerCase())) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● You must specify a command: \`add, delete, list\`** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬● **`))

if(args[0].toLowerCase() === 'add') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('To use the command [on my server](https://discord.gg/V6QEh6mPks) you need to be found!'));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● You must specify a link.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1].startsWith('https://')) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● \`${args[1]}\`, an invalid link.** \n **● \`HTTPS\` Make sure to start with.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
const linkler = await data.fetch('chimped');
if(linkler) {
if(linkler.find(a => a.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● \`${linkler.length}\` in the link you wrote \`${args[1]}\` it's in the link. I can't add the same link again.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
}
data.push('chimped', { site: args[1], sahipID: message.author.id, sahipTag: message.author.tag, sahipName: message.author.username, addnmeTarihi: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`●▬▬▬▬▬▬▬【 Successful!】▬▬▬▬▬▬▬● \n\n **● \`${args[1]}\` for the link \`Uptime\` started. Thanks for using our service!** \n\n ●▬▬▬▬▬▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬● `));


}

if(args[0].toLowerCase() === 'delete') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('To use the command [on my server](https://discord.gg/V6QEh6mPks) you need to be found!'));
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● No link has been added before.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● You must specify a link.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(!args[1].startsWith('https://')) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● \`${args[1]}\`, an invalid link.** \n **● \`HTTPS\` Make sure to start with.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
if(!linkler.filter(a => a.sahipID === message.author.id).find(c => c.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **Yours in our database\`${linkler.filter(c => c.sahipID === message.author.id).length}\` between the link \`${args[1]}\` We couldn't find the link.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`))
if(!linkler.find(a => a.site === args[1])) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **Looks like our database \`${linkler.length}\` in the link \`${args[1]}\` not in the link.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));

if(linkler.length == 1) {
data.delete('chimped');
return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬▬▬▬▬▬▬【 Successful!】▬▬▬▬▬▬▬** \n\n **● \`${args[1]}\` link \`${linkler.length}\` found from link and deleted.** \n\n **●▬ ▬▬ ▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬ **`))
} else {
let ex = [];
linkler.forEach(db => {
if(db.site === args[1]) return;
ex.push(db)
data.set('chimped', ex)
})
message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬ ▬▬【 Successful!】▬▬▬▬▬▬▬** \n\n **● \`${args[1]}\` link \`${linkler.length}\` found from link and deleted. Currently your: \`${linkler.filter(c => c.sahipID === message.author.id).length-1}\` your link is active.** \n\n **●▬ ▬▬ ▬▬【 ▬▬▬ 】▬▬▬▬▬▬▬ **`))
}

}

if(args[0].toLowerCase() === 'list') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('To use the command [on my server](https://discord.gg/V6QEh6mPks) you need to be found!'));
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● no links before add.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
  if(!linkler.filter(a => a.sahipID === message.author.id)) return message.channel.send(new Discord.MessageEmbed() .setColor('#5dffd8') .setDescription(`**●▬ ▬▬▬▬▬【 Error! 】▬▬▬▬▬ ▬● ** \n\n **● You have never added a link before.** \n\n **●▬ ▬▬▬▬▬【 ▬ ▬ 】▬▬▬▬▬ ▬●**`));
if(args[1]) {
if(args[1].toLowerCase() === 'all') {
   try{usr = await client.guilds.cache.get('847069049213288448').members.fetch(message.author.id)} catch (e) {usr = undefined}
  if (!usr) return message.channel.send(new Discord.MessageEmbed().setDescription('To use the command [on my server](https://discord.gg/V6QEh6mPks) you need to be found!'));
    if(message.author.id == "627543270985170958" || message.author.id == "627543270985170958" | message.author.id == "627543270985170958" ) {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
let a = [];
linkler.forEach(s => a.push(`${s.site} ~ adding: ${s.sahipTag} ~ date: ${s.addnmeTarihi}`));//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
message.channel.send('```'+a.join('\n')+'```')//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}}//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
} else {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  
const embed = new Discord.MessageEmbed().setColor('#5dffd8').setAuthor(message.author.username, message.author.avatarURL());
linkler.filter(a => a.sahipID === message.author.id).forEach(s => {
embed.addField(s.site, `**\`• date: ${s.addnmeTarihi}\`**`);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
})
message.channel.send(embed.setDescription(`**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
• in total \`${linkler.length}\` link found.
• Of these \`${linkler.filter(a => a.sahipID === message.author.id).length}\` your.**
**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`));
}
}

//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};
exports.conf = {
  enabled: true,//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  guildOnly: false,
  aliases: [],
  permLevel: 0//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}

exports.help = {
  name: 'links'//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};

