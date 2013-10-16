var WIDTH = 690;
var HEIGHT = 360;
var GAME_OVER = false;
var SCORE = 0;
var SIZE = 20;

function init() {
	Crafty.init(WIDTH, HEIGHT);
	Crafty.background('rgb(127,127,127)');

	// YOUR GAME CODE

	Crafty.scene("loading", function() {
		Crafty.load(["test.png"], function() {
			// load assets
			// and load the scene
			console.log("MAIN");
			Crafty.scene("main");
		});

		Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120}).
		text("Loading").
		css({"text-align": "center"});
	});

	Crafty.scene("end", function() {

		var button = Crafty.e("Button, Text").attr({x: 100, y: 100, w: 200}).
		text("Score: " + SCORE).
		css({"text-align": "center"});

		var button = Crafty.e("Button, Text").attr({x: 100, y: 140}).
		text("Restart").
		css({"text-align": "center"});
		button.onClick = function(_mouseEvent) {
			Crafty.scene("main");
		};
		
		var postScore = Crafty.e("Button, Text").attr({x: 210, y: 140, w: 200}).
		text("Post your score - Facebook").
		css({"text-align": "center"});
		postScore.onClick = function(_mouseEvent) {
			console.log("Main - postScore");
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
					console.log("CONNECTED");
				} else if (response.status === 'not_authorized') {
					FB.login(function(response) {
						//init();
					});
					console.log("NOT AUTHORIZED");
				} else {
					FB.login(function(response) {
						//init();
					});
					console.log("OTHER");
				}
			});
		};
	});

	Crafty.scene("main", function() {

		Crafty.c("RandomPosition", {
			init: function() {
				this.attr({x: Crafty.math.randomInt(WIDTH + SIZE, WIDTH * 1.5), y: Crafty.math.randomInt(0, HEIGHT - SIZE)});
			}
		});

		var entity = Crafty.e("Paddle, 2D, Canvas, Multiway, Color").
		multiway(4, {
			LEFT_ARROW: 180,
			RIGHT_ARROW: 0,
			UP_ARROW: -90,
			DOWN_ARROW: 90,
			Z: -90,
			S: 90,
			Q: 180,
			D: 0
		}).
	color("rgb(255, 255, 255)").
		attr({w: SIZE, h: SIZE});
	entity.bind("EnterFrame", function() {
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

	var manager = Crafty.e("2D, Summon").summon(10);

	var score = Crafty.e("Score, 2D, DOM, Text").attr({x: 590, y: 0, w: 100, h: 50, score: 0});
	score.bind("EnterFrame", function() {
		if (GAME_OVER == false) {
			this.score = this.score + 1;
			Crafty("Score").each(function() {
				this.text("Score : " + this.score);
			});
		}
	});

	Crafty.e("2D, DOM, FPS, Text").
		attr({maxValues:10}).
		bind("MessureFPS", function(fps) { 
			this.text("FPS"+fps.value); //Display Current FPS
		});
	});

	Crafty.scene("loading");
}

init();
