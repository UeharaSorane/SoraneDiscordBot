const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    msg.reply(msg);
});

client.login('NjUxMzEzNDk1NDg0MTM3NDcz.XeYXMw.GfUiV-wBevtecH3sL66KvX80-_A').catch(console.error);
