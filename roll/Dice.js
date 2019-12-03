var rply = ["",""];

function RandomNumber(Max){
	return Math.floor((Math.random() * Max) + 1);
}

function xdy(x,y){
	var result = [];
	result[x] = 0;
	for(var a = 0;a<x;a++){
		result[a] = RandomNumber(y);
		result[x]+=result[a];
	}
	return result;
}

function caculate(msg){
	var tryCal = msg.split("");
	var CalMsg;
	for(var a = 0;a<tryCal.length;a++){
		
	}
}

module.exports = {
	RandomNumber,
	xdy,
	caculate
}
