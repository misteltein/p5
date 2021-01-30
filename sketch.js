// Note: the origin is (0, 0)

class Stock {
    constructor() {
        this.stock = [] //array of obj
    }

    add(obj) {
        this.stock.push(obj);
    }

    draw(x, y, s = 1.0, theta = 0.0) {
        const scale = s !== 1.0
        const rotation = theta !== 0.0
        const cosTheta = Math.cos(theta)
        const sinTheta = Math.sin(theta)

        function rot(pointX, pointY) {//r is 2d array
            return [
                pointX * cosTheta - pointY * sinTheta,
                pointX * sinTheta + pointY * cosTheta
            ]
        }

        for (const o of this.stock) {
            const args = o.args.map(a => (scale) ?
                s * a : a
            )
            switch (o.shape) {
                case 'circle':
                    const point = rot(args[0], args[1])
                    args[0] = point[0] + x
                    args[1] = point[1] + y
                    circle(...args)
                    break
                case 'line':
                    const pointA = rot(args[0], args[1])
                    const pointB = rot(args[2], args[3])
                    args[0] = pointA[0] + x
                    args[1] = pointA[1] + y
                    args[2] = pointB[0] + x
                    args[3] = pointB[1] + y
                    line(...args)
                    break
                default:
                    alert('unknown shape or command')
                    break
            }
        }
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
        args: [0, 0, 10, 10]
    })
    noFill()
    strokeWeight(1)
    stock.draw(0.5 * width, 0.5 * height)
    stock.draw(0.5 * width, 0.5 * height, -2, 0.1)
}

function draw() {
    // background(220);
}
