let sketch = function(p){
   let x = 150
   
   p.keyPressed = function() {
       if (p.keyCode === p.LEFT_ARROW) {
           x -= 10
       }
       if (p.keyCode === p.RIGHT_ARROW) {
           x += 10
       }
       return false
   }
   
   p.draw = function() {
       p.background(200)
       p.circle(x, 150, 100)
   }
   
   p.setup = function() {
       p.createCanvas(300, 300)
   }
}
new p5(sketch)
