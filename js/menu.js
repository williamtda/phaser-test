var menuState = {
	
	create : function(){
		
		var backg = game.add.tileSprite(0, 0, 800, 600, 'menucover');
		
		//var nameLabel = game.add.text(80, 80, 'Multithreads',
		//{font: '50px Arial', fill: '#ffffff'});
		
		
		
		var startLabel = game.add.text(80, game.world.height - 75,
		'press the W key to play unsynchronized',
		{font: '25px Arial', fill: '#ffffff'});
		
		var startLabel = game.add.text(80, game.world.height - 35,
		'press the E key to play synchronized',
		{font: '25px Arial', fill: '#ffffff'});
		
		var Wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		var Ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
		
		Wkey.onDown.addOnce(this.startUnsync, this);
		Ekey.onDown.addOnce(this.startSync, this);
	},
	
	startUnsync : function() {
		game.state.start('play');
	},
	startSync : function() {
		game.state.start('play2');
	},
	};