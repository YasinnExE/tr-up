const Discord = require("discord.js");
const kontrol = require('node-fetch');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const checker = require('site-checker');
const moment = require("moment");
const data = require('quick.db');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const os = require("os");
const linkler = data.fetch('chimped');
require("moment-duration-format");//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

exports.run = async (client, message, args) => {

  const payidarzaman = moment//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

    .duration(client.uptime)

//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const istatistikler = new Discord.MessageEmbed()
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    .setColor("RANDOM")

    .addField("**__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)

    .addField("**__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)

    .addField("**__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)

    .addField("**__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)

    .addField("**__Linkler__**", `${linkler.length}`, true)
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    .addField("**__Aktiflik__**", `${payidarzaman}`, true)

  return message.channel.send(istatistikler);
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};

exports.conf = {
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  enabled: true,

  guildOnly: false,

  aliases: ['i'],
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  permLevel: 0
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};

exports.help = {
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  name: "istatistik",

  description: "is",
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  usage: "is"
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};