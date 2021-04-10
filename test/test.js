function setup() {
createCanvas(600, 600);
}


function draw() {
  //bgcolor
background(900);
//Note: (x, y, width, height)
//hair base
fill(10)
ellipse(300, 170, 300, 300);
//haircut
fill(300)
rect(90, 10, 100, 500)
rect(410, 10, 100, 500)
triangle(390, 100, 450, 0, 270, 20);
triangle(100, 180, 200, 0, 280, 20);
strokeWeight(0);
//clothes
fill(185, 40, 40);
ellipse(400, 420, 80, 120);
fill(185, 40, 40);
rect(200, 350, 200, 150);
fill(200);
rect(295, 400, 15, 70);
fill(200);
rect(265, 420, 70, 15);
fill(50);
ellipse(300, 335, 250, 100)

//neck
fill(169, 124, 80);
ellipse(300, 320, 100, 100)
//head base
fill(196, 154, 108);
ellipse(300, 250, 200, 200);
strokeWeight(0);
//ears
ellipse(400, 270, 30, 50);
ellipse(200, 270, 30, 50);

//face
//eyebrows
fill(10)
ellipse(250, 210, 50, 30)
ellipse(350, 210, 50, 30)
//eyebrow arcs
fill(196, 154, 108);
ellipse(345, 215, 60, 25)
ellipse(255, 215, 60, 25)
//rect(225, 200, 50, 10)
//rect(325, 200, 50, 10)
//eyes
fill(60, 36, 21);
ellipse(250, 250, 45, 45);
ellipse(350, 250, 45, 45);
//pupil
fill(250)
ellipse(250, 245, 20, 20);
ellipse(350, 245, 20, 20);
//eyelids
fill(196, 154, 108);
rect(320, 260, 50, 45);
rect(220, 260, 50, 45);
//nose
fill(169, 124, 80);
ellipse(300, 270, 35, 15);
//mouth
fill(190, 30, 45);
ellipse(300, 300, 55, 30);
//teeth
fill(225)
ellipse(300, 295, 50, 15);
//lips
fill(196, 154, 108);
rect(270, 275, 70, 20);
//hands
fill(185, 40, 40);
//this arm is under the hood ellipse(400, 420, 80, 120);
ellipse(170, 390, 80, 80);
fill(196, 154, 108);
ellipse(150, 350, 70, 70);
ellipse(400, 480, 70, 70);
}
