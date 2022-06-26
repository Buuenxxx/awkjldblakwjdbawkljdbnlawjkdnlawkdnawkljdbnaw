let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}

  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `❌ **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}rol-yetkili-rol @rol__**`
    );

  db.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `✅ **Rol yetkilisi başarıyla "${rol}" olarak ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-y-rol"],
  perm: 0
};
exports.help = {
  name: "rol-yetkili-rol"
};

exports.play = {
  kullanım: "!rol-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Rol"
};
