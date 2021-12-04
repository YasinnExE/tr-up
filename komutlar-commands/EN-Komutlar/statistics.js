const Discord = require("discord.js");
const kontrol = require('node-fetch');
const checker = require('site-checker');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const moment = require("moment");
const data = require('quick.db');
const os = require("os");
const linkler = data.fetch('chimped');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
require("moment-duration-format");

exports.run = async (client, message, args) => {

  const payidarzaman = moment//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .duration(client.uptime)
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const istatistikler = new Discord.MessageEmbed()//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .setColor("RANDOM")

    .addField("**__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .addField("**__Number of users__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)

    .addField("**__Number of Servers__**", `${client.guilds.cache.size.toLocaleString()}`, true)//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .addField("**__Number of Channels__**", `${client.channels.cache.size.toLocaleString()}`, true)

    .addField("**__Links__**", `${linkler.length}`, true)
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    .addField("**__Activity__**", `${payidarzaman}`, true)

  return message.channel.send(istatistikler);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

  permLevel: 0

};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
exports.help = {

  name: "statistics",//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

  description: "statistics",
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  usage: "statistics"

};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]