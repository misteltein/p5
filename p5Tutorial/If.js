let sketch=function(p){
   p.setup = function setup() {
      p.createCanvas(300, 300)
      p.background(p.color(100, 100, 100))
      for (let i = 0; i < 7; ++i) {
         for (let j = 0; j < 7; ++j) {
            p.circle(i * 50, j * 50, 50)
         }
      }
   }
}
new p5(sketch)
