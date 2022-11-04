
let mapImg;

let messages;

function preload(){
  mapImg = loadImage("assets/LosAngeles.png");

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
    messages[i].render();
  }
}

function mousePressed(){
  createMessage(mouseX, mouseY);
}

function createMessage(x, y){
  let msg = new Message(x, y);
}
