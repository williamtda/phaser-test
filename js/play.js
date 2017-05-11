var playState = { 
create : function() {
	
	this.keyboard = game.input.keyboard;
	
	this.player = game.add.sprite(32, game.world.height - 150, 'businessmoney');
	
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	

	
},

update : function() {
//TODO	
},
};