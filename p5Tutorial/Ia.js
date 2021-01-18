let sketch = function(p)
{
   p.setup = function setup() {
      p.createCanvas(100, 200)
      p.background(color(100, 100, 100))
   }
}
new p5(sketch)
