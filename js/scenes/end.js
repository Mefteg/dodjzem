Crafty.scene("end", function() {

	var background = Crafty.e("2D, Canvas, Image").attr({w: WIDTH, h: HEIGHT}).image(IMAGES_PATH + "background.png");

	var button = Crafty.e("Button").attr({x: 100, y: 100, w: 200}).
	text("Score: " + SCORE).
	css({"text-align": "center"});

	var button = Crafty.e("Button").attr({x: 100, y: 140}).
		text("Restart").
		css({"text-align": "center"});
	button.onClick = function(_mouseEvent) {
		Crafty.scene("game");
	};

	var postScore = Crafty.e("Button, Text").attr({x: 210, y: 140, w: 200}).
	text("Post your score - Facebook").
	css({"text-align": "center"});
	postScore.onClick = function(_mouseEvent) {
		console.log("Main - postScore");
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				postScoreOnFacebook(SCORE);
			} else if (response.status === 'not_authorized') {
				FB.login(function(response) {
					if (response.status === 'connected') {
						postScoreOnFacebook(SCORE);
					}
				});
			} else {
				FB.login(function(response) {
					if (response.status === 'connected') {
						postScoreOnFacebook(SCORE);
					}
				});
			}
		});
	};
});
