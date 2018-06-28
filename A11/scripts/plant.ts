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

    //function plant
    export function drawPlant(_c1: string, _c2: string, _c3: string, _x: number, _y: number): void {

        //Pflanze mitte
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        crc2.lineWidth = 2;
        crc2.strokeStyle = _c3;
        crc2.stroke();
        crc2.closePath();
        //Blatt
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y - 55);
        crc2.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        crc2.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        crc2.fillStyle = _c2;
        crc2.fill();
        crc2.closePath();

        //Pflanze rechts
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        crc2.lineWidth = 2;
        crc2.strokeStyle = _c3;
        crc2.stroke();
        crc2.closePath();
        //Blatt
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 50);
        crc2.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        crc2.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        crc2.fillStyle = _c1;
        crc2.fill();
        crc2.closePath();

        //Pflanze links
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        crc2.lineWidth = 2;
        crc2.strokeStyle = _c3;
        crc2.stroke();
        crc2.closePath();
        //Blatt
        crc2.beginPath();
        crc2.moveTo(_x - 15, _y - 40);
        crc2.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        crc2.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        crc2.fillStyle = _c1;
        crc2.fill();
        crc2.closePath();

    }

}