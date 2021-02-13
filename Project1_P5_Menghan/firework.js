    //Reference: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
function Firework() {
    //generate random hues (under HSB)
    this.hu = random(255);
    //Firework generated from random width
    //function Particle(x, y, rad, hu, fire, decade)
    this.firework = new Particle(random(width), height, 6, this.hu, true);
    // this.firework = new Particle(random(width), height, map(this.firework.vel.y, -11, -8, 6, 20), this.hu, true);

    this.exploded = false;
    this.particles = [];

    // this.r = map(this.firework.vel.y, 0, height, 10, 20);
    //-11, -8
    this.r = map(this.firework.vel.y, -11, -8, 6, 20);

    this.update = function () {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            // if (this.firework.vel.y >= 0) {
            if (this.firework.vel.y >= 11) {
                this.exploded = true;
                this.explode();
            }
        }
    }

    this.explode = function () {
      //old explosion for fireworks
        // for (var i = 0; i < 100; i++) {
        //     var p = new Particle(this.firework.pos.x, this.firework.pos.y, 200);
        //     this.particles.push(p);
        // }

      //new explosion
      // if(this.firework.vel.y >= 10){
      //   this.r = map(this.firework.vel.y, 0, height, 10, 20);
      //   // this.r = map(this.firework.vel.y, height, 0, 10, 20);
      // }else{
      //   this.r = 1;
      // }
    }

    this.show = function () {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = this.particles.length -1; i >= 0; i--) {
            //    this.particles[i].show();
            // this.particles[i].applyForce(gravity);
            // this.particles[i].update();
            if (this.particles[i].done()){

              this.particles.explosion();
              this.particles.splice(i,1);
            }
        }
    }
}
