const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "627543270985170958") return message.reply('')
let CodeWork = db.fetch(`CodeWork.botbakim`)//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
if(CodeWork) {
message.channel.send(`<a:elmas:837449699015262238> Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`CodeWork.botbakim`)
};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
if(!CodeWork) {
message.channel.send(`<a:elmas:837449699015262238>  Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`CodeWork.botbakim`, 'aktif')
}};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['bakim'],
permLevel: 4
};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]