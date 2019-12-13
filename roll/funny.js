const Dice = require('./Dice.js');
var rply = ["",""];

////////////////運勢抽籤
function randomLuck(TEXT) {
	rply[0] = "rply";
	let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我'];
	rply[1] = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
	return rply;
}
////////////////

module.exports = {
	randomLuck
}
