//##################################################################################
//��¼��FormԪ�ؼ�ֵ
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
	//��������
}

function toString(){
	return this.name+this.method+this.url+this.title+this.type;
}

//<!--create Object  end-->
//###############################################################################################################################


//###############################################################################################################################
//�����飬���������е�Form
//�����飬���������е�Form
var Data=new Array();

//###############################################################################################################################

//�����Ǹ��������ֵ
//�����Ǹ��������ֵ

Data[0]=new SForm("form_Default","Get","http://www.baidu.com/s?wd=","false");
Data[Data.length++]=new SForm("form_BaiDu","Get","http://www.baidu.com/s?wd=","�ٶ�","web","false");
Data[Data.length++]=new SForm("form_Google","Get","http://www.google.com/search?hl=zh-CN&lr=&nxpt=20.84041075867943669289&q=","Google","web","false");
Data[Data.length++]=new SForm("form_Yahoo","Get","http://search.cn.yahoo.com/search?p=","Yahoo","web","false");
Data[Data.length++]=new SForm("form_CSDN","Get","http://search.csdn.net/search/","CSDN","web","false");
Data[Data.length++]=new SForm("form_SoSo","Get","http://www.soso.com/q?w=","SoSo","web","false");
Data[Data.length++]=new SForm("form_iAsk","Get","http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?key=","iAsk","web","false");
Data[Data.length++]=new SForm("form_Tom","Get","http://search.tom.com/search.php?word=","Tom","web","false");
Data[Data.length++]=new SForm("form_SoGou","Get","http://www.sogou.com/web?query=","SoGou","web","false");
Data[Data.length++]=new SForm("form_Zpoo_comic","Get","http://www.zpoo.com/comic/search.php?search=","Zpoo����","dongman","false");
Data[Data.length++]=new SForm("form_TanLan","Get","http://s2.greedland.net/s152.g?k=","̰������","dongman","false");
Data[Data.length++]=new SForm("form_DongManXianFeng","Get","http://www.go2cartoon.com/index.php?p=donghua_search&search2=1&search3=","�����ȷ�","dongman","false");
Data[Data.length++]=new SForm("form_MeiRiDongMan","Get","http://www.aicomic.com/index/indexso.asp?zdtype=titletext&&dirs=cvod&Send=%CB%D1%CB%F7Keyword=","ÿ�ն���","dongman","false");
Data[Data.length++]=new SForm("form_TianShangRenJian","Get","http://www.52tian.com/search.asp?x=14&y=11&typeid=Ƭ��&keyword=","�����˼�","dongman","false");
Data[Data.length++]=new SForm("form_MoonBoat","Get","http://www.ffsee.com/Default.asp?keyword=","������","dongman","false");
Data[Data.length++]=new SForm("form_XunLei","Get","http://so.xunlei.com/search?search=","����-Ѹ��","download","false");
Data[Data.length++]=new SForm("form_verycd","Get","http://find.verycd.com/folders/","VeryCD","download","false");
Data[Data.length++]=new SForm("form_bt_china","Get","http://search.btchina.net/btsearch.php?query=","BT@China","download","false");
Data[Data.length++]=new SForm("form_bt_fkee","Get","http://bt.fkee.com/search.aspx?q=","�ɿ�BT","download","false");
Data[Data.length++]=new SForm("form_btsou","Get","http://www.btsou.com/search.asp?Keyword=","BT ��","download","false");
Data[Data.length++]=new SForm("form_Vagaa","Get","http://hot.yikuai.com/search.php?stype=3&keyword=","Vagaa","download","false");
Data[Data.length++]=new SForm("form_IceFish","Get","http://bt.icefish.org/search.php?keywords=","�������ս�Ŀ","download","false");
//Data[Data.length++]=new SForm("form_Youtube","Get","http://www.youtube.com/results?search_query=","YouTube��Ƶ","video","true");
Data[Data.length++]=new SForm("form_Sina_BoKe","Get","http://search.v.blog.sina.com.cn/s?key=","���˲���","video","false");
Data[Data.length++]=new SForm("form_TuDou","Get","http://www.tudou.com/search/programs?kw=","������","video","false");
Data[Data.length++]=new SForm("form_WoLe","Get","http://www.56.com/so/search.php?key=","56.com","video","false");
Data[Data.length++]=new SForm("form_OpenV","Get","http://www.openv.tv/ls.jsp?q=","OpenV","video","true");
Data[Data.length++]=new SForm("form_TaoBao","Get","http://list.taobao.com/browse/search_auction.htm?q=","�Ա���","buy","false");
Data[Data.length++]=new SForm("form_DangDang","Get","http://search.dangdang.com/search.aspx?key=","������","buy","false");
Data[Data.length++]=new SForm("form_Alibaba","Get","http://search.china.alibaba.com/search/offer_search.htm?tracelog=search_sale&keywords=","����Ͱ�","buy","false");
//Data[Data.length++]=new SForm("form_XiaoBo_music","Get","SongList.htm?key=","С�����","music","false");
Data[Data.length++]=new SForm("form_baidu_music","Get","http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&lm=-1&word=","�ٶ�MP3","music","false");
Data[Data.length++]=new SForm("form_yahoo_music","Get","http://music.yahoo.com.cn/search?p=","Yahoo����","music","false");
Data[Data.length++]=new SForm("form_SouGou_Music","Get","http://d.sogou.com/music.so?query=","�ѹ�Music","music","false");
Data[Data.length++]=new SForm("form_kugoo","Get","http://search.kugoo.com/search.aspx?keyword=","Kugoo����","music","false");
Data[Data.length++]=new SForm("form_SoSo_Music","Get","http://music.soso.com/q?w=","SoSo����","music","false");
Data[Data.length++]=new SForm("form_Haoting","Get","http://www1.haoting.com/user/search.asp?stype=Music&keyword=","��������","music","false");
Data[Data.length++]=new SForm("form_163_Picture","Get","http://photo.163.com/search.php?k=","�������","picture","false");
Data[Data.length++]=new SForm("form_Zpoo_163","Get","http://163.zpoo.com/syphoto.php?user=","zpoo.����","picture","false");
Data[Data.length++]=new SForm("form_yahoo_photos","Get","http://gallery.photos.cn.yahoo.com/site/search_result.php?keyword=","�Ż����","picture","false");
Data[Data.length++]=new SForm("form_baidu_picture","Get","http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=","�ٶ�","picture","false");
Data[Data.length++]=new SForm("form_Google_picture","Get","http://images.google.com/images?hl=zh-CN&q=","Google","picture","false");
Data[Data.length++]=new SForm("form_yahoo_picture","Get","http://image.cn.yahoo.com/search?p=","Yahoo","picture","false");
Data[Data.length++]=new SForm("form_SoSo_picture","Get","http://image.soso.com/image.cgi?sc=img&ch=w.soso&w=","SoSo","picture","false");
Data[Data.length++]=new SForm("form_iask_picture","Get","http://p.iask.com/p?k=","iAsk","picture","false");
Data[Data.length++]=new SForm("form_sogou_picture","Get","http://pic.sogou.com/pics?query=","SoGou","picture","false");
Data[Data.length++]=new SForm("form_tom_picture","Get","http://search.tom.com/searchpic.php?tomsearch=pic&word=ZZZZZ","Tom","picture","false");
Data[Data.length++]=new SForm("form_5show","Get","http://www.5show.com/m.aspx?cn=SearchResultPage&Key=","5Show����","dongman","false");
Data[Data.length++]=new SForm("form_Baidu_dictionary","Get","http://www.baidu.com/s?lm=0&si=&rn=10&ie=gb2312&ct=1048576&tn=baidu&wd=","�ٶȴʵ�","other","false");
Data[Data.length++]=new SForm("form_sina_blog","Get","http://search.blog.sina.com.cn/blog/search?tag=&t=keyword&q=","���˲���","other","false");
Data[Data.length++]=new SForm("form_OnlineDown","Get","http://search.newhua.com/search.asp?Keyword=","�������԰","download","false");
Data[Data.length++]=new SForm("form_ZOL","Get","http://download.zol.com.cn/list.php?channelid=&cateid=&keyword=","�йش�����","download","false");
Data[Data.length++]=new SForm("form_TaiPing","Get","http://ks.pconline.com.cn/index.jsp?q=","̫ƽ�����","download","false");
//Data[Data.length++]=new SForm("form_TaiPing2","Get","http://ks.pcgames.com.cn/games_index.jsp?q=","̫ƽ����Ϸ��","web","false");
Data[Data.length++]=new SForm("form_Crsky","Get","http://search.crsky.com/search.asp?sType=ResName&action=s&imageField.x=32&imageField.y=14&keyword=","�������վ","download","false");
Data[Data.length++]=new SForm("form_SkyCn","Get","http://www.skycn.com/search.php?sor=00&ss_name=","������վ","download","false");
Data[Data.length++]=new SForm("form_Sina_download","Get","http://php.tech.sina.com.cn/download/d_search.php?f_name=","��������","download","false");
Data[Data.length++]=new SForm("form_OneGreen","Get","http://www.onegreen.net/Soft_Search.asp?Field=SoftName&ClassID=&keyword=","��ɫ���վ","download","false");
Data[Data.length++]=new SForm("form_MyDrivers","Get","http://so.mydrivers.com/drivers/","����֮��","download","false");
Data[Data.length++]=new SForm("form_BanMa","Get","http://cgi.banma.com/search.php?key=","�����������","download","false");
//Data[Data.length++]=new SForm("form_FixDown","Get","http://search1.fixdown.com/fixdown/query.asp?keyword=","ȫ��λ����","download","false");
Data[Data.length++]=new SForm("form_zgjm","Get","http://www.google.cn/custom?domains=www.zgjm.cn&sitesearch=www.zgjm.cn&sa=Google+%CB%D1%CB%F7&client=pub-6682950257574550&forid=1&ie=GB2312&oe=GB2312&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23336699%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A50%3BLW%3A137%3BL%3Ahttp%3A%2F%2Fzgjm.cn%2Fimagess%2Flogo.gif%3BS%3Ahttp%3A%2F%2Fwww.zgjm.cn%3BFORID%3A1&hl=zh-CN&q=","�ܹ�����","other","false");
Data[Data.length++]=new SForm("form_QiHu_forum","Get","http://so.bbs.qihoo.com/?kw=","�滢��̳����","other","false");
Data[Data.length++]=new SForm("form_QiHu","Get","http://so.bbs.qihoo.com/index.html?src=portal&kw=","�滢","web","false");
Data[Data.length++]=new SForm("form_Daqi","Get","http://search.daqi.com/cgi-bin/search?s_b=2&keyword=","��������","web","false");
Data[Data.length++]=new SForm("form_Taotop","Get","http://www.taotop.com/search?q2=","�Կ��� ��������","other","false");
Data[Data.length++]=new SForm("form_Deepdo","Get","http://www.deepdo.com/job?kw=","��� ��������","other","false");
Data[Data.length++]=new SForm("form_QiHu_zhaopin","Get","http://zhaopin.qihoo.com/result.php?src=portal&kw=","�滢��Ƹ����","other","false");
Data[Data.length++]=new SForm("form_Jobmet","Get","http://so.jobmet.com/index.php?city=����&kind=0&query=","ְ����ְλ����","other","false");
Data[Data.length++]=new SForm("form_01hr","Get","http://so.01hr.com/so/result.jsp?datenum=30&a=����&k=","ְͨ����ְλ����","other","false");
//Data[Data.length++]=new SForm("form_","Get","http://china.recruit.net/search-ZZZZZZZ_in_BBBBBBBBB-jobs","","","false");
Data[Data.length++]=new SForm("form_BT_IT","Get","http://bt.it.com.cn/search.asp?key=","BT ȫ����","download","false");
Data[Data.length++]=new SForm("form_btseeker","Get","http://www.btseeker.com/search.aspx?Key=","BT������","download","false");
Data[Data.length++]=new SForm("form_souyo_game","Get","http://game.souyo.com/exec/search?k=","��ϷBT�ع�","download","false");
Data[Data.length++]=new SForm("form_Tianwang","Get","http://www.tianwang.com/cgi-bin/tw?range=0&cd=03&word=","���� ��Դ","download","false");
Data[Data.length++]=new SForm("form_kuaiche","Get","http://se.kuaiche.com/search?k=","�쳵 ȫ����Դ","download","false");
Data[Data.length++]=new SForm("form_edugo","Get","http://www.edugo.cn/Search.asp?SearchKey=","EDUGO ������Դ","download","false");
Data[Data.length++]=new SForm("form_Google_us_gov","Get","http://www.google.cn/search?complete=1&site=unclesam&restrict=unclesam&hl=zh-CN&newwindow=1&output=unclesam&q=","Google������������","other","false");
Data[Data.length++]=new SForm("form_gov_sousuo","Get","http://sousuo.gov.cn/topsortsearch?channelid=3002&&keyword=","����������վ����","other","true");
Data[Data.length++]=new SForm("form_youku","Get","http://www.youku.com/search_video/q_","�ſ�","video","false");
//Data[Data.length++]=new SForm("form_6rooms","Get","http://www.6rooms.com/search.php?t=v&k=","���䷿","video","false");
Data[Data.length++]=new SForm("form_5show","Get","http://www.5show.com/m.aspx?cn=SearchResultPage&Key=","������","video","false");
Data[Data.length++]=new SForm("form_ku6","Get","http://so.ku6.com/?by=&key=","��6��","video","false");
Data[Data.length++]=new SForm("form_yellowpage","Get","http://search.yellowpage.com.cn/queryAction.do?a=B000000CB-ȫ����&queryKey=","�й���ҳ","other","false");
Data[Data.length++]=new SForm("form_antso","Get","http://www.antso.com/search.asp?keyword=","���Ѿ�ѡ��ַ����","other","false");
Data[Data.length++]=new SForm("form_eceel_china","Get","http://china.eceel.com/business/search?type=SellLeads&keywords=","����ȫ����ҵ��������","other","false");
Data[Data.length++]=new SForm("form_bseek","Get","http://www.bseek.cn/sellsearch.htm?userin=yes&keyword=","���� ��ҵ����","other","false");
Data[Data.length++]=new SForm("form_shangsou","Get","http://search.shangsou.com/corp.shtml?tb=1&pn=0&q=","���� ��ҵ����","other","false");
Data[Data.length++]=new SForm("form_chinacoms","Get","http://www.chinacoms.com/service/allsearch.asp?type=buy&t1=","�л���ҵ��Ϣ��","other","false");
Data[Data.length++]=new SForm("form_nisou","Get","http://www.nisou.net/search.asp?keyword=","���� ��ҵ��Ʒ��վ����","other","false");
Data[Data.length++]=new SForm("form_macd","Get","http://search.macd.cn/search?dir=macd&start=0&num=10&index=FullIndex&outputFormat=HTML&encoding=GB2312&orderStyle=DocID&q=","MACD ������������","other","false");
Data[Data.length++]=new SForm("form_boloo","Get","http://www.boloo.com.cn/seek.asp?key=","���� ��������","music","false");
Data[Data.length++]=new SForm("form_97315","Get","http://www.97315.com/search.cx?w=","���Ӱ��","video","false");
Data[Data.length++]=new SForm("form_tvsou","Get","http://search.tvsou.com/q.aspx?type=0K&eyWords=","����","video","false");
Data[Data.length++]=new SForm("form_medaim","Get","http://www.medaim.com/search.asp?mode=allwords&search=","Medaim ҽҩ��ҵ����","other","false");
Data[Data.length++]=new SForm("form_59120","Get","http://www.59120.com/search.asp?keyword=","�н��� ҽ����Ϣ","other","false");
Data[Data.length++]=new SForm("form_qseek","Get","http://www.qseek.net/law/search.php?keyword=","�й���������","other","false");
Data[Data.length++]=new SForm("form_mylaw","Get","http://www.mylaw.com/result.jsp?query=","MyLaw��������","other","false");
Data[Data.length++]=new SForm("form_ustc_FTPsearch","Get","http://search.ustc.edu.cn/ftpsearch.cgi?cmd=ftpsearch&q=","�пƴ� Ftp����","download","false");
Data[Data.length++]=new SForm("form_codechina","Get","http://www.codechina.com/srch/cc.do?KeyWord=","�й�������Դ","download","false");
Data[Data.length++]=new SForm("form_xiaonux_bible","Get","http://bible.xiaonux.com/lockey.php?key=","С�ֱ�ʥ������","other","false");
Data[Data.length++]=new SForm("form_mapbar","Get","http://service.mapbar.com/localsearch/result.jsp?City=%C8%AB%B9%FA&query=","ͼ�ɵ�ͼ����","other","false");


