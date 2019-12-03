var rply = ["",""];
const Dice = require('./Dice.js');

function ccb(PassRate,content,Bonus){
	/*console.log(PassRate);
	console.log(content);
	console.log(Bonus;*/
	rply[0] = "rply";
	
	if(isNaN(PassRate)||(Bonus != null && isNaN(Bonus))||PassRate == null){
		rply[1] = "ccb格式錯誤!正確用法為[ccb 成功值 描述(選填) 加成值(選填)]";
		return rply;
	}else{
		var result = Dice.RandomNumber(100);
		if(Bonus == null)Bonus = 0;
		
		var RealPRate = Number(PassRate)+Number(Bonus);
		console.log(content);
		
		if(RealPRate<1){
			if(PassRate<1){
				rply[1] = PassRate + "%...你真的認為他會成功？";
				return rply;
			}else{
				rply[1] = RealPRate + "%。原本有機會成功的你，現在卻完全無法達成！";
				return rply;
			}
		}else if(RealPRate>=100){
			if(PassRate>=100){
				rply[1] = PassRate + "%...這不用想也會成功吧？";
				return rply;
			}else{
				rply[1] = RealPRate + "%。即使原本有可能會失敗，但現在的你所向無敵！";
				return rply;
			}
		}else{
			if(content != undefined)rply[1] = "進行了[" + content + "]\n";
			else rply[1] = "";
			rply[1] = "擲骰結果:" + result + "成功率:" + RealPRate + "(";
			if(Bonus>=0)rply[1] += "+";
			rply[1] += Bonus + "%)";

			if(result == 1){
				rply[1] += "難以置信！完美大成功！！！";
				return rply;
			}else if(result == 100){
				rply[1] += "大事不妙！致命性失敗！！！";
				return rply;
			}else if(result>RealPRate){
				if(Bonus<0){
					rply[1] += "原本以為會成功的你，卻受到影響而失敗了！";
					return rply;
				}else if(Bonus>0){
					rply[1] += "儘管受到了加成，但你仍就逃不過失敗的命運！";
					return rply;
				}else{
					rply[1] += "失敗！";
					return rply;
				}
			}else if(result>1 && result<=5){
				rply[1] += "太棒了！大成功！！！";
				return rply;
			}else if(result>5 && result<=(Math.ceil(RealPRate/5))){
				if(Bonus<0){
					rply[1] += "儘管受到影響，但你仍舊帥氣的極限成功了！";
					return rply;
				}else if(Bonus>0){
					rply[1] += "擁有加成的你，意外的極限成功了！";
					return rply;
				}else{
					rply[1] += "不錯！極限成功！";
					return rply;
				}
			}else if(result>(Math.ceil(RealPRate/5)) && result<=(Math.ceil(RealPRate/2))){
				if(Bonus<0 && result<=(Math.ceil(PassRate/5))){
					rply[1] += "受到影響的緣故，原本會極限成功的你只有困難成功！";
					return rply;
				}else if(Bonus>0 && result>(Math.ceil(PassRate/2))){
					rply[1] += "擁有加成的你，這次難得的困難成功了！";
					return rply;
				}else{
					rply[1] += "好！困難成功！";
					return rply;
				}
			}else if(result=<RealPRate && result>(Math.ceil(RealPRate/2))){
				if(Bonus<0 && result<=(Math.ceil(PassRate/2))){
					rply[1] += "受到影響的緣故，應該困難成功的你僅僅只是成功而已！";
					return rply;
				}else if(Bonus>0 && result>PassRate){
					rply[1] += "原本會失敗的你，在加成之下竟然成功了！";
					return rply;
				}else{
					rply[1] += "成功！";
					return rply;
				}
			}else if(result<100 && result>=96){
				rply[1] += "糟糕了！大失敗！！！";
				return rply;
			}
		}	
	}
}

module.exports = {
	ccb
}
