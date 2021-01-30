// Note: the origin is (0, 0)
// Todo: Stock をまとめる機能(並進結果)
class Stock {
    constructor() {
        this.stock = [] //array of obj
    }

    add(obj) {
        this.stock.push(obj)
    }

    draw(x, y, s = 1.0, theta = 0.0) {
        push()
        translate(x, y)
        rotate(theta)
        for (const o of this.stock) {
            const args = o.args.map(a => (scale) ? s * a : a)
            switch (o.shape) {
                case 'circle':
                    circle(...args)
                    break
                case 'line':
                    line(...args)
                    break
                default:
                    alert('unknown shape or command')
                    break
            }
        }
        pop()
    }
}

const stock = new Stock()

function setup() {
    createCanvas(400, 400);
    background(220);
    stock.add({
        shape: 'circle',
        args: [-50, 0, 100]
    })
    stock.add({
        shape: 'circle',
        args: [50, 0, 100]
    })
    stock.add({
        shape: 'line',
        args: [-30, -30, 30, 30]
    })
    noFill()
    stroke(color(255, 255, 255))
    strokeWeight(3)
}

let theta = 0.0

function draw() {
    background(220);

    for (let i = 0; i < 3; ++i) {
        stroke(color(0, 0, 0))
        stock.draw(0.5 * width, 0.5 * height, 2.0, theta - PI / 3 * i)
    }
    for (let i = 0; i < 3; ++i) {
        stroke(color(255, 255, 255))
        stock.draw(0.5 * width, 0.5 * height, 1.0, theta + PI / 3 * i)
    }
    theta += 0.01
}
