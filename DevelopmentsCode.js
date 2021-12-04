const Discord = require("discord.js");//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const client = new Discord.Client();
const chalk = require("chalk");
var Jimp = require("jimp");//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const { Client, Util } = require("discord.js");
const fs = require("fs");
const http = require("http");//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const express = require("express");
const kontrol = require("node-fetch");
const data = require('quick.db');
require("./util/eventLoader")(client);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

client.ayarlar = { "token": "ENV GİR TOKEN", "prefix": "u!", "sahip": ["627543270985170958", "627543270985170958", "627543270985170958"] };

//Komut Algılayıcı [TR] \\//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar-commands/TR-Komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} TR KOMUT !`);
  files.forEach(f => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    let props = require(`./komutlar-commands/TR-Komutlar/${f}`);
    console.log(`TR KOMUTLAR ==> ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    });
  });
});

//Komut Algılayıcı [TR] \\

//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

//Command Detector [EN] \\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar-commands/EN-Komutlar/", (err, files) => {
  if (err) console.error(err);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  console.log(`${files.length} US KOMUT !`);
  files.forEach(f => {
    let props = require(`./komutlar-commands/EN-Komutlar/${f}`);
    console.log(`EN COMMANDS ==> ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
});

//Command Detector [EN] \\    

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar-commands/TR-Komutlar/${command}`)];
      let cmd = require(`./komutlar-commands/TR-Komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar-commands/TR-Komutlar/${command}`);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    try {
      delete require.cache[require.resolve(`./komutlar-commands/TR-Komutlar/${command}`)];
      let cmd = require(`./komutlar-commands/TR-Komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    }
  });
};

client.elevation = message => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  if (!message.guild) {
    return;
  }
  let permlvl = 0;//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 3;//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

client.login(process.env.token);
const linkler = data.fetch('chimped');
client.on('ready',async () => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
console.log("`" + client.user.username + "` Başarıyla Aktif Hale getirildi!");
client.user.setPresence({ activity: { type: 'WATCHING', name: `${linkler.length} Proje Uptime Ediliyor | u!yardım`}, status: "idle" });
})
setInterval(() => {
const linkler = data.fetch('chimped');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
if(linkler) {
if(linkler.length > 0) {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
linkler.forEach(s => {
kontrol(s.site).catch(err => {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
console.log('');
console.log(`${s.site} hata verdi. Sahibi: ${s.sahipTag}`);
console.log('');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
})
console.log(`${s.site} uptime edildi. Sahibi: ${s.sahipTag}`);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
})
}
}
}, 60000)
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

client.on('ready', ()=>{
client.channels.cache.get('860494426010681385').join()
})//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]





//İNG BİTER \\

const dbuttons = require("discord-buttons");
dbuttons(client);
const { MessageMenu, MessageMenuOption } = require("discord-buttons")
const { MessageEmbed } = require("discord.js")

client.on("message", async message => {
    if(message.content.startsWith("u!yardım")) {
        if(message.author.bot) return;
        let secenek1 = new MessageMenuOption()
        .setLabel("[TR] Yardım")
        .setValue("TRYardım")
        .setDescription("Türkçe Komutlar! ")
        .setDefault()
        .setEmoji("🇹🇷")
        
        let secenek2 = new MessageMenuOption()
        .setLabel("[EN] Help")
        .setValue("ENHelp")
        .setDescription("English Commands! ")
        .setDefault()
        .setEmoji("🇺🇸")
     
        let menu = new MessageMenu()
        .setID("MENU")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("Dil Seçiniz - Select Language !")
        .addOption(secenek1)
        .addOption(secenek2)
  const EnHelp = new MessageEmbed()
          .setTitle("Help")
.setDescription(`

**●▬▬▬▬▬▬▬【 Founders 】▬▬▬▬▬▬▬● **

! ! Development's Code#3189 ➜ <@627543270985170958>
!  Kayronx#0001 ➜ <@852666346038886440>

**●▬▬▬▬▬▬▬【 Help Menu 】▬▬▬▬▬▬▬● **

**● \`u!links add (Links)\` ➜ You add a link to the system.**
**● \`u!links delete (Links)\` ➜ You delete the link from the system.**
**● \`u!links list\` ➜ You look at your links.**
**● \`u!statistics\` ➜ Look at the Statistics.**
**● \`u!invite\` ➜ Invite the bot.**

\`\`\`Founder Private\`\`\`

**● \`u!blacklist\` ➜ black list.**
**● \`u!care\` ➜ maintenance.**

\`\`\`Note\`\`\`
**Friends, Please Use the Bot from Dm \`u!links list\` If you type, your links appear.**

**●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●**
`)
        .setFooter("Test")
        .setColor("BLUE")
        .setTimestamp()
//İNG BİTER \\

// TR MENÜSÜ \\


    const TRYardım = new MessageEmbed()
.setDescription(`

**●▬▬▬▬▬▬▬【 Yapımcılar 】▬▬▬▬▬▬▬● **

! GameMoonTR™#3189 = <@627543270985170958>
!  Kayronx#0001 = <@852666346038886440>

**●▬▬▬▬▬▬▬【 Yardım Menüm 】▬▬▬▬▬▬▬● **

**● \`u!link ekle (Link)\` ➜ Sisteme Link Eklersiniz.**
**● \`u!link sil (Link)\` ➜ Sistemden Link Silersiniz.**
**● \`u!link liste\` ➜ Linklerinize Bakarsınız.**
**● \`u!istatistik\` ➜ İstatistiklere Bakarsın.**
**● \`u!davet\` ➜ Botu Davet Edersin.**

\`\`\`Kurucu Özel\`\`\`

**● \`u!karaliste\` ➜ Karaliste Alınır.**
**● \`u!bakım\` ➜ Bakım Alıır.**

\`\`\`Not\`\`\`
**Arkadaşlar Botu Lütfen Dm'den Kullanın \`u!link liste\` Yazarsanız Linkleriniz Görünüyor.**

**●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●**
`)
        .setColor("BLUE")
        .setTimestamp()
 let menumesaj = await  message.channel.send("**Dil Seçiniz - Select Language !**", menu)
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "TRYardım":
                    menu.reply.send(TRYardım, true)
                break;
                case "ENHelp":
                    menu.reply.send(EnHelp, true)
                break;

            }
        }
        client.on("clickMenu", menu => {
            if(menu.message.id == menumesaj.id) {
                if(menu.clicker.id == message.author.id) {
                    menuselection(menu)
                }else{
                    menu.reply.send("Menü sahibi değilsin.", true)
                }
            }
        })
    }
})

// TR MENÜSÜ \\