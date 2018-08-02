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

    export class CounterObjects {

        x: number;
        y: number;
        img: HTMLImageElement;
        counter: string;

        constructor(_x: number, _y: number, _src: string, _counter: number) {
            this.x = _x;
            this.y = _y;
            this.img = new Image();
            this.img.src = _src;
            this.counter = _counter.toString();
        }

        update(_counter: number): void {
            this.newCounter(_counter);
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.font = "20px Cinzel Decorative";
            crc2.fillStyle = "black";
            crc2.fillText(this.counter , this.x, this.y);
            crc2.drawImage(this.img, this.x+18, this.y-20);
            crc2.closePath();
        }

        newCounter(_counter: number): void {
            this.counter = _counter.toString();
        }
    }
}