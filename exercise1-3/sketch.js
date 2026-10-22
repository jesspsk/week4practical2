function setup(){
    createCanvas(600, 600);
}

function draw(){
    let y = 0;
    while (y <= height){
        stroke(255, 0, 0)
        line(300, 300, 600, y);
        stroke(0, 255, 0);
        line(600, 600, 0, y);
        stroke(0, 0, 255)
        line(600, 0, 0, y);
        y += 10;
    }
    
}