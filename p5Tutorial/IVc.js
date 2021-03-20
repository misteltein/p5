let sketch = function(p){
   const W = 300
   const H = 300
   
   let x = W * 0.5
   let y = H * 0.5
   
   p.draw = function(){
       if (p.keyIsDown(p.LEFT_ARROW)) {
           x -= 1
           x = p.max(0, x)
       }
       if (p.keyIsDown(p.RIGHT_ARROW)) {
           x += 1
           x = p.min(x, W)
       }
       if (p.keyIsDown(p.UP_ARROW)) {
           y -= 1
           y = p.max(0, y)
       }
       if (p.keyIsDown(p.DOWN_ARROW)) {
           y += 1
           y = p.min(y, H)
       }
       p.background(200)
       p.circle(x, y, 100)
   }
   
   p.setup = function(){
       p.createCanvas(W, H)
   }
}

new p5(sketch)
