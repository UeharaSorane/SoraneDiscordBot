/////引入函數庫/////
const Discord = require('discord.js');
const express = require('express');
const Line = require('linebot');

var bot = Line({
  	channelSecret: process.env.LINE_CHANNEL_SECRET, //這裡是讓系統抓在Heroku設定的數據
  	channelAccessToken: process.env.LINE_CHANNEL_ACCESSTOKEN // 同上
});
const client = new Discord.Client();

const Analytics = require('./modules/analytics.js');
/////Express架設/////
var app = express();
app.post('/', bot.parser());

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("App now running on port", port);
	console.log("好，沒事");
});

/////Discord Bot架設/////
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
	var RT = Analytics.parseInput(msg.content);
	
	if(RT[0] === "rply"){
		var BotId = client.user.id;
		if(BotId != msg.author.id) msg.reply(RT[1]);
	}else if(RT[0] == "NaC"){
		console.log(msg.author.username + "說了:「" + msg.content + "」(Dis)");
	}
	
});

client.login(process.env.DISCORD_ACCESS_TOKEN).catch(console.error);
/////Line Bot架設/////
bot.on('message', function(event) {
	event.source.profile().then(function (profile) {
		
		/////以下是擷取下來的資源/////
		var src = event.source;
		var msg = event.message.text;
		////////////////////////////
		
		var RT = Analytics.parseInput(msg);
		if(RT[0] === "rply"){
			event.reply(RT[1]).then(function (data) {
			}).catch(function (error) {
			});
		}else if(RT[0] == "NaC"){
			console.log(profile.displayName + "說了:「" + msg + "」(Line)");
		}
	});

});
