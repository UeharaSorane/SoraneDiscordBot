var rply = ["",""];

var dice = require('./Dice.js');
var {Wit, log} = require("node-wit");

var WitClient = new Wit({
  	accessToken: "QEF3CPJXJGTFFS3OJUXEOPXU5V5UJGIX" // 同上
});

var Chat;

function chatting(inputChat,uname){
	rply[0] = "rply";
	
	setChat(inputChat);
	WitClient.message(Chat, {}).then((data) => {
		console.log(data.entities);
		setChat("test");
		
	}).catch(console.error);
	
	rply[1] = Chat;
	return rply;
}

function setChat(inputChat){
	Chat = inputChat;
}

module.exports = {
	chatting
};
