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
	
	if(trigger == "/星爆$") return ["rply","c8763"];
	
	else{
		console.log(msg.author.username + "說了:「" + msg.content + "」");
		return ["NaC"," "];
	}
}

module.exports = {
	parseInput:parseInput
};
