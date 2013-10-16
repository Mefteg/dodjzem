window.fbAsyncInit = function() {
	// init the FB JS SDK
	FB.init({
		appId: '650860564944811',                        // App ID from the app dashboard
	status: true,                                 // Check Facebook Login status
	channelUrl: '//localhost:8888/cor_www/dodjzem/channel.html', // Channel file for x-domain comms
		xfbml: true                                  // Look for social plugins on the page
	});

	console.log("FB - init");	
};

// Load the SDK asynchronously
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
