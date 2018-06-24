//##################################################################################
//纪录表单Form元素及值
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function SForm(name,method,url,title,type){
	//member datas
	this.name=name;
	this.method=method;
	this.url=url;
	this.title=title;
	this.type=type;
	
	//member functions
	this.search=search;
}

//control function
function search(){
	//待续……
}

function toString(){
	return this.name+this.method+this.url+this.title+this.type;
}

//<!--create Object  end-->
//###############################################################################################################################


//###############################################################################################################################
//总数组，包括了所有的Form
//总数组，包括了所有的Form
var Data=new Array();

//###############################################################################################################################

//以下是各个具体表单值
//以下是各个具体表单值

Data[0]=new SForm("form_Default","Get","http://www.baidu.com/s?wd=");
Data[Data.length++]=new SForm("form_BaiDu","Get","http://www.baidu.com/s?wd=","百度","web");
Data[Data.length++]=new SForm("form_Google","Get","http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=","Google","web");
Data[Data.length++]=new SForm("form_CSDN","Get","http://search.csdn.net/search/form_Default,Get,http://www.baidu.com/s?wd=/1/blog?sclass=blog","CSDN","web");
Data[Data.length++]=new SForm("form_SoSo","Get","http://www.soso.com/q?w=","SoSo","web");
Data[Data.length++]=new SForm("form_Yahoo","Get","http://search.cn.yahoo.com/search?p=","Yahoo","web");
Data[Data.length++]=new SForm("form_iAsk","Get","http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=","iAsk","web");
Data[Data.length++]=new SForm("form_Tom","Get","http://search.tom.com/search.php?word=","Tom","web");
Data[Data.length++]=new SForm("form_SoGou","Get","http://www.sogou.com/web?query=","SoGou","web");
Data[Data.length++]=new SForm("form_TaiPing","Get","http://ks.pconline.com.cn/index.jsp?q=","太平洋","web");
Data[Data.length++]=new SForm("form_TaiPing2","Get","http://ks.pcgames.com.cn/games_index.jsp?q=","太平洋游戏区","web");
Data[Data.length++]=new SForm("form_TanLan","Get","http://s2.greedland.net/s152.g?k=","贪婪动漫","dongman");
Data[Data.length++]=new SForm("form_DongManXianFeng","Get","http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=","动漫先锋","dongman");
Data[Data.length++]=new SForm("form_MeiRiDongMan","Get","http://www.aicomic.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=","每日动漫","dongman");
Data[Data.length++]=new SForm("form_TianShangRenJian","Get","http://www.52tian.com/search.asp?x=14&y=11&typeid=片名&keyword=","天上人间","dongman");
Data[Data.length++]=new SForm("form_MoonBoat","Get","http://www.ffsee.com/Default.asp?keyword=","月亮船","dongman");
Data[Data.length++]=new SForm("form_bt_fkee","Get","http://bt.fkee.com/search.aspx?q=","飞客","download");
Data[Data.length++]=new SForm("form_bt_china","Get","http://search.btchina.net/btsearch.php?query=","BT@China","download");
Data[Data.length++]=new SForm("form_verycd","Get","http://find.verycd.com/folders/","VeryCD","download");
Data[Data.length++]=new SForm("form_Vagaa","Get","http://hot.yikuai.com/search.php?stype=3&keyword=","Vagaa","download");
Data[Data.length++]=new SForm("form_XunLei","Get","http://so.xunlei.com/search?search=","迅雷","download");
Data[Data.length++]=new SForm("form_IceFish","Get","http://bt.icefish.org/search.php?keywords=","冰鱼综艺节目","download");
Data[Data.length++]=new SForm("form_Sina_BoKe","Get","http://search.v.blog.sina.com.cn/s?key=","新浪播客","video");
Data[Data.length++]=new SForm("form_TuDou","Get","http://www.tudou.com/search/programs?kw=","土豆网","video");
Data[Data.length++]=new SForm("form_WoLe","Get","http://www.56.com/so/search.php?key=","56.com","video");
Data[Data.length++]=new SForm("form_OpenV","Get","http://www.openv.tv/ls.jsp?q=","OpenV","video");
Data[Data.length++]=new SForm("form_DangDang","Get","http://search.dangdang.com/search.aspx?key=","当当网","buy");
Data[Data.length++]=new SForm("form_TaoBao","Get","http://search1.taobao.com/browse/search_auction.htm?","淘宝网","buy");
Data[Data.length++]=new SForm("form_Alibaba","Get","http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=","阿里巴巴","buy");
Data[Data.length++]=new SForm("form_XiaoBo_music","Get","SongList.htm?key=","小波快歌","music");
Data[Data.length++]=new SForm("form_baidu_music","Get","http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=","百度","music");
Data[Data.length++]=new SForm("form_yahoo_music","Get","http://music.yahoo.com.cn/search?p=","Yahoo","music");
Data[Data.length++]=new SForm("form_SouGou_Music","Get","http://d.sogou.com/music.so?query=","搜狗","music");
Data[Data.length++]=new SForm("form_kugoo","Get","http://search.kugoo.com/search.aspx?keyword=","Kugoo","music");
Data[Data.length++]=new SForm("form_SoSo_Music","Get","http://music.soso.com/q?w=","SoSo","music");
Data[Data.length++]=new SForm("form_Haoting","Get","http://www1.haoting.com/user/search.asp?stype=Music&keyword=","好听音乐","music");
Data[Data.length++]=new SForm("form_163_Picture","Get","http://photo.163.com/search.php?k=","网易相册","picture");
Data[Data.length++]=new SForm("form_163_zpoo","Get","http://163.zpoo.com/syphoto.php?user=","zpoo.网易","picture");
Data[Data.length++]=new SForm("form_yahoo_photos","Get","http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=","雅虎相册","picture");
Data[Data.length++]=new SForm("form_baidu_picture","Get","http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=","百度","picture");
Data[Data.length++]=new SForm("form_Google_picture","Get","http://images.google.com/images?hl=zh-CN&q=","Google","picture");
Data[Data.length++]=new SForm("form_yahoo_picture","Get","http://image.cn.yahoo.com/search?p=","Yahoo","picture");
Data[Data.length++]=new SForm("form_SoSo_picture","Get","http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=","SoSo","picture");
Data[Data.length++]=new SForm("form_iask_picture","Get","http://p.iask.com/p?k=","iAsk","picture");
Data[Data.length++]=new SForm("form_sogou_picture","Get","http://pic.sogou.com/pics?query=","SoGou","picture");
Data[Data.length++]=new SForm("form_tom_picture","Get","http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ","Tom","picture");
Data[Data.length++]=new SForm("form_5show","Get","http://www.5show.com/m.aspx?cn=SearchResultPage&Key=","5Show动漫","dongman");
Data[Data.length++]=new SForm("form_baidu_dictionary","Get","http://www.baidu.com/s?lm=0&si=&rn=10&ie=gb2312&ct=1048576&tn=baidu&wd=","百度词典","other");
Data[Data.length++]=new SForm("form_BaiDu","Get","http://search.blog.sina.com.cn/blog/search?tag=&t=keyword&q=","新浪博客","other");

