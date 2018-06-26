/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10_canvas;
(function (A10_canvas) {
    //function plant
    function drawPlant(_c1, _c2, _c3, _x, _y) {
        //Pflanze mitte
        //Stiel
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x, _y);
        A10_canvas.crc2.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        A10_canvas.crc2.lineWidth = 2;
        A10_canvas.crc2.strokeStyle = _c3;
        A10_canvas.crc2.stroke();
        A10_canvas.crc2.closePath();
        //Blatt
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x - 10, _y - 55);
        A10_canvas.crc2.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        A10_canvas.crc2.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        A10_canvas.crc2.fillStyle = _c2;
        A10_canvas.crc2.fill();
        A10_canvas.crc2.closePath();
        //Pflanze rechts
        //Stiel
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x, _y);
        A10_canvas.crc2.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        A10_canvas.crc2.lineWidth = 2;
        A10_canvas.crc2.strokeStyle = _c3;
        A10_canvas.crc2.stroke();
        A10_canvas.crc2.closePath();
        //Blatt
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x + 5, _y - 50);
        A10_canvas.crc2.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        A10_canvas.crc2.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        A10_canvas.crc2.fillStyle = _c1;
        A10_canvas.crc2.fill();
        A10_canvas.crc2.closePath();
        //Pflanze links
        //Stiel
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x, _y);
        A10_canvas.crc2.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        A10_canvas.crc2.lineWidth = 2;
        A10_canvas.crc2.strokeStyle = _c3;
        A10_canvas.crc2.stroke();
        A10_canvas.crc2.closePath();
        //Blatt
        A10_canvas.crc2.beginPath();
        A10_canvas.crc2.moveTo(_x - 15, _y - 40);
        A10_canvas.crc2.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        A10_canvas.crc2.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        A10_canvas.crc2.fillStyle = _c1;
        A10_canvas.crc2.fill();
        A10_canvas.crc2.closePath();
    }
    A10_canvas.drawPlant = drawPlant;
})(A10_canvas || (A10_canvas = {}));
//# sourceMappingURL=plant.js.map