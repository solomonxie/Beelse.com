//##################################################################################
//纪录所有Video
//##################################################################################

//###############################################################################################################################
//<!--create Object start-->
//main function
function Video(title,description,tags,url,color,ground,ch,album){//ch is charator
	//member datas
	this.title=title;
	this.description=description;
	this.tags=tags;
	this.url=url;
	this.color=color;
	this.ground=ground;
	this.ch=ch;
	this.album=album;
	
	//member functions
	this.play=play;
	this.toString=this.toString;
}

//control function
function play(){
	$("lrPlayer").innerHTML="<iframe src='"+ this.url +"' width='500' height='550' scrolling=no></iframe>";
	$("lrTitle").innerHTML="<font class='style6'>"+ this.title +"</font>";
	$("lrInfo").innerHTML="<font class='style6'>Titel:</font>"+ this.title +"<br><font class='style6'>Description:</font>"+ this.description +"<br><font class='style6'>Tags:</font>"+ this.tags.split("&&&") +"<br><a target='_blank' href='http://v.blog.sina.com.cn/m/1253924794'><u>My播客</u></a><br><a target='_blank' href='http://www.quchao.com/video' title='引用自FLV Downloader' onClick=\"alert('在框框里直接点击复制！！');clipboardData.setData('Text','"+ this.url +"');\"><font color='green'><u>下载</u></font></a>......";
	$("trPlayer").style.display="";
}


function toString(){
	return this.title+","+this.description+","+this.tags+","+this.url;
}

//<!--create Object  end-->



//############################################################################################
															//class Albums
//<!--create Object start-->
//main function
function Album(aname,ground,color,ch){
	this.name=aname;
	this.ground=ground;
	this.color=this.color;
	this.ch=ch;
	this.vP=new Array();
	for(var i=0;i<Videos.length;i++)
		if(Videos[i].album.toLowerCase()==aname.toLowerCase())
			this.vP[this.vP.length++]=i;
	
	//method
	this.showAlbum=showAlbum;
	this.toString=toString;
}

//control function
function showAlbum(){
	var inner="";
	
	//if(this.vP!="")for(var i=0;i<Albums.length;i++) for(var j=0;j<Albums[i].vP.length;j++)
	if(this.vP!="")for(var i=0;i<this.vP.length;i++)
				//inner+="<a href='#' id='albumVideos-"+ i +"' onClick='Videos["+ this.vP[i] +"].play();'>"+ Videos[this.vP[i]].title+"</a><br>";
				inner+=Videos[this.vP[i]].color==""?
					"<a href='#' id='albumVideos-"+ i +"' onClick='Videos["+this.vP[i]+"].play();'>"+ Videos[this.vP[i]].title+"</a><br>"
					:
					"<a href='#' id='albumVideos-"+ i +"' onClick='Videos["+this.vP[i]+"].play();'>"+ Videos[this.vP[i]].title.fontcolor(Videos[this.vP[i]].color)+"</a><br>";
	$("lrAlbum").innerHTML=inner;
}

//<!--create Object  end-->

//############################################################################################





//###############################################################################################################################


//###############################################################################################################################


var Videos=new Array();


//###############################################################################################################################
//Videos[Videos.length++]=new Video("","","","","","","","","");

