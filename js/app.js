// Enemies our player must avoid
var score = 0; 

var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y; 
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. 
    this.speed = Math.abs(400-this.y) * dt * 0.95; 
    this.x +=  this.speed;
    if (this.x > 450) {
        this.x = -50; 
    }
    if (Math.abs(this.x - player.x) <= 80 && Math.abs(this.y - player.y) <= 20 ){
            player.x = 200;
            player.y = 400; 
    }

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(){
    this.x = 200;
    this.y = 400; 
    this.speed = 100;
    this.sprite = 'images/char-boy.png'; 
}

Player.prototype.update = function(dt){
    this.speed = this.speed * dt ; 
}



Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(move){
    if (move === "left"){
        value = this.x - 50;
         if (value < -50){
              this.x = 450; 
         } else {
             this.x = value; 
         }
    }
    if (move === "right"){
        value = this.x + 50;
         if (value > 450){
              this.x = -50; 
         } else {
             this.x = value; 
         }    
    }
    if (move === "up"){
        value = this.y - 50; 
         if (value < 0){
             score +=1;
             $("#points").text("SCORE: " + score); 
             this.y = 400; 
         } else {
             this.y = value; 
         }
    }
    if (move === "down"){
        value = this.y + 50; 
         if (value >= 400){
             this.y = 400; 
         } else {
             this.y = value; 
        }
    }

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var bug1 = new Enemy(300, 50);
var bug2 = new Enemy(100, 150);
var bug3 = new Enemy(0,200);
var bug4 = new Enemy(-100, 250);

var allEnemies = [bug1, bug2, bug3, bug4]; 
var player = new Player(); 


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
