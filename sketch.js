var canvas, backgroundImage;
var xVel,yVel, xSet

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var c1,c2,c3,c4;
var track;
var ground;

var form, player, game;

var obstacle,obImage, obstacles;
var cars, car1, car2, car3, car4;

function preload(){
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
  c3 = loadImage("images/car3.png");
  c4 = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");
  obImage = loadImage("images/f1.png");
  s = loadSound("sounds/sliding.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  xVel = 0;
    yVel = 0;
    xSet = false;
      game = new Game();
      game.getState();
      game.start();
      obstacles = createGroup();
  for(i=0; i<5; i++){
    w =random(200,950);
    h = random(-height*4, height-300);
    obstacle = createSprite(w,h);
    obstacle.addImage(obImage);
    obstacles.add(obstacle); 
  }

  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    
  }

if (gameState===2){
  game.end()
}

  
}