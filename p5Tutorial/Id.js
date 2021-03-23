let sketch=function(p){
   p.setup = function setup() {
      p.createCanvas(300, 300)
      p.background(p.color(100, 100, 100))
      p.circle(p.width / 2, p.height / 2, p.width)
   }
}
new p5(sketch)
