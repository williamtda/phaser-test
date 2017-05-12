var loadState = {
	
	preload : function() {
		
		var loadingLabel = game.add.text(80, 150, 'loading...',
		{font: '30px Courier', fill: 'ffffff'});
		
		game.load.image('background', 'assets/back2.png');
    game.load.image('atm', 'assets/atm.png');
	game.load.image('bank','assets/bank.png');
	 game.load.spritesheet('thiefmoney', 'assets/thiefmoney.png', 50, 120, 5);
	 game.load.spritesheet('thief', 'assets/thief.png', 50, 120, 5);
	 game.load.spritesheet('business', 'assets/leftright.png', 30, 65, 7);
	 game.load.spritesheet('businessmoney', 'assets/moneyman.png', 30, 65, 7);
	 game.load.image('ground', 'assets/platform.png');
	// game.load.image('menu', 'assets/blackbox.png', 360, 200);
	  game.load.spritesheet('dieRight', 'assets/die_right.png', 32, 64);
	  game.load.spritesheet('dieLeft', 'assets/die_left.png', 32, 64);
	  game.load.spritesheet('shootLeft', 'assets/shoot_left.png', 32, 64);
	  game.load.spritesheet('shootRight', 'assets/shoot_right.png', 32, 64);
	game.load.image('bullet', 'assets/bullet.png');
	game.load.spritesheet('walkLeft', 'assets/walk_left.png', 32, 64);
	game.load.image('menu', 'assets/blackbox.png', 300, 180);
	game.load.image('menucover', 'assets/menucover.png');
	
	},
	
	create : function() {
		game.state.start('menu');
	},	
};