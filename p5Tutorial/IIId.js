let sketch = function(p){
   p.setup = function setup() {
      p.createCanvas(256, 500)
      p.background(p.color(180, 180, 180))
      p.circle(0.5 * p.width, 0.10 * p.height, 50)
      p.stroke(p.color(255, 0, 255))
      p.circle(0.5 * p.width, 0.25 * p.height, 50)
      p.strokeWeight(10)
      p.circle(0.5 * p.width, 0.40 * p.height, 50)
      p.fill(p.color(0, 255, 255))
      p.circle(0.5 * p.width, 0.55 * p.height, 50)
      p.noFill()
      p.strokeWeight(2)
      p.circle(0.5 * p.width, 0.70 * p.height, 50)
      p.noStroke()
      p.fill(p.color(0, 255, 255))
      p.circle(0.5 * p.width, 0.85 * p.height, 50)
   }
}
new p5(sketch)
