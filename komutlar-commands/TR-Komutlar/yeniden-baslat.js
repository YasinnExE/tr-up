const Discord = require('discord.js');//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
const bot = new Discord.Client();//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]


module.exports.run = async (bot, message, args) => { //! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
   
  var embed2 = new Discord.MessageEmbed()   
      .setTitle('Merhaba')//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
      .setDescription('sadece sahibim bu komutu  kullanabilir! Yani ! GameMoonTR™#3189')
      .setColor('RED') //! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  

  if(message.author.id !== "627543270985170958") return message.channel.send(embed2)
     
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  var embed = new Discord.MessageEmbed()   
      .setTitle('**Merhaba Sahibim GameMoonTR,**')
      .setDescription('Beni yeniden başlatmak  istediğine eminsen aşağıdaki **TİK** işaretine, bir kere dokunur musun?')
      .setColor('RANDOM')
message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => message.delete().then(mr => sentEmbed.delete()).then(m => message.delete()).then(m2 => message.author.send("Yeniden Başlatma İşlemi iptal ettim! "))) 
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
  try {//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    message.delete().then(mr => sentEmbed.delete()).then(wb => { 
 console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
    })
  } catch (err) {
  // Pudochu
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]

        }
    })//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
})
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
module.exports.conf = {
  enabled: true,
  guildOnly: false,//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
  aliases: ['yenidenbaşlat'],
  permLevel: 0//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};
//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'//! Development's Code Subscribe ! | ! Development's Code Abone Ol ! [YOUTUBE]
};