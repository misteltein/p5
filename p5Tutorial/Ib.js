let sketch=function(p){
   p.setup = function setup() {
      p.createCanvas(500, 500)
      p.background(p.color(100, 100, 100))
      p.circle(0, 0, 100)
   }
}
new p5(sketch)