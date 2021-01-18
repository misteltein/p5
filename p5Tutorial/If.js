let sketch=function(p){
   p.setup = function setup() {
      p.createCanvas(500, 500)
      p.background(p.color(100, 100, 100))
      const num = 10
      const delta = p.width / num
      for (let i = 0; i <= num; ++i) {
         for (let j = 0; j <= num; ++j) {
            p.circle(i * delta, j * delta, delta)
         }
      }
   }
}
new p5(sketch)
