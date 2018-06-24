//##################################################################################
//纪录表单Form元素及值
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function SForm(name,method,url,title,type,isUncode){
	//member datas
	this.name=name;
	this.method=method;
	this.url=url;
	this.title=title;
	this.type=type;
	if(isUncode==null)this.isUncode=false;
	
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

Data[0]=new SForm("form_Default","Get","http://www.baidu.com/s?wd=","false");
Data[Data.length++]=new SForm("form_BaiDu","Get","http://www.baidu.com/s?wd=","百度","web","false");
Data[Data.length++]=new SForm("form_Google","Get","http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=","Google","web","false");
Data[Data.length++]=new SForm("form_Yahoo","Get","http://search.cn.yahoo.com/search?p=","Yahoo","web","false");
Data[Data.length++]=new SForm("form_CSDN","Get","http://search.csdn.net/search/","CSDN","web","false");
Data[Data.length++]=new SForm("form_SoSo","Get","http://www.soso.com/q?w=","SoSo","web","false");
Data[Data.length++]=new SForm("form_iAsk","Get","http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=","iAsk","web","false");
Data[Data.length++]=new SForm("form_Tom","Get","http://search.tom.com/search.php?word=","Tom","web","false");
Data[Data.length++]=new SForm("form_SoGou","Get","http://www.sogou.com/web?query=","SoGou","web","false");
Data[Data.length++]=new SForm("form_Zpoo_comic","Get","http://www.zpoo.com/comic/search.php?search=","Zpoo漫游","dongman","false");
Data[Data.length++]=new SForm("form_TanLan","Get","http://s2.greedland.net/s152.g?k=","贪婪动漫","dongman","false");
Data[Data.length++]=new SForm("form_DongManXianFeng","Get","http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=","动漫先锋","dongman","false");
Data[Data.length++]=new SForm("form_MeiRiDongMan","Get","http://www.aicomic.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=","每日动漫","dongman","false");
Data[Data.length++]=new SForm("form_TianShangRenJian","Get","http://www.52tian.com/search.asp?x=14&y=11&typeid=片名&keyword=","天上人间","dongman","false");
Data[Data.length++]=new SForm("form_MoonBoat","Get","http://www.ffsee.com/Default.asp?keyword=","月亮船","dongman","false");
Data[Data.length++]=new SForm("form_XunLei","Get","http://so.xunlei.com/search?search=","超人-迅雷","download","false");
Data[Data.length++]=new SForm("form_verycd","Get","http://find.verycd.com/folders/","VeryCD","download","false");
Data[Data.length++]=new SForm("form_bt_china","Get","http://search.btchina.net/btsearch.php?query=","BT@China","download","false");
Data[Data.length++]=new SForm("form_bt_fkee","Get","http://bt.fkee.com/search.aspx?q=","飞客BT","download","false");
Data[Data.length++]=new SForm("form_btsou","Get","http://www.btsou.com/search.asp?Keyword=","BT 搜","download","false");
Data[Data.length++]=new SForm("form_Vagaa","Get","http://hot.yikuai.com/search.php?stype=3&keyword=","Vagaa","download","false");
Data[Data.length++]=new SForm("form_IceFish","Get","http://bt.icefish.org/search.php?keywords=","冰鱼综艺节目","download","false");
//Data[Data.length++]=new SForm("form_Youtube","Get","http://www.youtube.com/results?search_query=","YouTube视频","video","true");
Data[Data.length++]=new SForm("form_Sina_BoKe","Get","http://search.v.blog.sina.com.cn/s?key=","新浪播客","video","false");
Data[Data.length++]=new SForm("form_TuDou","Get","http://www.tudou.com/search/programs?kw=","土豆网","video","false");
Data[Data.length++]=new SForm("form_WoLe","Get","http://www.56.com/so/search.php?key=","56.com","video","false");
Data[Data.length++]=new SForm("form_OpenV","Get","http://www.openv.tv/ls.jsp?q=","OpenV","video","true");
Data[Data.length++]=new SForm("form_TaoBao","Get","http://list.taobao.com/browse/search_auction.htm?q=","淘宝网","buy","false");
Data[Data.length++]=new SForm("form_DangDang","Get","http://search.dangdang.com/search.aspx?key=","当当网","buy","false");
Data[Data.length++]=new SForm("form_Alibaba","Get","http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=","阿里巴巴","buy","false");
//Data[Data.length++]=new SForm("form_XiaoBo_music","Get","SongList.htm?key=","小波快歌","music","false");
Data[Data.length++]=new SForm("form_baidu_music","Get","http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=","百度MP3","music","false");
Data[Data.length++]=new SForm("form_yahoo_music","Get","http://music.yahoo.com.cn/search?p=","Yahoo音乐","music","false");
Data[Data.length++]=new SForm("form_SouGou_Music","Get","http://d.sogou.com/music.so?query=","搜狗Music","music","false");
Data[Data.length++]=new SForm("form_kugoo","Get","http://search.kugoo.com/search.aspx?keyword=","Kugoo音乐","music","false");
Data[Data.length++]=new SForm("form_SoSo_Music","Get","http://music.soso.com/q?w=","SoSo音乐","music","false");
Data[Data.length++]=new SForm("form_Haoting","Get","http://www1.haoting.com/user/search.asp?stype=Music&keyword=","好听音乐","music","false");
Data[Data.length++]=new SForm("form_163_Picture","Get","http://photo.163.com/search.php?k=","网易相册","picture","false");
Data[Data.length++]=new SForm("form_Zpoo_163","Get","http://163.zpoo.com/syphoto.php?user=","zpoo.网易","picture","false");
Data[Data.length++]=new SForm("form_yahoo_photos","Get","http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=","雅虎相册","picture","false");
Data[Data.length++]=new SForm("form_baidu_picture","Get","http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=","百度","picture","false");
Data[Data.length++]=new SForm("form_Google_picture","Get","http://images.google.com/images?hl=zh-CN&q=","Google","picture","false");
Data[Data.length++]=new SForm("form_yahoo_picture","Get","http://image.cn.yahoo.com/search?p=","Yahoo","picture","false");
Data[Data.length++]=new SForm("form_SoSo_picture","Get","http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=","SoSo","picture","false");
Data[Data.length++]=new SForm("form_iask_picture","Get","http://p.iask.com/p?k=","iAsk","picture","false");
Data[Data.length++]=new SForm("form_sogou_picture","Get","http://pic.sogou.com/pics?query=","SoGou","picture","false");
Data[Data.length++]=new SForm("form_tom_picture","Get","http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ","Tom","picture","false");
Data[Data.length++]=new SForm("form_5show","Get","http://www.5show.com/m.aspx?cn=SearchResultPage&Key=","5Show动漫","dongman","false");
Data[Data.length++]=new SForm("form_Baidu_dictionary","Get","http://www.baidu.com/s?lm=0&si=&rn=10&ie=gb2312&ct=1048576&tn=baidu&wd=","百度词典","other","false");
Data[Data.length++]=new SForm("form_sina_blog","Get","http://search.blog.sina.com.cn/blog/search?tag=&t=keyword&q=","新浪博客","other","false");
Data[Data.length++]=new SForm("form_OnlineDown","Get","http://search.newhua.com/search.asp?Keyword=","华军软件园","download","false");
Data[Data.length++]=new SForm("form_ZOL","Get","http://download.zol.com.cn/list.php?channelid=&cateid=&keyword=","中关村在线","download","false");
Data[Data.length++]=new SForm("form_TaiPing","Get","http://ks.pconline.com.cn/index.jsp?q=","太平洋快搜","download","false");
//Data[Data.length++]=new SForm("form_TaiPing2","Get","http://ks.pcgames.com.cn/games_index.jsp?q=","太平洋游戏区","web","false");
Data[Data.length++]=new SForm("form_Crsky","Get","http://search.crsky.com/search.asp?sType=ResName&action=s&imageField.x=32&imageField.y=14&keyword=","霏凡软件站","download","false");
Data[Data.length++]=new SForm("form_SkyCn","Get","http://www.skycn.com/search.php?sor=00&ss_name=","天空软件站","download","false");
Data[Data.length++]=new SForm("form_Sina_download","Get","http://php.tech.sina.com.cn/download/d_search.php?f_name=","新浪下载","download","false");
Data[Data.length++]=new SForm("form_OneGreen","Get","http://www.onegreen.net/Soft_Search.asp?Field=SoftName&ClassID=&keyword=","绿色软件站","download","false");
Data[Data.length++]=new SForm("form_MyDrivers","Get","http://so.mydrivers.com/drivers/","驱动之家","download","false");
Data[Data.length++]=new SForm("form_BanMa","Get","http://cgi.banma.com/search.php?key=","斑马·共享软件","download","false");
//Data[Data.length++]=new SForm("form_FixDown","Get","http://search1.fixdown.com/fixdown/query.asp?keyword=","全方位下载","download","false");
Data[Data.length++]=new SForm("form_zgjm","Get","http://www.google.cn/custom?domains=www.zgjm.cn&sitesearch=www.zgjm.cn&sa=Google+%CB%D1%CB%F7&client=pub-6682950257574550&forid=1&ie=GB2312&oe=GB2312&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23336699%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A50%3BLW%3A137%3BL%3Ahttp%3A%2F%2Fzgjm.cn%2Fimagess%2Flogo.gif%3BS%3Ahttp%3A%2F%2Fwww.zgjm.cn%3BFORID%3A1&hl=zh-CN&q=","周公解梦","other","false");
Data[Data.length++]=new SForm("form_QiHu_forum","Get","http://so.bbs.qihoo.com/?kw=","奇虎论坛搜索","other","false");
Data[Data.length++]=new SForm("form_QiHu","Get","http://so.bbs.qihoo.com/index.html?src=portal&kw=","奇虎","web","false");
Data[Data.length++]=new SForm("form_Daqi","Get","http://search.daqi.com/cgi-bin/search?s_b=2&keyword=","大旗搜索","web","false");
Data[Data.length++]=new SForm("form_Taotop","Get","http://www.taotop.com/search?q2=","淘客网 工作搜索","other","false");
Data[Data.length++]=new SForm("form_Deepdo","Get","http://www.deepdo.com/job?kw=","深度 工作搜索","other","false");
Data[Data.length++]=new SForm("form_QiHu_zhaopin","Get","http://zhaopin.qihoo.com/result.php?src=portal&kw=","奇虎招聘搜索","other","false");
Data[Data.length++]=new SForm("form_Jobmet","Get","http://so.jobmet.com/index.php?city=北京&kind=0&query=","职脉网职位搜索","other","false");
Data[Data.length++]=new SForm("form_01hr","Get","http://so.01hr.com/so/result.jsp?datenum=30&a=北京&k=","职通车网职位搜索","other","false");
//Data[Data.length++]=new SForm("form_","Get","http://china.recruit.net/search-ZZZZZZZ_in_BBBBBBBBB-jobs","","","false");
Data[Data.length++]=new SForm("form_BT_IT","Get","http://bt.it.com.cn/search.asp?key=","BT 全球搜","download","false");
Data[Data.length++]=new SForm("form_btseeker","Get","http://www.btseeker.com/search.aspx?Key=","BT搜索客","download","false");
Data[Data.length++]=new SForm("form_souyo_game","Get","http://game.souyo.com/exec/search?k=","游戏BT特工","download","false");
Data[Data.length++]=new SForm("form_Tianwang","Get","http://www.tianwang.com/cgi-bin/tw?range=0&cd=03&word=","天网 资源","download","false");
Data[Data.length++]=new SForm("form_kuaiche","Get","http://se.kuaiche.com/search?k=","快车 全球资源","download","false");
Data[Data.length++]=new SForm("form_edugo","Get","http://www.edugo.cn/Search.asp?SearchKey=","EDUGO 教育资源","download","false");
Data[Data.length++]=new SForm("form_Google_us_gov","Get","http://www.google.cn/search?complete=1&site=unclesam&restrict=unclesam&hl=zh-CN&newwindow=1&output=unclesam&q=","Google美国政务搜索","other","false");
Data[Data.length++]=new SForm("form_gov_sousuo","Get","http://sousuo.gov.cn/topsortsearch?channelid=3002&&keyword=","中央政府网站搜索","other","true");
Data[Data.length++]=new SForm("form_youku","Get","http://www.youku.com/search_video/q_","优酷","video","false");
//Data[Data.length++]=new SForm("form_6rooms","Get","http://www.6rooms.com/search.php?t=v&k=","六间房","video","false");
Data[Data.length++]=new SForm("form_5show","Get","http://www.5show.com/m.aspx?cn=SearchResultPage&Key=","我秀网","video","false");
Data[Data.length++]=new SForm("form_ku6","Get","http://so.ku6.com/?by=&key=","酷6网","video","false");
Data[Data.length++]=new SForm("form_yellowpage","Get","http://search.yellowpage.com.cn/queryAction.do?a=B000000CB-全部市&queryKey=","中国黄页","other","false");
Data[Data.length++]=new SForm("form_antso","Get","http://www.antso.com/search.asp?keyword=","蚁搜精选网址搜索","other","false");
Data[Data.length++]=new SForm("form_eceel_china","Get","http://china.eceel.com/business/search?type=SellLeads&keywords=","伊索全球商业搜索引擎","other","false");
Data[Data.length++]=new SForm("form_bseek","Get","http://www.bseek.cn/sellsearch.htm?userin=yes&keyword=","搜商 商业搜索","other","false");
Data[Data.length++]=new SForm("form_shangsou","Get","http://search.shangsou.com/corp.shtml?tb=1&pn=0&q=","商搜 商业搜索","other","false");
Data[Data.length++]=new SForm("form_chinacoms","Get","http://www.chinacoms.com/service/allsearch.asp?type=buy&t1=","中华企业信息网","other","false");
Data[Data.length++]=new SForm("form_nisou","Get","http://www.nisou.net/search.asp?keyword=","你搜 企业产品网站搜索","other","false");
Data[Data.length++]=new SForm("form_macd","Get","http://search.macd.cn/search?dir=macd&start=0&num=10&index=FullIndex&outputFormat=HTML&encoding=GB2312&orderStyle=DocID&q=","MACD 股市行情搜索","other","false");
Data[Data.length++]=new SForm("form_boloo","Get","http://www.boloo.com.cn/seek.asp?key=","博乐 批量音乐","music","false");
Data[Data.length++]=new SForm("form_97315","Get","http://www.97315.com/search.cx?w=","恶霸影音","video","false");
Data[Data.length++]=new SForm("form_tvsou","Get","http://search.tvsou.com/q.aspx?type=0K&eyWords=","搜视","video","false");
Data[Data.length++]=new SForm("form_medaim","Get","http://www.medaim.com/search.asp?mode=allwords&search=","Medaim 医药行业搜索","other","false");
Data[Data.length++]=new SForm("form_59120","Get","http://www.59120.com/search.asp?keyword=","中健网 医界信息","other","false");
Data[Data.length++]=new SForm("form_qseek","Get","http://www.qseek.net/law/search.php?keyword=","中国法律搜索","other","false");
Data[Data.length++]=new SForm("form_mylaw","Get","http://www.mylaw.com/result.jsp?query=","MyLaw法律搜索","other","false");
Data[Data.length++]=new SForm("form_ustc_FTPsearch","Get","http://search.ustc.edu.cn/ftpsearch.cgi?cmd=ftpsearch&q=","中科大 Ftp搜索","download","false");
Data[Data.length++]=new SForm("form_codechina","Get","http://www.codechina.com/srch/cc.do?KeyWord=","中国开发资源","download","false");
Data[Data.length++]=new SForm("form_xiaonux_bible","Get","http://bible.xiaonux.com/lockey.php?key=","小乐堡圣经搜索","other","false");
Data[Data.length++]=new SForm("form_mapbar","Get","http://service.mapbar.com/localsearch/result.jsp?City=%C8%AB%B9%FA&query=","图吧地图搜索","other","false");


//Data[Data.length++]=new SForm("form_","Get","","","","false");
//Data[Data.length++]=new SForm("form_","Get","","百度","web","false");
//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

/*
	版式
	//Data[Data.length++]=new SForm("form_BaiDu","Get","www.baidu.com/s=xxxx","百度","web","false");
	// [0]是fname表单名称 [1]是Method提交类型 [2]是表格值 [3]是显示出来的名称 [4]是归属类型  [5]是表单的keyName(for Post only) [6]是关键字是否需要进行url编码  ]
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
		if(form.method=="Get"){
			//window.open(encodeURI(form.url+key));
			window.open(form.url+key);
		}
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