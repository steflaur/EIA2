/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11_canvas;
(function (A11_canvas) {
    //function schatzkiste
    function drawBubbler(_c1, _c2, _x, _y) {
        //Hinten
        A11_canvas.crc2.strokeStyle = "black";
        A11_canvas.crc2.fillStyle = _c2;
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.lineTo(_x + 70, _y - 30);
        A11_canvas.crc2.lineTo(_x + 70, _y + 10);
        A11_canvas.crc2.lineTo(_x, _y + 40);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x + 70, _y - 30);
        A11_canvas.crc2.lineTo(_x + 110, _y - 10);
        A11_canvas.crc2.lineTo(_x + 110, _y + 30);
        A11_canvas.crc2.lineTo(_x + 70, _y + 10);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        //Vorn
        A11_canvas.crc2.fillStyle = _c1;
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.lineTo(_x + 40, _y + 20);
        A11_canvas.crc2.lineTo(_x + 40, _y + 60);
        A11_canvas.crc2.lineTo(_x, _y + 40);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x + 40, _y + 20);
        A11_canvas.crc2.lineTo(_x + 110, _y - 10);
        A11_canvas.crc2.lineTo(_x + 110, _y + 30);
        A11_canvas.crc2.lineTo(_x + 40, _y + 60);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        //Deckel
        A11_canvas.crc2.fillStyle = _c1;
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x + 100, _y - 50);
        A11_canvas.crc2.quadraticCurveTo(_x + 80, _y - 60, _x + 30, _y - 40);
        A11_canvas.crc2.quadraticCurveTo(_x + 3, _y - 25, _x, _y);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        A11_canvas.crc2.fillStyle = _c2;
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.lineTo(_x + 70, _y - 30);
        A11_canvas.crc2.lineTo(_x + 100, _y - 50);
        A11_canvas.crc2.lineTo(_x + 30, _y - 25);
        A11_canvas.crc2.closePath();
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fill();
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x + 30, _y - 25);
        A11_canvas.crc2.quadraticCurveTo(_x + 25, _y - 30, _x + 30, _y - 40);
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.closePath();
    }
    A11_canvas.drawBubbler = drawBubbler;
})(A11_canvas || (A11_canvas = {}));
//# sourceMappingURL=treasure.js.map