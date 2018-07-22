// Enemies our player must avoid, pushed into this array
let allEnemies = [];


// The Enemy class using class keyword
// Contains an update() and render() method
class Enemy {
    constructor(xpos,ypos,speed){
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images from resources.js
        this.x = xpos;
        this.y = ypos;
        this.sprite = 'images/enemy-bug.png';
        this.speed = speed;
        allEnemies.push(this);
    }
    // Updates the enemy's position, required method for game
    // Parameter: dt,   time delta between ticks
    update(dt){
        if(this.x < 500){
            this.x += this.speed * dt;
        }
        else {
            this.x = 0;
        } 
    }
    // Draws the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// The Hero class using class keyword
// Contains an update(), render() and
// a handleInput() method.
class Hero {
    constructor(){
        this.sprite = 'images/char-cat-girl.png'; // the sprite image file
        this.x = 200; // starting x coordinate
        this.y = 400; // stating y coordinate
    }
    update(){
        self = this;
        allEnemies.forEach(function(enemy){ // checks for a collision with an enemy
            if ((self.x >= (enemy.x -50) && self.x <= (enemy.x + 50)) && (self.y <= (enemy.y + 50) && self.y >= (enemy.y - 25))){
                self.y = 400;
                self.x = 200;
            }
        });
        if (this.y === 0){ // if player makes it to the water
            this.x = 200;
            this.y = 400;
        }
    };
    render(){ // this draws the image, selecting it from the 'sprite' property in the Hero constructor
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    };
    handleInput(key){ // this is what actually makes the player dependingon user input
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



// Instances of Enemy objects

let enemyOne = new Enemy(100,200,50);
let enemyTwo = new Enemy(0,50,100);
let enemyThree = new Enemy(0,100,200);
let enemyFour = new Enemy(0,125,400);
let enemyFive = new Enemy(0,75,300);

// Instance of the Hero object, called player
let player = new Hero();


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
