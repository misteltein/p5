let s = function(p){
   p.setup = function setup() {
       p.createCanvas(256, 256 * 2)
       for (let r = 0; r < 256; ++r) {
           for (let g = 0; g < 256; ++g) {
               p.stroke(p.color(r, g, 200))
               p.point(r, g)
           }
       }
       for (let g = 0; g < 256; ++g) {
           for (let b = 0; b < 256; ++b) {
               p.stroke(p.color(200, g, b))
               p.point(g, b + 256)
           }
       }
   }
}
new p5(s)
