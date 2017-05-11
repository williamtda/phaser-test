var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

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
var balanceText;
var prevShot = 0;
var Rkey;
var Mkey;
var p1Count = 0;
var p2Count = 0;
var S = 1;
transactionCount = 0;

//Timer
var timer;
var timeLeft = 32;
var timerText = 0;




function endGame() {
	
	game.paused = true;
	var w = game.world.width;
	var h = game.world.height;

	// Then add the menu
	var menu = game.add.sprite(w/2, h/2, 'menu');
	menu.anchor.setTo(0.5, 0.5);
	
	var endMessage = "GAME OVER\n";
	if (p1Count > p2Count)
	{
		endMessage = endMessage + "Player 1 Wins!";
	}
	else if (p1Count < p2Count)
	{
		endMessage = endMessage + "Player 2 Wins!";
	}
	else{
		endMessage = endMessage + "Draw\nThe Balance is 0";
	}
	
	var endText = game.add.text(game.world.centerX, game.world.centerY, endMessage,{fill: '#fff' });
	endText.anchor.setTo(0.5,0.5);

	// And a label to illustrate which menu item was chosen. (This is not necessary)
	var choiceLabel = game.add.text(game.world.centerX, game.world.centerY + menu.height/2+30, 'Click here to restart', {fill: '#000000' });
	choiceLabel.anchor.setTo(0.5, 0.5);

	
	// Add a input listener that can help us return from being paused
    game.input.onDown.add(restart, self);
	function restart(event){
		location.reload();
	}
	
}



function render(){
	//TODO
	console.log('test');
}
//semaphore implementation
function wait(S)
{
	while (S <= 0);
	S--;
}

function signal(S)
{
	S++;
}

function p1ShootRight()
{

	bullet = game.add.sprite(player1.position.x+30, player1.position.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.enableBody = true;
	bullet.body.velocity.x = 400;
	//game.physics.arcade.overlap(bullet, player2);
}

function p2ShootLeft()
{

	bullet = game.add.sprite(player2.position.x, player2.position.y + 30, 'bullet');
	game.physics.arcade.enable(bullet);
	bullet.enableBody = true;
	bullet.body.velocity.x = -400;
	//game.physics.arcade.collide(bullet, player1);
}



game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('play2', playState2);
//game.state.add('win', winState);

game.state.start('boot');