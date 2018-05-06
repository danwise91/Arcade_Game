// Enemies our player must avoid
const randYCords = [60, 140, 220];

var Enemy = function(x, y) {
    let getStartPos = randYCords[Math.floor(Math.random()*randYCords.length)];

    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = getStartPos;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    //assign a speed variable randomly
    this.speed = Math.floor(Math.random(1)*Math.floor(3) + 1);

};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500){
        this.y = randYCords[Math.floor(Math.random()*randYCords.length)];
        this.x = 0;
        this.speed = Math.floor(Math.random(1)*Math.floor(3) + 1);
    } else {
        let translate = Math.floor(this.speed * 100 * dt);
        this.x += translate   
    }
     
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



let singleEnemy1 = new Enemy();
let singleEnemy2 = new Enemy();
let singleEnemy3 = new Enemy();

let allEnemies = [singleEnemy1, singleEnemy2, singleEnemy3];
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
}


Player.prototype.update = function(dt){

}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(){

}

const player = new Player();


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

