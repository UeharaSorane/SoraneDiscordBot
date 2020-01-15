/////引入函數庫/////
const Discord = require('discord.js');
const express = require('express');
const Line = require('linebot');
const Talking = require('./roll/Talking.js');
var {Wit, log} = require("node-wit");
var WitClient = new Wit({
  	accessToken: "EF2SSQO7WOU5TPC2PSDAIJOBW36YLW7L"
});


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

var chatmode = false;


/////Discord Bot架設/////
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var BotId = client.user.id;
	var RT;
	if(msg.author.id != BotId){
		if(msg.content == "聊天模式"){
			if(!chatmode){
				chattmode = true;
				msg.reply("聊天模式開啟，指令將無法作用");
			}else{
				chattmode = false;
				msg.reply("聊天模式關閉，指令將恢復作用");
			}	
		}else{
			if(chatmode){
				WitClient.message(Chat, {}).then((data) => {
					if(msg.author.id != BotId)RT = Talking.chatting("Discord",msg.content,msg.author.id,msg.author.username,data);
					else RT = ["NaC",""];

					if(RT[0] === "rply"){
						if(BotId != msg.author.id) msg.reply(RT[1]);
					}else if(RT[0] == "NaC"){
						if(BotId != msg.author.id) console.log(msg.author.username + "說了:「" + msg.content + "」(Dis)");
					}
				}).catch(console.error);
			}else{
				if(msg.author.id != BotId)RT = Analytics.parseInput("Discord",msg.content,msg.author.id,msg.author.username);
				else RT = ["NaC",""];

				if(RT[0] === "rply"){
					if(BotId != msg.author.id) msg.reply(RT[1]);
				}else if(RT[0] == "NaC"){
					if(BotId != msg.author.id) console.log(msg.author.username + "說了:「" + msg.content + "」(Dis)");
				}
			}
		}
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
		
		var RT = Analytics.parseInput("Line",msg,src.userId,profile.displayName);
		if(RT[0] === "rply"){
			event.reply(RT[1]).then(function (data) {
			}).catch(function (error) {
			});
		}else if(RT[0] == "NaC"){
			console.log(profile.displayName + "說了:「" + msg + "」(Line)");
		}
	});

});
