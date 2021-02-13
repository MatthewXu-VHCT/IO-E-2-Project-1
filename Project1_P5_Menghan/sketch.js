let url = 'https://io.adafruit.com/api/v2/xumengh/feeds/button';
let counter = 0;
let timer = 3;
let unit = "s";
//input from feather (button)
let data;
let input, button, greeting;
//Reference: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO
// const fireworks = [];
// let gravity;
var fireworks = [];
var gravity;
//Reference: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO


function setup() {
    createCanvas(600, 600);
    //Reference: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    //    background(0);
    //Reference: https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO
}


function draw() {
    background(0);
    //    fill(255);
    //    rect(0, 0, width, height);
    //    if (counter % 80 == 0) {
    getData();
    //    };
    //    counter++;

    //Reference: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    noStroke();
    text(timer, width / 2 - 6.5, height / 2);
    text(unit, width / 2 + 6.5, height / 2);
    if (frameCount % 60 == 0 && timer > 0 && data == 0) {
        timer--;
    };
    if (data >= 1) {
        timer = 3;
        fill(255);
        text("Press the button to start counting", width / 2, height * 0.7);
    };


    //    if (timer == 0 && random(1) < 0.08) {
    if (timer == 0) {
        fill(255);
        textSize(22);
        text("Happy New Year!", width / 2, height * 0.7);
        if(random(1.2) < 0.08){
          fireworks.push(new Firework());
        }
        // fireworks.push(new Firework());

        for (let i = fireworks.length - 1; i >= 0; i--) {
          fireworks[i].update();
          fireworks[i].show();
        }

        if(data >= 1){
          return;
          //come back to counting menu
        }
    }
};

//for (let i = fireworks.length - 1; i >= 0; i--) {
//    fireworks[i].update();
//    fireworks[i].show();
//
//    if (fireworks[i].done()) {
//        fireworks.splice(i, 1);
//    }
//}
//Reference: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-


function getData() {
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        //        let resize = map(data, 1, 0, 50, 150);
        //        noStroke();
        //        fill(255, 0, 0);
        //        ellipse(width / 2, height / 2, resize);
        console.log(data);
    });
}
