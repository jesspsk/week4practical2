function setup(){
    createCanvas(400, 400);
}

function draw(){
    for(let x = 0; x < width; x += 50){
        rect(x, 0, 50, height)
    }
}

function rectSelected(){
}