//let img
//
//function preload() {
//    //img = loadImage('mist.png')
//}

// function drawGrid() {
// 
//     stroke(color(100, 100, 100))
//     for (let i = 0; i < 200; ++i) {
//         line(-10, i * 10, 2000, i * 10)
//         line(i * 10, -10, i * 10, 2000)
//     }
// 
//     stroke(color(0, 0, 0))
//     for (let i = 0; i < 20; ++i) {
//         line(-10, i * 100, 2000, i * 100)
//         line(i * 100, -10, i * 100, 2000)
//     }
// }

function setup() {
    createCanvas(800, 800)
    //background(220)
    //image(img, -500, -200, 2 * width, 2 * height)
    drawGrid({mainTicks:200,color:color(100,100,100,127),length:400})

    //beginShape()
    //const ox = 300
    //const oy = 350
    //const w = 35
    //const h = 350
    //vertex(ox - 0.5 * w, oy - 0.5 * h)
    //vertex(ox + 0.5 * w, oy - 0.5 * h)
    //bezierVertex()
    //vertex(ox + 0.5 * w, oy + 0.5 * h)
    //vertex(ox - 0.5 * w, oy + 0.5 * h)
    //endShape(CLOSE)
}