//Data[Data.length++]=new SForm("form_","Get","","百度","web");
//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

/*
	版式
	//Data[Data.length++]=new SForm("form_BaiDu","Get","www.baidu.com/s=xxxx","百度","web");
	// [0]是fname表单名称 [1]是Method提交类型 [2]是表格值 [3]是显示出来的名称 [4]是归属类型  [5]是表单的keyName(for Post only)]
*/

	//给显示网站的层lrSelect进行对应的填充
	function getLrSelect(wType){
		var arrForms=getWPForms(wType);
		var inner="";//纪录page.innerHtml;cao,不写="" 就会出现undifined，太缺了，害我苦找！
		
		for(var i=0;i<arrForms.length;i++) 
			inner+="<a href='#' onClick=\"setParam('"+ arrForms[i].url +"','"+ arrForms[i].name +"','"+arrForms[i].title+"');\">"+ arrForms[i].title +"</a><br>";
		setLrSelectDisplay(inner);
		$("lrSLWP").style.display="";
	}
	function setLrSelectDisplay(inner){$("lrSelect").innerHTML=inner;}
	
	//返回与选择的类型相对应得网站s的对象
	function getWPForms(wType){
		var arrForms=new Array();
		for(var i=1;i<Data.length;i++) 
			if(Data[i].type==wType) arrForms[arrForms.length++]=Data[i];
		
		return arrForms;
	}

	//
	function changeColor(i){
		for(jj=1;jj<9;jj++){//先全部变成普通样式
			document.getElementById(jj).className="Normal";
			//document.getElementById(jj).style.background="white";
		}
		//再单一改具体的一项
		
		document.getElementById(i).className="Change";
		//document.getElementById(i).style.background="red";
	}
	//设置搜索参数，即搜索类型和搜索引擎名称
	function setParam(type,fname,title){
		$("form_Total").type.value=type;
		$("form_Total").fname.value=fname;
		$("form_Total").wpname.value=title;
		$("form_Total").key.focus();
	}
	
	//----Start----处理Get/Post方法提交表单的搜索----
	//*******注意：Data数组，会出现在引用此js文件的叶面里（因为我会在那个叶面引用Data.js文件*******
	
	//综合搜索转接处
	function goSearch(fname){
		var form=getForm($("fname").value);
		var key=$("key").value;
		if(form.name=="form_XiaoBo_music"){searchMusicHere(key);return false;}
		if(form.method=="Get")	window.open(form.url+key);
		else goSearchPost(form);
		//document.form_Total.reset();
		return false;
	}
	
	//专门处理Post方法提交表单的搜索
	//*****************************此函数暂时有问题，稍后处置!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*还没有想好方法*/
	}
