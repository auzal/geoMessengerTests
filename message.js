class Message{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bearing = 0;
        this.bearingFixed = false;
    }

    render(){
        push();
        strokeWeight(3);
        stroke(255,200,200);
        translate(this.x, this.y);
        rotate(this.bearing);
        line(0,0,100,0);
        pop();
    }


}