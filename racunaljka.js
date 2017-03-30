function Body(length) {
    this.length = length;
}

Body.prototype.grow = function(newLength) {
    this.length += newLength;
}

function Head(left, right) {
    this.leftEye = left;
    this.rightEye = right;
}

Head.prototype.changeingColor = function(colorLeft, colorRight) {
    this.leftEye = colorLeft;
    this.rightEye = colorRight;
}

function Tail(leftPosition, center, rightPosition) {
    this.leftPosition = leftPosition;
    this.center = center;
    this.rightPosition = rightPosition;
}

Tail.prototype.changePosition = function(moveLeft, center, moveRight) {
    this.leftPosition = moveLeft;
    this.center = center;
    this.rightPosition = moveRight;
}

function Snake(kind) {
    this.kind = kind;
    this.body = new Body(3);
    this.head = new Head('green', 'green');
    this.tail = new Tail('', 'center', '');
}

Snake.prototype.eat = function(snakeFood) {
    this.body.grow(snakeFood);
    this.head.changeingColor('yellow', 'yellow');
}

Snake.prototype.move = function() {
    this.tail.changePosition('moveRight', '', 'moveLeft');
}

var python = new Snake('python');

python.eat(7);
python.eat(101);
python.move();

console.log(python);