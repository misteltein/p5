let sketch = function(p){
   const W = 300
   const H = 300
   
   let x = W * 0.5
   let y = H * 0.5
   
   function highlightCircle(x_, y_, highlight) {
       p.fill(highlight ? p.color(255, 0, 0) : p.color(255, 255, 255))
       p.circle(x_, y_, 100)
   }
   
   p.draw = function () {
       p.background(200);
       highlightCircle(x + 0.5 * x, y, p.keyIsDown(p.RIGHT_ARROW))
       highlightCircle(x - 0.5 * x, y, p.keyIsDown(p.LEFT_ARROW))
       highlightCircle(x, y - 0.5 * y, p.keyIsDown(p.UP_ARROW))
       highlightCircle(x, y + 0.5 * y, p.keyIsDown(p.DOWN_ARROW))
   }
   
   p.setup = function () {
       p.createCanvas(W, H)
   }
}
new p5(sketch)
