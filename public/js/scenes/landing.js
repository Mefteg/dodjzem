Crafty.scene("landing", function() {

	var background = Crafty.e("2D, Canvas, Image").attr({w: WIDTH, h: HEIGHT}).image(IMAGES_PATH + "background.png");

	var play = Crafty.e("Button").attr({x: 100, y: 200, w: 490, h: 75}).
		text("Play").
		css({"text-align": "center"});
	play.onClick = function(_mouseEvent) {
		Crafty.scene("game");
	};

	
});
