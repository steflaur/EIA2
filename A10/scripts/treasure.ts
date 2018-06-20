/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A10_canvas {


    //function schatzkiste
    export function drawBubbler(_c1: string, _c2: string, _x: number, _y: number): void {
        //Hinten
        ctx.strokeStyle = b;
        ctx.fillStyle = _c2;
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x + 70, _y - 30);
        ctx.lineTo(_x + 70, _y + 10);
        ctx.lineTo(_x, _y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(_x + 70, _y - 30);
        ctx.lineTo(_x + 110, _y - 10);
        ctx.lineTo(_x + 110, _y + 30);
        ctx.lineTo(_x + 70, _y + 10);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Vorn
        ctx.fillStyle = _c1;
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x + 40, _y + 20);
        ctx.lineTo(_x + 40, _y + 60);
        ctx.lineTo(_x, _y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(_x + 40, _y + 20);
        ctx.lineTo(_x + 110, _y - 10);
        ctx.lineTo(_x + 110, _y + 30);
        ctx.lineTo(_x + 40, _y + 60);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Deckel
        ctx.fillStyle = _c1;
        ctx.beginPath();
        ctx.moveTo(_x + 100, _y - 50);
        ctx.quadraticCurveTo(_x + 80, _y - 60, _x + 30, _y - 40);
        ctx.quadraticCurveTo(_x + 3, _y - 25, _x, _y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = _c2;
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.lineTo(_x + 70, _y - 30);
        ctx.lineTo(_x + 100, _y - 50);
        ctx.lineTo(_x + 30, _y - 25);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(_x + 30, _y - 25);
        ctx.quadraticCurveTo(_x + 25, _y - 30, _x + 30, _y - 40);
        ctx.stroke();
        ctx.closePath();
    }
}