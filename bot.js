const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`- سيصيبك ما أصبتني به ، فقط إنتظر .`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});

client.on('message',function(message) {
    if(message.content.startsWith(`<@${client.user.id}>`)) {
        message.channel.send('انقلع ولاتمنشن')
        message.channel.send('لا تفعل المستحيل من أجل شخص لم يفعل من أجلك الممكن')
        message.channel.send('رد تلقائي')
    }
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
