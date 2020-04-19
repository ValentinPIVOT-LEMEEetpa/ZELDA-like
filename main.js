var config = {
	width: 800,
	height: 600,
	backgroundColor: 0x000000,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { 0: 0 },
            debug: true
        }
    },
	scene: [Scene1, Scene2, Scene3]
};

var game = new Phaser.Game(config);
