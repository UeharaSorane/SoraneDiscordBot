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
function SecretTalk(UserID,Channal,myText) {
	///匿名淦話
	if(Channal == null){
		rply[0] = 'rply';
		rply[1] = '這是目前有登錄的頻道清單：';
		for(var a = 0;a< talkChannal.length;a++){
			rply[1] += '\n'+(a+1) +'\.'+talkChannal[a].channal_name;
		}
		rply[1] += '\n\n 想要進行匿名對話，請輸入[淦話 頻道編號 對話內容]';
		        return rply;
	}else if(talkChannal[Channal-1] == null){
		rply[0] = 'rply';
		rply[1] = '找不到該頻道喔';
		return rply;
		
	}else{
		if(myText == null){
			rply[0] = 'rply';
		        rply[1] = '頻道名稱:'+ talkChannal[Channal-1].channal_name+'\
                                \n\n 想要進行匿名對話，請輸入[淦話 頻道編號 對話內容]';
		        return rply;
		}else{
			rply[0] = 'push';
		        bot.push(talkChannal[Channal-1].channal_line_id,myText);
		        return rply;
		}
	}
}

module.exports = {
	SecretTalk
};
