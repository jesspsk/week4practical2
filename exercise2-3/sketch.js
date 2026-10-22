function setup(){
    createCanvas(400, 400);
}

function draw(){
    let x = 0
    while (x < width){
        let y = 0
        while (y < height){
            square(x, y, 50);
            y += 50
        }
        x += 50;
    }
}