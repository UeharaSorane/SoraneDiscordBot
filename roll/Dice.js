var rply = ["",""];

function RandomNumber(Max){
	return Math.floor((Math.random() * Max) + 1);
}

function xdy(x,y){
	var resNum = 0;
	var Dice;
	var result = "[";
	
	Dice = RandomNumber(y);
	resNum += Dice;
	result += Dice
	for(var a = 1;a<x;a++){
		Dice = RandomNumber(y);
		resNum += Dice;
		result +="+" + Dice;
	}
	
	result += "]=" + resNum + "";
	
	return [result,resNum];
}

function caculate(msg){
	var temp = msg.split("");
	var mt1 = "";
	
	for(var a = 0;a<temp.length;a++){
		if(isNaN(temp[a])) mt1 += "," + temp[a] + ",";
		else mt1 += temp[a];
	}
	
	var mt2 = mt1.split(",");
	var cal = "";
	var result = "";
	
	for(var b = 0;b<mt2.length;b++){
		if(isNaN(mt2[b])){
			if(b == 0)return "NaC";
			if(mt2[b] == "d"){
				if(isNaN(mt2[b-1]) || isNaN(mt2[b+1]))return "NaC";
				else{
					if(mt2[b-1]<1){
						return "TsX";
					}else if(mt2[b-1]>200){
						return "TlX";
					}else if(mt2[b+1]<=1){
						return "TsY";
					}else if(mt2[b+1]>1000000){
						return "TlY";
					}else{
						
						var res = xdy(mt2[b-1],mt2[b+1]);
						result += res[0];
						cal += res[1];
					}
				}
			}else{
				result += mt2[b];
				cal += mt2[b];
			}
		}else{
			result += mt2[b];
			cal += mt2[b];
		}
	}
	try{
		result += "=" + Math.eval(cal);
		return result;
	}
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
	rply[1]+= "以下是骰了<" + msg[cal] + ">" + many + "次的結果:\n====================";
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
		}else if(calResult == "TlY"){
			rply[1] = "骰超過1000000面...這個我沒辦法...";
			return rply;
		}else{
			rply[1] += "\n第" + (a+1) + "次:" + calResult;
		}
	}
	
	return rply;
}

module.exports = {
	RandomNumber,
	xdy,
	caculate,
	NormalDy
}
