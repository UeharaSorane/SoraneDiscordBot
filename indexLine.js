console.log(" LineBot啟動");
const express = require('express');
const Line = require('linebot');
const Talking = require('./roll/Talking.js');
var {Wit, log} = require("node-wit");
var WitClient = new Wit({
  	accessToken: "EF2SSQO7WOU5TPC2PSDAIJOBW36YLW7L"
});
const Analytics = require('./modules/analytics.js');

var bot = Line({
  	channelSecret: process.env.LINE_CHANNEL_SECRET, //這裡是讓系統抓在Heroku設定的數據
  	channelAccessToken: process.env.LINE_CHANNEL_ACCESSTOKEN // 同上
});

var chatmode = false;

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
