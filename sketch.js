const mySprite = new Sprite()

function setup() {
    createCanvas(400, 400);
    background(220);
    const unitSprite = new Sprite()
    unitSprite.addShape({
        shape: 'circle',
        args: [-50, 0, 100]
    })
    unitSprite.addShape({
        shape: 'circle',
        args: [50, 0, 100]
    })
    unitSprite.addShape({
        shape: 'line',
        args: [-30, -30, 30, 30]
    })
    noFill()

    for (let i = 0; i < 5; ++i) {
        mySprite.addSprite(unitSprite, {angle: TWO_PI / 5.0 * i})
    }
    mySprite.addSprite(mySprite, {scale: 2.0, angle: 0.0})

    stroke(color(255, 255, 255))
    strokeWeight(3)

    // console.log(p5MultiLayerSprites)
}

let theta = 0.0

function draw() {
    background(220);
    mySprite.draw(0.5 * width, 0.5 * height, {scale: 0.5, angle: theta})
    theta += 0.001
}
