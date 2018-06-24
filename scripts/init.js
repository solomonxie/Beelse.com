
Event.observe(
	lk_mp3,
	'click',
	function(){
		$('lr_list').innerHTML="";
		$('scp_main').src="mp3_scp.asp";
	},
	false
);


Event.observe(
	lk_video,
	'click',
	function(){
		$('lr_list').innerHTML="";
		$('scp_main').src="video_scp.asp";
	},
	false
);


