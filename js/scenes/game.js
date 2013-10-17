Crafty.scene("game", function() {

console.log("game - init");

GAME_OVER = false;
SCORE = 0;
BEST_SCORE = -1;

FB.getLoginStatus(function(response) {
	if (response.status === 'connected') {
		getScoreOnFacebook();
	} else {
		BEST_SCORE = 0;
	}
});
		
var background = Crafty.e("2D, Canvas, Image").attr({w: WIDTH, h: HEIGHT}).image(IMAGES_PATH + "background.png");

var entity = Crafty.e("Player, 2D, Canvas, Multiway, Image").
attr({x: 10, y: ((HEIGHT - SIZE) * 0.5), w: SIZE, h: SIZE}).
multiway(SPEED, {
	LEFT_ARROW: 180,
	RIGHT_ARROW: 0,
	UP_ARROW: -90,
	DOWN_ARROW: 90,
	Z: -90,
	S: 90,
	Q: 180,
	D: 0
}).
image(IMAGES_PATH + "ladybug.png");

entity.bind("EnterFrame", function(_frame) {
	if (this.x < 0) {
		this.x = 0;
	}
	if (this.x + SIZE > WIDTH) {
		this.x = WIDTH - SIZE;
	}
	if (this.y < 0) {
		this.y = 0;
	}
	if (this.y + SIZE > HEIGHT) {
		this.y = HEIGHT - SIZE;
	}
});

Crafty.e("2D, Summon").summon(5);

var score = Crafty.e("Score, 2D, DOM, Text").attr({x: 590, y: 0, w: 100, h: 50, score: 0});
score.bind("EnterFrame", function(_frame) {
	if (GAME_OVER == false) {
		this.score = this.score + 0.05 * _frame.dt;
		Crafty("Score").each(function() {
			this.text("Score : " + this.score);
		});
	}
});

Crafty.e("2D, DOM, FPS, Text").
	attr({x:10, y: 10, w: 100, h: 50}).
	bind("MessureFPS", function(fps) { 
		this.text("FPS "+fps.value); //Display Current FPS
	});
});
