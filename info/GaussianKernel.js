let sketch = function (p) {
    let points = [];
    const numPoints = 1000;
    const size = 300;
    let clicked = false;

    let centerX = size * 0.5;
    let centerY = size * 0.5;

    p.setup = function () {
        p.createCanvas(size, size);
        const n = Math.sqrt(numPoints);
        const delta = size / n;
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                points.push([delta * (i + 0.25), delta * (j + 0.25), 255]);
            }
        }
        for (let i = 0, s = points.length; i < s; ++i) {
            points[i][0] += 0.7 * delta * (Math.random() - 0.5);
            points[i][1] += 0.7 * delta * (Math.random() - 0.5);
        }
        draw_();
    }

    p.draw = function () {
        if (clicked) {
            draw_();
        }
    }

    function draw_() {
        p.background(0);
        p.strokeWeight(5);
        if (clicked) {
            centerX = p.mouseX;
            centerY = p.mouseY;
        }
        for (let i = 0, s = points.length; i < s; ++i) {
            points[i][2] = scalarToColor(kernel(centerX, centerY, points[i][0], points[i][1], 0.2 * size));
            p.stroke(points[i][2], points[i][2], points[i][2]);
            p.point(points[i][0], points[i][1]);
        }
    }

    function scalarToColor(s) {
        return s * 255;
    }

    function kernel(x1, y1, x2, y2, s = 1.0) {
        const u2 = ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) / (s * s);
        return Math.exp(-0.5 * u2);
    }

    p.mousePressed = function () {
        clicked = !clicked;
    }
}
new p5(sketch)
