let sketch = function(p){
   p.setup = function setup() {
       p.createCanvas(500, 500)
       p.background(p.color(100, 100, 100))
   }
   
   let x=0
   
   p.draw = function draw(){
     p.background(p.color(100, 100, 100))
     for(let i=0;i<5;++i){
       p.circle(x + 0.1*i*p.width, (0.3+0.1*i)* p.height, 100)
     }
     x=x+1
   }
}
new p5(sketch)
