var rply = ["",""];
const Dice = require('./Dice.js');

function ccb(PassRate,content,Bonus){
	if(isNaN(PassRate)||isNaN(Bonus)){
		rply[0] = "rply";
		rply[1] = "ccb格式錯誤!正確用法為[ccb 成功值 描述 加成值]";
		return rply;
	}
}

module.exports = {
}
