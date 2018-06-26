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
        var gradient = A10_canvas.crc2.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        A10_canvas.crc2.fillStyle = gradient;
        A10_canvas.crc2.fillRect(0, 0, _x, _y);
        A10_canvas.crc2.strokeRect(0, 0, _x, _y);
    }
    A10_canvas.drawWater = drawWater;
    //function Boden & Kies
    function drawBottom(_c1, _c2, _w, _x, _y) {
        //Boden
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x, _y);
        A10_canvas.crc2.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        A10_canvas.crc2.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        A10_canvas.crc2.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        A10_canvas.crc2.lineTo(_x + 800, _y + 200);
        A10_canvas.crc2.lineTo(_x, _y + 200);
        A10_canvas.crc2.lineTo(_x, _y);
        A10_canvas.crc2.stroke();
        A10_canvas.crc2.fillStyle = _c1;
        A10_canvas.crc2.fill();
        A10_canvas.crc2.closePath();
        //Kies
        for (let i = 0; i < _w; i++) {
            let x = Math.random() * (_x + 800);
            let y = (_y + 100) + Math.random() * (_y - 300);
            drawStones(_c2, _c2, x, y, 1);
        } //close
    }
    A10_canvas.drawBottom = drawBottom;
    //function für sKies
    function drawStones(_cF, _cS, _x, _y, _r) {
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        A10_canvas.crc2.strokeStyle = _cS;
        A10_canvas.crc2.stroke();
        A10_canvas.crc2.fillStyle = _cF;
        A10_canvas.crc2.fill();
        A10_canvas.crc2.closePath();
    }
    A10_canvas.drawStones = drawStones;
})(A10_canvas || (A10_canvas = {}));
//# sourceMappingURL=background.js.map