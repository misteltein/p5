let sketch = function(p)
{
   p.setup = function setup() {
      createCanvas(100, 200)
      background(color(100, 100, 100))
   }
}
new p5(sketch)
