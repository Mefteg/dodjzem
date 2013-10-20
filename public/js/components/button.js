Crafty.c("Button", {
	init: function(){
		this.requires('DOM, Mouse, Hoverable');
		this.css({
			"border": "solid thin black",
			"line-height": "1.0"
		});
		this.attr({h: 20, w: 60});
		
		this.bind("Click", function(_mouseEvent) {
			this.onClick(_mouseEvent);
		});
	},

	onClick: function(_mouseEvent) {
	}
});