//----End----处理Get/Post方法提交表单的搜索----



//----Start----从Data数组中查找制定名称的数组，并返回----
	function getForm(fname){
		for(j=1;j<Data.length;j++){
			//window.status="中断位置在"+j;//检查循环中断的位置
			if(Data[j].name==fname){//[0]是对应的表单名参数
				return Data[j];//找到了，就把表单返回
			}
		}
		//如果检查到没有此表单，则自动跳回搜索页
		//this.location.href="SearchFace.htm";
		//如果没有，则到默认站点搜索
		return Data[0];
	}
//----End----从Data数组中查找制定名称的数组，并返回----



//----Start----站内音乐搜索----自己做搜索引擎真累-------
function searchMusicHere(words){
	if(words=="") window.open("SongsForSearch.htm");
	var arrSongsNum=new Array();//记录下来符合条件的编号
	var arrWords=words.split(" ").sort();//分割搜索词
	var isIt;
	for(var i=0;i<Songs.length;i++){
		isIt=true;
		for(j=0;j<arrWords.length;j++)//这个实现了多关键字查询
			if(Songs[i].toString().toLowerCase().indexOf(arrWords[j].toString().toLowerCase())<0)//统一改为小写统一比较
				isIt=false;//只要有一个不符合，则认定为不是
		if(isIt==true) arrSongsNum[arrSongsNum.length++]=i;
	}
	if(arrSongsNum.length==0){alert("我这儿没这首歌儿啊，换个关键词试试吧！");return false;}
	else{
		var xx=arrSongsNum[0];for(var i=1;i<arrSongsNum.length;i++)	xx+="*"+arrSongsNum[i];
		window.open("SongsForSearch.htm?arrSongsNum="+xx);
	}
}


//----End----站内音乐搜索---
	
	
	/*
	//显示已经选择了的搜索引擎名称,利用鼠标跟随效果
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/