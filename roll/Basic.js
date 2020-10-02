var rply = ["",""];


function TellTime(){
	
	var Time = new Date();
	
	rply[0]= "rply";
	rply[1] = "現在是:西元" + Time.getFullYear()  + "/" + (Time.getMonth() + 1) + "/" + Time.getDate() + "\
				\n" + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds();
	
	return rply;
	
}

module.exports = {
	TellTime
};
