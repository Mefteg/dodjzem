var WIDTH = 690;
var HEIGHT = 360;
var GAME_OVER = false;
var SCORE = 0;
var BEST_SCORE = 0;
var SIZE = 20;
var SPEED = 4;

var IMAGES_PATH = "assets/images/";

var IMAGES = [
IMAGES_PATH + "ladybug.png",
IMAGES_PATH + "bee_shadow.png",
IMAGES_PATH + "background.png",
];

window.onload = function() {
	Crafty.init(WIDTH, HEIGHT);
	Crafty.background('black');

	// YOUR GAME CODE
	Crafty.scene("loading");
};
