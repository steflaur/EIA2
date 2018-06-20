/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10_canvas;
(function (A10_canvas) {
    //function Wasser
    function drawWater(_c1, _c2, _x, _y, _r1, _r2) {
        //Wasser
        var gradient = A10_canvas.ctx.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        A10_canvas.ctx.fillStyle = gradient;
        A10_canvas.ctx.fillRect(0, 0, _x, _y);
        A10_canvas.ctx.strokeRect(0, 0, _x, _y);
    }
    A10_canvas.drawWater = drawWater;
    //function Boden & Kies
    function drawBottom(_c1, _c2, _w, _x, _y) {
        //Boden
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x, _y);
        A10_canvas.ctx.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        A10_canvas.ctx.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        A10_canvas.ctx.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        A10_canvas.ctx.lineTo(_x + 800, _y + 200);
        A10_canvas.ctx.lineTo(_x, _y + 200);
        A10_canvas.ctx.lineTo(_x, _y);
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fillStyle = _c1;
        A10_canvas.ctx.fill();
        A10_canvas.ctx.closePath();
        //Kies
        for (let i = 0; i < _w; i++) {
            let x = Math.random() * (_x + 800);
            let y = (_y + 100) + Math.random() * (_y - 300);
            drawStones(_c2, _c2, x, y, 1);
        } //close
    }
    A10_canvas.drawBottom = drawBottom;
    //function bubble für Bubbels und Kies
    function drawStones(_cF, _cS, _x, _y, _r) {
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.arc(_x, _y, _r, 0, 2 * Math.PI);
        A10_canvas.ctx.strokeStyle = _cS;
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fillStyle = _cF;
        A10_canvas.ctx.fill();
        A10_canvas.ctx.closePath();
    }
    A10_canvas.drawStones = drawStones;
})(A10_canvas || (A10_canvas = {}));
//# sourceMappingURL=background.js.map