var gif = '';
var bk = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=MgTnHkUywbElTMCVRt24MH4FMQJJNzVG&q=hit button&limit=25&offset=0&rating=G&lang=en", false);
	xhr.send();
	var response = JSON.parse(xhr.response);
	console.log(response);
	gif = response.data[0].images.downsized_large.url;
	document.getElementById("bk-gif").src=gif;
	console.log(gif);
	console.log(xhr);
	alert("You just BKED");
}

document.getElementById("bkBtn").addEventListener("click", bk);