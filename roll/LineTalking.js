const DBmanage = require('./DBmanage.js');

var TalkChannal = DBmanage.getChannalDB();

function ChannalCheck(UserID,UserN){
	for(var a = 0; a<talkChannal.length;a++){
		if(UserID == talkChannal[a].channal_line_id){
			return 0;
		}
	}
	var TCL = talkChannal.length;
	talkChannal[TCL] = {
		"channal_id" : TCL,
		"channal_line_id" : UserID,
		"channal_name" : UserN
	};
	DBmanage.ChannalUpdate(talkChannal[TCL]);
	
	
	
}
