function setup() {
    createCanvas(1600, 800);
    angleMode(DEGREES);
    noFill(); 
  }
  
  function draw() {
      frameRate(1.6);
    background(220);
    
    
    translate(width / 2, height / 2);
    
    
    const symmetry = random(400); 
    
  
    for (let i = 0; i < symmetry; i++) {
      rotate(360 / symmetry);
      // Draw a circle
      stroke(200, 102, random(153));
      ellipse(50, 0, 50,random(50));
      // Draw a rectangle
      stroke(255, 255, 255);
      rect(50, -25, 50, 50);
      // Draw a line
      stroke(0, 0, 0);
      line(0, 0, 100, 0);
    }
  }
  