class movement extends Phaser.Scene{
    constructor(){
        super("movementScene");
        this.my = {sprite: {}, bullets: []};

        this.bodyX = 400;
        this.bodyY = 400;
    }

    preload(){
        this.load.setPath("./assets/");

        this.load.image("redBody", "character_squareRed.png");
        this.load.image("redBullet", "character_handRed.png");


    }

    create(){
        let my = this.my;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "redBody");
        //my.sprite.bullet = this.add.sprite(this.bodyX, this.bodyY, "redBullet");
        //my.sprite.bullet.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        let my = this.my;

        if (this.aKey.isDown) {
            my.sprite.body.x -= 1;
            if (my.sprite.body.x <= 0) my.sprite.body.x = 0;
        }
        if(this.dKey.isDown){
            //console.log("left");
            my.sprite.body.x += 1;
            if (my.sprite.body.x <= 0) my.sprite.body.x = 0;
        }

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            //console.log("bullet");
            let bullet = this.add.sprite(my.sprite.body.x, my.sprite.body.y-20, "redBullet");
            my.bullets.push(bullet);
        }

        // Update bullets
        my.bullets.forEach((bullet, index) => {
            bullet.y -= 3;
            if (bullet.y < 0) {
                bullet.destroy(); // Destroy bullet when it leaves the screen
                my.bullets.splice(index, 1);
            }
        });

    }


}