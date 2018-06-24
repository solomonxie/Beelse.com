function showMp3List(){
	var inner="";
	for(var i=0;i<mp3s.length;i++){
		//inner+=mp3s[i].title+" - "+mp3s[i].url+" | "+mp3s[i].singer+" | "+mp3s[i].nch+" | "+mp3s[i].sch+"<hr>";
		inner+='<a href="'+mp3s[i].url+'" target="_blank">'+mp3s[i].title+" | "+mp3s[i].singer+'</a>';
		inner+=' | '+mp3s[i].tch+' | '+mp3s[i].sch+'<hr size="1">';
	}
	$('lr_list').innerHTML=inner;
}