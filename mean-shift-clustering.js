let points = [];
const numPoints=500;
const width = 600;
const height= 600;
const radius= 150;
const centerA = [width/3.0,height/3.0];
const centerB = [width-width/3.0,height-height/3.0]
let sxA;
let syA;
let sxB;
let syB;

let targetIndex = 0;
let probe;

let trajectry=[];

let rightClicked = false;

function init(){
  points = [];
  sxA=0.2+0.1*(Math.random()-0.5);
  syA=0.2+0.1*(Math.random()-0.5);
  sxB=0.4+0.1*(Math.random()-0.5);
  syB=0.4+0.1*(Math.random()-0.5);
  targetIndex = 0;
  trajectry=[];
  for(let i=0;i<numPoints;i+=2){
    let x = genNormalDist(sxA);
    let y = genNormalDist(syA);
    points[i]=[radius*x+centerA[0],radius*y+centerA[1],'unknown'];
    x = genNormalDist(sxB);
    y = genNormalDist(syB);
    points[i+1]=[radius*x+centerB[0],radius*y+centerB[1],'unknown'];
  }
  strokeWeight(2);
  probe = points[targetIndex];
  trajectry.push(probe);
}

function setup() {
  createCanvas(width, height);
  frameRate(2);
  init();
}

function mousePressed()
{
  init();
  if(mouseButton===RIGHT){
    rightClicked=!rightClicked;
  }
}

function draw() {
  if(rightClicked)return;
  if(targetIndex===numPoints)init();
  background(238, 237, 238);
  for(let i=0;i<numPoints;++i){
    const type = points[i][2];
    switch(type){
      case 'unknown':
        stroke(0,0,0);
        strokeWeight(2);
        break;
      case 'A':
        stroke(255,0,0);
        strokeWeight(5);
        break;
      case 'B':
        stroke(0,0,255);
        strokeWeight(5);
        break;
      default:
       stroke(0,255,0);
       strokeWeight(2);
    }
    point(points[i][0],points[i][1]);
  }
  stroke(255,0,255);
  strokeWeight(10);
  point(probe[0],probe[1]);
  n = next(probe[0],probe[1]);
  strokeWeight(2);
  if(distance2(probe[0],n[0],probe[1],n[1])<10)
  {
    if(distance2(centerA[0],n[0],centerA[1],n[1])<100){
      points[targetIndex][2]='A';
      stroke(255,0,0);
    }
    else{
      points[targetIndex][2]='B';
      stroke(0,0,255);
    }
    //display final trajectry
    strokeWeight(2);
    for(let i=1,size=trajectry.length;i<size;++i)
    {
      line(trajectry[i-1][0],trajectry[i-1][1],trajectry[i][0],trajectry[i][1]);
    }
    strokeWeight(10);
    point(probe[0],probe[1]);
    
    //change the target
    targetIndex += 1;
    probe = points[targetIndex];
    trajectry=[probe];
  }
  else{
    stroke(255,0,255);
    strokeWeight(2);
    for(let i=1,size=trajectry.length;i<size;++i)
    {
      line(trajectry[i-1][0],trajectry[i-1][1],trajectry[i][0],trajectry[i][1]);
    }
    probe = n;
    trajectry.push(probe);
  }
}

function genNormalDist(sigma){
  let r=0;
  for(let i=0;i<12;++i)
  {
    r += Math.random();    
  }
  return (r-6.0)*sigma;
}

function kernel(u2,s=0.5){
  u2/=s*s;
  return Math.exp(-0.5*u2)
}

function distance2(ax,bx,ay,by)
{
  return (ax-bx)*(ax-bx) + (ay-by)*(ay-by);
}

function next(x,y){
  let top_x=0.0;
  let top_y=0.0;
  let bottom=0.0;
  for(let i=0;i<numPoints;++i)
  {
    const xi = points[i][0];
    const yi = points[i][1];
    const u2= distance2(probe[0],xi,probe[1],yi);
    const k = kernel(u2,70);
    top_x += k*xi;
    top_y += k*yi;
    bottom += k;
  }
  return [top_x/bottom,top_y/bottom];
}
