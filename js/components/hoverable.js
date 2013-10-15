Crafty.c("Hoverable", {
	_baseColor: 'gray',
	_hoverColor: 'lightgray',
	init: function() {
		this.requires('Color, Mouse, Text');
		this.color(this._baseColor);
		this.bind("MouseOver", function(e){
			this._baseColor = this.color();
			this.color(this._hoverColor);
		});
		this.bind("MouseOut", function(e){
			this.color(this._baseColor);
		});
	},
	hoverColor: function(newColor){
		this._hoverColor = newColor;
		return this;
	}
});
