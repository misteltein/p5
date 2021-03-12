let sketch=function(p)
{
   p.keyTyped() {
       if (p.key === 'q') {
           p.circle(0.5 * p.width, 0.5 * p.height, 0.7 * p.width)
       }
       if (p.key === 'w') {
           p.background(200)
       }
   }
   
   p.setup() {
       p.createCanvas(300, 300)
       p.background(200)
   }
}
new p5(sketch)
