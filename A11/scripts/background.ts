/* 
Aufgabe 11: Canvas Inheritance
Name: Laura Vogt
Matrikel: 256056
Datum: 1Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A11_canvas {

    //static function
    export function drawStaticBackground(_canvas: HTMLCanvasElement): void {
        //Rahmen
        crc2.strokeStyle = "black";
        crc2.strokeRect(0, 0, _canvas.width, _canvas.height);

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

    //function für Kies
    export function drawStones(_cF: string, _cS: string, _x: number, _y: number, _r: number): void {

        crc2.beginPath();
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        crc2.strokeStyle = _cS;
        crc2.stroke();
        crc2.fillStyle = _cF;
        crc2.fill();
        crc2.closePath();

    }
    
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