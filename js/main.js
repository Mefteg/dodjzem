function init() {
	var WIDTH = 690;
	var HEIGHT = 360;
	var GAME_OVER = false;
	var SIZE = 20;

	Crafty.init(WIDTH, HEIGHT);
	Crafty.background('rgb(127,127,127)');

	// YOUR GAME CODE
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
	color("rgb(255, 0, 255)").
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

	var summon = Crafty.c("Summon", {
		mCpt: 0,

	    init: function() {
		    this.bind("EnterFrame", function() {
			this.mCpt += 1;
			if (this.mCpt >= 100) {
				console.log("NEW ENEMY");
				this.createEnemy();
				this.mCpt = 0;
			}
		    });
	    },

	    summon: function(_nbEnemiesAtStart) {
	    },

	    createEnemy: function() {
		    var e = Crafty.e("2D, Canvas, RandomPosition, Color, Collision").color("rgb(255, 0, 0)").attr({w: SIZE, h: SIZE, dX: -5});
		    e.bind("EnterFrame", function() {
			    if (GAME_OVER == false) {
				    this.x += this.dX;

				    if (this.x < -SIZE) {
					    this.x = Crafty.math.randomInt(WIDTH + SIZE, WIDTH * 1.5);
					    this.y = Crafty.math.randomInt(0, HEIGHT - SIZE);
				    }
			    }
		    });
		    e.onHit("Paddle", function() {
			    if (GAME_OVER == false) {
				    console.log("GAME OVER");
				    GAME_OVER = true;
			    }
		    });
	    }
	});
	var manager = Crafty.e("Summon").summon(10);

	for (var i=0; i<5; i++) {
		var e = Crafty.e("2D, Canvas, RandomPosition, Color, Collision").color("rgb(255, 0, 0)").attr({w: SIZE, h: SIZE, dX: -5});
		e.bind("EnterFrame", function() {
			if (GAME_OVER == false) {
				this.x += this.dX;

				if (this.x < -SIZE) {
					this.x = Crafty.math.randomInt(WIDTH + SIZE, WIDTH * 1.5);
					this.y = Crafty.math.randomInt(0, HEIGHT - SIZE);
				}
			}
		});
		e.onHit("Paddle", function() {
			if (GAME_OVER == false) {
				console.log("GAME OVER");
				GAME_OVER = true;
			}
		});
	}

	var score = Crafty.e("Score, 2D, Canvas, Text").attr({x: 590, y: 0, w: 100, h: 50, score: 0});
	score.bind("EnterFrame", function() {
		if (GAME_OVER == false) {
			this.score = this.score + 1;
			Crafty("Score").each(function() {
				this.text("Score : " + this.score);
			});
		}
	});

	Crafty.e("2D,DOM,FPS,Text").
		attr({maxValues:10}).
		bind("MessureFPS",function(fps){ 
			this.text("FPS"+fps.value); //Display Current FPS
		});
}

init();
