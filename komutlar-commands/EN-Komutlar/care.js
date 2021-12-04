const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "627543270985170958") return message.reply('')
let CodeWork = db.fetch(`CodeWork.botbakim`)//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
if(CodeWork) {
message.channel.send(`<a:elmas:837449699015262238> Bot maintenance is out`)
db.delete(`CodeWork.botbakim`)
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

if(!CodeWork) {
message.channel.send(`<a:elmas:837449699015262238>  bot maintenance done !`)
db.set(`CodeWork.botbakim`, 'aktif')//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
}};


exports.conf = {
enabled: true,//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
guildOnly: false,
aliases: [],
permLevel: 4
};

exports.help = {
name: 'care',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};