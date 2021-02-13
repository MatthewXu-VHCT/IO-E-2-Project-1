    //Reference: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
function Particle(x, y, rad, hue, fire) {
// function Particle(x, y, hue, fire) {
    //original position
    this.pos = createVector(x, y);
    //fire the circles
    this.fire = fire;
    //radius of ellipses
    // this.rad = rad;
    //hes assigned to random circles
    this.hue = hue;

    // ellipse(this.pos.x, this.pos.y, this.rad);
    //lifespan of circles (depend on effects)
    this.lifeSpan = 255;

    //acceleration of ellipses force = 1(mass) *  acceleration
    this.acc = createVector(0, 0);

    //circles fly up
    if (this.fire) {
        this.vel = createVector(0, random(-14, -8));

        this.rad ++;
    } else {
        // this.vel = p5.Vector.random2D();
        // this.vel.mult(random(2,10));

        // expansion
        this.rad = p5.Vector.random2D();
        this.rad.mult(random(4,10));
        //in random directions
    }

    //force = mass * acceleration (mass too small -- is neglected)
    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
      if (!this.firework){
        // (x*0.85, y* 0.85)
        // this.vel.mult(0.85);
        //kill the fireworkshow
        this.lifeSpan -= 4;
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    this.done = function(){
      if(this.lifeSpan < 0){
        return true;
      } else{
        return false;
      }
    }

    this.explosion = function(){
      // this.rad = map(this.vel.y, -11, -8, 6, 20);
    }

    this.show = function () {
      colorMode(HSB);
      noFill();
      if(!this.firework){
        strokeWeight(4);
        stroke(this.hue, 255, this.lifeSpan);
      }else{
        strokeWeight(8);
        stroke(this.hue, 255, this.lifeSpan);
      }

      // ellipse(this.pos.x, this.pos.y, this.rad);
      ellipse(this.pos.x, this.pos.y, map(this.vel.y, -14, -8, 20, 45));
    }
}
