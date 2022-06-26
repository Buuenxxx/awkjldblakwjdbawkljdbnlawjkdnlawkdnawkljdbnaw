let db = require("quick.db")
let ayarlar = require("../ayarlar.json")

exports.run = async(client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`❌ **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonelog #kanal__**`)
  
  
  db.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`✅ **Rol kanalı başarıyla "${log}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: '!rol-log #kanal',
  açıklama: 'Rol Logunu Ayarlarsınız',
  kategori: 'Rol'
}