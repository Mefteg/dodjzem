Crafty.c("Enemy", {
	size: 30,
	offset: 0,
	speed: -0.2,
	physic: true,
	player: null,
	
	init: function(){
		this.requires('2D, Canvas, Image');
		this.attr({h: (this.size + this.offset), w: (this.size + this.offset)});
		this.initPosition();
		this.image(IMAGES_PATH + "bee_shadow.png");
		
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
						this.physic = true;
						this.rotation = 0;
					} else {
						this.x += this.speed * _frame.dt;
						if (this.physic == false) {
							this.rotation += this.speed * _frame.dt;
						}
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
		
		if (this.physic == true) {
			if (
					this.containPoint(this.x, this.y, (this.x + this.w), (this.y + this.h), e.x, e.y) ||
					this.containPoint(this.x, this.y, (this.x + this.w), (this.y + this.h), e.x + e.w, e.y + e.h))
			{
				// if the entity brush against it
				if (
					this.containPoint(this.x + 5, this.y + 5, (this.x + this.w) - 10, (this.y + this.h) - 10, e.x, e.y) ||
					this.containPoint(this.x + 5, this.y + 5, (this.x + this.w) - 10, (this.y + this.h) - 10, e.x + e.w, e.y + e.h))
				{
					collide = true;
				} else {
					this.physic = false;
					SCORE += 100;
				}
			}
		}
		
		return collide;
	},

	containPoint: /*boolean*/ function(/*float*/ _x0, /*float*/ _y0,
						  /*float*/ _x1, /*float*/ _y1, /*float*/ _xp, /*float*/ _yp) {
		var contain = false;

		if (_xp > _x0 && _xp < _x1) {
			if (_yp > _y0 && _yp < _y1) {
				contain = true;
			}
		}

		return contain;
	},
	
	setPlayer: function(/*Entity*/ _player) {
		this.player = _player;
	}
});
