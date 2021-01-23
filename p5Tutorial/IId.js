let sketch = function(p){
   p.setup = function setup() {
       p.createCanvas(500, 500)
       p.background(p.color(100, 100, 100))
   }
   
   let x0 = 0
   let x1 = 0
   let x2 = 0
   let x3 = 0
   let x4 = 0
   
   p.draw = function draw() {
       p.background(p.color(100, 100, 100))
       p.circle(x0,                 0.3 * p.height, 100)
       p.circle(x1 + 0.1 * p.width, 0.4 * p.height, 100)
       p.circle(x2 + 0.2 * p.width, 0.5 * p.height, 100)
       p.circle(x3 + 0.3 * p.width, 0.6 * p.height, 100)
       p.circle(x4 + 0.4 * p.width, 0.7 * p.height, 100)
       x0+=1 
       x1+=1 
       x2+=1 
       x3+=1 
       x4+=1 
      if(x0>p.width){x0=0}
      if(x1>p.width){x1=0}
      if(x2>p.width){x2=0}
      if(x3>p.width){x3=0}
      if(x4>p.width){x4=0}
   }
}
new p5(sketch)
