var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load sprites
var bird = new Image();
bird.src = "images/bub.png";

var bg = new Image();
bg.src = "images/bg.png";

var fg = new Image();
fg.src = "images/fg.png";

var pipeNorth = new Image();
pipeNorth.src = "images/pipeNorth.png";

var pipeSouth = new Image();
pipeSouth.src = "images/pipeSouth.png";

var gap = 95;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// on key down
document.addEventListener("keydown", moveUp);

function moveUp(){
    //TODO: move Bub up
}

// pipe coordinates
var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images
function draw(){
	//draw background, foreground, and sprites on the canvs
	//check to see if Bub has collided with a pipe
    
    requestAnimationFrame(draw);    
}

draw();