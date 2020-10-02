var rply = ["",""];


function TellTime(){
	
	var Time = new Date();
	
	rply[0]= "rply";
	rply[1] = "現在是:西元" + Time.toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
	
	return rply;
	
}

module.exports = {
	TellTime
};
