const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} when using please \`@${client.user.username}\` role keep it up high!

**Role Invitation:** [Click here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\`\`\`

**For Roleless Invitation:** [Click here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0\`\`\`

**For Support Server:** [Click here](https://discord.gg/V6QEh6mPks)
\`\`\`https://discord.gg/V6QEh6mPks\`\`\``));

};
exports.conf = {
  enabled: true,//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  guildOnly: true,
  aliases: [],
  permLevel: 0//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}

exports.help = {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  name: 'invite'
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]