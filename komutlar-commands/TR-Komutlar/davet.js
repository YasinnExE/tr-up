const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Rollü Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\`\`\`

**Rolsüz Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0\`\`\`

**Destek Serveri İcin:** [Buraya tıkla](https://discord.gg/V6QEh6mPks)
\`\`\`https://discord.gg/V6QEh6mPks\`\`\``));

};
exports.conf = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  enabled: true,
  guildOnly: true,
  aliases: [],//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  permLevel: 0
}
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
exports.help = {
  name: 'davet'
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]