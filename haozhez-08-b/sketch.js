// Joseph Zhang
// Section E
// haozhez@andrew.cmu.edu
// Assignment-08-B: 

var bodyLinks = [
    "assets/0-body.jpg",
    "assets/1-body.jpg",
    "assets/2-body.jpg",
    "assets/3-body.jpg",
    "assets/4-body.jpg",
    "assets/5-body.jpg",
    "assets/6-body.jpg",
    "assets/7-body.jpg",
    "assets/8-body.jpg",
    "assets/9-body.jpg",
    "assets/10-body.jpg",]

var feetLinks = [
    "assets/0-feet.jpg",
    "assets/1-feet.jpg",
    "assets/2-feet.jpg",
    "assets/3-feet.jpg",
    "assets/4-feet.jpg",
    "assets/5-feet.jpg",
    "assets/6-feet.jpg",
    "assets/7-feet.jpg",
    "assets/8-feet.jpg",
    "assets/9-feet.jpg",
    "assets/10-feet.jpg",]
    
var headLinks = [
    "assets/0-head.jpg",
    "assets/1-head.jpg",
    "assets/2-head.jpg",
    "assets/3-head.jpg",
    "assets/4-head.jpg",
    "assets/5-head.jpg",
    "assets/6-head.jpg",
    "assets/7-head.jpg",
    "assets/8-head.jpg",
    "assets/9-head.jpg",
    "assets/10-head.jpg",]

//arrays to store the images
var headArray = [];
var bodyArray = [];
var feetArray = [];

//vars to store current values and random values
var currentHead = 0;
var currentBody = 0;
var currentFeet = 0;
var randomHead;
var randomBody;
var randomFeet;


//for loop that preloads the images
function preload(){
    for(i = 0; i < 10; i++){
        headArray[i] = loadImage(headLinks[i]);
        bodyArray[i] = loadImage(bodyLinks[i]);
        feetArray[i] = loadImage(feetLinks[i]);
    }
}

function setup() {
    createCanvas(280,540);
    background('gray');
}

function draw() {
    //draw the images on canvas
    image(headArray[currentHead], 0, 0);
    image(bodyArray[currentBody], 0, 180);
    image(feetArray[currentFeet], 0, 360);
}

function mousePressed(){

    // randomize head selection
    if(mouseY < 180 && mouseX > 0 && mouseX < 280){
        randomHead = floor(random(10));
        
        // if the randomized card # is the same as the current card #
        while(randomHead === currentHead) {
            randomHead = floor(random(10));
        }
        currentHead = randomHead;
    }

    // randomize body selection
    else if(mouseY > 180 && mouseY < 360 && mouseX > 0 && mouseX < 280){
        randomBody = floor(random(10));
        
        // if the randomized card # is the same as the current card #
        while(randomBody === currentBody) {
            randomBody = floor(random(10));
        }
        currentBody = randomBody;
        print('body!');
    }

    // randomize feet selection
    else if(mouseY > 360 && mouseY < 540 && mouseX > 0 && mouseX < 280){
        randomFeet = floor(random(10));
        // if the randomized card # is the same as the current card #
        while(randomFeet === currentFeet) {
            randomFeet = floor(random(10));
        }
        currentFeet = randomFeet;
        print('feet!');
    }
}