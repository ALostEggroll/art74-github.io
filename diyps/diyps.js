var img;
var initials ='ac'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
img1 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/ocean.png');  // cat.jpg needs to be next to this .js file
img2 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/flora.png');  // cat.jpg needs to be next to this .js file
img3 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/tree.png');  // cat.jpg needs to be next to this .js file
img4 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/bush.png');  // cat.jpg needs to be next to this .js file
img5 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/platform.png');  // cat.jpg needs to be next to this .js file
img6 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/crate.png');  // cat.jpg needs to be next to this .js file
img7 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/house.png');  // cat.jpg needs to be next to this .js file
img8 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/gem.png');  // cat.jpg needs to be next to this .js file
img9 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/frog.png');  // cat.jpg needs to be next to this .js file
img0 = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/eagle.png');  // cat.jpg needs to be next to this .js file
imgg = loadImage('https://alosteggroll.github.io/art74-github.io/level-assets/player.png');  // cat.jpg needs to be next to this .js file
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
 image(img1, mouseX, mouseY);  //adding x,y parameters resizes
 
    //stroke(01);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
  image(img2, mouseX, mouseY);  //adding x,y parameters resizes
  
    //stroke(20);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool
  image(img3, mouseX, mouseY);  //adding x,y parameters resizes
  
    //stroke(300, 100, 0, 80);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') {
    image(img4, mouseX, mouseY);  //adding x,y parameters resizes
    
    //stroke(0, 0, 255);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
  image(img5, mouseX, mouseY);  //adding x,y parameters resizes
  
    //stroke(0, 0, 255);
    //testbox(20, 20, 200);
    //testbox(200, 20, 20);
    // make testbox do something!
    //line(mouseX, mouseY, pmouseX, pmouseY);
 
  } else if (toolChoice == '6') {
    image(img6, mouseX, mouseY);  //adding x,y parameters resizes
    
    //stroke(200);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') {
    image(img7, mouseX, mouseY);  //adding x,y parameters resizes
    
    //fill(100, 200, 100);
    //rect(mouseX, mouseY, 20, 20);
 
  } else if (toolChoice == '8') {
    image(img8, mouseX, mouseY);  //adding x,y parameters resizes
    
    //fill(300, 100, 0, 80);
    //rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '9') {
    image(img9, mouseX, mouseY);  //adding x,y parameters resizes
    
    //fill(300, 100, 0, 80);
    //rect(mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == '0') {
    image(img0, mouseX, mouseY);  //adding x,y parameters resizes
    
    //stroke(0, 0);
    //fill(random(255), random(255), random(255), random(255));
    //rect(mouseX, mouseY, 200, 150);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(imgg, mouseX, mouseY);  //adding x,y parameters resizes
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
