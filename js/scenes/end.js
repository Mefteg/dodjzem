Crafty.scene("end", function() {

	var background = Crafty.e("2D, Canvas, Image").attr({w: WIDTH, h: HEIGHT}).image(IMAGES_PATH + "background.png");

	var score = Crafty.e("Button").attr({x: 100, y: 50, w: 490, h: 100}).
	text("Score: " + SCORE).
	css({"text-align": "center"});
	
	if (BEST_SCORE < SCORE) {
		score.text("Score : " + SCORE + "<br/>NICE JOB ! CLICK HERE TO POST YOUR SCORE ON FACEBOOK !");
		score.onClick = function(_mouseEvent) {
			console.log("Main - postScore");
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
					postScoreOnFacebook(SCORE);
				} else if (response.status === 'not_authorized') {
					FB.login(function(response) {
						if (response.status === 'connected') {
							postScoreOnFacebook(SCORE);
						}
					}, FB_DATA);
				} else {
					FB.login(function(response) {
						if (response.status === 'connected') {
							postScoreOnFacebook(SCORE);
						}
					}, FB_DATA);
				}
			});
		};
		score.grow = true;
		score.bind("EnterFrame", function(_frame) {
			if (this.grow == true) {
				if (this.w < 530) {
					this.w = this.w + (0.05 * _frame.dt);
					this.h = this.h + (0.05 * _frame.dt);
				} else {
					this.grow = false;
				}
			} else {
				if (this.w > 480) {
					this.w = this.w - (0.05 * _frame.dt);
					this.h = this.h - (0.05 * _frame.dt);
				} else {
					this.grow = true;
				}
			}
			
			this.x = (WIDTH - this.w) * 0.5;
			this.y = (HEIGHT - this.h - 120) * 0.5;
		});
	}

	var restart = Crafty.e("Button").attr({x: 100, y: 200, w: 490, h: 75}).
		text("Restart").
		css({"text-align": "center"});
	restart.onClick = function(_mouseEvent) {
		Crafty.scene("game");
	};

	
});
