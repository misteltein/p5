// Note: the origin is (0, 0)
// Todo: Sprite を合成する機能(並進，回転の操作の結果を重ねて新しいものつくったりできるように)
// Todo: 名前決めて，これ切り出して開発しないか？
// Memo: p5MultiLayerSprites.js

// 複数の描画命令から作られる図形を１つのオブジェクトとして扱うためのクラス
function Coordinate(a) {
    return a ? a : 0.0
}

function Scale(s) {
    return s ? s : 1.0
}

function Angle(theta) {
    return theta ? theta : 0.0
}

class Sprite {
    constructor() {
        this.stock = [] // array of a command for drawing and a other sprite
        this.shift = // translational-position vector
            {
                x: 0.0,
                y: 0.0
            }
        this.s = Scale(NaN) // scaling factor
        this.theta = Angle(NaN) // rotational angle expressed in radians
    }

    copy() {
        const rep = new Sprite()
        // Todo: stock 以外もコピーすること
        // 配列かどうか判定してforeachするのもいいかなって
        rep.shift = {}
        rep.shift.x = this.shift.x
        rep.shift.y = this.shift.y
        rep.s = this.s
        rep.theta = this.theta
        rep.stock = this.stock.slice(0, this.stock.length)
        return rep
    }

    merge(otherSprite, x, y, s, theta) {
        // １つの命令として別のスプライトをストック
        otherSprite.move(x, y)
        otherSprite.addScale(s)
        otherSprite.addAngle(theta)

        this.stock.push({
            isSprite: true,
            sprite: otherSprite
        })
    }

    setScale(s) {
        this.s = Scale(s)
    }

    addScale(s) {
        this.s *= Scale(s)
    }

    setAngle(theta) {
        this.theta = Angle(theta)
    }

    addAngle(theta) {
        this.theta += Angle(theta)
    }

    // カンバスを動かしたあとの位置にあるようなみためにする
    moveCanvas(x, y) {
        this.shift.x -= Coordinate(x)
        this.shift.y -= Coordinate(y)
    }

    // スプライトをカンバス上で動かすようなみためにする
    move(x, y) {
        this.shift.x += Coordinate(x)
        this.shift.y += Coordinate(y)
    }

    // スプライトを構成するための命令を追加する
    add(obj) {
        obj.isSprite = false
        this.stock.push(obj)
    }


    // remove(idx) みたいなのは作らないこと。そもそも不要なものは追加しない方針で
    // もしくは console.log で警告するけど使わせてやるぜくらい？

    // まとめて描画
    draw(x, y, s = 1.0, theta = 0.0) {
        // here, s and theta are additional parameters for translation and rotation
        s = Scale(s)
        theta = Angle(theta)

        // 既存の座標系やstroke, strokeWeight などの設定を取っておく
        push()

        // draw とスプライトがもつ並進・回転の指定を座標系に反映
        translate(x + this.shift.x, y + this.shift.y)
        rotate(theta + this.theta)

        for (const o of this.stock) {
            if (!o.isSprite) {
                const args = o.args.map(a => s * this.s * a)
                // Note: これメタプロみたいなことして１つにまとめたいけどjsでは無理そう
                switch (o.shape) {
                    case 'circle':
                        circle(...args)
                        break
                    case 'line':
                        line(...args)
                        break
                    case 'rect':
                        rect(...args)
                        break
                    default:
                        alert('unknown shape or command')
                        break
                }
            } else {
                o.sprite.draw(
                    0.0, 0.0,
                    s * this.s,
                    this.theta
                )
            }
        }

        // 座標系と描画の設定をthis.draw が実行される前の状態に戻す
        pop()
    }
}

const mySprite = new Sprite()
const def = NaN

function setup() {
    createCanvas(400, 400);
    background(220);
    const unitSprite = new Sprite()
    unitSprite.add({
        shape: 'circle',
        args: [-50, 0, 100]
    })
    unitSprite.add({
        shape: 'circle',
        args: [50, 0, 100]
    })
    unitSprite.add({
        shape: 'line',
        args: [-30, -30, 30, 30]
    })
    noFill()

    for (let i = 0; i < 5; ++i) {
        mySprite.merge(unitSprite.copy(), def, def, 1.0, TWO_PI / 5.0 * i)
    }
    mySprite.merge(mySprite.copy(), def, def, 2, def)


    stroke(color(255, 255, 255))
    strokeWeight(3)
}

let theta = 0.0

function draw() {
    background(220);
    mySprite.draw(0.5 * width, 0.5 * height, NaN, theta)
    theta += 0.001
}
