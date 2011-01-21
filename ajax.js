// JavaScript Document
function ajaxFunction(){
	var ajaxRequest;  // The variable that makes Ajax possible!
	var ajaxResponse = document.getElementById('topTen');
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			// Get the data from the server's response
			$('#topTen').html(ajaxRequest.responseText);
		}
	}
	ajaxRequest.open("GET", "scores.php", true);
	ajaxRequest.send(null);
	
}


