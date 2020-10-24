let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(100, 100);
    p.background(0);
  }
};
new p5(sketch, window.document.getElementById('container'));
