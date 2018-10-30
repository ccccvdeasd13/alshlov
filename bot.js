const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "a";
var adminprefix = 'a'
const developers = ["472413769700474901","502759365380407296","452796933946343424"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message',function(message) {
    if(message.content.startsWith(`<@${client.user.id}>`)) {
        message.channel.send('انقلع ولاتمنشن')
        message.channel.send('لا تفعل المستحيل من أجل شخص لم يفعل من أجلك الممكن')
        message.channel.send('رد تلقائي')
    }
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
