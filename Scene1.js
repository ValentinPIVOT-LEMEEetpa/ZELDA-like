class Scene1 extends Phaser.Scene{
	constructor(){
		super('1');
	}

	init(data) {
		var cursors;
		var player;
		var text;
		var objet;
		var changement = 0;
		var weapon;
		var atk;
		var groupeTir;
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
		this.load.image('slot-epee', 'assets/HUD/slot-epee.png');
		this.load.image('slot-arc', 'assets/HUD/slot-arc.png');

		this.load.image('keur-full', 'assets/HUD/KEUR/keurs1.png');
		this.load.image('keur-1/4', 'assets/HUD/KEUR/keurs2.png');
		this.load.image('keur-1/2', 'assets/HUD/KEUR/keurs3.png');
		this.load.image('keur-null', 'assets/HUD/KEUR/keurs4.png');

		this.load.image('arrow-right', 'assets/personnage/aragorn/ATK/arrow-right.png');
		this.load.image('arrow-left', 'assets/personnage/aragorn/ATK/arrow-left.png');
		this.load.image('arrow-back', 'assets/personnage/aragorn/ATK/arrow-back.png');
		this.load.image('arrow-front', 'assets/personnage/aragorn/ATK/arrow-front.png');

		this.load.spritesheet('right', 'assets/personnage/aragorn/ALIVE/aragorn_RIGHT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('left', 'assets/personnage/aragorn/ALIVE/aragorn_LEFT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('back', 'assets/personnage/aragorn/ALIVE/aragorn_BACK-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('front', 'assets/personnage/aragorn/ALIVE/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});

		this.load.spritesheet('atk-right', 'assets/personnage/aragorn/ATK/aragorn_RIGHT-Sheet.png', {frameWidth: 69, frameHeight: 66});
		this.load.spritesheet('atk-left', 'assets/personnage/aragorn/ATK/aragorn_LEFT-Sheet.png', {frameWidth: 69, frameHeight: 66});
		this.load.spritesheet('atk-front', 'assets/personnage/aragorn/ATK/aragorn_FRONT-Sheet.png', {frameWidth: 46, frameHeight: 66});
		this.load.spritesheet('atk-back', 'assets/personnage/aragorn/ATK/aragorn_BACK-Sheet.png', {frameWidth: 45.5, frameHeight: 66});

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
		this.weapon = this.input.keyboard.addKey('A');
		this.atk = this.input.keyboard.addKey('Z');

		this.groupeTir = this.physics.add.group();

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

		this.hud = this.physics.add.staticGroup();
		this.hud.create(30, 30, 'keur-full').setScale(0.75).refreshBody();
		

		this.player = this.physics.add.sprite(255, 200,'left');		
		
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
        let item_epee = this.add.image(30,90,'slot-epee').setScale(0.5);
		let item_arc = this.add.image(30,90,'slot-arc').setScale(0.5);
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
		this.scene.start("2");
	}
	next2Scene(player, next2){
		this.scene.start("7");
	}
	/*next3Scene(player, next3){
		this.scene.start("");
	}*/

}	