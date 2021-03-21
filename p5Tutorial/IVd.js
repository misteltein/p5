let sketch = function(p){
   const W = 300
   const H = 300
   
   let x = W * 0.5
   let y = H * 0.5
   
   let downLeftArrow = false
   let downRightArrow = false
   let downUpArrow = false
   let downDownArrow = false
   
   p.keyPressed = function () {
       if (p.keyCode === p.LEFT_ARROW) {
           downLeftArrow = true
       }
       if (p.keyCode === p.RIGHT_ARROW) {
           downRightArrow = true
       }
       if (p.keyCode === p.UP_ARROW) {
           downUpArrow = true
       }
       if (p.keyCode === p.DOWN_ARROW) {
           downDownArrow = true
       }
       return false
   }
   
   p.keyReleased = function () {
       if (p.keyCode === p.LEFT_ARROW) {
           downLeftArrow = false
       }
       if (p.keyCode === p.RIGHT_ARROW) {
           downRightArrow = false
       }
       if (p.keyCode === p.UP_ARROW) {
           downUpArrow = false
       }
       if (p.keyCode === p.DOWN_ARROW) {
           downDownArrow = false
       }
       return false
   }
   
   function highlightCircle(x_, y_, highlight) {
       p.fill(highlight ? p.color(255, 0, 0) : p.color(255, 255, 255))
       p.circle(x_, y_, 100)
   }
   
   p.draw = function () {
       p.background(200);
       highlightCircle(x + 0.5 * x, y, downRightArrow)
       highlightCircle(x - 0.5 * x, y, downLeftArrow)
       highlightCircle(x, y - 0.5 * y, downUpArrow)
       highlightCircle(x, y + 0.5 * y, downDownArrow)
   }
   
   p.setup = function () {
       p.createCanvas(W, H)
   }
}
new p5(sketch)
