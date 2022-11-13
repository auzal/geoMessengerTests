class Message{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bearing = this.calculateBearing();;
        this.bearingFixed = false;
        this.birth = frameCount;
        this.text = this.getRandomString();
       // console.log(this.text);
    }

    render(){
        push();
        translate(this.x, this.y);
        rotate(this.bearing);
        strokeWeight(3);
        stroke(255,200,200, map(sin((frameCount - this.birth)*.1), -1, 1, 80, 255));
        noFill();
        let diam = 10;
        ellipse(0,0,diam,diam);
        if(this.bearingFixed){
            this.dashedLine();
        }else{
            if(dist(this.x,this.y,mouseX,mouseY) > 0){
                line(0,0,20,0);
            }
        }
        pop();
    }

    update(){
        if(!this.bearingFixed){
            this.bearing = this.calculateBearing();
        }

    }

    mousePressed(){
        let result = false;
        if(!this.bearingFixed){
            this.bearingFixed = true;
            result = true;
        }
        return result;
    }

    calculateBearing(){
        return atan2(mouseY - this.y, mouseX - this.x);
    }

    dashedLine(){
        push();
        
        let dashLength = 5;
        let lineLength = width;
        let alt = true;
        let offset = (frameCount*.5) % (dashLength *2);
        for(let x = 0 ; x < lineLength ; x+= dashLength){
            if(alt){
                line(x + offset ,0,x + dashLength + offset,0);
            }
            alt =!alt;
        }
        pop();

    }

    getRandomString(){
        let index = int(random(0,dummyText.length));
        return(dummyText[index]);

    }


}