const moment = require('moment')
require('moment-duration-format');
const os = require('os');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const dizi = []
    client.guilds.cache.find((item, i) => {
        dizi.push(item.memberCount)
    })
    var toplam = 0
    for (var i = 0; i < dizi.length; i++) {
        if (isNaN(dizi[i])) {
            continue;
        }
        
        toplam += Number(dizi[i])
    }
    const uptime = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
    
    const wia = new Discord.MessageEmbed().setTitle('İstatistik').setThumbnail(client.user.displayAvatarURL({size: 1024})).addField('Kullanıcı Sayısı', toplam, true).addField('Sunucu Sayısı', client.guilds.cache.size, true).addField('Kanal Sayısı', client.channels.cache.size, true).addField('Çalışma Süresi', uptime, true).addField('Node.JS Versiyon', process.version, true).addField('Ram Kullanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0), true).addField('CPU', `\`\`\`${os.cpus().map(i => i.model)[0]}\`\`\``).addField(`Site adresi`, ` [Site Adresim](https://fate-creative-desk.glitch.me/komutlar.html)`, true).addField(`Destek Sunucu`, ` [Destek Sunucum](https://discord.gg/hsFFrtYfzA) `, true).addField(`Davet Etmek İçin`, ` [Beni Davet Etmek İstermisin](https://discord.com/api/oauth2/authorize?client_id=971169029819596840&permissions=8&scope=bot)`, true)
    
    message.channel.send(wia)
};

exports.conf = {
    aliases: [ "i" ]
};

exports.help = {
    name: 'info',
    description: 'İstatistik',
    usage: 'İstatistik'
};