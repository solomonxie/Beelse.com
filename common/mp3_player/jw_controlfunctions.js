// some variables to save
	var currentPosition;
	var currentVolume;
	var currentItem;

	// these functions are caught by the JavascriptView object of the player.
	function sendEvent(typ,prm) { thisMovie("player_id").sendEvent(typ,prm); };
	function getUpdate(typ,pr1,pr2,pid) {
		if(typ == "time") { currentPosition = pr1; }
		else if(typ == "volume") { currentVolume = pr1; }
		else if(typ == "item") { currentItem = pr1; setTimeout("getItemData(currentItem)",100); }
		var id = document.getElementById(typ);
		id.innerHTML = typ+ ": "+Math.round(pr1);
		pr2 == undefined ? null: id.innerHTML += ", "+Math.round(pr2);
		if(pid != "null") {
			$("pid").innerHTML = "(received from the player with id <i>"+pid+"</i>)";
		}
	};

	// These functions are caught by the feeder object of the player.
	function loadFile(obj) { thisMovie("player_id").loadFile(obj); };
	function addItem(obj,idx) { thisMovie("player_id").addItem(obj,idx); }
	function removeItem(idx) { thisMovie("player_id").removeItem(idx); }
	function getItemData(idx) {
		var obj = thisMovie("player_id").itemData(idx);
		var nodes = "";
		for(var i in obj) { 
			nodes += "<li>"+i+": "+obj[i]+"</li>"; 
		}
		$("data").innerHTML = nodes;
	};

	// This is a javascript handler for the player and is always needed.
	function thisMovie(movieName) {
	    if(navigator.appName.indexOf("Microsoft") != -1) {
			return window[movieName];
		} else {
			return document[movieName];
		}
	};