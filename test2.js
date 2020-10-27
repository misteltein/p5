let sketch = function(p) {
   let points=[]
   const numPoints=1000;
   const size=300;
   p.setup = function(){
      p.createCanvas(size, size);
      const n = Math.sqrt(numPoints);
      const delta = size/n;
      for(let i=0;i<n;++i){
        for(let j=0;j<n;++j){
          points.push([delta*(i+0.25),delta*(j+0.25),255]);
        }
      }
      for(let i=0,s=points.length;i<s;++i)
      {
        points[i][0] += 0.7*delta*(Math.random()-0.5);
        points[i][1] += 0.7*delta*(Math.random()-0.5);
      }
   }
   p.draw = function(){
      p.background(0);
      p.strokeWeight(3);
      for(let i=0,s=points.length;i<s;++i)
      {
        p.stroke(points[i][2],points[i][2],points[i][2]);
        p.point(points[i][0],points[i][1]);
      }
   }
};
new p5(sketch);

