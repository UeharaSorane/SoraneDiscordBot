var mongoose = require('mongoose');
var mongoDB = 'mongodb://b88009005:b09050905@ds229312.mlab.com:29312/linetest';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.connect(mongoDB, function (err) {
	if(err) throw err;
	else console.log('連線成功，可以正常吃芒果!');
});

/////Line Channal資料庫/////
var talkChannal= [];
var ChannalSchema = new Schema({
	channal_id : {type: Number, required: true},
	channal_line_id : {type: String, required: true},
	channal_name : {type: String, required: true}
});

var Channal = mongoose.model('Channal',ChannalSchema);

Channal.find(function(err,Channals){
	if(err) throw err;
	else{
		for(var a = 0;a<Channals.length;a++){
			talkChannal[a] = {
				"channal_id" : Channals[a].channal_id,
				"channal_line_id" : Channals[a].channal_line_id,
				"channal_name" : Channals[a].channal_name
			};
		}
		
		//console.log(talkChannal);
		console.log("Line頻道資料，更新完成");
	}
});
////////////////////////////////
