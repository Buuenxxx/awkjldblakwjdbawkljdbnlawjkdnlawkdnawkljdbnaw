const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const { MessageEmbed } = require('discord.js')
    const revengecode = new MessageEmbed()
    .setTitle('Sikimin aşşa kasımpaşa')
    .setDescription(`-buuenx`)
    message.channel.send(revengecode)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["deneme-davet"],
    permLevel: 0
  };
  
  exports.help = {
    name: "!",
    description: "Botun Davet Bilgileri",
    usage: "davet"
  };