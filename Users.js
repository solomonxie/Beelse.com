//##################################################################################
//��¼�����û����û���������
//##################################################################################


//###############################################################################################################################
//�����飬���������е�User/pwd
//�����飬���������е�User/pwd
//������ʽ��Users[usersIndex]=new Array("","");usersIndex++;//Users[x][0]��name,Users[x][1]��password


var Users=new Array();

var usersIndex=0;//�����ۻ�����Ϊ�˺��淽��

Users[usersIndex]=new Array("xiaobo","xiaobo");usersIndex++;

Users[usersIndex]=new Array("hello","hello");usersIndex++;

//###############################################################################################################################
//��ز�������
//###############################################################################################################################


//����Ƿ��д��û�,�����Ƿ���ȷ
function checkUser(usname,uspwd){
	for(var i=0;i<Users.length;i++){
		if(Users[i][0]==usname && Users[i][1]==uspwd){
			return true;
		}
	}
	return false;
}

//----Start----��½��Ļ�ӭ
function showWelcome(){
	var strCookie=document.cookie;
	var arrCookie=strCookie.split(";"); // ����cookie�и�Ϊ�����/ֵ��
	for(var i=0;i<arrCookie.length;i++){ // ����cookie���飬����ÿ��cookie��
		var arrKL=arrCookie[i].split("="); // �ҵ�����ΪuserId��cookie������������ֵ
		if(arrKL[0]=="usname"){
			document.write("<span class='style5'><font color='green'>���ʾ���Ѿ���½�ˣ���ϲ��"+ arrKL[1] +"</font></span>");
			//alert("��ӭ�㣺"+arrKL[1]);
			return;
		}
	}	
}

//----End----