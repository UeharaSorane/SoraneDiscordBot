var rply = [];

function menu(UserN){
	rply[0] = 'rply';	
	rply[1] ={
		"type" : "template",
		"altText": "很抱歉，你的Line版本不支援此系統，建議輸入help查看可使用的指令",
		"template" : {
			"type" : "carousel",
			"columns" : [
				{
					"title": "嗨！" + UserN + "，請問要做什麼？",
					"text": "TRPG骰子選單:",
					"actions": [
						{
						"type": "message",
						"label": "基本骰子功能",
						"text": "基本骰子功能"
						},
						{
						"type": "message",
						"label": "CoC骰子功能",
						"text": "CoC骰子功能"
						}
					]
				},
				{
					"title": "嗨！" + UserN + "，請問要做什麼？",
					"text": "娛樂選單:",
					"actions": [
						{
						"type": "message",
						"label": "今日運氣",
						"text": "今天的運氣"
						},
						{
						"type": "message",
						"label": "立死旗",
						"text": "插旗"
						}
					]
				},
				{
					"title": "嗨！" + UserN + "，請問要做什麼？",
					"text": "娛樂選單:",
					"actions": [
						{
						"type": "message",
						"label": "今日運氣",
						"text": "今天的運氣"
						},
						{
						"type": "message",
						"label": "立死旗",
						"text": "插旗"
						}
					]
				}
			]
		}
	}

	return rply;
}
module.exports = {
	menu
};
