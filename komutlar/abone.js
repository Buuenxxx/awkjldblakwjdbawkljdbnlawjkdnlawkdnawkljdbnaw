let Discord = require("discord.js");
let db = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}

  let aboneyetkilisi = await db.fetch(
    `rolyetkilisi.${message.guild.id}`
  );
  let abonelog = await db.fetch(`rollog.${message.guild.id}`);
  let abonerol = await db.fetch(`vrol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `❌ **__Verilcek rol ayarlanmamış!__**`
    );
  if (!abonelog)
    return message.channel.send(
      `❌ **__Rol log kanalı ayarlanmamış!__**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `**__Rol yetkili rolü ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Bir Üye Etiketle!`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`✅  Rol Verildi!`)
    .addField(
      `🎃  Rolü Veren Kişi:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `🔔  Rol Verilen Kişi:`,
      `${user}`,
      true
    )
   .addField(
     `🔎 Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
    .setColor(`RANDOM`)
    .setImage("https://share.creavite.co/18lX4nvcfJKEdsjP.gif")
    .setFooter(`${client.user.username} Rol Sistemi`);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol"],
  perm: 0
};
exports.help = {
  name: "a"
};

exports.play = {
  kullanım: "el!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};

