let sketch = function(p){
   p.setup = function setup() {
    createCanvas(500, 500)
    background(color(100, 100, 100))
    circle(0, 0.5*height, 100)
   }
}
new p5(sketch)