Videos[Videos.length++]=new Video("Final Fansty[MV]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206402&uid=1253924794","","Dongman","F","");
Videos[Videos.length++]=new Video("对话韩寒","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206294&uid=1253924794","green","Movie","D","");
Videos[Videos.length++]=new Video("杀破狼[预告]","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206280&uid=1253924794","","Movie","S","");
Videos[Videos.length++]=new Video("阿姆的iPod广告","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206322&uid=1253924794","","Movie","E","");
Videos[Videos.length++]=new Video("TANK-专署天使","很好听","TANK&&&专署天使","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=985441&uid=1431462455","","MV","T","");
Videos[Videos.length++]=new Video("小猪-好朋友","很好听","小猪&&&好朋友","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=876049&uid=1213466551","","MV","X","");
Videos[Videos.length++]=new Video("五月天-戀愛ing","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188643&uid=1253924794","","MV","W","");
Videos[Videos.length++]=new Video("Gorillaz - Clint Eastwood","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188481&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("Gorillaz-El manana","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188456&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("Gorillaz - feel good inc","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188452&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("阿桑-疯了","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188088&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("蔡依林-独占神话","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188064&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("五月天---而我知道","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187778&uid=1253924794","green","MV","W","");
Videos[Videos.length++]=new Video("Declan-Tell Me Why","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187702&uid=1253924794","green","MV","D","");
Videos[Videos.length++]=new Video("张信哲-做你的男人","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187121&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("Alizee-la isla bonita","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187013&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("罗志祥-精舞门","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=620983&uid=1273112750","","MV","L","");
Videos[Videos.length++]=new Video("蔡依林-唯舞独尊","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1191948&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("西城男孩-noname","","","http://union.bokecc.com/flash/player.swf?videoID=10241_142033&share=false","","MV","A","");
Videos[Videos.length++]=new Video("松隆子-noname","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199102&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("安氏奈美惠-noname","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199087&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("夏之记忆-松隆子","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198960&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("How to be a Gril-安室奈美惠","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198848&uid=1253924794","","MV","H","");
Videos[Videos.length++]=new Video("Do As Infinity","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198842&uid=1253924794","","MV","D","");
Videos[Videos.length++]=new Video("BoA-Valentl","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198825&uid=1253924794","","MV","V","");
Videos[Videos.length++]=new Video("Body Feel Exit-安室奈美惠","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1198831&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("死亡笔记片头MV","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199781&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("寂寞在唱歌—阿桑","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200128&uid=1253924794","","MV","J","");
Videos[Videos.length++]=new Video("厉娜-Darling","超级女生","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206441&uid=1253924794","","MV","L","");
Videos[Videos.length++]=new Video("火影忍者-十大难忘场面","这是一个忍者的世界。在Naruto的世界中，忍者这个职业，就像HunterXHunter里的猎人、One Piece里的海盗一样，是少年们的梦想！不过这回的主人公鸣人和自学成才的小冈、路飞不一样，他是木叶忍者村的忍者学校中科班毕业的哦（虽然毕业得很有些勉强，是被称为万年吊车尾的“差生”，汗）","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1206347&uid=1253924794","","Dongman","H","");
Videos[Videos.length++]=new Video("小甜甜全裸MV全球禁播","小甜甜全裸MV全球禁播","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302784&uid=1253924794","","Movie","X","");
Videos[Videos.length++]=new Video("冯小刚破骂记者","冯小刚破骂记者","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258911&uid=1253924794","","Movie","F","");
Videos[Videos.length++]=new Video("杨澜对话林志玲","杨澜对话林志玲","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1259722&uid=1253924794","","Movie","Y","");
Videos[Videos.length++]=new Video("入江纱绫","入江纱绫","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258857&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("人物访谈——马云","人物访谈——马云","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1324730&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("人物访谈——百度创始人李彦宏","人物访谈——百度创始人李彦宏","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1324676&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("【冷暖人生】-【灰姑娘·一】","【冷暖人生】 【灰姑娘·一】[07\.01\.16]<br>走进“小姐”“妓女”……的人生<br>同样是人，我们要同样看待 ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1324529&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("【冷暖人生】-【灰姑娘·二】","【冷暖人生】 【灰姑娘·二】[07\.01\.16]<br>走进“小姐”“妓女”……的人生<br>同样是人，我们要同样看待 ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1324639&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("【冷暖人生】-【灰姑娘·三】","【冷暖人生】 【灰姑娘·三】[07\.01\.23]<br>走进“小姐”“妓女”……的人生<br>同样是人，我们要同样看待 ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1324535&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("【冷暖人生】-【灰姑娘·四】","【冷暖人生】 【灰姑娘·四】[07\.01\.23]<br>走进“小姐”“妓女”……的人生<br>同样是人，我们要同样看待 ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1325009&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("街舞少年 预告","街舞少年 预告","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258410&uid=1253924794","","Movie","J","");
Videos[Videos.length++]=new Video("情牵一线[预告片]","情牵一线[预告片]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1205992&uid=1253924794","green","Movie","Q","");
Videos[Videos.length++]=new Video("傲慢与偏见 预告片","傲慢与偏见 预告片","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258572&uid=1253924794","green","Movie","A","");
Videos[Videos.length++]=new Video("Kelly-Because Of You[Live]","Kelly-Because Of You[Live]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1257518&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("Somewhere I Belong[MV]","Somewhere I Belong[MV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258102&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("SHE-天灰[MV]","SHE-天灰[MV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1275623&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("SHE--我愛妳[MV]","SHE--我愛妳[MV][3分钟]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1275981&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("Yellow-Coldplay[Live 2003]","Yellow-Coldplay[Live 2003]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301590&uid=1253924794","","MV","Y","");
Videos[Videos.length++]=new Video("Coldplay-Fix you[MV]","Coldplay-Fix you[MV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301600&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("Simple Plan-Untitled","Simple Plan-Untitled","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301634&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("Tatu-Friend Or Foe[mV]","Tatu-Friend Or Foe[mV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302652&uid=1253924794","","MV","T","");
Videos[Videos.length++]=new Video("TATU-Nas Ne Dagoniat[俄语版]","TATU-Nas Ne Dagoniat[俄语版]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302682&uid=1253924794","","MV","T","");
Videos[Videos.length++]=new Video("张靓颖-这该死的爱[mV]","张靓颖-这该死的爱[mV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302789&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("超女2006复活之夜--经典歌曲","超女2006复活之夜--经典歌曲","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426948&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("蔡依林-倒带 MV","蔡依林 倒带 MV","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452304&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("五月天 知足 MV","五月天 知足 MV","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452905&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("小时候","小时候","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452981&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("Beck-Moon On The Water[真人pv]","Beck-Moon On The Water[真人pv]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1454768&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("信乐团-One Night in Beijing","信乐团-One Night in Beijing","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1453017&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("五月天-为爱而生","五月天-为爱而生","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452990&uid=1253924794","","MV","W","");

Videos[Videos.length++]=new Video('Eminem-Stan[Live]02','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189629&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Stan[Live]01','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189604&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Stan[MV]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1189599&uid=1253924794','green','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Mockingbird','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188080&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Mockingbird[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1190623&uid=1253924794','','MV','N','Eminem');
Videos[Videos.length++]=new Video('Eminem-When I\'m Gone','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=402583&uid=1265833775','green','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-8 Miles最后Battle部分前两段','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=953787&uid=1238957694','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Lose Yourself[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200742&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Sing For The Moment','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1248205&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Like Toy Soldiers[MV]','Eminem-Like Toy Soldiers[MV]','Eminem&&&Like Toy Soldiers&&&MV','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1255040&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-The Way I am[Live]','Eminem -The Way I am[Live]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1332374&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-vma 2002 live perform','eminem - vma 2002 live perform','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1332399&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-lose yourself [mV]','Eminem - lose yourself [mV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1332943&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video("Eminem-8 Miles MV","","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200491&uid=1253924794","","MV","E","Eminem");

Videos[Videos.length++]=new Video('Avril-Nobodys Fool','很好听','Avril&&&Nobodys Fool&&&MV','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=335289&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-I\'m With You[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187883&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Tomorrow[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187856&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Knock on Heaven','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1187844&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Take Me Away[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201103&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Slipped away[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201100&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Complicated[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201072&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Losing grip','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201448&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-My happy ending','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1201496&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Unwanted[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1212551&uid=1253924794','','MV','U','Avril');
Videos[Videos.length++]=new Video('Avril--Sk8er Boi[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1212923&uid=1253924794','','MV','A','Avril');

Videos[Videos.length++]=new Video('Linkin Park-A place for my head[Live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188559&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park&jay-z-numb[live]','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188448&uid=1253924794','green','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('linkin park - Crawling','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200274&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('linkin park - By Myself','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200385&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-Numb[MV]','Linkin Park-Numb[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1257496&uid=1253924794','','MV','N','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-Lying From You[live]','Linkin Park-Lying From You[live]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1257533&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-In the end[MV]','Linkin Park-In the end[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258086&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-One Step Closer[MV]','Linkin Park-One Step Closer[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1258099&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Petrified[MV]','Fort Minor-Petrified[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301771&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-High Road(AOL)','Fort Minor-High Road(AOL)','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301778&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Kenji[MV]','Fort Minor-Kenji[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301790&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Believe Me(AOL)','Fort Minor-Believe Me(AOL)','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301802&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Believe Me[MV]','Fort Minor-Believe Me[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1301841&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Remember The Name[mV]','Fort Minor-Remember The Name[mV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302645&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Where\'d you go[mV]','Fort Minor-Where\'d you go[mV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1302879&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort minor - petrified','Fort minor - petrified','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1454021&uid=1253924794','','MV','F','Linkin Park');

Videos[Videos.length++]=new Video('周杰伦-退后','很好听','MV&&&退后&&&周杰伦&&&Hebe','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1186874&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-千里之外','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199749&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-安静 MV','周杰伦 安静 MV','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452281&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-爱情悬崖[MV]','周杰伦-爱情悬崖[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452295&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-搁浅[MV]','周杰伦 搁浅[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452296&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-轨迹 MV','周杰伦 轨迹 MV','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452318&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-晴天 MV','周杰伦 晴天 MV','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452456&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-她的睫毛 MV','周杰伦 她的睫毛 MV','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452461&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-你听得到','你听得到','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1452987&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video('周杰伦-夜的第七章[MV]','周杰伦-夜的第七章[MV]','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1455115&uid=1253924794','','MV','Z','周杰伦');
Videos[Videos.length++]=new Video("周杰伦-轨迹","周杰伦-轨迹","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1477142&uid=1253924794","","MV","Z","周杰伦");


Videos[Videos.length++]=new Video('南拳妈妈-破晓','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188105&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-What Can I Do','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1188099&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-白色裂痕','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1199084&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-牡丹江','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200744&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-橘子汽水','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200752&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-香草吧噗','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200790&uid=1253924794','','MV','N','南拳妈妈');
Videos[Videos.length++]=new Video('南拳妈妈-家','','','http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1200770&uid=1253924794','','MV','N','南拳妈妈');

Videos[Videos.length++]=new Video("范晓萱-You Are My SunShine[MV]","范晓萱-You Are My SunShine[MV]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1486235&uid=1253924794","","MV","F","范晓萱");
Videos[Videos.length++]=new Video("范晓萱----你[live]","范晓萱----你[live]","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1486337&uid=1253924794","","MV","F","范晓萱");
Videos[Videos.length++]=new Video("范晓萱-蛤","范晓萱-蛤","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1486246&uid=1253924794","","MV","F","范晓萱");
Videos[Videos.length++]=new Video("范晓萱-出气球","范晓萱-出气球","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1486223&uid=1253924794","","MV","F","范晓萱");
Videos[Videos.length++]=new Video("范晓萱-我要我们在一起MV","范晓萱-我要我们在一起MV","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1486339&uid=1253924794","","MV","F","范晓萱");



Videos[Videos.length++]=new Video("Beck摇滚新乐团01"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1362777&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团02"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1362899&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团03"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1363000&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团04"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1363001&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团05"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1363067&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团06"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1376667&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团07"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426943&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团08"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1379127&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团09"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1379184&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团10"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1390486&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团11"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1390498&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团12"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1425604&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团13"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1391394&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团14"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1391643&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团15"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1392588&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团16"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1425647&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团17"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐\.\.\. 全文 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1392589&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团18"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1425638&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团19"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1425646&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团20"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1425588&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团21"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426374&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团22"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426516&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团23"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426523&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团24"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426524&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团25"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426525&uid=1253924794","","Dongman","B","Beck摇滚新乐团");
Videos[Videos.length++]=new Video("Beck摇滚新乐团26"," 爱音乐、爱动漫的人啊<br>一定不能错过 Beck摇滚新乐团 阿！<br>简直一大享受，这才是真正的音乐，动漫和音乐界和到这程度，没法说了！<br>最好戴上耳机看，效果更佳哦！","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426834&uid=1253924794","","Dongman","B","Beck摇滚新乐团");


Videos[Videos.length++]=new Video("火影忍者220","第一部最后一集<br>这是一个忍者的世界。在Naruto的世界中，忍者这个职业，就像HunterXHunter里的猎人、One Piece里的海盗一样，是少年们的梦想！不过这回的主人公鸣人和自学成才的小冈、路飞不一样，他是木叶忍者村的忍者学校中科班毕业的哦（虽然毕业得很有些勉强，是被称为万年吊车尾的“差生”，汗）","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1259748&uid=1253924794","","Dongman","H","火影忍者");
Videos[Videos.length++]=new Video("火影忍者221-222[疾风传]","疾风传得第一第二集<br>终于回到主线上<br>这是一个忍者的世界。在Naruto的世界中，忍者这个职业，就像HunterXHunter里的猎人、One Piece里的海盗一样，是少年们的梦想！不过这回的主人公鸣人和自学成才的小冈、路飞不一样，他是木叶忍者村的忍者学校中科班毕业的哦（虽然毕业得很有些勉强，是被称为万年吊车尾的“差生”，汗）","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1280890&uid=1253924794","","Dongman","H","火影忍者");
Videos[Videos.length++]=new Video("火影忍者223","这是一个忍者的世界。在Naruto的世界中，忍者这个职业，就像HunterXHunter里的猎人、One Piece里的海盗一样，是少年们的梦想！不过这回的主人公鸣人和自学成才的小冈、路飞不一样，他是木叶忍者村的忍者学校中科班毕业的哦（虽然毕业得很有些勉强，是被称为万年吊车尾的“差生”，汗）","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1323041&uid=1253924794","","Dongman","H","火影忍者");

Videos[Videos.length++]=new Video("死亡笔记01","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1279574&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记02[对决]","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1333362&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记03","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1215563&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记04","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312834&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记05","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312835&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记06","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312340&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记08","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312836&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记09","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1215575&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记10","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1288087&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记11","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1288118&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记12","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1286529&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记13","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1288170&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记14[朋友]","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312220&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记15","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1216312&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记16","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1216315&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记17","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312189&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记18","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1286532&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记19[松田]","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312338&uid=1253924794","","Dongman","S","死亡笔记");
Videos[Videos.length++]=new Video("死亡笔记20","Death Note，一本只要名字被写上的人就会死的笔记。一切就从这本死神丢落在人间界的死亡笔记开始…… <br>除了我们身处的世界之外，原来还有死神界的存在。死神界就是众多死神的居所，每个死神都拥有一本死亡笔记。他们的工作就是把人类的名字写在笔记上，以夺取人类的寿命。不过，谁都不知道自己究竟为了什么而生，终日过着无聊的生活。死神界正在腐化…… <br>流愚便是其中一位死神。因为它在死神界活得太无聊，为了寻找乐趣，它故意把自己的死亡笔记丢落在人间界，然后到那看看谁拣到它的笔记…… <br>夜神月，一个17岁的日本天才青年，同样在人间界过着无聊的生活。在命运的安排下，他在地上拾起了这本改写他一生的死亡笔记…… <br>拣到死亡笔记的月，决心要利用它改写世界。他要消灭世上所有犯罪者，创造一个没有罪恶的世界。他的目标是成为新世界的神…… <br>随着世界上不断有罪犯突然死亡，众人心目中便出现了“ 奇拉”这个救世主。有人认为奇拉是一个制裁罪恶的正义使者，不过在警方眼中，奇拉是一个凶残的连环杀手，罪无可恕。为了找出并逮捕奇拉，警方只好出动他们的最后皇牌：“ L ”…… <br>曾经侦破世界上无数奇案的L，决心要把奇拉送上死刑台。他透过电视直播向奇拉发表宣言，结果激起了月的愤怒。月决心要把这个阻碍自己伟大计划的L消灭…… <br>就是这样，两个同样不知道对方身份的人、同样拥有天才头脑的人、同样坚信自己是正义的人，向对方宣战。这是一场智力之间的战斗、一场正邪之间的战斗、一场生死存亡之间的战斗！到底谁才是最后的胜利者？ ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1426821&uid=1253924794","","Dongman","S","死亡笔记");


Videos[Videos.length++]=new Video("死神Bleach101","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1282735&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach102","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1283996&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach103","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1283956&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach104","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1283981&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach105","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1283975&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach106","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1284433&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach107","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1284438&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach108","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1284447&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach109","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1333206&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach110","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1333289&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach111","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1311851&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach112","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312071&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach113","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1311822&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach114","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312181&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach115","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1311871&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach116","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1312939&uid=1253924794","","Dongman","S","死神Bleach");
Videos[Videos.length++]=new Video("死神Bleach117","在正常的人世之外，还有一个不为人知的叫做尸魂界的存在。尸魂界里住着死神，死神的任务是消灭恶灵，超度幽灵。 <br>黑崎一护，是灵力高强的高中生，虽然擅长打架，但是学习很好，最奇怪的是他能看见幽灵。 <br>一天晚上，一护在家，一名叫做朽木露琪亚的女生从窗户跳进他的房间，一护开始以为她是小偷，但反而被露琪亚用名为“鬼道”的法术制服后，认识到“死神”这个超越常识的存在。 <br>就在这个时候，一只巨大的恶灵袭击了一护家，伤害了一护的家人，就连露琪亚也因为救助一护而身受重伤。在这危急的情况下，一护为救家人，冒生命危险成为死神，消灭了恶灵。而路琪亚则因为将能力给了一护自己无法变回死神返回死神界而呆在一护身边，一护被迫接下死神的工作，消灭恶灵。 <br>","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1438228&uid=1253924794","","Dongman","S","死神Bleach");


Videos[Videos.length++]=new Video("三重门01","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281097&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门02","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281098&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门03","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281102&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门04","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281129&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门05","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281189&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门06","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281240&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门07","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281383&uid=1253924794","","Movie","S","三重门");
Videos[Videos.length++]=new Video("三重门08","三重门电视剧 据韩寒《三重门》改编<br>电视剧拍得很优秀-- <br>林雨翔所在的镇是个小镇。小镇一共一个学校，那学校好比独生子女。小镇政府生造的一些教育机构奖项全给了它，那学校门口“先进单位”的牌子都挂不下了，恨不得用奖状铺地。镇上的老少都为这学校自豪。那学校也争过一次气，前几届不知怎么地培养出两个理科尖子，获了全国的数学竞赛季亚军。消息传来，小镇沸腾得差点蒸…… ","","http://v.blog.sina.com.cn/b/vblog_player.swf?vid=1281524&uid=1253924794","","Movie","S","三重门");



//######################################################################

Albums=new Array();

Albums[Albums.length++]=new Album("Beck摇滚新乐团","Dongman","","B");
Albums[Albums.length++]=new Album("死亡笔记","Dongman","","S");
Albums[Albums.length++]=new Album("死神Bleach","Dongman","","S");
Albums[Albums.length++]=new Album("火影忍者","Dongman","","H");
Albums[Albums.length++]=new Album("三重门","Movie","","S");
Albums[Albums.length++]=new Album("Eminem","MV","","E");
Albums[Albums.length++]=new Album("Avril","MV","","A");
Albums[Albums.length++]=new Album("周杰伦","MV","","Z");
Albums[Albums.length++]=new Album("Linkin Park","MV","","L");
Albums[Albums.length++]=new Album("南拳妈妈","MV","","N");
Albums[Albums.length++]=new Album("范晓萱","MV","","F");


//############################################################################################
								//aname,ground,color,ch
//Albums[Albums.length++]=new Album("em","MV","","A");

/*
//search for the classes of albums
var arrAlbumClasses=new Array();//save the class of albums
for(var i=0;i<Videos.length;i++){
	var j;var has=false;
	for(j=0;j<arrAlbumClasses.length;j++) if(Videos[i].album==arrAlbumClasses[j]) has=true;
		if(has==false){
			arrAlbumClasses[arrAlbumClasses.length++]=new Array(Videos[i].album,Videos[i].ground,"",Videos[i].ch);
		}
}

//create object albums
for(var i=0;i<arrAlbumClasses.length;i++) 
	Albums[Albums.length++]=new Album(arrAlbumClasses[i][0],arrAlbumClasses[i][1],arrAlbumClasses[i][2],arrAlbumClasses[i][3]);
*/


//###############################################################################################################################




//###############################################################################################################################
//相关操作函数
//###############################################################################################################################

function getVideoForm(ch,gd){//ch is character ,gd is ground just like 动漫,影视,MV
	var inner="";
	
	//search albums
	var abP=new Array();
	for(var i=0;i<Albums.length;i++)if(Albums[i].ch.toLowerCase()==ch.toLowerCase() && Albums[i].ground.toLowerCase()==gd.toLowerCase())abP[abP.length++]=i;
			
	//search videos
	var vP=new Array();
	for(var i=0;i<Videos.length;i++)if((Videos[i].album=="" || Videos[i].color!="")==true && Videos[i].ch.toLowerCase()==ch.toLowerCase() && Videos[i].ground.toLowerCase()==gd.toLowerCase())vP[vP.length++]=i;
	
	if(vP.length<1 && abP.length<1) 
		return "Sorry,Have not"
						+"<a onclick=alert('直接告诉我Video名称就行了，当然有地址更好了'); href='http://wpa.qq.com/msgrd?V=1&Uin=563787750&Menu=yes;' target='_blank'><br>你来添加吧！</a>";
	
	
	//show singel video
	for(var i=0;i<vP.length;i++)
			inner+=Videos[vP[i]].color==""?
					"<a href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title+"</a><br>"
					:
					"<a href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title.fontcolor(Videos[vP[i]].color)+"</a><br>";

	//show albums
	for(var i=0;i<Albums.length;i++)
		if(Albums[i].ch.toLowerCase()==ch.toLowerCase() && Albums[i].ground.toLowerCase()==gd.toLowerCase())
			inner+="<a href='#album' id='Albums-"+ Albums[i] +"' onClick='Albums["+i+"].showAlbum();'>"+"[专辑]".fontcolor('green')+ Albums[i].name.fontcolor('green')+"</a><br>";

	return inner;
}

function showVideos(gd){//flag是排列方式如按照歌曲排或者按照歌手排
	gd=gd.toLowerCase();
	for(var i=0;i<26;i++)
		$("lr"+String.fromCharCode(i+65)).innerHTML=getVideoForm(String.fromCharCode(i+65),gd);
		
	setGroundTitle(gd);
	
	//为每一个歌曲链接设置title
	//……
}


<!--//start create object functions
	function GroundTitle(gd){
		this.gd=gd.toLowerCase();
		switch(gd){
			case "dongman":this.title="动漫";break;
			case "movie":this.title="影视";break;
			case "mv":this.title="MV";break;
		}
		this.alertTitle=alertTitle;
	}
	function alertTitle(){
		alert(this.title);
	}
//end create object functions-->

//显示大厅名称//利用到了自定义类
function setGroundTitle(gd){
	var g=new GroundTitle(gd);
	$("tdGroundTitle").innerHTML=g.title +"大厅";
}
