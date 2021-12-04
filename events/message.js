const Discord = require('discord.js')
const database = require('quick.db');
const db = require("quick.db");
module.exports = async message => {

  
  let client = message.client;
  if (message.author.bot) return;

  let prefix = client.ayarlar.prefix;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
/*message.js'de if(cmd) kısmının üstüne yeni bir satır açıp bu komut dosyasını yapıştırın. Ayrıca yine message.js'de en üstte const Discord = require('discord.js') yazısının altında const database = require('quick.db'); ekleyin.*/

  if(cmd) {
  if(message.author.id !== '627543270985170958') {
  if(database.fetch('627543270985170958') && !database.fetch(message.author.id)) return message.reply('Bu sunucunun sahibi botun karalistesinde. O yüzden sende komut kullanamazsın.'); 
  if(database.fetch(message.author.id)) return message.reply('Sen botun karalistesindesin. Komutları kullanamazsın. [TIKLA](https://discord.gg/V6QEh6mPks)');
  };
  };


  if (cmd) {

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

module.exports = async message => {
let CodeWork = db.fetch(`CodeWork.botbakim`)
  let client = message.client;
  let prefix = db.fetch(`prefix_${message.guild.id}`) || 'u!'
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
  if(message.author.id !== '627543270985170958' && CodeWork) return message.channel.send(`<a:dyru:825007122899009537>  Bot şuan bakımdadır, lütfen sahibim açana kadar beklemede kalınız.`)
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};



};
