var rply = ["",""];
var Time = new Date();


function TellTime(){
	Time.now();	
	rply[0]= "rply";
	rply[1] = "現在是:西元" + Time.getFullYear()  + "/" + (Time.getMonth() + 1) + "/" + Time.getDate() + "\
				\n" + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds();
	
	return rply;
	
}

module.exports = {
	TellTime
};
