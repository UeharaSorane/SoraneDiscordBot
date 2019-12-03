const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    msg.reply(msg);
});

client.login('NjUxMzEzNDk1NDg0MTM3NDcz.XeYUCw.4Z2V2bBjhRkFtzFvxANs0vzIxq8').catch(console.error);
