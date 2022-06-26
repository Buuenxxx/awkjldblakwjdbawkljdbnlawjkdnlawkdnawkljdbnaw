const Discord = require('discord.js')

const db = require('quick.db')

exports.run = (client, message, args) => {

  

  if(message.author.id !== "704505210738835486") return message.channel.send('```Bunu Sadece Buuenx Kullanabilir```')

  

  if(!args[0]) return message.channel.send('Doğru kullanım `!bakım aç/kapat`')

  

  if(args[0] === 'aç') {

    if(db.fetch(`bakimmod`)) return message.channel.send('Zaten açık')

    message.channel.send(' Başarıyla bakım modu açıldı.')

    db.set(`bakimmod`, 'on')

  }

  if(args[0] === 'kapat'){

    if(!db.fetch(`bakimmod`)) return message.channel.send('Zaten kapalı.')

    message.channel.send('Başarıyla bakım modu kapatıldı.')

    db.delete(`bakimmod`)

  }

  

}

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

}

exports.help = {

  name: 'bakım',

description: 'bakım moduu',

usage: 'yaz',

}