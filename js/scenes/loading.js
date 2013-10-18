Crafty.scene("loading", function() {
	Crafty.load(IMAGES, function() {
		// load assets

		// and load the scene
		console.log("MAIN");
		Crafty.scene("landing");
	});

	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120}).
	text("Loading").
	css({"text-align": "center"});
});
