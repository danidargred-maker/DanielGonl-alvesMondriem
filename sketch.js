function setup() {
  createCanvas(800,800);
  background(0);
  noStroke();
}

function draw() {
  fill(238,36,0)
  rect(0,0,362,316)


fill(237,241,237);
  rect(373, 0, 427, 316);
  rect(0, 334, 362, 177);
  rect(373, 334, 427, 177);
  rect(86, 527, 276, 273);
  rect(373, 770, 235, 30);
  rect(620, 527, 180, 273);

//amarelo
fill(250,209,0);
rect(0,527,75,273);
//azul
fill(31,32,117);
rect(373,527,235,230);


 for (let x = 30; x < width; x++) {
    let sombra = map(x, 30, width, 0, 40);
    fill(0, 0, 0, sombra);
    rect(x, 0, 1, width);
  }

 for (let y = 400; y < height; y++) {
    let sombra = map(y, 400, height, 0, 120);
    fill(0, 0, 0, sombra);
    rect(0, y, width, 1);
  }


//textura
for (let i = 0; i < 100000; i++) {
  fill(0, 0, 0, 14);
  rect(random(width), random(height), 1.10, 1.10);
}
noLoop();
}
