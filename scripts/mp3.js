function showMp3List(){
	var inner="";
	for(var i=0;i<mp3s.length;i++){
		//inner+=mp3s[i].title+" - "+mp3s[i].url+" | "+mp3s[i].singer+" | "+mp3s[i].nch+" | "+mp3s[i].sch+"<hr>";
		/*inner+='<a href="'+mp3s[i].url+'" target="_blank">'+mp3s[i].title+" | "+mp3s[i].singer+'</a>';
		inner+=' | '+mp3s[i].tch+' | '+mp3s[i].sch+'<hr size="1">';*/
		/*inner+='<a href="javascript:loadFile({file:\''+mp3s[i].url+'\'});sendEvent(\'next\');"> '+mp3s[i].title+" | "+mp3s[i].singer+'</a>';
		inner+=' | '+mp3s[i].tch+' | '+mp3s[i].sch+'<hr size="1">';*/
		inner+="<a href=\"javascript:playMp3('"+mp3s[i].url+"','"+mp3s[i].title+"');\">"+mp3s[i].title+"</a><hr>";
	}
	$('lr_list').innerHTML="<a href=\"javascript:playMp3('../../media/Linkin Park-Numb.flv','Linkin Park-Numb');\">Linkin Park-Numb</a><hr>"+inner;
}

function playMp3(url,title){
	loadFile({file:url,title:title});
	sendEvent('next');
}