var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

var timeNow;
var bullet;
var player1;
var player2;
var platforms;
var atms;
var cursors;
var Akey;
var Wkey;
var Skey;
var Dkey;
var balance = 0;
var newBalance = 0;
var balanceText;
var prevShot = 0;
var Rkey;
var Mkey;
var p1Count = 0;
var p2Count = 0;

//Timer
var timer;
var timeLeft = 32;
var timerText = 0;

function deposit(player1)
{
	if (prevShot+.5 < this.game.time.totalElapsedSeconds())
	{
	newBalance = balance + 100;
	balance = newBalance;
	balanceText.setText('Balance: $' + balance);
	p1Count++;
	prevShot = this.game.time.totalElapsedSeconds();
	}
		
}

function withdraw(player2)
{
	if (prevShot+.5 < this.game.time.totalElapsedSeconds())
	{
	newBalance = balance - 100;
	balance = newBalance;
	balanceText.setText('Balance: $' + balance);
	p2Count++;
	prevShot = this.game.time.totalElapsedSeconds();
	}
	
}

function killPlayer1(player1, bullet)
{
	//play kill animation
	if (player2.x < player1.x)
	{
		//player1.animations.play('dieRight');
	}
	if (player2.x > player1.x)
	{
		//player1.animations.play('dieLeft');
	}

	try{
		bullet.kill();
		player1.kill();
	}
	catch (err)
	{
		
	}
	
	
	//respawn player
	player1 = game.add.sprite(32, 0, 'businessmoney');
	 game.physics.arcade.enable(player1);
	 player1.body.bounce.y = 0.2;
    player1.body.gravity.y = 400;
    player1.body.collideWorldBounds = true;
}

	
	   
	
	  
	  
function killPlayer2(player2, bullet)
{
	//play kill animation
	if (player1.x < player2.x)
	{
	//	player2.animations.play('dieRight');
	}
	if (player1.x > player2.x)
	{
	//	player2.animations.play('dieLeft');
	}
	try {
		bullet.kill();
		player2.kill();
	}
	catch (err)
	{
		
	}
	//respawn player
	player2 = game.add.sprite(650, 0, 'businessmoney');
	game.physics.arcade.enable(player2);
	player2.body.bounce.y = 0.2;
    player2.body.gravity.y = 400;
    player2.body.collideWorldBounds = true;
}
function p1ShootLeft()
{
	player1.animations.play('shootLeft');
	bullet = game.add.sprite(player1.x, player1.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.body.velocity.x = -400;
	game.physics.arcade.collide(bullet, player2);
}

function p1ShootRight()
{
	player1.animations.play('shootRight');
	bullet = game.add.sprite(player1.x+30, player1.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.body.velocity.x = 400;
	game.physics.arcade.collide(bullet, player2);
}

function p2ShootLeft()
{
	player2.animations.play('shootLeft');
	bullet = game.add.sprite(player2.x, player1.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.body.velocity.x = -400;
	game.physics.arcade.collide(bullet, player1);
}

function p2ShootRight()
{
	player1.animations.play('shootRight');
	bullet = game.add.sprite(player2.x + 30, player1.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.body.velocity.x = 400;
	game.physics.arcade.collide(bullet, player1);
}


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('win', winState);

game.state.start('boot');