console.log(" DiscordBot啟動");
const Discord = require('discord.js');
const Talking = require('./roll/Talking.js');

var {Wit, log} = require("node-wit");
var WitClient = new Wit({
  	accessToken: "EF2SSQO7WOU5TPC2PSDAIJOBW36YLW7L"
});


const client = new Discord.Client();

const Analytics = require('./modules/analyticsDiscord.js');
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
			console.log(chatmode);
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
					if(msg.author.id != BotId)RT = Talking.chatting(msg.content,msg.author.id,msg.author.username,data);
					else RT = ["NaC",""];

					if(RT[0] === "rply"){
						if(BotId != msg.author.id) msg.reply(RT[1]);
					}else if(RT[0] == "NaC"){
						if(BotId != msg.author.id) console.log(msg.author.username + "說了:「" + msg.content + "」(Dis)");
					}
				}).catch(console.error);
			}else{
				if(msg.author.id != BotId)RT = Analytics.parseInput(msg.content,msg.author.id,msg.author.username);
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
