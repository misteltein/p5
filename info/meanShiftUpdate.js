let sketch = function (p) {
    let points = [];
    const numPoints = 500;
    const width = 600;
    const height = 600;
    const radius = 150;
    const centerA = [width / 3.0, height / 3.0];
    const centerB = [width - width / 3.0, height - height / 3.0]
    let sxA;
    let syA;
    let sxB;
    let syB;
    let probe;

    let clicked = false;

    function init() {
        points = [];
        sxA = 0.2 + 0.1 * (Math.random() - 0.5);
        syA = 0.2 + 0.1 * (Math.random() - 0.5);
        sxB = 0.4 + 0.1 * (Math.random() - 0.5);
        syB = 0.4 + 0.1 * (Math.random() - 0.5);
        for (let i = 0; i < numPoints; i += 2) {
            let x = genNormalDist(sxA);
            let y = genNormalDist(syA);
            points[i] = [radius * x + centerA[0], radius * y + centerA[1]];
            x = genNormalDist(sxB);
            y = genNormalDist(syB);
            points[i + 1] = [radius * x + centerB[0], radius * y + centerB[1]];
        }
        p.strokeWeight(3);
        probe = [0.5 * width, 0.5 * height];
    }

    p.setup = function () {
        p.createCanvas(width, height);
        p.frameRate(30);
        init();
        draw_();
    }

    p.mousePressed = function () {
        clicked = !clicked;
    }

    function draw_() {
        p.background(0, 0, 0);
        for (let i = 0; i < numPoints; ++i) {
            const u2 = distance2(probe[0], points[i][0], probe[1], points[i][1]);
            const c = kernel(u2, 70) * 255;
            p.stroke(c, c, c);
            p.point(points[i][0], points[i][1]);
        }
        const n = next(probe[0], probe[1])
        p.stroke(255, 255, 255);
        p.line(probe[0], probe[1], n[0], n[1])
    }

    p.draw = function () {
        if (!clicked) return;
        probe = [p.mouseX, p.mouseY];
        draw_();
    }

    function genNormalDist(sigma) {
        let r = 0;
        for (let i = 0; i < 12; ++i) {
            r += Math.random();
        }
        return (r - 6.0) * sigma;
    }

    function kernel(u2, s = 0.5) {
        u2 /= s * s;
        return Math.exp(-0.5 * u2)
    }

    function distance2(ax, bx, ay, by) {
        return (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
    }

    function next(x, y) {
        let top_x = 0.0;
        let top_y = 0.0;
        let bottom = 0.0;
        for (let i = 0; i < numPoints; ++i) {
            const xi = points[i][0];
            const yi = points[i][1];
            const u2 = distance2(probe[0], xi, probe[1], yi);
            const k = kernel(u2, 70);
            top_x += k * xi;
            top_y += k * yi;
            bottom += k;
        }
        return [top_x / bottom, top_y / bottom];
    }
}

new p5(sketch)