//Data[Data.length++]=new SForm("form_","Get","","","","false");
//Data[Data.length++]=new SForm("form_","Get","","�ٶ�","web","false");
//###############################################################################################################################
//��ز�������
//###############################################################################################################################

/*
	��ʽ
	//Data[Data.length++]=new SForm("form_BaiDu","Get","www.baidu.com/s=xxxx","�ٶ�","web","false");
	// [0]��fname������ [1]��Method�ύ���� [2]�Ǳ��ֵ [3]����ʾ���������� [4]�ǹ�������  [5]�Ǳ���keyName(for Post only) [6]�ǹؼ����Ƿ���Ҫ����url����  ]
*/

	//����ʾ��վ�Ĳ�lrSelect���ж�Ӧ�����
	function getLrSelect(wType){
		var arrForms=getWPForms(wType);
		var inner="";//��¼page.innerHtml;cao,��д="" �ͻ����undifined��̫ȱ�ˣ����ҿ��ң�
		
		for(var i=0;i<arrForms.length;i++) 
			inner+="<a href='#' onClick=\"setParam('"+ arrForms[i].url +"','"+ arrForms[i].name +"','"+arrForms[i].title+"');\">"+ arrForms[i].title +"</a><br>";
		setLrSelectDisplay(inner);
		$("lrSLWP").style.display="";
	}
	function setLrSelectDisplay(inner){$("lrSelect").innerHTML=inner;}
	
	//������ѡ����������Ӧ����վs�Ķ���
	function getWPForms(wType){
		var arrForms=new Array();
		for(var i=1;i<Data.length;i++) 
			if(Data[i].type==wType) arrForms[arrForms.length++]=Data[i];
		
		return arrForms;
	}

	//
	function changeColor(i){
		for(jj=1;jj<9;jj++){//��ȫ�������ͨ��ʽ
			document.getElementById(jj).className="Normal";
			//document.getElementById(jj).style.background="white";
		}
		//�ٵ�һ�ľ����һ��
		
		document.getElementById(i).className="Change";
		//document.getElementById(i).style.background="red";
	}
	//�����������������������ͺ�������������
	function setParam(type,fname,title){
		$("form_Total").type.value=type;
		$("form_Total").fname.value=fname;
		$("form_Total").wpname.value=title;
		$("form_Total").key.focus();
	}
	
	//----Start----����Get/Post�����ύ��������----
	//*******ע�⣺Data���飬����������ô�js�ļ���Ҷ�����Ϊ�һ����Ǹ�Ҷ������Data.js�ļ�*******
	
	//�ۺ�����ת�Ӵ�
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
	
	//ר�Ŵ���Post�����ύ��������
	//*****************************�˺�����ʱ�����⣬�Ժ���!!!!!!!!!!!!!!!!!!!!!!!!!*****************************
	function goSearchPost(form){
		/*��û����÷���*/
	}
