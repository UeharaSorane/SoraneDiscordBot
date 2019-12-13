var rply = ["",""];

function TellTime(){
	rply[0]= "rply";
	
	var Time = new Date();
	rply[1] = "現在是:西元" + Time.getFullYear() + "/" + (Time.getMonth() + 1) + "/" + Time.getDate() + "\
				\n" + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds();
	
	return rply;
	
}

module.exports = {
	TellTime
};
