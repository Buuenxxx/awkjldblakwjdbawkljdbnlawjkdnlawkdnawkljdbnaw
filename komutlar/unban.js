const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`<:> **Malesef Yeterli Yetkiniz Bulunmamakta.**`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`❌ Kullanıcı ID'si Hatalı Veya Kullanıcı Sunucuda Yasaklı Değil.`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`**İşlem Başarılı.**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = { //sharpen
    name: 'unban'
};