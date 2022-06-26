const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
var userlist = message.guild.fetchBans()
userlist.then(collection => {
if(collection.first() == null){
  
const embed = new Discord.MessageEmbed()
.setTitle("❌ Sunucunuzda Banlanan Kimse Yok!")      
.setColor("BLUE")
message.channel.send(embed)
  
} else {
const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
const embed = new Discord.MessageEmbed()
.setTitle(" ✅ Sunucudan Banlananlar")
.setColor("BLUE")
.setDescription(data)
.setTimestamp()
.setFooter("Created By Buuenx")
message.channel.send(embed)
}
})
}

exports.conf = {
  aliases: ["banlist","banliste"]
}

exports.help = {
  name: 'bansay'
}