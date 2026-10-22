function setup(){
    createCanvas(400, 400);
}

function draw(){
    let x = 0
    while (x < width){
        let y = 0
        while (y < height){
            if (x % 100 === 0 && y % 100 === 0){
                fill(0);
            } else if (x % 100 !== 0 && y % 100 !== 0){
                fill(0);
            } else {
                fill(255);
            }
            square(x, y, 50);
            y += 50
        }
        x += 50;
    }
}