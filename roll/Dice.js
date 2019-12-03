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
	msg.
}

function NormalDy(msg){
	rply[0] = "rply";
	var many;
	var cal;
	if(!isNaN(msg[0])){
		if(msg[0]<1){
			rply[1] = "我有點無法理解小於1次是什麼概念...";
			return rply;
		}else if(msg[0]>200){
			rply[1] = "超過200次...你自己骰！";
			return rply;
		}else{
			many = Math.ceil(msg[0]);
			cal = 1;
		}
	}else{
		many = 1;
		cal = 0;
	}
	var calResult;
	
	if(msg[2] != null)rply[1] = msg[2];
	else rply[1] = "";
	rply[1]+= "以下是骰了" + many + "次的結果:\n====================";
	for(var a = 0;a<many;a++){
		calResult =  caculate(msg[cal]);
		if(calResult == "NaC"){
			rply =["NaC"," "];
			return rply;
		}else if(calResult == "TsX"){
			rply[1] = "骰小於1顆...真的？";
			return rply;
		}else if(calResult == "TlX"){
			rply[1] = "骰超過200顆...我骰子不夠多...";
			return rply;
		}else if(calResult == "TsY"){
			rply[1] = "骰小於1面...我還真沒有那種骰子。";
			return rply;
		}else if(calResult == "TlY){
			rply[1] = "骰超過1000000面...這個我沒辦法...";
			return rply;
		}else{
			rply[1] += "\n第" + a + "次:" + calResult;
		}
	}
	
	return rply;
}

module.exports = {
	RandomNumber,
	xdy,
	caculate
}
