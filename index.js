const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');

var app = express();

app.post('/', client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	});
);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("App now running on port", port);
	console.log("好，沒事");
});

client.on('message', msg => {
    console.log(msg);
});

client.login(process.env.DISCORD_ACCESS_TOKEN).catch(console.error);
