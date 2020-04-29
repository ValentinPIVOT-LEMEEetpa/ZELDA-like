class Scene11 extends Phaser.Scene{
	constructor(){
		super('11');
	}

	init(data) {
		var cursors;
		var player;
		var text;
		var objet;
	}

	preload(){
		
		this.load.image('background11', 'assets/map/11.png');

		this.load.image('bord31', 'assets/bordure/LEFT&RIGHT.png');
		this.load.image('bord32', 'assets/bordure/TOP&BOT.png');
		//this.load.image('bord33', 'assets/bordure/.png');

		this.load.image('slot-epee', 'assets/HUD/slot-epee.png');
		this.load.image('slot-arc', 'assets/HUD/slot-arc.png');

		this.load.image('bree','assets/decors/MAISONvillageBREE.png');
		this.load.image('bush','assets/decors/green-bush.png');
		this.load.image('panneau','assets/decors/panneau.png');

		
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
		this.cursors = this.input.keyboard.createCursorKeys();
		this.weapon = this.input.keyboard.addKey('A');
		this.atk = this.input.keyboard.addKey('Z');



		this.add.image(400, 300, 'background11');
		this.next = this.physics.add.staticGroup();
		this.next.create(799,300,'bord31');
		this.next2 = this.physics.add.staticGroup();
		this.next2.create(400,599,'bord32');
		/*this.next3 = this.physics.add.staticGroup();
		this.next3.create(,,'bord33');*/



		this.objet = this.physics.add.staticGroup();
		this.objet.create(650,500,'bree').setScale(2).refreshBody();
		this.objet.create(120,500,'bush').setScale(0.15).refreshBody();
		this.objet.create(700,140,'panneau').setScale(0.15).refreshBody();



		this.player = this.physics.add.sprite(400,300,'left');
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
		this.anims.create({
			key:'atk-right',
			frames: this.anims.generateFrameNumbers('atk-right', {start: 3, end: 3}),
			frameRate: 1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-left',
			frames: this.anims.generateFrameNumbers('atk-left', {start: 3, end: 3}),
			frameRate: 1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-back',
			frames: this.anims.generateFrameNumbers('atk-back', {start: 0, end: 3}),
			frameRate:1,
			repeat: 0
		});
		this.anims.create({
			key:'atk-front',
			frames: this.anims.generateFrameNumbers('atk-front', {start: 0, end: 3}),
			frameRate: 1,
			repeat: 0
		});


			this.text = this.add.text(10, 30, '', { font: '16px Courier', fill: '#ffffff' })
	}

	update(){
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
			this.player.setVelocityY(0);
		}

    	/*CHANGEMENT D'ARME*/
        let item_epee = this.add.image(30,30,'slot-epee').setScale(0.5);
		let item_arc = this.add.image(30,30,'slot-arc').setScale(0.5);
		item_arc.setVisible(false);
		item_epee.setVisible(false);

    	if (Phaser.Input.Keyboard.JustDown(this.weapon)){
            if(this.changement == 1 ){
                 //alert('arc');
                 this.changement = 0;
             }

            else{
                //alert('epee');
                this.changement = 1;
             }
        }

        if(this.changement == 1){
        	item_arc.setVisible(false);
			item_epee.setVisible(true);

			if(Phaser.Input.Keyboard.JustDown(this.atk)){
				if(this.player.direction == 'right'){
					this.player.anims.play('atk-right', true);
				}
				else if(this.player.direction == 'left'){
					this.player.anims.play('atk-left', true);
				}
				else if(this.player.direction == 'up'){
					this.player.anims.play('atk-back', true);
				}
				else if(this.player.direction == 'down'){
					this.player.anims.play('atk-front', true);
				}



			}
        }
        if(this.changement == 0){
        	item_epee.setVisible(false);
			item_arc.setVisible(true);

			if(Phaser.Input.Keyboard.JustDown(this.atk)){
				if(this.player.direction == 'right'){
					var coefDir;
					if (this.player.direction == 'right') { coefDir = 1; } else { coefDir = -1 }
   					var tire = this.groupeTir.create(this.player.x + (40 * coefDir), this.player.y - 4, 'arrow-right');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityX(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'left'){
					var coefDir;
					if (this.player.direction == 'left') { coefDir = -1; } else { coefDir = 1 }
   					var tire = this.groupeTir.create(this.player.x + (40 * coefDir), this.player.y - 4, 'arrow-left');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityX(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'up'){
					var coefDir;
					if (this.player.direction == 'up') { coefDir = -1; } else { coefDir = 1 }
   					var tire = this.groupeTir.create(this.player.x - 4, this.player.y + (60 * coefDir), 'arrow-back');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityY(1000 * coefDir, 0);
				}
				else if(this.player.direction == 'down'){
					var coefDir;
					if (this.player.direction == 'down') { coefDir = 1; } else { coefDir = -1 }
   					var tire = this.groupeTir.create(this.player.x - 4, this.player.y + (60 * coefDir), 'arrow-front');
   					tire.setCollideWorldBounds(false);
   					tire.body.allowGravity = false;
    				tire.setVelocityY(1000 * coefDir, 0);
				}
			}
        }
	}

	nextScene(player, next){
		this.scene.start("12");
	}
	next2Scene(player, next2){
		this.scene.start("17");
	}
	/*next3Scene(player, next3){
		this.scene.start("");
	}*/
}