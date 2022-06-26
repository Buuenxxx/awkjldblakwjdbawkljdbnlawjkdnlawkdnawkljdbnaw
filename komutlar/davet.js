const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const { MessageEmbed } = require('discord.js')
    const revengecode = new MessageEmbed()
    .setTitle('BX BOT - Davet Linkleri')
    .setDescription(`
    [BOTU DAVET ETMEK İÇİN TIKLA](https://discord.com/api/oauth2/authorize?client_id=971169029819596840&permissions=8&scope=bot)
    [BOTUN DESTEK SUNUCUSUNA GELMEK İÇİN TIKLA](https://discord.gg/hsFFrtYfzA)
    [BOTUN SİTE LİNKİ](https://fate-creative-desk.glitch.me/komutlar.html)
    [Ulaşmak İçin Buuenx.jpg#1401 )`)
    message.channel.send(revengecode)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["deneme-davet"],
    permLevel: 0
  };
  
  exports.help = {
    name: "davet",
    description: "Botun Davet Bilgileri",
    usage: "davet"
  };