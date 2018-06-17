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
    //function plant
    function drawPlant(_c1, _c2, _c3, _x, _y, _ctx) {
        //Pflanze mitte
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y - 55);
        _ctx.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        _ctx.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();
        //Pflanze rechts
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x + 5, _y - 50);
        _ctx.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        _ctx.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
        //Pflanze links
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 15, _y - 40);
        _ctx.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        _ctx.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
    }
    A09_canvas.drawPlant = drawPlant;
})(A09_canvas || (A09_canvas = {}));
//# sourceMappingURL=plant.js.map