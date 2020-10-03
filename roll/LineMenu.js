function menu(UserN){
	rply[0] = 'rply';
	rply[1] = {
		  "type": "template",
		  "altText": "很抱歉，你的Line版本不支援此系統，建議輸入help查看可使用的指令",
		  "template": {
		  	"type": "buttons",
		  		"text":"嗨！" + UserN + "，請問要做什麼？",
		  		"actions": [{
					"type": "message",
					"label": "開啟CoC選單",
					"text": "CoC選單"},
					{
					"type": "message",
					"label": "開啟娛樂選單",
					"text": "娛樂選單"
					},
		      			{
					"type": "message",
					"label": "打開幫助",
					"text": "help"
					},
					{
					"type": "message",
					"label": "閒聊",
					"text": "嘿空音"
					}
				]
		}
	}
	return rply;
}
