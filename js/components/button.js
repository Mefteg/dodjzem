Crafty.c("Button", {
	init: function(){
		this.requires('DOM, 2D, Mouse, Hoverable');
		this.css({
			"border": "solid thin black"
		});
		this.attr({h: 20, w: 60});
		
		this.bind("Click", function(_mouseEvent) {
			this.onClick(_mouseEvent);
		});
	},

	onClick: function(_mouseEvent) {
	}
});
