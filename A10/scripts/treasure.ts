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
        crc2.strokeStyle = "black";
        crc2.fillStyle = _c2;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 70, _y - 30);
        crc2.lineTo(_x + 70, _y + 10);
        crc2.lineTo(_x, _y + 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 70, _y - 30);
        crc2.lineTo(_x + 110, _y - 10);
        crc2.lineTo(_x + 110, _y + 30);
        crc2.lineTo(_x + 70, _y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Vorn
        crc2.fillStyle = _c1;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 40, _y + 20);
        crc2.lineTo(_x + 40, _y + 60);
        crc2.lineTo(_x, _y + 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 40, _y + 20);
        crc2.lineTo(_x + 110, _y - 10);
        crc2.lineTo(_x + 110, _y + 30);
        crc2.lineTo(_x + 40, _y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Deckel
        crc2.fillStyle = _c1;
        crc2.beginPath();
        crc2.moveTo(_x + 100, _y - 50);
        crc2.quadraticCurveTo(_x + 80, _y - 60, _x + 30, _y - 40);
        crc2.quadraticCurveTo(_x + 3, _y - 25, _x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.fillStyle = _c2;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 70, _y - 30);
        crc2.lineTo(_x + 100, _y - 50);
        crc2.lineTo(_x + 30, _y - 25);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 30, _y - 25);
        crc2.quadraticCurveTo(_x + 25, _y - 30, _x + 30, _y - 40);
        crc2.stroke();
        crc2.closePath();
    }
}