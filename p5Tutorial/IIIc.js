let sketch=function(p){
   p.setup=function setup() {
      p.createCanvas(256, 256)
      p.background(p.color(180, 180, 180))
      p.line(0.4 * p.width, 0.1 * p.height, 0.6 * p.width, 0.1 * p.height)
      p.stroke(color(255, 255, 255))
      p.line(0.4 * p.width, 0.3 * p.height, 0.6 * p.width, 0.3 * p.height)
      p.strokeWeight(10)
      p.line(0.4 * p.width, 0.5 * p.height, 0.6 * p.width, 0.5 * p.height)
      p.strokeCap(p.ROUND);
      p.line(0.4 * p.width, 0.7 * p.height, 0.6 * p.width, 0.7 * p.height)
      p.strokeCap(p.SQUARE);
      p.line(0.4 * p.width, 0.8 * p.height, 0.6 * p.width, 0.8 * p.height)
      p.strokeCap(p.PROJECT);
      p.line(0.4 * p.width, 0.9 * p.height, 0.6 * p.width, 0.9 * p.height)
   }
}
new p5(sketch)
