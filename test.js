var s = function(p){
  p.setup = function(){
    p.createCanvas(600, 400);
  };

  p.draw = function(){
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  };
}

var myp5 = new p5(s,'hooo');
