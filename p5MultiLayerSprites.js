// Note: the origin is (0, 0)
// Todo: JSON で吐き出したり読み込んだりできたら最高じゃない？
class Sprite {
    constructor() {
        this.elements = [] // element is shape or sprite
        this.shiftX = 0.0
        this.shiftY = 0.0
        this.scale = 1.0 // scaling factor
        this.angle = 0.0 // rotational angle expressed in radians
    }

    copy() {
        const replica = new Sprite()
        replica.shiftX = this.shiftX
        replica.shiftY = this.shiftY
        replica.scale = this.scale
        replica.angle = this.angle
        replica.elements = this.elements.slice(0, this.elements.length)
        return replica
    }

    addSprite(sprite, options = {}) {
        // １つの要素として別のスプライトをストック
        const sprite_ = sprite.copy()

        sprite_.shift(options.x, options.y)
        if (options.scale)
            sprite_.addScale(options.scale)
        if (options.angle)
            sprite_.addAngle(options.angle)

        this.elements.push({
            isSprite: true,
            sprite: sprite_
        })
    }

    setScale(scale) {
        this.scale = scale
    }

    addScale(scale) {
        this.scale *= scale
    }

    setAngle(angle) {
        this.angle = angle
    }

    addAngle(angle) {
        this.angle += angle
    }

    // カンバスを動かしたあとの位置にあるようなみためにする
    moveCanvas(x, y) {
        this.shift(-x, -y)
    }

    // スプライトをカンバス上で動かすようなみためにする
    shift(x, y) {
        if (x)
            this.shiftX += x
        if (y)
            this.shiftY += y
    }

    // スプライトを構成するための命令を追加する
    addShape(shape) {
        shape.isSprite = false
        this.elements.push(shape)
    }


    // remove(idx) みたいなのは作らないこと。そもそも不要なものは追加しない方針で
    // もしくは console.log で警告するけど使わせてやるぜくらい？

    // まとめて描画
    draw(x, y, options = {}) {
        // 既存の座標系やstroke, strokeWeight などの設定を取っておく
        push()
        // draw とスプライトがもつ並進・回転の指定を座標系に反映
        translate(x + this.shiftX, y + this.shiftY)
        rotate(this.angle + (options.angle ?? 0.0))

        for (const element of this.elements) {
            if (!element.isSprite) {
                const args = element.args.map(arg => (options.scale ?? 1.0) * this.scale * arg)
                // Note: これメタプロみたいなことして１つにまとめたいけどjsでは無理そう
                switch (element.shape) {
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
                element.sprite.draw(
                    0.0, 0.0,
                    {
                        scale: (options.scale ?? 1.0) * this.scale,
                        angle: this.angle
                    }
                )
            }
        }

        // 座標系と描画の設定をthis.draw が実行される前の状態に戻す
        pop()
    }
}
