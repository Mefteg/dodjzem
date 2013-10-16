Crafty.c("Summon", {
	mCpt: 0,

	init: function() {
		this.bind("EnterFrame", function() {
			if (GAME_OVER == false) {
				this.mCpt += 1;
				if (this.mCpt >= 100) {
					console.log("NEW ENEMY");
					this.createEnemy();
					this.mCpt = 0;
				}
			}
		});
	},

	summon: function(_nbEnemiesAtStart) {
		for (var i=0; i<_nbEnemiesAtStart; i++) {
			this.createEnemy();
		}
	},

	createEnemy: function() {
		var e = Crafty.e("2D, Canvas, RandomPosition, Image, Collision").
		attr({w: SIZE, h: SIZE, dX: (SPEED * -1)}).
		image(IMAGES_PATH + "bee.png");
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
				SCORE = Crafty("Score").score;
				Crafty.scene("end");
			}
		});
	}
});
