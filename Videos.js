//##################################################################################
//��¼����Video
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
	$("lrPlayer").innerHTML="<iframe id='ifrmPlayer' src='"+ this.url +"' width='500' height='550' scrolling=no></iframe>";
	$("lrTitle").innerHTML="<font class='style6'>"+ this.title +"</font>";
	$("lrInfo").innerHTML="<font class='style6'>Titel:</font>"+ this.title +"<br><font class='style6'>Description:</font>"+ this.description +"<br><font class='style6'>Tags:</font>"+ this.tags.split("&&&") +"<br><a href='#' onclick=\"$('lrPlayer').innerHTML='';window.open($('ifrmPlayer').src,'aliketen','fullscreen=3,height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');\" ><u>ȫ��</u></a><br><a target='_blank' href='http://v.blog.sina.com.cn/m/1253924794'><u>My����</u></a><br><a target='_blank' href='http://www.quchao.com/video' title='������FLV Downloader' onClick=\"alert('�ڿ����ֱ�ӵ�����ƣ���');clipboardData.setData('Text','"+ this.url +"');\"><font color='green'><u>����</u></font></a>......";
	$("trPlayer").style.display="";
	$("Jia1").innerHTML="-";
}

function fullScreen(url){
	window.open(url,'aliketen','fullscreen=3,height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
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
					"<a class='headJump'  href='#' id='albumVideos-"+ i +"' onClick='Videos["+this.vP[i]+"].play();'>"+ Videos[this.vP[i]].title+"</a><br>"
					:
					"<a class='headJump'  href='#' id='albumVideos-"+ i +"' onClick='Videos["+this.vP[i]+"].play();'>"+ Videos[this.vP[i]].title.fontcolor(Videos[this.vP[i]].color)+"</a><br>";
	$("lrAlbum").innerHTML=inner;
}

//<!--create Object  end-->

//############################################################################################





//###############################################################################################################################


//###############################################################################################################################


var Videos=new Array();


//###############################################################################################################################
//Videos[Videos.length++]=new Video("","","","","","","","","");

Videos[Videos.length++]=new Video("Final Fansty[MV]","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206402&uid=1253924794","","Dongman","F","");
Videos[Videos.length++]=new Video("�Ի�����","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206294&uid=1253924794","green","Movie","D","");
Videos[Videos.length++]=new Video("ɱ����[Ԥ��]","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206280&uid=1253924794","","Movie","S","");
Videos[Videos.length++]=new Video("��ķ��iPod���","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206322&uid=1253924794","","Movie","E","");
Videos[Videos.length++]=new Video("TANK-ר����ʹ","�ܺ���","TANK&&&ר����ʹ","http://v.blog.sina.com.cn/swf/player.swf?vid=985441&uid=1431462455","","MV","T","");
Videos[Videos.length++]=new Video("С��-������","�ܺ���","С��&&&������","http://v.blog.sina.com.cn/swf/player.swf?vid=876049&uid=1213466551","","MV","X","");
Videos[Videos.length++]=new Video("������-�ِ�ing","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188643&uid=1253924794","","MV","W","");
Videos[Videos.length++]=new Video("Gorillaz - Clint Eastwood","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188481&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("Gorillaz-El manana","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188456&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("Gorillaz - feel good inc","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188452&uid=1253924794","","MV","G","");
Videos[Videos.length++]=new Video("��ɣ-����","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188088&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("������-��ռ��","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1188064&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("������---����֪��","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1187778&uid=1253924794","green","MV","W","");
Videos[Videos.length++]=new Video("Declan-Tell Me Why","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1187702&uid=1253924794","green","MV","D","");
Videos[Videos.length++]=new Video("������-���������","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1187121&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("Alizee-la isla bonita","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1187013&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("��־��-������","","","http://v.blog.sina.com.cn/swf/player.swf?vid=620983&uid=1273112750","","MV","L","");
Videos[Videos.length++]=new Video("������-Ψ�����","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1191948&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("�����к�-noname","","","http://union.bokecc.com/flash/player.swf?videoID=10241_142033&share=false","","MV","A","");
Videos[Videos.length++]=new Video("��¡��-noname","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1199102&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("����������-noname","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1199087&uid=1253924794","","MV","A","");
Videos[Videos.length++]=new Video("��֮����-��¡��","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1198960&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("How to be a Gril-����������","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1198848&uid=1253924794","","MV","H","");
Videos[Videos.length++]=new Video("Do As Infinity","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1198842&uid=1253924794","","MV","D","");
Videos[Videos.length++]=new Video("BoA-Valentl","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1198825&uid=1253924794","","MV","V","");
Videos[Videos.length++]=new Video("Body Feel Exit-����������","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1198831&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("�����ʼ�ƬͷMV","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1199781&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("��į�ڳ��衪��ɣ","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1200128&uid=1253924794","","MV","J","");
Videos[Videos.length++]=new Video("����-Darling","����Ů��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206441&uid=1253924794","","MV","L","");
Videos[Videos.length++]=new Video("��Ӱ����-ʮ����������","����һ�����ߵ����硣��Naruto�������У��������ְҵ������HunterXHunter������ˡ�One Piece��ĺ���һ�����������ǵ����룡������ص����˹����˺���ѧ�ɲŵ�С�ԡ�·�ɲ�һ��������ľҶ���ߴ������ѧУ�пư��ҵ��Ŷ����Ȼ��ҵ�ú���Щ��ǿ���Ǳ���Ϊ�������β�ġ�������������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1206347&uid=1253924794","","Dongman","H","");
Videos[Videos.length++]=new Video("С����ȫ��MVȫ�����","С����ȫ��MVȫ�����","","http://v.blog.sina.com.cn/swf/player.swf?vid=1302784&uid=1253924794","","Movie","X","");
Videos[Videos.length++]=new Video("��С���������","��С���������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1258911&uid=1253924794","","Movie","F","");
Videos[Videos.length++]=new Video("�����Ի���־��","�����Ի���־��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1259722&uid=1253924794","","Movie","Y","");
Videos[Videos.length++]=new Video("�뽭ɴ�","�뽭ɴ�","","http://v.blog.sina.com.cn/swf/player.swf?vid=1258857&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("�����̸��������","�����̸��������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1324730&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("�����̸�����ٶȴ�ʼ�������","�����̸�����ٶȴ�ʼ�������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1324676&uid=1253924794","","Movie","R","");
Videos[Videos.length++]=new Video("����ů������-���ҹ��һ��","����ů������ ���ҹ��һ��[07\.01\.16]<br>�߽���С�㡱����Ů������������<br>ͬ�����ˣ�����Ҫͬ������ ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1324529&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("����ů������-���ҹ������","����ů������ ���ҹ������[07\.01\.16]<br>�߽���С�㡱����Ů������������<br>ͬ�����ˣ�����Ҫͬ������ ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1324639&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("����ů������-���ҹ������","����ů������ ���ҹ������[07\.01\.23]<br>�߽���С�㡱����Ů������������<br>ͬ�����ˣ�����Ҫͬ������ ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1324535&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("����ů������-���ҹ���ġ�","����ů������ ���ҹ���ġ�[07\.01\.23]<br>�߽���С�㡱����Ů������������<br>ͬ�����ˣ�����Ҫͬ������ ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1325009&uid=1253924794","","Movie","L","");
Videos[Videos.length++]=new Video("�������� Ԥ��","�������� Ԥ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1258410&uid=1253924794","","Movie","J","");
Videos[Videos.length++]=new Video("��ǣһ��[Ԥ��Ƭ]","��ǣһ��[Ԥ��Ƭ]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1205992&uid=1253924794","green","Movie","Q","");
Videos[Videos.length++]=new Video("������ƫ�� Ԥ��Ƭ","������ƫ�� Ԥ��Ƭ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1258572&uid=1253924794","green","Movie","A","");
Videos[Videos.length++]=new Video("Kelly-Because Of You[Live]","Kelly-Because Of You[Live]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1257518&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("Somewhere I Belong[MV]","Somewhere I Belong[MV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1258102&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("SHE-���[MV]","SHE-���[MV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1275623&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("SHE--�Ґۊ�[MV]","SHE--�Ґۊ�[MV][3����]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1275981&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("Yellow-Coldplay[Live 2003]","Yellow-Coldplay[Live 2003]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1301590&uid=1253924794","","MV","Y","");
Videos[Videos.length++]=new Video("Coldplay-Fix you[MV]","Coldplay-Fix you[MV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1301600&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("Simple Plan-Untitled","Simple Plan-Untitled","","http://v.blog.sina.com.cn/swf/player.swf?vid=1301634&uid=1253924794","","MV","S","");
Videos[Videos.length++]=new Video("Tatu-Friend Or Foe[mV]","Tatu-Friend Or Foe[mV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1302652&uid=1253924794","","MV","T","");
Videos[Videos.length++]=new Video("TATU-Nas Ne Dagoniat[�����]","TATU-Nas Ne Dagoniat[�����]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1302682&uid=1253924794","","MV","T","");
Videos[Videos.length++]=new Video("����ӱ-������İ�[mV]","����ӱ-������İ�[mV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1302789&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("��Ů2006����֮ҹ--�������","��Ů2006����֮ҹ--�������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426948&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("������-���� MV","������ ���� MV","","http://v.blog.sina.com.cn/swf/player.swf?vid=1452304&uid=1253924794","","MV","C","");
Videos[Videos.length++]=new Video("������ ֪�� MV","������ ֪�� MV","","http://v.blog.sina.com.cn/swf/player.swf?vid=1452905&uid=1253924794","","MV","Z","");
Videos[Videos.length++]=new Video("Сʱ��","Сʱ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1452981&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("Beck-Moon On The Water[����pv]","Beck-Moon On The Water[����pv]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1454768&uid=1253924794","","MV","B","");
Videos[Videos.length++]=new Video("������-One Night in Beijing","������-One Night in Beijing","","http://v.blog.sina.com.cn/swf/player.swf?vid=1453017&uid=1253924794","","MV","X","");
Videos[Videos.length++]=new Video("������-Ϊ������","������-Ϊ������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1452990&uid=1253924794","","MV","W","");
Videos[Videos.length++]=new Video("ʹ��jsp�������ݿ�����û���½����","����-ʹ��jsp�������ݿ�����û���½����","����&&&jsp&&&���ݿ�&&&��½","http://vhead.blog.sina.com.cn/player/outer_player.swf?auto=0&vid=2480455&uid=1281081403","","Movie","S","");
Videos[Videos.length++]=new Video("Stuts","Stuts","Stuts","http://vhead.blog.sina.com.cn/player/outer_player.swf?auto=0&vid=1875485&uid=1281081403","","Movie","S","");


Videos[Videos.length++]=new Video('Eminem-Stan[Live]02','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1189629&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Stan[Live]01','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1189604&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Stan[MV]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1189599&uid=1253924794','green','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Mockingbird','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1188080&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Mockingbird[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1190623&uid=1253924794','','MV','N','Eminem');
Videos[Videos.length++]=new Video('Eminem-When I\'m Gone','','','http://v.blog.sina.com.cn/swf/player.swf?vid=402583&uid=1265833775','green','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-8 Miles���Battle����ǰ����','','','http://v.blog.sina.com.cn/swf/player.swf?vid=953787&uid=1238957694','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Lose Yourself[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200742&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Sing For The Moment','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1248205&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-Like Toy Soldiers[MV]','Eminem-Like Toy Soldiers[MV]','Eminem&&&Like Toy Soldiers&&&MV','http://v.blog.sina.com.cn/swf/player.swf?vid=1255040&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-The Way I am[Live]','Eminem -The Way I am[Live]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1332374&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-vma 2002 live perform','eminem - vma 2002 live perform','','http://v.blog.sina.com.cn/swf/player.swf?vid=1332399&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video('Eminem-lose yourself [mV]','Eminem - lose yourself [mV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1332943&uid=1253924794','','MV','E','Eminem');
Videos[Videos.length++]=new Video("Eminem-8 Miles MV","","","http://v.blog.sina.com.cn/swf/player.swf?vid=1200491&uid=1253924794","","MV","E","Eminem");

Videos[Videos.length++]=new Video('Avril-Nobodys Fool','�ܺ���','Avril&&&Nobodys Fool&&&MV','http://v.blog.sina.com.cn/swf/player.swf?vid=335289&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-I\'m With You[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1187883&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Tomorrow[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1187856&uid=1253924794','green','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Knock on Heaven','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1187844&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Take Me Away[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1201103&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Slipped away[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1201100&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Complicated[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1201072&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Losing grip','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1201448&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-My happy ending','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1201496&uid=1253924794','','MV','A','Avril');
Videos[Videos.length++]=new Video('Avril-Unwanted[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1212551&uid=1253924794','','MV','U','Avril');
Videos[Videos.length++]=new Video('Avril--Sk8er Boi[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1212923&uid=1253924794','','MV','A','Avril');

Videos[Videos.length++]=new Video('Linkin Park-A place for my head[Live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1188559&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park&jay-z-numb[live]','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1188448&uid=1253924794','green','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('linkin park - Crawling','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200274&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('linkin park - By Myself','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200385&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-Numb[MV]','Linkin Park-Numb[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1257496&uid=1253924794','','MV','N','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-Lying From You[live]','Linkin Park-Lying From You[live]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1257533&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-In the end[MV]','Linkin Park-In the end[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1258086&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Linkin Park-One Step Closer[MV]','Linkin Park-One Step Closer[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1258099&uid=1253924794','','MV','L','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Petrified[MV]','Fort Minor-Petrified[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1301771&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-High Road(AOL)','Fort Minor-High Road(AOL)','','http://v.blog.sina.com.cn/swf/player.swf?vid=1301778&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Kenji[MV]','Fort Minor-Kenji[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1301790&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Believe Me(AOL)','Fort Minor-Believe Me(AOL)','','http://v.blog.sina.com.cn/swf/player.swf?vid=1301802&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Believe Me[MV]','Fort Minor-Believe Me[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1301841&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Remember The Name[mV]','Fort Minor-Remember The Name[mV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1302645&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort Minor-Where\'d you go[mV]','Fort Minor-Where\'d you go[mV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1302879&uid=1253924794','','MV','F','Linkin Park');
Videos[Videos.length++]=new Video('Fort minor - petrified','Fort minor - petrified','','http://v.blog.sina.com.cn/swf/player.swf?vid=1454021&uid=1253924794','','MV','F','Linkin Park');

Videos[Videos.length++]=new Video('�ܽ���-�˺�','�ܺ���','MV&&&�˺�&&&�ܽ���&&&Hebe','http://v.blog.sina.com.cn/swf/player.swf?vid=1186874&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-ǧ��֮��','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1199749&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-���� MV','�ܽ��� ���� MV','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452281&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-��������[MV]','�ܽ���-��������[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452295&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-��ǳ[MV]','�ܽ��� ��ǳ[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452296&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-�켣 MV','�ܽ��� �켣 MV','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452318&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-���� MV','�ܽ��� ���� MV','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452456&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-���Ľ�ë MV','�ܽ��� ���Ľ�ë MV','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452461&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-�����õ�','�����õ�','','http://v.blog.sina.com.cn/swf/player.swf?vid=1452987&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video('�ܽ���-ҹ�ĵ�����[MV]','�ܽ���-ҹ�ĵ�����[MV]','','http://v.blog.sina.com.cn/swf/player.swf?vid=1455115&uid=1253924794','','MV','Z','�ܽ���');
Videos[Videos.length++]=new Video("�ܽ���-�켣","�ܽ���-�켣","","http://v.blog.sina.com.cn/swf/player.swf?vid=1477142&uid=1253924794","","MV","Z","�ܽ���");


Videos[Videos.length++]=new Video('��ȭ����-����','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1188105&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-What Can I Do','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1188099&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-��ɫ�Ѻ�','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1199084&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-ĵ����','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200744&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-������ˮ','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200752&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-��ݰ���','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200790&uid=1253924794','','MV','N','��ȭ����');
Videos[Videos.length++]=new Video('��ȭ����-��','','','http://v.blog.sina.com.cn/swf/player.swf?vid=1200770&uid=1253924794','','MV','N','��ȭ����');

Videos[Videos.length++]=new Video("������-You Are My SunShine[MV]","������-You Are My SunShine[MV]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1486235&uid=1253924794","","MV","F","������");
Videos[Videos.length++]=new Video("������----��[live]","������----��[live]","","http://v.blog.sina.com.cn/swf/player.swf?vid=1486337&uid=1253924794","","MV","F","������");
Videos[Videos.length++]=new Video("������-��","������-��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1486246&uid=1253924794","","MV","F","������");
Videos[Videos.length++]=new Video("������-������","������-������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1486223&uid=1253924794","","MV","F","������");
Videos[Videos.length++]=new Video("������-��Ҫ������һ��MV","������-��Ҫ������һ��MV","","http://v.blog.sina.com.cn/swf/player.swf?vid=1486339&uid=1253924794","","MV","F","������");



Videos[Videos.length++]=new Video("Beckҡ��������01"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1362777&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������02"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1362899&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������03"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1363000&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������04"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1363001&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������05"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1363067&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������06"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1376667&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������07"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426943&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������08"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1379127&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������09"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1379184&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������10"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1390486&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������11"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1390498&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������12"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1425604&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������13"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1391394&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������14"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1391643&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������15"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1392588&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������16"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1425647&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������17"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣�����������\.\.\. ȫ�� �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1392589&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������18"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1425638&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������19"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1425646&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������20"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1425588&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������21"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426374&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������22"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426516&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������23"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426523&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������24"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426524&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������25"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426525&uid=1253924794","","Dongman","B","Beckҡ��������");
Videos[Videos.length++]=new Video("Beckҡ��������26"," �����֡����������˰�<br>һ�����ܴ��� Beckҡ�������� ����<br>��ֱһ�����ܣ���������������֣����������ֽ�͵���̶ȣ�û��˵�ˣ�<br>��ô��϶�������Ч������Ŷ��","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426834&uid=1253924794","","Dongman","B","Beckҡ��������");


Videos[Videos.length++]=new Video("��Ӱ����220","��һ�����һ��<br>����һ�����ߵ����硣��Naruto�������У��������ְҵ������HunterXHunter������ˡ�One Piece��ĺ���һ�����������ǵ����룡������ص����˹����˺���ѧ�ɲŵ�С�ԡ�·�ɲ�һ��������ľҶ���ߴ������ѧУ�пư��ҵ��Ŷ����Ȼ��ҵ�ú���Щ��ǿ���Ǳ���Ϊ�������β�ġ�������������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1259748&uid=1253924794","","Dongman","H","��Ӱ����");
Videos[Videos.length++]=new Video("��Ӱ����221-222[���紫]","���紫�õ�һ�ڶ���<br>���ڻص�������<br>����һ�����ߵ����硣��Naruto�������У��������ְҵ������HunterXHunter������ˡ�One Piece��ĺ���һ�����������ǵ����룡������ص����˹����˺���ѧ�ɲŵ�С�ԡ�·�ɲ�һ��������ľҶ���ߴ������ѧУ�пư��ҵ��Ŷ����Ȼ��ҵ�ú���Щ��ǿ���Ǳ���Ϊ�������β�ġ�������������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1280890&uid=1253924794","","Dongman","H","��Ӱ����");
Videos[Videos.length++]=new Video("��Ӱ����223","����һ�����ߵ����硣��Naruto�������У��������ְҵ������HunterXHunter������ˡ�One Piece��ĺ���һ�����������ǵ����룡������ص����˹����˺���ѧ�ɲŵ�С�ԡ�·�ɲ�һ��������ľҶ���ߴ������ѧУ�пư��ҵ��Ŷ����Ȼ��ҵ�ú���Щ��ǿ���Ǳ���Ϊ�������β�ġ�������������","","http://v.blog.sina.com.cn/swf/player.swf?vid=1323041&uid=1253924794","","Dongman","H","��Ӱ����");

Videos[Videos.length++]=new Video("�����ʼ�01","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1279574&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�02[�Ծ�]","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1333362&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�03","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1215563&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�04","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312834&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�05","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312835&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�06","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312340&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�08","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312836&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�09","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1215575&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�10","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1288087&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�11","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1288118&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�12","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1286529&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�13","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1288170&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�14[����]","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312220&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�15","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1216312&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�16","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1216315&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�17","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312189&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�18","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1286532&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�19[����]","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312338&uid=1253924794","","Dongman","S","�����ʼ�");
Videos[Videos.length++]=new Video("�����ʼ�20","Death Note��һ��ֻҪ���ֱ�д�ϵ��˾ͻ����ıʼǡ�һ�оʹ��Ȿ���������˼��������ʼǿ�ʼ���� <br>������������������֮�⣬ԭ�����������Ĵ��ڡ����������ڶ�����ľ�����ÿ������ӵ��һ�������ʼǡ����ǵĹ������ǰ����������д�ڱʼ��ϣ��Զ�ȡ�����������������˭����֪���Լ�����Ϊ��ʲô���������չ������ĵ������������ڸ������� <br>���ޱ�������һλ������Ϊ�����������̫���ģ�Ϊ��Ѱ����Ȥ����������Լ��������ʼǶ������˼�磬Ȼ���ǿ���˭�����ıʼǡ��� <br>ҹ���£�һ��17����ձ�������꣬ͬ�����˼��������ĵ���������˵İ����£����ڵ���ʰ�����Ȿ��д��һ���������ʼǡ��� <br>�������ʼǵ��£�����Ҫ��������д���硣��Ҫ�����������з����ߣ�����һ��û���������硣����Ŀ���ǳ�Ϊ��������񡭡� <br>���������ϲ������ﷸͻȻ������������Ŀ�б�����ˡ� �����������������������Ϊ������һ���Ʋ���������ʹ�ߣ������ھ������У�������һ���ײе�����ɱ�֣����޿�ˡ��Ϊ���ҳ�����������������ֻ�ó������ǵ������ƣ��� L ������ <br>�������������������永��L������Ҫ��������������̨����͸������ֱ���������������ԣ�����������µķ�ŭ���¾���Ҫ������谭�Լ�ΰ��ƻ���L���𡭡� <br>��������������ͬ����֪���Է����ݵ��ˡ�ͬ��ӵ�����ͷ�Ե��ˡ�ͬ�������Լ���������ˣ���Է���ս������һ������֮���ս����һ����а֮���ս����һ����������֮���ս��������˭��������ʤ���ߣ� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1426821&uid=1253924794","","Dongman","S","�����ʼ�");


Videos[Videos.length++]=new Video("����Bleach101","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1282735&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach102","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1283996&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach103","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1283956&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach104","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1283981&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach105","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1283975&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach106","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1284433&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach107","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1284438&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach108","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1284447&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach109","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1333206&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach110","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1333289&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach111","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1311851&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach112","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312071&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach113","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1311822&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach114","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312181&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach115","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1311871&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach116","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1312939&uid=1253924794","","Dongman","S","����Bleach");
Videos[Videos.length++]=new Video("����Bleach117","������������֮�⣬����һ����Ϊ��֪�Ľ���ʬ���Ĵ��ڡ�ʬ�����ס�����������������������飬�������顣 <br>����һ������������ǿ�ĸ���������Ȼ�ó���ܣ�����ѧϰ�ܺã�����ֵ������ܿ������顣 <br>һ�����ϣ�һ���ڼң�һ��������ľ¶���ǵ�Ů���Ӵ����������ķ��䣬һ����ʼ��Ϊ����С͵����������¶��������Ϊ���������ķ����Ʒ�����ʶ�������������Խ��ʶ�Ĵ��ڡ� <br>�������ʱ��һֻ�޴�Ķ���Ϯ����һ���ң��˺���һ���ļ��ˣ�����¶����Ҳ��Ϊ����һ�����������ˡ�����Σ��������£�һ��Ϊ�ȼ��ˣ�ð����Σ�ճ�Ϊ���������˶��顣��·��������Ϊ����������һ���Լ��޷�������񷵻�����������һ�����ߣ�һ�����Ƚ�������Ĺ�����������顣 <br>","","http://v.blog.sina.com.cn/swf/player.swf?vid=1438228&uid=1253924794","","Dongman","S","����Bleach");


Videos[Videos.length++]=new Video("������01","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281097&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������02","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281098&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������03","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281102&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������04","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281129&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������05","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281189&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������06","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281240&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������07","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281383&uid=1253924794","","Movie","S","������");
Videos[Videos.length++]=new Video("������08","�����ŵ��Ӿ� �ݺ����������š��ı�<br>���Ӿ��ĵú�����-- <br>���������ڵ����Ǹ�С��С��һ��һ��ѧУ����ѧУ�ñȶ�����Ů��С�����������һЩ������������ȫ����������ѧУ�ſڡ��Ƚ���λ�������Ӷ��Ҳ����ˣ��޲����ý�״�̵ء����ϵ����ٶ�Ϊ��ѧУ�Ժ�����ѧУҲ����һ������ǰ���첻֪��ô���������������Ƽ��ӣ�����ȫ������ѧ�������Ǿ�����Ϣ������С����ڵò�������� ","","http://v.blog.sina.com.cn/swf/player.swf?vid=1281524&uid=1253924794","","Movie","S","������");



//######################################################################

Albums=new Array();

Albums[Albums.length++]=new Album("Beckҡ��������","Dongman","","B");
Albums[Albums.length++]=new Album("�����ʼ�","Dongman","","S");
Albums[Albums.length++]=new Album("����Bleach","Dongman","","S");
Albums[Albums.length++]=new Album("��Ӱ����","Dongman","","H");
Albums[Albums.length++]=new Album("������","Movie","","S");
Albums[Albums.length++]=new Album("Eminem","MV","","E");
Albums[Albums.length++]=new Album("Avril","MV","","A");
Albums[Albums.length++]=new Album("�ܽ���","MV","","Z");
Albums[Albums.length++]=new Album("Linkin Park","MV","","L");
Albums[Albums.length++]=new Album("��ȭ����","MV","","N");
Albums[Albums.length++]=new Album("������","MV","","F");


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
//��ز�������
//###############################################################################################################################

function getVideoForm(ch,gd){//ch is character ,gd is ground just like ����,Ӱ��,MV
	var inner="";
	
	//search albums
	var abP=new Array();
	for(var i=0;i<Albums.length;i++)if(Albums[i].ch.toLowerCase()==ch.toLowerCase() && Albums[i].ground.toLowerCase()==gd.toLowerCase())abP[abP.length++]=i;
			
	//search videos
	var vP=new Array();
	for(var i=0;i<Videos.length;i++)if((Videos[i].album=="" || Videos[i].color!="")==true && Videos[i].ch.toLowerCase()==ch.toLowerCase() && Videos[i].ground.toLowerCase()==gd.toLowerCase())vP[vP.length++]=i;
	
	if(vP.length<1 && abP.length<1) 
		return "Sorry,Have not"
						+"<a class='headJump'  onclick=alert('ֱ�Ӹ�����Video���ƾ����ˣ���Ȼ�е�ַ������'); href='http://wpa.qq.com/msgrd?V=1&Uin=563787750&Menu=yes;' target='_blank'><br>�������Ӱɣ�</a>";
	
	
	//show singel video
	for(var i=0;i<vP.length;i++)
			inner+=Videos[vP[i]].color==""?
					"<a class='headJump'  href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title+"</a><br>"
					:
					"<a class='headJump'  href='#' id='Videos-"+ vP[i] +"' onClick='Videos["+vP[i]+"].play();'>"+ Videos[vP[i]].title.fontcolor(Videos[vP[i]].color)+"</a><br>";

	//show albums
	for(var i=0;i<Albums.length;i++)
		if(Albums[i].ch.toLowerCase()==ch.toLowerCase() && Albums[i].ground.toLowerCase()==gd.toLowerCase())
			inner+="<a class='headJump'  href='#album' id='Albums-"+ Albums[i] +"' onClick='Albums["+i+"].showAlbum();'>"+"[ר��]".fontcolor('green')+ Albums[i].name.fontcolor('green')+"</a><br>";

	return inner;
}

function showVideos(gd){//flag�����з�ʽ�簴�ո����Ż��߰��ո�����
	gd=gd.toLowerCase();
	for(var i=0;i<26;i++)
		$("lr"+String.fromCharCode(i+65)).innerHTML=getVideoForm(String.fromCharCode(i+65),gd);
		
	setGroundTitle(gd);
	
	//Ϊÿһ��������������title
	//����
}


<!--//start create object functions
	function GroundTitle(gd){
		this.gd=gd.toLowerCase();
		switch(gd){
			case "dongman":this.title="����";break;
			case "movie":this.title="Ӱ��";break;
			case "mv":this.title="MV";break;
		}
		this.alertTitle=alertTitle;
	}
	function alertTitle(){
		alert(this.title);
	}
//end create object functions-->

//��ʾ��������//���õ����Զ�����
function setGroundTitle(gd){
	var g=new GroundTitle(gd);
	$("tdGroundTitle").innerHTML=g.title +"����";
}