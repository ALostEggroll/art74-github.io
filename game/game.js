var ballx = 300;
var bally = 300;       //start location of ball
var ballSize = 40;     //ball size
var squarex = 300;
var squarey = 300;     //start of square
var squareSize = 40;   //size of square
var otherSquarex = 150;
var otherSquarey = 150;     //start of other square
var otherSquareSize = 40;   //size of other square
var thirdSquarex = 450;
var thirdSquarey = 450;     //start of third square
var thirdSquareSize = 40;   //size of third square
var score =0;          //start score
var gameState = "L1";  //start lvl
frameRate(30);
// variables ==========================
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup ===================================================

function draw() {
  background(150);

  if (gameState == "L1"){      //is called after 0 points
  levelOne();
  } //calls level 1  =======================
  if (gameState =="L2"){     //is called after 5 points
    levelTwo();
  }  //calls level 2  =======================
  if (gameState =="L3"){    //is called after 10 points
    levelThree();
  }  //calls level 3  =======================
  if (gameState =="L4"){    //is called after 15 points
    levelFour();
  }  //calls level 4  =======================
  if (gameState =="L5"){    //is called after 20 points
    levelFive();
  }  //calls level 5  =======================
  if (gameState =="L6"){    //is called after 25 points
    levelSix();
  }  //calls level 6  =======================
    if (gameState =="L7"){    //is called after 30 points
    levelSeven();
  }  //calls level 7  =======================
    if (gameState =="L8"){    //is called after 35 points
    levelEight();
  }  //calls level 8  =======================
text(("score: " + score), width/2, 40);   //displays score
} // end draw =====================================================

function levelOne(){
  text("Level 1", width/2, height-20); //display level 1 text
  var distToBall = dist(ballx, bally, mouseX, mouseY); //gets the difference btw ball and mouse
  if(distToBall <ballSize/2) { //if mouse touches ball
   ballx=random(width);
   bally=random(height); //randomly places ball
    score = score +1;    //score system
  }
  if (score>=5){     //if you score 5 pts
  gameState ="L2";   //advance to levl 2
  }
  line(ballx, bally, mouseX, mouseY); //******draws line to ball******
  fill(0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize); //draws ball
  //tldr: this level draws a line to the ball and you have to touch the ball with mouse
} //end level one=============================================================

function levelTwo(){
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2) { //if mouse touches ball
   ballx=random(width);
   bally=random(height);
    score = score +1; //score system 
  }
  if (score>=10){ //if you score 10 pts
    gameState ="L3"; //advance to lvl 3
  }
  fill(0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: basically lvl 1 w/o the line
} //end level two ============================================================

function levelThree(){
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToSquare = dist(squarex, squarey, mouseX, mouseY);
  if(distToSquare <squareSize) {
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if(score>=15){
    gameState ="L4"; //advance to lvl 4
  }
  fill (255, 0, 0);
  square(squarex, squarey, squareSize);
  fill (0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level three ===============================================================

function levelFour(){
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToSquare = dist(squarex, squarey, mouseX, mouseY);
  //===========adds another square==============
  var distToOtherSquare = dist(otherSquarex, otherSquarey, mouseX, mouseY);
  if(distToOtherSquare <otherSquareSize) {
   otherSquarex=random(width);
   otherSquarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }  //=========================================
  if(distToSquare <squareSize) {
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if(score>=20){
    gameState ="L5"; //advance to lvl 5
  }
  fill (255, 0, 0);
  square(otherSquarex, otherSquarey, otherSquareSize); //draws other square
  square(squarex, squarey, squareSize);
  fill (0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level four ===============================================================

function levelFive(){
  text("Level 5", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToSquare = dist(squarex, squarey, mouseX, mouseY);
  var distToOtherSquare = dist(otherSquarex, otherSquarey, mouseX, mouseY);
  var distToThirdSquare = dist(thirdSquarex, thirdSquarey, mouseX, mouseY);
   if(distToThirdSquare <thirdSquareSize) {
   thirdSquarex=random(width);
   thirdSquarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToOtherSquare <otherSquareSize) {
   otherSquarex=random(width);
   otherSquarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToSquare <squareSize) {
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if(score>=25){
    gameState ="L6"; //advance to lvl 6
  }
  fill (0, 0, 255);
  square(thirdSquarex, thirdSquarey, thirdSquareSize); //draws other square
  square(otherSquarex, otherSquarey, otherSquareSize); //draws other square
  square(squarex, squarey, squareSize);
  fill (255, 0, 0);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level five ===============================================================

function levelSix(){
  text("Level 6", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToSquare = dist(squarex, squarey, mouseX, mouseY);
  var distToOtherSquare = dist(otherSquarex, otherSquarey, mouseX, mouseY);
  var distToThirdSquare = dist(thirdSquarex, thirdSquarey, mouseX, mouseY);
   if(distToThirdSquare <thirdSquareSize) {
   thirdSquarex=random(width);
   thirdSquarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToOtherSquare <otherSquareSize) {
   otherSquarex=random(width);
   otherSquarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToSquare <squareSize) {
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   score = score -1;      //loose points
  }
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if(score>=30){
    gameState ="L7"; //advance to lvl 7
  }
  fill (0, 0, 255);
  square(thirdSquarex, thirdSquarey, thirdSquareSize); //draws other square
  square(otherSquarex, otherSquarey, otherSquareSize); //draws other square
  square(squarex, squarey, squareSize);
  fill (0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level six ===============================================================

function levelSeven(){
  text("Level 7", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToSquare = dist(squarex, squarey, mouseX, mouseY);
  var distToOtherSquare = dist(otherSquarex, otherSquarey, mouseX, mouseY);
  var distToThirdSquare = dist(thirdSquarex, thirdSquarey, mouseX, mouseY);
  if(distToOtherSquare <otherSquareSize || distToSquare <squareSize || distToThirdSquare <thirdSquareSize) {
   otherSquarex=random(width);
   otherSquarey=random(height); //ramdomly puts square
   thirdSquarex=random(width);
   thirdSquarey=random(height); //ramdomly puts square
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   ballx=random(width);
   bally=random(height);
   score = score -1;      //loose points
  } else if(distToBall <ballSize/2){
   otherSquarex=random(width);
   otherSquarey=random(height); //ramdomly puts square
   thirdSquarex=random(width);
   thirdSquarey=random(height); //ramdomly puts square
   squarex=random(width);
   squarey=random(height); //ramdomly puts square
   ballx=random(width);
   bally=random(height);
    score = score + 1;
  }
  if(score>=35){
    gameState ="L8"; //advance to lvl 8
  }
  fill (0, 0, 255);
  square(thirdSquarex, thirdSquarey, thirdSquareSize); //draws other square
  square(otherSquarex, otherSquarey, otherSquareSize); //draws other square
  square(squarex, squarey, squareSize);
  fill (0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level seven ===============================================================

function levelEight(){
  text("You Win", width/2, height-20);
  text("The Demo", width/2, height-1);
  ballx = 300;
  bally = 300;
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    score = score + 1; //get a high score idk?
  }
  if(score>=35){
    gameState ="L8"; //advance to lvl 8
  }
  fill (0, 0, 255);
  ellipse(ballx, bally, ballSize, ballSize);
  //tldr: intro to square, dont touch or loose points
} //end level eight ===============================================================
