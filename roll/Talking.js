var rply = ["",""];

var dice = require('./Dice.js');

function chatting(type,msg,uid,uname,data){
	rply[0] = "rply";
	console.log(data);
	
	rply[1] = msg;
	return rply;
}

module.exports = {
	chatting
};
