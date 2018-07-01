/*
Aufgabe 11: Canvas Inheritance
Name: Laura Vogt
Matrikel: 256056
Datum: 1Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11_canvas;
(function (A11_canvas) {
    //static function
    function drawStaticBackground(_canvas) {
        //Rahmen
        A11_canvas.crc2.strokeStyle = "black";
        A11_canvas.crc2.strokeRect(0, 0, _canvas.width, _canvas.height);
        //Wasser
        drawWater("lightblue", "skyblue", _canvas.width, _canvas.height, 10, 400);
        //Boden
        drawBottom("burlywood", "peru", 700, 0, 400);
        //Schatzkiste
        drawBubbler("saddlebrown", "#5a2d0c", 350, 520);
        //Pflanzen
        drawPlant("green", "darkgreen", "brown", 85, 400);
        drawPlant("green", "darkgreen", "brown", 700, 500);
    }
    A11_canvas.drawStaticBackground = drawStaticBackground;
    //function Wasser
    function drawWater(_c1, _c2, _x, _y, _r1, _r2) {
        //Wasser
        var gradient = A11_canvas.crc2.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        A11_canvas.crc2.fillStyle = gradient;
        A11_canvas.crc2.fillRect(0, 0, _x, _y);
        A11_canvas.crc2.strokeRect(0, 0, _x, _y);
    }
    A11_canvas.drawWater = drawWater;
    //function Boden & Kies
    function drawBottom(_c1, _c2, _w, _x, _y) {
        //Boden
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        A11_canvas.crc2.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        A11_canvas.crc2.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        A11_canvas.crc2.lineTo(_x + 800, _y + 200);
        A11_canvas.crc2.lineTo(_x, _y + 200);
        A11_canvas.crc2.lineTo(_x, _y);
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fillStyle = _c1;
        A11_canvas.crc2.fill();
        A11_canvas.crc2.closePath();
        //Kies
        for (let i = 0; i < _w; i++) {
            let x = Math.random() * (_x + 800);
            let y = (_y + 100) + Math.random() * (_y - 300);
            drawStones(_c2, _c2, x, y, 1);
        } //close
    }
    A11_canvas.drawBottom = drawBottom;
    //function für Kies
    function drawStones(_cF, _cS, _x, _y, _r) {
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        A11_canvas.crc2.strokeStyle = _cS;
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.fillStyle = _cF;
        A11_canvas.crc2.fill();
        A11_canvas.crc2.closePath();
    }
    A11_canvas.drawStones = drawStones;
    //function plant
    function drawPlant(_c1, _c2, _c3, _x, _y) {
        //Pflanze mitte
        //Stiel
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        A11_canvas.crc2.lineWidth = 2;
        A11_canvas.crc2.strokeStyle = _c3;
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.closePath();
        //Blatt
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x - 10, _y - 55);
        A11_canvas.crc2.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        A11_canvas.crc2.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        A11_canvas.crc2.fillStyle = _c2;
        A11_canvas.crc2.fill();
        A11_canvas.crc2.closePath();
        //Pflanze rechts
        //Stiel
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        A11_canvas.crc2.lineWidth = 2;
        A11_canvas.crc2.strokeStyle = _c3;
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.closePath();
        //Blatt
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x + 5, _y - 50);
        A11_canvas.crc2.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        A11_canvas.crc2.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        A11_canvas.crc2.fillStyle = _c1;
        A11_canvas.crc2.fill();
        A11_canvas.crc2.closePath();
        //Pflanze links
        //Stiel
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x, _y);
        A11_canvas.crc2.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        A11_canvas.crc2.lineWidth = 2;
        A11_canvas.crc2.strokeStyle = _c3;
        A11_canvas.crc2.stroke();
        A11_canvas.crc2.closePath();
        //Blatt
        A11_canvas.crc2.beginPath();
        A11_canvas.crc2.moveTo(_x - 15, _y - 40);
        A11_canvas.crc2.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        A11_canvas.crc2.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        A11_canvas.crc2.fillStyle = _c1;
        A11_canvas.crc2.fill();
        A11_canvas.crc2.closePath();
    }
    A11_canvas.drawPlant = drawPlant;
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
//# sourceMappingURL=background.js.map