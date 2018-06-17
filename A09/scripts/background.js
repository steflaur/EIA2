/*
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum: 17Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A09_canvas;
(function (A09_canvas) {
    //function Wasser
    function drawWater(_c1, _c2, _x, _y, _r1, _r2, _ctx) {
        //Wasser
        var gradient = _ctx.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _ctx.fillStyle = gradient;
        _ctx.fillRect(0, 0, _x, _y);
        _ctx.strokeRect(0, 0, _x, _y);
    }
    A09_canvas.drawWater = drawWater;
    //function Boden & Kies
    function drawBottom(_c1, _c2, _w, _x, _y, _ctx) {
        //Boden
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        _ctx.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        _ctx.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        _ctx.lineTo(_x + 800, _y + 200);
        _ctx.lineTo(_x, _y + 200);
        _ctx.lineTo(_x, _y);
        _ctx.stroke();
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
        //Kies
        for (let i = 0; i < _w; i++) {
            let x = Math.random() * (_x + 800);
            let y = (_y + 100) + Math.random() * (_y - 300);
            drawBubble(_c2, _c2, x, y, 1, _ctx);
        } //close
    }
    A09_canvas.drawBottom = drawBottom;
    //function bubble für Bubbels und Kies
    function drawBubble(_cF, _cS, _x, _y, _r, _ctx) {
        _ctx.beginPath();
        _ctx.arc(_x, _y, _r, 0, 2 * Math.PI);
        _ctx.strokeStyle = _cS;
        _ctx.stroke();
        _ctx.fillStyle = _cF;
        _ctx.fill();
        _ctx.closePath();
    }
    A09_canvas.drawBubble = drawBubble;
})(A09_canvas || (A09_canvas = {}));
//# sourceMappingURL=background.js.map