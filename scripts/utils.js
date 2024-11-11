* Adapted from stackoverflow answer by Dorian: https://stackoverflow.com/a/39187274
 */
export function randomGaussian() {
    var rand = 0;

    for (var i = 0; i < 6; i += 1) {
        rand += Math.random() * 2 - 1;
    }

    return rand / 6;
}

/**
 * Draws a filled circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}
/**
 * Draws a stroked circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function strokeCircle(x, y, radius) {
    strokeEllipse(x, y, radius, radius);
}

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/**
 * Draws a stroked ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}

/**
 * Draws a filled and stroked circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function fillAndStrokeCircle(x, y, radius) {
    fillCircle(x, y, radius);
    strokeCircle(x, y, radius);
}

/**
 * Draws a filled and stroked ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillAndStrokeEllipse(x, y, w, h) {
    fillEllipse(x, y, w, h);
    strokeCircle(x, y, w, h);
}

/**
 * Draws a line between 2 coordinates
 * @param {number} x1 the x coordinate of the start of the line
 * @param {number} y1 the y coordinate of the start of the line
 * @param {number} x2 the x coordinate of the end of the line
 * @param {number} y2 the y coordinate of the end of the line
 */
export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}