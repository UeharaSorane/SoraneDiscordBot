const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg);
});

client.login(process.env.DISCORD_ACCESS_TOKEN).catch(console.error);
