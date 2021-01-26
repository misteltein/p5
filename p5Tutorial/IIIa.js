let sketch=function(p){
   p.setup = function setup() {
     p.createCanvas(256, 256)
     p.background(p.color(180,180,180))
     
     p.point(0.2*p.width,0.5*p.height)
     
     p.strokeWeight(10)
     p.point(0.4*p.width,0.5*p.height)
     p.stroke(p.color(255,255,255))
     
     p.point(0.6*p.width,0.5*p.height)
     
     p.strokeWeight(20)
     p.stroke(p.color(255,0,255))
     p.point(0.8*p.width,0.5*p.height)
   }
}
new p5(sketch)
