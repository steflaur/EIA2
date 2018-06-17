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


    //function dori
    export function doriFish(_c1: string, _c2: string, _c3: string, _c4: string, _c5: string, _x: number, _y: number, _ctx: CanvasRenderingContext2D): void {

        //Fisch
        //Flosse gross hinten
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 25, _y + 20, _x + 60, _y - 10);
        _ctx.quadraticCurveTo(_x + 35, _y + 25, _x + 60, _y + 60);
        _ctx.quadraticCurveTo(_x + 25, _y + 30, _x, _y + 50);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();

        //Streifen
        _ctx.beginPath();
        _ctx.moveTo(_x + 70, _y - 15);
        _ctx.quadraticCurveTo(_x + 40, _y + 15, _x + 20, _y + 12);
        _ctx.strokeStyle = _c4;
        _ctx.stroke();
        _ctx.closePath();

        _ctx.beginPath();
        _ctx.moveTo(_x + 70, _y + 65);
        _ctx.quadraticCurveTo(_x + 40, _y + 35, _x + 20, _y + 38);
        _ctx.stroke();
        _ctx.closePath();


        //Körper
        _ctx.beginPath();
        _ctx.moveTo(_x + 20, _y - 20);
        _ctx.quadraticCurveTo(_x - 32, _y - 10, _x - 42, _y + 27);

        //Mund
        _ctx.quadraticCurveTo(_x - 38, _y + 30, _x - 30, _y + 29);
        _ctx.quadraticCurveTo(_x - 32, _y + 35, _x - 42, _y + 33);

        _ctx.quadraticCurveTo(_x - 40, _y + 55, _x + 20, _y + 70);
        _ctx.quadraticCurveTo(_x - 5, _y + 20, _x + 20, _y - 20);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();

        //Streifen klein
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y + 60);
        _ctx.quadraticCurveTo(_x - 35, _y + 20, _x - 10, _y - 10);
        _ctx.quadraticCurveTo(_x - 25, _y + 20, _x - 10, _y + 60);
        _ctx.fillStyle = _c3;
        _ctx.fill();
        _ctx.closePath();

        //Streifen gross
        _ctx.beginPath();
        _ctx.moveTo(_x + 5, _y + 66);
        _ctx.quadraticCurveTo(_x - 20, _y + 20, _x + 5, _y - 16);
        _ctx.quadraticCurveTo(_x - 10, _y + 20, _x + 5, _y + 66);
        _ctx.fill();
        _ctx.closePath();


        //Augen
        //aussen
        _ctx.beginPath();
        _ctx.arc(_x - 15, _y + 10, 5, 0, 2 * Math.PI);
        _ctx.strokeStyle = b;
        _ctx.stroke();
        _ctx.fillStyle = _c5;
        _ctx.fill();
        _ctx.closePath();

        //innen
        _ctx.beginPath();
        _ctx.arc(_x - 15, _y + 10, 2.5, 0, 2 * Math.PI);
        _ctx.fillStyle = b;
        _ctx.fill();
        _ctx.closePath();

        //Wimper
        _ctx.beginPath();
        _ctx.moveTo(_x - 18, _y + 5);
        _ctx.quadraticCurveTo(_x - 15, _y - 22, _x + 30, _y - 30);
        _ctx.quadraticCurveTo(_x - 7, _y - 20, _x - 18, _y + 5);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();

        //vordere Flosse
        _ctx.beginPath();
        _ctx.moveTo(_x - 17, _y + 45);
        _ctx.quadraticCurveTo(_x - 20, _y + 60, _x, _y + 75);
        _ctx.closePath();
        _ctx.fillStyle = _c4;
        _ctx.fill();

        //hintere Flosse
        _ctx.beginPath();
        _ctx.moveTo(_x - 8, _y + 50);
        _ctx.quadraticCurveTo(_x - 12, _y + 63, _x + 23, _y + 84);
        _ctx.closePath();
        _ctx.fill();

    }

}