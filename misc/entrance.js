let sketch = function(p){
   const R = 715.0;
   const W = 1280;
   const H = 640;
   const x0 = W * 0.5;
   const y0 = H * 0.5;
   const colors = [];
   let ongoing = true;
   let failCounter = 0;
   
   function uniform(a, b) {
      return Math.random() * (b - a) - a;
   }
   
   function normal(a) {
      let res = 0.0;
      for(let i = 0; i < 12; ++i) {
         res += uniform(0.0, 1.0);
      }
      res -= 6.0;
      res *= a;
      return res;
   }
   
   function normalTrunc(a, truncMin, truncMax) {
      const res = Math.abs(normal(a));
      if(res < truncMin || truncMax < res) {
         return normalTrunc(a, truncMin, truncMax)
      }
      return res;
   }
   let counter = 0;
   const ps = [];
   const rects = [];
   class Particle {
      constructor() {
         const theta_1 = uniform(0.0, 2.0 * Math.PI);
         const theta_2 = uniform(0.0, 2.0 * Math.PI);
         const theta_3 = uniform(0.0, 2.0 * Math.PI);
         const theta = uniform(0.0, 1.0) > 0.33 ? theta_1 : uniform(0.0, 1.0) > 0.5 ? theta_2 : theta_3;
         this.x = R * Math.sin(theta);
         this.y = R * Math.cos(theta);
         this.vx = -(this.x) / Math.sqrt((this.x) * (this.x) + (this.y) * (this.y));
         this.vy = -(this.y) / Math.sqrt((this.x) * (this.x) + (this.y) * (this.y));
         this.r = normalTrunc(17.0, 5.0, 65.0);
         while(!(-x0 <= this.x && this.x <= x0 && -y0 <= this.y && this.y <= y0)) {
            this.x += this.vx;
            this.y += this.vy;
         }
         this.x -= this.r * this.vx;
         this.y -= this.r * this.vy;
         this.ongoing = true;
         this.id = counter++;
         this.collapse()
         if(!this.ongoing) {
            if(++failCounter > 10) {
               ongoing = false;
            }
         } else {
            failCounter = 0;
         }
      }
      collapse() {
         if(this.ongoing) {
            ps.forEach((p) => {
               if(p.id !== this.id) {
                  if(Math.sqrt(
                        (p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y)) <= (p.r + this.r)) {
                     this.ongoing = false;
                  }
               }
            });
         }
      }
      expand() {
         if(this.ongoing) {
            this.x += this.vx;
            this.y += this.vy;
         }
      }
      draw() {
         stroke(255);
         strokeWeight(1);
         circle(this.x + x0, this.y + y0, 2.0 * this.r - 1);
      }
   }
   class Rectangle {
      constructor(x_, y_, s_) {
         this.x = x_;
         this.y = y_;
         this.s = s_;
         this.filled = false;
      }
      update() {
         if(!this.filled) {
            for(let i = 0, size = ps.length; i < size; ++i) {
               if(!ps[i].ongoing) {
                  const dx = this.x + 0.5 * this.s - (ps[i].x + x0);
                  const dy = this.y + 0.5 * this.s - (ps[i].y + y0);
                  if(Math.sqrt(dx * dx + dy * dy) <= ps[i].r) {
                     this.filled = true;
                     this.c = counter % 5;
                     counter += 1
                  }
               }
            }
         }
      }
      draw() {
         noStroke();
         fill(220);
         if(this.filled) {
            fill(colors[this.c])
         }
         rect(this.x, this.y, this.s, this.s)
      }
   }
   
   //function setup() {
   p.setup = function(){
      createCanvas(W, H);
      const origin = new Particle();
      origin.x = 0.0;
      origin.y = 0.0;
      origin.r = 10.0;
      origin.ongoing = false;
      ps.push(origin);
      ps.push(new Particle());
      noStroke();
      colors.push(color(101, 81, 147));
      colors.push(color(109, 128, 172));
      colors.push(color(252, 71, 51));
      colors.push(color(131, 153, 97));
      colors.push(color(181, 98, 69));
      for(let i = 0, size = 32; i < size; ++i) {
         for(let j = 0, sjze = 18; j < sjze; ++j) {
            rects.push(new Rectangle(i * 40, j * 40, 40))
         }
      }
   }
   
   //function draw() {
   p.draw = function(){
      if(ongoing) {
         background(220);
         rects.forEach((r) => {
            r.update();
            r.draw();
         });
         ps.forEach((p) => {
            fill(colors[p.id % 5])
            p.draw();
            p.collapse();
            p.expand();
         });
         if(!ps[ps.length - 1].ongoing) {
            ps.push(new Particle());
         }
      }
   }

}
new p5(sketch)
