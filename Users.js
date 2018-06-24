//##################################################################################
//纪录所有用户的用户名和密码
//##################################################################################


//###############################################################################################################################
//总数组，包括了所有的User/pwd
//总数组，包括了所有的User/pwd
//基本格式：Users[usersIndex]=new Array("","");usersIndex++;//Users[x][0]是name,Users[x][1]是password


var Users=new Array();

var usersIndex=0;//用作累积数，为了后面方便

Users[usersIndex]=new Array("xiaobo","xiaobo");usersIndex++;

Users[usersIndex]=new Array("hello","hello");usersIndex++;

//###############################################################################################################################
//相关操作函数
//###############################################################################################################################


//检查是否有此用户,密码是否正确
function checkUser(usname,uspwd){
	for(var i=0;i<Users.length;i++){
		if(Users[i][0]==usname && Users[i][1]==uspwd){
			return true;
		}
	}
	return false;
}

//----Start----登陆后的欢迎
function showWelcome(){
	var strCookie=document.cookie;
	var arrCookie=strCookie.split(";"); // 将多cookie切割为多个名/值对
	for(var i=0;i<arrCookie.length;i++){ // 遍历cookie数组，处理每个cookie对
		var arrKL=arrCookie[i].split("="); // 找到名称为userId的cookie，并返回它的值
		if(arrKL[0]=="usname"){
			document.write("<span class='style5'><font color='green'>这表示你已经登陆了，恭喜你"+ arrKL[1] +"</font></span>");
			//alert("欢迎你："+arrKL[1]);
			return;
		}
	}	
}

//----End----