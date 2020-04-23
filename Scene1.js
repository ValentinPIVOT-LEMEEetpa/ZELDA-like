class Scene1 extends Phaser.Scene{
	constructor(){
		super('1');
	}

	init(data) {
		var cursors;
		var player;
		var text;
		var objet;
		data.position ;
	}

	preload(){
		
		this.load.image('background1', 'assets/map/1.png');

		this.load.image('home', 'assets/decors/MAISON1bleue.png');
		this.load.image('wood', 'assets/decors/poteau1.png');
		this.load.image('bush', 'assets/decors/green-bush.png');
		this.load.image('tree', 'assets/decors/arbres.png');
		this.load.image('bord', 'assets/bordure/LEFT&RIGHT.png');
		this.load.image('bord2', 'assets/bordure/TOP&BOT.png');
		//this.load.image('bord3', 'assets/bordure/');

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});
	}

 /*                          .
 *                          |\
 *                         _j    .___,
 *                        (_j    |---|
 *                              _|   |
 *                     .____.  (_j  _|
 *                     |.--.| .    (_J
 *                     |l__j|  .
 *                     |+ oo| .
 *                     l____j
 */

	create(){
		this.add.image(400, 300, 'background1');

		//this.add.image(255, 145, 'home');

		this.cursors = this.input.keyboard.createCursorKeys();

		this.objet = this.physics.add.staticGroup();
		this.objet.create(255,100,'home').setScale(2).refreshBody();
		this.objet.create(560,0,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,25,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,50,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,75,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,100,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,125,'wood').setScale(0.15).refreshBody();
		this.objet.create(360,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(380,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(400,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(420,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(440,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(460,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(480,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(500,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(520,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(540,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(560,150,'wood').setScale(0.15).refreshBody();
		this.objet.create(450,75,'bush').setScale(0.15).refreshBody();
		this.objet.create(175,225,'bush').setScale(0.05).refreshBody();
		this.objet.create(635,475,'tree').setScale(0.5).refreshBody();
		this.objet.create(100,350,'tree').setScale(0.5).refreshBody();
		//this.objet.create(799,300,'bord');

		this.next = this.physics.add.staticGroup();
		this.next.create(799,300,'bord');
		this.next2 = this.physics.add.staticGroup();
		this.next2.create(400,599,'bord2');
		/*this.next3 = this.physics.add.staticGroup();
		this.next3.create(400,599,'bord2');*/


		this.player = this.physics.add.sprite(255, 200,'left');
		this.position = 1;
		
		
		this.player.setCollideWorldBounds(true);

		this.physics.add.collider(this.player,this.objet);
		this.physics.add.collider(this.player,this.next,this.nextScene,null,this);
		this.physics.add.collider(this.player,this.next2,this.next2Scene,null,this);
		//this.physics.add.collider(this.player,this.next3,this.next3Scene,null,this);
		


		this.anims.create({
			key:'left',
			frames: this.anims.generateFrameNumbers('left', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'right',
			frames: this.anims.generateFrameNumbers('right', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'front',
			frames: this.anims.generateFrameNumbers('front', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key:'back',
			frames: this.anims.generateFrameNumbers('back', {start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:'stop',
			frames: [{key: 'front', frame:0}],
			frameRate: 20
		});

	}

	update(){

		/*this.debug = [];
    	this.pads = navigator.getGamepads();
    	//this.pads = this.input.gamepad.getAll();
	
    	for (this.i = 0; this.i < this.pads.length; this.i++){
    	    this.pad = this.pads[this.i];
	
    	    if (!this.pad)
    	    {
    	        continue;
    	    }
	
    	    //  Timestamp, index. ID
    	    this.debug.push(this.pad.id);
    	    this.debug.push('Index: ' + this.pad.index + ' Timestamp: ' + this.pad.timestamp);
	
    	    //  Buttons
	
    	    this.buttons = '';
	
    	    for (this.b = 0; this.b < this.pad.buttons.length; this.b++)
    	    {
    	        this.button = this.pad.buttons[this.b];
	
    	        this.buttons = this.buttons.concat('B' + this.button.index + ': ' + this.button.value + '  ');
    	        // buttons = buttons.concat('B' + b + ': ' + button.value + '  ');
	
    	        if (this.b === 8)
    	        {
    	            this.debug.push(this.buttons);
    	            this.buttons = '';
    	        }
    	    }
    	    
    	    this.debug.push(this.buttons);
	
    	    //  Axis
	
    	    this.axes = '';
	
    	    for (this.a = 0; this.a < this.pad.axes.length; this.a++)
    	    {
    	        this.axis = this.pad.axes[this.a];
	
    	        this.axes = this.axes.concat('A' + this.axis.index + ': ' + this.axis + '  ');
    	        // axes = axes.concat('A' + a + ': ' + axis + '  ');
	
    	        if (this.a === 1)
    	        {
    	            this.debug.push(this.axes);
    	            this.axes = '';
    	        }
    	    }
    	    
    	    this.debug.push(this.axes);
    	    this.debug.push('');
    	}
    	this.text.setText(this.debug);
	
		if(this.cursors.left.isDown){
			this.player.direction = 'left';
			this.player.anims.play('left', true);
			this.player.setVelocityX(-300);
		}else if(this.cursors.right.isDown){
			this.player.direction = 'right';	
			this.player.setVelocityX(300);
			this.player.anims.play('right', true);
		}
		else if(this.cursors.up.isDown){
			this.player.direction = 'up';
			this.player.setVelocityY(-300);
			this.player.anims.play('back', true);;
		}else if(this.cursors.down.isDown){
			this.player.direction = 'down';
			this.player.setVelocityY(300);
			this.player.anims.play('front', true);
		}
		else{
			this.player.anims.play('stop', true);
			this.player.setVelocityX(0);
			this.player.setVelocityY(0);*/
			if (this.input.gamepad.total === 0)
    		{
        		return;
    		}
	
    		var pad = this.input.gamepad.getPad(0);
	
    		if (pad.axes.length)
    		{
        		var axisH = pad.axes[0].getValue();
        		var axisV = pad.axes[1].getValue();
	
        		if(axisH < 0){
				this.player.direction = 'left';
				this.player.anims.play('left', true);
				this.player.setVelocityX(-300);
			}else if(axisH > 0){
				this.player.direction = 'right';	
				this.player.setVelocityX(300);
				this.player.anims.play('right', true);
			}
			else if(axisV < 0){
				this.player.direction = 'up';
				this.player.setVelocityY(-300);
				this.player.anims.play('back', true);;
			}else if(axisV > 0){
				this.player.direction = 'down';
				this.player.setVelocityY(300);
				this.player.anims.play('front', true);
			}
			else{
				this.player.anims.play('stop', true);
				this.player.setVelocityX(0);
				this.player.setVelocityY(0);
			}
    	}
	}

	nextScene(player, next){
		this.scene.start("2");
	}
	next2Scene(player, next2){
		this.scene.start("7");
	}
	/*next3Scene(player, next3){
		this.scene.start("");
	}*/

}