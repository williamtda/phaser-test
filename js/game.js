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

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('win', winState);

game.state.start('boot');