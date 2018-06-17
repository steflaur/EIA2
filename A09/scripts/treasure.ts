/* 
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum: 17Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A09_canvas {

    //function schatzkiste
    export function drawBubbler(_c1: string, _c2: string, _x: number, _y: number, _ctx: CanvasRenderingContext2D): void {
        //Hinten
        _ctx.strokeStyle = b;
        _ctx.fillStyle = _c2;
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.lineTo(_x + 70, _y - 30);
        _ctx.lineTo(_x + 70, _y + 10);
        _ctx.lineTo(_x, _y + 40);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        _ctx.beginPath();
        _ctx.moveTo(_x + 70, _y - 30);
        _ctx.lineTo(_x + 110, _y - 10);
        _ctx.lineTo(_x + 110, _y + 30);
        _ctx.lineTo(_x + 70, _y + 10);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        //Vorn
        _ctx.fillStyle = _c1;
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.lineTo(_x + 40, _y + 20);
        _ctx.lineTo(_x + 40, _y + 60);
        _ctx.lineTo(_x, _y + 40);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        _ctx.beginPath();
        _ctx.moveTo(_x + 40, _y + 20);
        _ctx.lineTo(_x + 110, _y - 10);
        _ctx.lineTo(_x + 110, _y + 30);
        _ctx.lineTo(_x + 40, _y + 60);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        //Deckel
        _ctx.fillStyle = _c1;
        _ctx.beginPath();
        _ctx.moveTo(_x + 100, _y - 50);
        _ctx.quadraticCurveTo(_x + 80, _y - 60, _x + 30, _y - 40);
        _ctx.quadraticCurveTo(_x + 3, _y - 25, _x, _y);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        _ctx.fillStyle = _c2;
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.lineTo(_x + 70, _y - 30);
        _ctx.lineTo(_x + 100, _y - 50);
        _ctx.lineTo(_x + 30, _y - 25);
        _ctx.closePath();
        _ctx.stroke();
        _ctx.fill();

        _ctx.beginPath();
        _ctx.moveTo(_x + 30, _y - 25);
        _ctx.quadraticCurveTo(_x + 25, _y - 30, _x + 30, _y - 40);
        _ctx.stroke();
        _ctx.closePath();
    }


}