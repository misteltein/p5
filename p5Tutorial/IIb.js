let sketch = function(p){
   p.setup = function setup() {
      p.createCanvas(300, 300)
      p.background(p.color(100, 100, 100))
   }

   let x = 0;
   
   p.draw = function draw() {
       p.circle(x, 0.5 * p.height, 50)
       x = x + 1
       if(x>p.width){x=0
         p.background(p.color(100, 100, 100))
       }
   }
}

new p5(sketch)
