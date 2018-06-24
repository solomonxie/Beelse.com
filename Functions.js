//----Start----解析地址，得到参数----
		//公用变量部分
		var url=this.location.href;//获取引用本js文件的叶面地址
		
		function getKey(keyName,tpname){
			//尝试截取字符串，检查有没有传参数过来#############################################
			//test//document.form_All.Show.value=url.substring(url.indexOf("Search.htm")+10,url.length);
			var paramList;//参数列表
			
			var start=url.indexOf(tpname)+tpname.length;//获取截取的start位置.+上tpname因为要得到参数需除去这个字符串
			var end=url.length;//获取截取的end位置
			paramList=url.substring(start,end);
			
			if(paramList=="" || paramList.substring(0,1)!="?"){return "";}//检查：没有参数或者参数不合格则停止
			
			//得到完整参数列表，如key=小波&type=web&id=002等,且把?去掉le#############################################
			paramList=paramList.substring(1,paramList.length);

			//.split("&")事例：如果是"name=a&type=b"就会分解出两个串："name=a"和"type=b"
			//返回的是一个数祖
			var arrParams=paramList.split("&"); // 将多url切割为多个 name/value对
			
			if(arrParams==""){return "";}
			
			for(var i=0;i<arrParams.length;i++){ // 遍历 参数数组，处理每个参数对
			var arrKey=arrParams[i].split("#")[0].split("=");
			if(arrKey[0]==keyName)//[0]代表name
				return arrKey[1];//[1]代表value
			}
			
			return "";

		}
//----End----解析地址，得到参数----








