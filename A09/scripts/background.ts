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

    //function Wasser
    export function drawWater(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number, _ctx: CanvasRenderingContext2D): void {
        //Wasser
        var gradient = _ctx.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _ctx.fillStyle = gradient;
        _ctx.fillRect(0, 0, _x, _y);
        _ctx.strokeRect(0, 0, _x, _y);
    }

    //function Boden & Kies
    export function drawBottom(_c1: string, _c2: string, _w: number, _x: number, _y: number, _ctx: CanvasRenderingContext2D): void {

        //Boden
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        _ctx.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        _ctx.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        _ctx.lineTo(_x + 800, _y + 200);
        _ctx.lineTo(_x, _y + 200);
        _ctx.lineTo(_x, _y);
        _ctx.stroke();
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();

        //Kies
        for (let i: number = 0; i < _w; i++) {
            let x: number = Math.random() * (_x + 800);
            let y: number = (_y + 100) + Math.random() * (_y - 300);
            drawBubble(_c2, _c2, x, y, 1, _ctx);
        }//close
    }

    //function bubble für Bubbels und Kies
    export function drawBubble(_cF: string, _cS: string, _x: number, _y: number, _r: number, _ctx: CanvasRenderingContext2D): void {

        _ctx.beginPath();
        _ctx.arc(_x, _y, _r, 0, 2 * Math.PI);
        _ctx.strokeStyle = _cS;
        _ctx.stroke();
        _ctx.fillStyle = _cF;
        _ctx.fill();
        _ctx.closePath();

    }

}