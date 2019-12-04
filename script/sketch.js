// Joseph Zhang
// 15-104 Final Project
// Section E

var rectangles = [];
var gutter = 30;
var totalRows = 15;
var totalCols = 15;
var centerCol = totalCols / 2;
var centerRow = totalRows / 2;
var rectH = 70;

function setup() {
    createCanvas(450, 450, WEBGL);
    // PUT RECTANGLES INTO ARRAY
    for( x = 0; x < totalRows; x++) {
        for ( y = 0; y < totalCols; y++) {
            rectangles.push(createCube(x * gutter, y * gutter, x, y));
        }
    }
}

var bgColor;
var bg = 0;

function draw() {

    rotateY(map(mouseX, 0, height, -.15, .15));
    rotateX(map(mouseY, 0, height, .15, -.15));
    translate(map(mouseX / 10 , 0, width / 10, -10, 10), map(mouseY / 10 , 0, height / 10, -10, 10), 0);

    //INTERACTIVE CONTROLS - UP AND DOWN
    if( keyIsPressed &&  keyCode === LEFT_ARROW) {
        if( rectH > -200) {
            rectH -= 3;
            print(rectH);
        }
    }

    else if( keyIsPressed &&  keyCode === RIGHT_ARROW) {
        if( rectH < 100) {
            rectH += 3;
            print(rectH);
        }
    }

    // COLOR BACKGROUND
    if(bgColor) {
        if ( bg > 0) {
            bg -= 20;
        }
    }

    else{
        if( bg < 255) {
            bg += 20;
        }
    }
    background(bg);

    rectMode(CENTER);  
    rotateX(radians(40));
    translate( - width / 2, - height / 2 + 15, 0);

    // REPEATEDLY DRAW EVERY PRISM IN DRAW
    for( i = 0; i < rectangles.length; i++) {
        rectangles[i].drawRect();
        rectangles[i].raiseRect();
    }
}

// CUBE OBJECT
function createCube(row, col, r, c) {
    var rectObj = {
        w: 19,
        xPos: row,
        yPos: col,
        offset: dist(r, c, centerCol, centerRow),
        currentHeight: this.offset,
        // UPDATES THE HEIGHT OF RECTANGLE
        drawRect: function() {
            if (this.currentHeight > 0) {
                fill(map(this.currentHeight, 10, 70, 0, 255));
            }
            else{
                fill(map(this.currentHeight, 10, 70, 0, -255));
            }

            push();
            translate(this.xPos, this.yPos , this.currentHeight);
            box(this.w, this.w, this.currentHeight);
            pop();
        },
        // CHANGES THE HEIGHT THROUGH MAPPING CANVAS
        raiseRect: function() {
            this.currentHeight = map( sin(this.offset), -1, 1, 10, rectH);
            this.offset += .1;
        }  
    }
    return rectObj;
}

// IF ENTER KEY IS PRESSED, CHANGE BACKGROUND
function keyPressed() {
        if( keyCode === ENTER) {
            bgColor = !bgColor;
        }
}