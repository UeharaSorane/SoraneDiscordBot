var dice = require('./Dice.js');
var {Wit, log} = require("node-wit");

var WitClient = new Wit({
  	accessToken: "QEF3CPJXJGTFFS3OJUXEOPXU5V5UJGIX" // 同上
});

var Chat;

function Chatting(InputChat){
	Chat = InputChat;
}

module.exports = {
	Chatting
};
