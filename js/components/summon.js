Crafty.c("Summon", {
	cpt: 0,

	init: function() {
		this.bind("EnterFrame", function(_frame) {
			if (GAME_OVER == false) {
				this.cpt += 0.05 * _frame.dt;
				if (this.cpt >= 100) {
					console.log("NEW ENEMY");
					this.createEnemy();
					this.cpt = 0;
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
		var e = Crafty.e("Enemy");
		var player = Crafty("Player");
		e.setPlayer(player);
	}
});
