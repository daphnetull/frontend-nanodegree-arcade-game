// Enemies our player must avoid
let allEnemies = [];

var Enemy = function(xpos,ypos,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = xpos;
    this.y = ypos;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    allEnemies.push(this);

};

// Update the enemy's position, required method for game
// Parameter: dt,   time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(this.x < 500){
        this.x += this.speed * dt;
    }
    else {
        this.x = 0;
    }
    checkCollisions(this);
};

/*Enemy.prototype.checkCollisions = function(){
    console.log(this.x);
};*/

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
    constructor(){
        this.sprite = 'images/char-cat-girl.png';
        this.x = 200;
        this.y = 400;
    }
    update(){

    };
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    handleInput(key){
        if (key === 'left' && this.x > 0){
          this.x -= 25;
        }
        else if (key === 'right' && this.x < 400){
          this.x += 25;
        }
        else if (key === 'up' && this.y > 0){
          this.y -= 25;
        }
        else if (key === 'down' && this.y < 400){
          this.y += 25;
        }
    };
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemyOne = new Enemy(100,200,50);
let enemyTwo = new Enemy(0,50,100);
let enemyThree = new Enemy(0,100,200);
let player = new Hero();


function checkCollisions(bug){
    //console.log(bug);
    if ((bug.x === player.x) && (bug.y === player.y)){
        console.log('hit');
    }


   /* allEnemyPositions.forEach(function(bug){
        let bugXCordLower = bug.x - 50;
        let bugXCordHigher = bug.x + 50;
        let bugYCordHigher = bug.y - 25;
        if ((player.x >= bugXCordLower && player.x <= bugYCordHigher) && (player.y <= bug.y && player.y >= bugYCordHigher)){
            console.log('hit');
        }
    });*/
};

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
