let easycam;

function setup() {
  createCanvas(800, 800, WEBGL);
  setAttributes('antialias', true);
  easycam = createEasyCam();
}

function draw() {
  background(20);
  noFill();
  stroke(255,50);
  //sphere(200);
  globe(200);
}



function globe(radius){
  push();

  // meridians
  let meridiansCount = 36;
  push();
  for(let i = 0 ; i < meridiansCount/2 ; i++){
    rotateY(TWO_PI/meridiansCount);
    ellipse(0,0,radius*2,radius*2,49);
  }
  pop();

  // parallels
  let parallelCount = 9;
  push();
  rotateX(HALF_PI);
  //equator
  ellipse(0,0,radius*2,radius*2,49);
  // other parallels 
  for(let i = 1 ; i < parallelCount ; i++){
    let ang =  (HALF_PI/parallelCount) * i;
    let deltaY = sin(ang) * radius;
    let parallelRadius = cos(ang) * radius;
    push();
    translate(0,0,deltaY);
    ellipse(0,0,parallelRadius * 2,parallelRadius * 2, 49);
    ellipse();
    pop();
    push();
    translate(0,0,-deltaY);
    ellipse(0,0,parallelRadius * 2,parallelRadius * 2, 49);
    ellipse();
    pop();
  }


  pop();



  pop();
}