//----End----����Get/Post�����ύ��������----



//----Start----��Data�����в����ƶ����Ƶ����飬������----
	function getForm(fname){
		for(j=1;j<Data.length;j++){
			//window.status="�ж�λ����"+j;//���ѭ���жϵ�λ��
			if(Data[j].name==fname){//[0]�Ƕ�Ӧ�ı�������
				return Data[j];//�ҵ��ˣ��Ͱѱ�����
			}
		}
		//�����鵽û�д˱������Զ���������ҳ
		//this.location.href="SearchFace.htm";
		//���û�У���Ĭ��վ������
		return Data[0];
	}
//----End----��Data�����в����ƶ����Ƶ����飬������----



//----Start----վ����������----�Լ���������������-------
function searchMusicHere(words){
	if(words=="") window.open("SongsForSearch.htm");
	var arrSongsNum=new Array();//��¼�������������ı��
	var arrWords=words.split(" ").sort();//�ָ�������
	var isIt;
	for(var i=0;i<Songs.length;i++){
		isIt=true;
		for(j=0;j<arrWords.length;j++)//���ʵ���˶�ؼ��ֲ�ѯ
			if(Songs[i].toString().toLowerCase().indexOf(arrWords[j].toString().toLowerCase())<0)//ͳһ��ΪСдͳһ�Ƚ�
				isIt=false;//ֻҪ��һ�������ϣ����϶�Ϊ����
		if(isIt==true) arrSongsNum[arrSongsNum.length++]=i;
	}
	if(arrSongsNum.length==0){alert("�����û���׸�����������ؼ������԰ɣ�");return false;}
	else{
		var xx=arrSongsNum[0];for(var i=1;i<arrSongsNum.length;i++)	xx+="*"+arrSongsNum[i];
		window.open("SongsForSearch.htm?arrSongsNum="+xx);
	}
}


//----End----վ����������---
	
	
	/*
	//��ʾ�Ѿ�ѡ���˵�������������,����������Ч��
	function showWP(id){
		$(id).style.pixelLeft=event.clientX 
		$(id).style.pixelTop=event.clientY 
		$(id).style.display="none"?"":"none";
		$(id).innerHTML=document.form_Total.fname.value;
	}
	*/