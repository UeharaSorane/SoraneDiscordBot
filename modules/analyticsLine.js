require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
});

function parseInput(msg,uid,uname){
	
	let msgSplitor = (/\S+/ig);	
	let mainMsg = msg.match(msgSplitor); //定義輸入字串
	console.log(mainMsg);
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階
	console.log(trigger);
	
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////分析開始//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
	
	if(trigger.match(/^報時$/) != null) return exports.Basic.TellTime();
	else if(trigger.match(/^私訊$/) != null) return exports.LineTalking.SecretTalk(uid,mainMsg[1],mainMsg[2]);
	else if(trigger.match(/運氣/) != null) return exports.funny.randomLuck(mainMsg);
	else if(trigger.match(/^ccrt$/) != null) return exports.CoCCrazy.ccrt(uname);
	else if(trigger.match(/^ccsu$/) != null) return exports.CoCCrazy.ccsu(uname);
	else if(trigger.match(/^目錄$/) != null) return exports.LineMenu.menu(uname);

	//////////基本擲骰//////////
	else if(trigger.match("d") !=null || trigger.match(/^[0-9]+$/) !=null){
		return exports.Dice.NormalDy(mainMsg);
	}
	//////////CoC擲骰//////////
	else if(trigger.match(/^ccb$/) != null){
		return exports.CoCDice.ccb(mainMsg[1],mainMsg[2],mainMsg[3],uname);
	}
	///////全部都不是的狀況/////
	else{
		return ["NaC"," "];
	}
	
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////分析結束//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
}

module.exports = {
	parseInput:parseInput
};
