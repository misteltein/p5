let sketch = function(p){
   p.setup=function setup() {
      p.createCanvas(300, 300)
      p.background(p.color(100, 100, 100))
      p.circle(0,   p.height / 2, 50)
      p.circle(50,  p.height / 2, 50)
      p.circle(100, p.height / 2, 50)
      p.circle(150, p.height / 2, 50)
      p.circle(200, p.height / 2, 50)
      p.circle(250, p.height / 2, 50)
      p.circle(300, p.height / 2, 50)
   }
}
new p5(sketch)
