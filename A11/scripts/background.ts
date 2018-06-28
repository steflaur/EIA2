/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A11_canvas {

    //function Wasser
    export function drawWater(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number): void {
        //Wasser
        var gradient = crc2.createRadialGradient(_x - 400, _y - 80, _r1, _x - 400, _y - 200, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, _x, _y);
        crc2.strokeRect(0, 0, _x, _y);
    }

    //function Boden & Kies
    export function drawBottom(_c1: string, _c2: string, _w: number, _x: number, _y: number): void {

        //Boden
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        crc2.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        crc2.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        crc2.lineTo(_x + 800, _y + 200);
        crc2.lineTo(_x, _y + 200);
        crc2.lineTo(_x, _y);
        crc2.stroke();
        crc2.fillStyle = _c1;
        crc2.fill();
        crc2.closePath();

        //Kies
        for (let i: number = 0; i < _w; i++) {
            let x: number = Math.random() * (_x + 800);
            let y: number = (_y + 100) + Math.random() * (_y - 300);
            drawStones(_c2, _c2, x, y, 1);
        }//close
    }

    //function für sKies
    export function drawStones(_cF: string, _cS: string, _x: number, _y: number, _r: number): void {

        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.strokeStyle = _cS;
        crc2.stroke();
        crc2.fillStyle = _cF;
        crc2.fill();
        crc2.closePath();

    }

}