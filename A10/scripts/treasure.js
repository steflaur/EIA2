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
    //function schatzkiste
    function drawBubbler(_c1, _c2, _x, _y) {
        //Hinten
        A10_canvas.ctx.strokeStyle = "black";
        A10_canvas.ctx.fillStyle = _c2;
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x, _y);
        A10_canvas.ctx.lineTo(_x + 70, _y - 30);
        A10_canvas.ctx.lineTo(_x + 70, _y + 10);
        A10_canvas.ctx.lineTo(_x, _y + 40);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x + 70, _y - 30);
        A10_canvas.ctx.lineTo(_x + 110, _y - 10);
        A10_canvas.ctx.lineTo(_x + 110, _y + 30);
        A10_canvas.ctx.lineTo(_x + 70, _y + 10);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        //Vorn
        A10_canvas.ctx.fillStyle = _c1;
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x, _y);
        A10_canvas.ctx.lineTo(_x + 40, _y + 20);
        A10_canvas.ctx.lineTo(_x + 40, _y + 60);
        A10_canvas.ctx.lineTo(_x, _y + 40);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x + 40, _y + 20);
        A10_canvas.ctx.lineTo(_x + 110, _y - 10);
        A10_canvas.ctx.lineTo(_x + 110, _y + 30);
        A10_canvas.ctx.lineTo(_x + 40, _y + 60);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        //Deckel
        A10_canvas.ctx.fillStyle = _c1;
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x + 100, _y - 50);
        A10_canvas.ctx.quadraticCurveTo(_x + 80, _y - 60, _x + 30, _y - 40);
        A10_canvas.ctx.quadraticCurveTo(_x + 3, _y - 25, _x, _y);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        A10_canvas.ctx.fillStyle = _c2;
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x, _y);
        A10_canvas.ctx.lineTo(_x + 70, _y - 30);
        A10_canvas.ctx.lineTo(_x + 100, _y - 50);
        A10_canvas.ctx.lineTo(_x + 30, _y - 25);
        A10_canvas.ctx.closePath();
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.fill();
        A10_canvas.ctx.beginPath();
        A10_canvas.ctx.moveTo(_x + 30, _y - 25);
        A10_canvas.ctx.quadraticCurveTo(_x + 25, _y - 30, _x + 30, _y - 40);
        A10_canvas.ctx.stroke();
        A10_canvas.ctx.closePath();
    }
    A10_canvas.drawBubbler = drawBubbler;
})(A10_canvas || (A10_canvas = {}));
//# sourceMappingURL=treasure.js.map