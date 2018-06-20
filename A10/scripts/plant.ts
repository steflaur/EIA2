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
    
        //function plant
    export function drawPlant(_c1: string, _c2: string, _c3: string, _x: number, _y: number): void {

        //Pflanze mitte
        //Stiel
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        ctx.lineWidth = 2;
        ctx.strokeStyle = _c3;
        ctx.stroke();
        ctx.closePath();
        //Blatt
        ctx.beginPath();
        ctx.moveTo(_x - 10, _y - 55);
        ctx.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        ctx.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        ctx.fillStyle = _c2;
        ctx.fill();
        ctx.closePath();

        //Pflanze rechts
        //Stiel
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        ctx.lineWidth = 2;
        ctx.strokeStyle = _c3;
        ctx.stroke();
        ctx.closePath();
        //Blatt
        ctx.beginPath();
        ctx.moveTo(_x + 5, _y - 50);
        ctx.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        ctx.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        ctx.fillStyle = _c1;
        ctx.fill();
        ctx.closePath();

        //Pflanze links
        //Stiel
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        ctx.lineWidth = 2;
        ctx.strokeStyle = _c3;
        ctx.stroke();
        ctx.closePath();
        //Blatt
        ctx.beginPath();
        ctx.moveTo(_x - 15, _y - 40);
        ctx.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        ctx.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        ctx.fillStyle = _c1;
        ctx.fill();
        ctx.closePath();

    }
    
}