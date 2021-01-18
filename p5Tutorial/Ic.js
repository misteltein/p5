let sketch=function(p){
   p.setup = function setup() {
      p.createCanvas(500, 500)
      p.background(p.color(100, 100, 100))
      p.circle(p.width / 2, p.height / 2, 100)
   }
}
new p5(sketch)
