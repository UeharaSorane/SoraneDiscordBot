require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
});

function parseInput(msg){
	
	let msgSplitor = (/\S+/ig);	
	let mainMsg = msg.content.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階
	
	if(trigger.match(/^報時$/) != null) return exports.Basic.TellTime();
	else if(msg.content.match(/\d/) != null){
		return exports.Dice.NormalDy(mainMsg);
	}
	else{
		return ["NaC"," "];
	}
}

module.exports = {
	parseInput:parseInput
};
