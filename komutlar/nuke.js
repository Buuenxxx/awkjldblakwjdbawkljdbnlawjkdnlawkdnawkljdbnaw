const Discord = require('discord.js');

exports.run = async (client, message, args) => {
     if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("❌  Bu komutu kullana bilmek için (Mesajları Yönet) Yetkisine Sahip Olmanlazım  ")
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Yetersiz Yetki")
      let channel = message.channel;

    message.channel.send("✅ Patlatma İşlemi Başlatılıyor")
   
  
    const cloned = await channel.fetch();
    const channelWebhooks = await channel.fetchWebhooks();
  
  
    await channel.delete();
    const created = await message.guild.channels.create(cloned.name,{
      type:cloned.type,
      parent:cloned.parent,
      nsfw:cloned.nsfw,
      topic:cloned.topic,
      rateLimitPerUser:cloned.rateLimitPerUser,
      permissionOverwrites:cloned.permissionOverwrites.array()
    })

  for await (const [id, webhook] of channelWebhooks) {
  
  await created.createWebhook(webhook.name, {
  
  avatar:webhook.avatar,
  
  reason:"✅ Patlatma İşlemi Başarı İle Sonlandı Kanal PATLATILDI." 
  
  })
  }
  message.guild.channels.cache.find(a => a.name === created.name).send("✅ Patlatma İşlemi Başarı İle Sonlandı Kanal PATLATILDI. \nhttps://share.creavite.co/18lX4nvcfJKEdsjP.gif")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'patlat'
};