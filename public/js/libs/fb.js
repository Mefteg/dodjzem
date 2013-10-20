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

FB_DATA = {
	//scope: "email,user_about_me,user_birthday,user_games_activity,friends_games_activity,publish_actions"
	scope: "email,user_about_me,user_birthday,publish_actions"
	};

// Load the SDK asynchronously
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function getScoreOnFacebook() {
	FB.api("/me/scores", "get", function (_response) {
		if (!_response || _response.error) {
			 console.log("postScoreOnFacebook - Error occured");
			 console.log(_response);
			 BEST_SCORE = -1;
		} else {
			 BEST_SCORE = _response.data[0].score;
		}
	});
}

function postScoreOnFacebook(/*int*/ _score) {
	console.log("POST SCORE ON FACEBOOK : " + _score);
	FB.api("/me/scores", "post", { score: _score }, function (_response) {
		if (!_response || _response.error) {
			 console.log("postScoreOnFacebook - Error occured");
			 console.log(_response);
		} else {
			 console.log("postScoreOnFacebook - OK");
		}
	});
}
