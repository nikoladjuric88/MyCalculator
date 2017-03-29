function Body(length) {
    this.length = length;
}

Body.prototype.growth = function(newLength) {
    this.length += newLength;
}

function Head(left, right) {
    this.left = left;
    this.right = right;
}

Head.prototype.changeColor = function(color) {
    this.left = color.left;
    this.right = color.right;
}

function Tail(leftPosition, center, rightPosition) {
    this.leftPosition = leftPosition;
    this.center = center;
    this.rightPosition = rightPosition;
}

Tail.prototype.moving = function(move) {
    this.leftPosition = move.rightPosition;
    this.center = move.centar;
    this.rightPosition = move.leftPosition;
}

function Snake(kind) {
    this.kind = kind;
    this.length = new Body(3);
    this.look = new Head('green', 'green');
    this.move = new Tail(' ', 'center', ' ');
}

Snake.prototype.eat = function(snakeFood) {
    this.length.growth(snakeFood); 
    var change = new Head('yellow', 'yellow');
    this.look.changeColor(change);    
}

Snake.prototype.movement = function(moveLeft, center, moveRight) {

    var moveAgain = new Tail('moveLeft', 'center', 'moveRight');
    this.move.moving(moveAgain);
} 

var python = new Snake('python');
python.eat(7);
python.movement();

console.log(python);