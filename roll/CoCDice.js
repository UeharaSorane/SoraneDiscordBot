var rply = ["",""];
const Dice = require('./Dice.js');

function ccb(PassRate,content,Bonus){
	rply[0] = "rply";
	
	if(isNaN(PassRate)||isNaN(Bonus)||PassRate == null){
		rply[1] = "ccb格式錯誤!正確用法為[ccb 成功值 描述(選填) 加成值(選填)]";
		return rply;
	}else{
		var result = Dice.RandomNumber(100);
		if(Bonus == 0 || Bonus == null){
			if(PassRate<1){
				rply[1] = PassRate + "%...你真的認為他會成功？";
				return rply;
			}else if(PassRate>=100){
				rply[1] = (PassRate+Bonus) + "%...這不用想也會成功吧？";
				return rply;
			}else{
				if(result == 1){
					rply[1] = "難以置信！完美大成功！！！";
					return rply;
				}
			}
		}
	}
	
	
	
	else if((PassRate+Bonus)<1){
		rply[0] = "rply";
		rply[1] = (PassRate+Bonus) + "你真的認為他會成功？";
		return rply;
	}else if((PassRate+Bonus)>=100){
		rply[0] = "rply";
		rply[1] = (PassRate+Bonus) + "這不用想也會成功吧？";
		return rply;
	}else
}

module.exports = {
	ccb
}
