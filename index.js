/////引入函數庫/////
const Discord = require('discord.js');
const express = require('express');
const client = new Discord.Client();

const Analytics = require('./modules/analytics.js');
/////Express架設/////
var app = express();

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("App now running on port", port);
	console.log("好，沒事");
});

/////Discord Bot架設/////
var BotId = client.user.id;
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
	var RT = Analytics.parseInput(msg);
	
});

client.login(process.env.DISCORD_ACCESS_TOKEN).catch(console.error);
