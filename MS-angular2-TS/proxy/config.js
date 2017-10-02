// Generated by CoffeeScript 1.10.0
(function() {

	exports.DB = {
	    uri: "mongodb://47.92.85.220:27017/musicSharing",
	    auth: false
	};

	exports.qiniu = {
		ACCESS_KEY : 'XlXWymRk8gQfrH7Rp4ZlMHl5dYizWWMsPCiHsEs-', 
		SECRET_KEY : '2x3FE_0qdXySDn8QtbZ85Dh58gr3Yyo9nLV6ehFr'
	}

	exports.SUCCESS = function(data){
		var numargs = arguments.length;
		if(numargs == 0)		
			return {
			result : "success"
			}
		return {
			result : "success", 
			data : data
		}
	}


	exports.FAIL = function(code){
		var message;
		switch(code){
			case "0001" : 
				message = "用户不存在";
				break;
			case "0002" : 
				message = "密码错误";
				break;
			case "0003" : 
				message = "当前账号不存在";	
				break;		
			case "0004" : 
				message = "没有这个好友，请重新输入名字";
				break;
			case "0005" : 
				message = "非法操作，当前好友请求关系不存在";
				break;
			case "0006" : 
				message = "非法操作，没有这个歌曲";			
				break;
			case "0007" : 
				message = "非法操作，当前歌曲分享关系不存在";
				break;
			case "0008" : 
				message = "当前歌曲不存在";
				break;
			case "0009" : 
				message = "歌曲已加密，密码缺少或错误";
				break;
			case "0010" : 
				message = "不能加友自己";
				break;
			case "0011" : 
				message = "加友记录已存在或已经是好友";
				break;
			case "0012" : 
				message = "参数缺失";
				break;			
			case "0013" : 
				message = "该用户已存在";
				break;
			case "0014" : 
				message = "您已有该歌曲，请换歌曲或者重命名";
				break;
			default :
				message = "未知错误";  
		}
		return {
			result : "fail", 
			code : code,
			message : message
		}
	}




}).call(this);

//# sourceMappingURL=config.js.map
