/* 
Abschlussaufgabe Monkey Business
Name: Laura Vogt
Matrikel: 256056
Datum: 09Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

namespace monkeyBusiness {

    export class MovingObjects {

        x: number;
        y: number;
        borderS: number;//top/left
        borderE: number;//bottom/right
        speed: number;
        img: HTMLImageElement;
        typ: string;

        constructor(_src: string, _typ: string) {
            this.img = new Image();
            this.img.src = _src;
            this.typ = _typ;

        }

        update(): void {
            this.draw();
            this.move();
        }

        move(): void { }

        draw(): void {
            crc2.beginPath();
            crc2.drawImage(this.img, this.x, this.y);
            crc2.closePath();
        }

    }
}