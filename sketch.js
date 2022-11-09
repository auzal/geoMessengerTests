
let mapImg;
let dummyText;
let messages;
let mouseFire;

function preload(){
  mapImg = loadImage("assets/LosAngeles.png");
  dummyText = loadStrings("assets/texto.txt");
}

function setup() {
  createCanvas(mapImg.width, mapImg.height);
  mapImg.filter(GRAY);
  messages = [];
}

function draw() {
  background(255,0,0);
  image(mapImg, 0, 0);
  renderMessages();
}

function renderMessages(){
  for (let i = 0 ; i < messages.length ; i++){
    messages[i].update();
    messages[i].render();
  }
}

function mousePressed(){
  if (mouseButton === LEFT) {
    mouseFire = millis();
  }
}

function mouseReleased(){
  if (mouseButton === LEFT && millis() - mouseFire < 200) {
    if(readyForNewMessage()){
      createMessage(mouseX, mouseY);
    }else{
      for (let i = 0 ; i < messages.length ; i++){
        messages[i].mousePressed();
      }
    }
  }
  
}

function createMessage(x, y){
  
    let msg = new Message(x, y);
    messages.push(msg);
  
}

function readyForNewMessage(){
  let ready = true;
  for (let i = 0 ; i < messages.length ; i++){
    if(!messages[i].bearingFixed){
      ready = false;
      break;
    }
  }
  return ready;
}
