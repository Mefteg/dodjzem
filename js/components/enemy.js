Crafty.c("Enemy", {
	size: 20,
	offset: 0,
	speed: -0.2,
	player: null,
	
	init: function(){
		this.requires('2D, Canvas, Image');
		this.attr({h: (this.size + this.offset), w: (this.size + this.offset)});
		this.initPosition();
		this.image(IMAGES_PATH + "bee.png");
		
		this.bind("EnterFrame", function(_frame) {
			if (GAME_OVER == false) {
				
				
				if (this.collideWith(this.player) == true) {
					console.log("GAME OVER");
					GAME_OVER = true;
					SCORE = Crafty("Score").score;
					Crafty.scene("end");
				} else {
					if (this.x < (this.size * -1)) {
						this.initPosition();
					} else {
						this.x += this.speed * _frame.dt;
					}
				}
			}
		});
	},
	
	initPosition: function() {
		this.x = Crafty.math.randomInt(WIDTH + this.size, WIDTH * 1.5);
		this.y = Crafty.math.randomInt(0, HEIGHT - this.size);
	},
	
	collideWith: /*boolean*/ function(/*Entity*/ _entity) {
		var collide = false;
		var e = _entity;
		
		if (
		(e.x < this.x  && this.x < (e.x + e.w)) ||
		(e.x < (this.x + this.w) && (this.x + this.w) < (e.x + e.w))
		) {
			if (
			(e.y < this.y && this.y < (e.y + e.h)) ||
			(e.y < (this.y + this.h) && (this.y + this.h) < (e.y + e.h))
			) {
				collide = true;
			}
		}
		
		return collide;
	},
	
	setPlayer: function(/*Entity*/ _player) {
		this.player = _player;
	}
});
