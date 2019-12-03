var rply = ["",""];

function TellTime(){
	rply[0]= "rply";
	
	var Time = new Date();
	rply[1] = "現在是:西元" + Time.getFullYear() + "/" + (Time.getMonth() + 1) + "/" + Time.getDate();
	
	return rply;
	
}

module.exports = {
	TellTime
};
