let sketch = function(p){

   const num = 100;
   const L = 4;
   
   let phases = []
   let angles = []
   let noizes = []
   let rs = []
   let as = []
   const PHI = 1.618033988
   const W = 500
   const X = W - W / PHI
   const Y = W / PHI
   
   p.setup = function setup() {
       p.createCanvas(W, W);
       rs.push(0.3 * p.width)
       for (let i = 1; i < L; ++i) {
           rs.push(rs[i - 1] * PHI)
       }
       for (let i = 0; i < rs.length; ++i) {
           as.push(255 * (Math.exp(-rs[i] / 200) ** 0.8))
       }
   
       for (let i = 0; i < num; ++i) {
           phases.push(p.TWO_PI * Math.random())
           angles.push(p.TWO_PI * Math.random())
           noizes.push(7.5 * (Math.random() - 0.5))
       }
   
       p.noFill()
       p.frameRate(15)
   }
   
   p.draw = function draw() {
       p.background(20)
       for (let l = 0; l < L; ++l) {
           const r = rs[l]
           const a = as[l]
           p.stroke(253, 253, 255, a)
           p.push()
           p.translate(X, Y)
           for (let i = 0; i < num; ++i) {
               p.rotate(angles[i])
               p.ellipse(0, 0, r + noizes[i], r * Math.sin(phases[i] + 1.1 * l));
           }
           p.pop();
       }
       for (let i = 0; i < num; ++i) {
           phases[i] += 0.0015;
       }
   }
}
new p5(sketch)
